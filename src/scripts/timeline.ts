// data-timeline="900,1200,…" lists the pause before each step-N class is added. The last pause is
// how long the finished demo holds before it starts again.
// Inside a demo, data-at-N="classes" gives an element those classes from step N until a later
// data-at-* replaces them.

const FADE_MS = 450;
const STATE_ATTRIBUTE = /^data-at-(\d+)$/;

interface StateStep {
  step: number;
  classes: string[];
}

function readStateSteps(element: Element): StateStep[] {
  return [...element.attributes]
    .map((attribute) => ({
      step: Number(attribute.name.match(STATE_ATTRIBUTE)?.[1]),
      classes: attribute.value.split(/\s+/).filter(Boolean)
    }))
    .filter((state) => !Number.isNaN(state.step))
    .sort((a, b) => a.step - b.step);
}

function playTimeline(demo: HTMLElement) {
  const pauses = (demo.dataset.timeline ?? '').split(',').map(Number);
  const lastStep = pauses.length - 1;
  const statefulElements = [...demo.querySelectorAll('*')]
    .map((element) => ({ element, states: readStateSteps(element) }))
    .filter(({ states }) => states.length > 0);
  let step = 0;
  let timer: number | undefined;

  const applyStates = () => {
    for (const { element, states } of statefulElements) {
      states.forEach((state) => element.classList.remove(...state.classes));
      const current = states.filter((state) => state.step <= step).at(-1);
      if (current) element.classList.add(...current.classes);
    }
  };

  const showStep = (next: number) => {
    step = next;
    demo.classList.add(`step-${step}`);
    applyStates();
  };

  const restart = () => {
    demo.classList.add('is-resetting');
    timer = window.setTimeout(() => {
      for (let i = 1; i <= lastStep; i++) demo.classList.remove(`step-${i}`);
      step = 0;
      applyStates();
      // Forces the reset to apply before fading back in.
      void demo.offsetHeight;
      demo.classList.remove('is-resetting');
      scheduleNext();
    }, FADE_MS);
  };

  const scheduleNext = () => {
    timer = window.setTimeout(() => {
      if (step === lastStep) {
        restart();
      } else {
        showStep(step + 1);
        scheduleNext();
      }
    }, pauses[step]);
  };

  applyStates();

  return {
    play: () => {
      if (timer === undefined) scheduleNext();
    },
    pause: () => {
      window.clearTimeout(timer);
      timer = undefined;
    },
    showEnd: () => {
      for (let i = 1; i <= lastStep; i++) demo.classList.add(`step-${i}`);
      step = lastStep;
      applyStates();
    }
  };
}

export function startTimelines() {
  const demos = document.querySelectorAll<HTMLElement>('[data-timeline]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const players = new Map<Element, ReturnType<typeof playTimeline>>();

  demos.forEach((demo) => players.set(demo, playTimeline(demo)));

  if (prefersReducedMotion) {
    players.forEach((player) => player.showEnd());
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const player = players.get(entry.target);
        if (entry.isIntersecting) player?.play();
        else player?.pause();
      }
    },
    { threshold: 0.35 }
  );

  demos.forEach((demo) => observer.observe(demo));
}
