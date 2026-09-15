---
layout: ../layouts/LegalLayout.astro
title: Privacy Policy
description: What Lynk collects, why, who it is shared with, how long it is kept, and how to delete it.
updated: 15 September 2026
---

## The short version

> - We collect what it takes to plan a hangout with your friends: your Google email and name, the username and photo you pick, your hangouts, and the payments you make or receive through them.
> - Your **location is never saved**. It is held in memory while a hangout is voting, to find the point between everyone, and then thrown away.
> - **Card details never reach Lynk.** Payments happen on Paystack's own checkout.
> - We do not sell your data, show ads, or use tracking or advertising tools.
> - You can delete your account from the app at any time, once nothing is still in progress.

## Who we are

Lynk is an app for planning hangouts with friends. In this policy, "Lynk", "we" and "us" mean the team that runs the Lynk app and the website at lynk.com.ng. We decide how your personal data is used, which makes us its controller under Nigeria's Data Protection Act 2023 (the NDPA).

You can reach us about anything in this policy at [support@lynk.com.ng](mailto:support@lynk.com.ng).

This policy covers the Lynk app on Android and iOS, and this website.

## What we collect

### When you sign in

- **With Google:** your email address, your name and a link to your Google profile picture. Google tells us these when you choose to sign in. We only accept Google accounts whose email Google has verified.
- **As a guest:** nothing about you. We create an empty account so you can look around. Guests can browse but cannot create or join anything.

### Your profile

- The **username** and **display name** you choose.
- A **profile photo**, if you add one. You can take it with your camera or pick it from your phone. We shrink it on your phone before it is uploaded.

### Hangouts

- What you enter when you create or edit a hangout: its name, description, vibe, date and time, and the most people who can come.
- Who is invited, who accepted or declined, and who has paid.
- The spots proposed for a hangout and the spot that was chosen.

Your votes are held in memory while voting is open and are not stored once voting ends.

### Saved spots

When you save a place, we store the place's Google ID, name, photo link, category, price level, short address and the place's own coordinates. These describe the place, not where you are.

### Payments

If you **pay a share**:

- The amount, a payment reference, whether it went through, and when.
- Whether you were refunded, how much, and when.
- Paystack needs an email address to run a checkout, so we pass it your Lynk email.

If you **host** and turn on payments, you give us the bank account the money should go to. To check it and set up the transfer, we send the full account number to Paystack. We keep:

- the bank's name,
- the account holder's name, as the bank confirmed it,
- the **last four digits** of the account number, never the full number,
- Paystack's code for that account, and the reference and time of the payout.

### Notifications

- The notifications in your inbox: what happened, which hangout, the name of the person who did it, and any amount involved.
- A **device token** from Firebase Cloud Messaging and whether your phone is Android or iOS, so we can send you push notifications. You can switch push notifications off in the app or in your phone's settings.

### Technical information

- **Sign-in sessions:** we store a scrambled (hashed) copy of each session key so we can keep you signed in. Sessions last 30 days.
- **IP address:** used to stop too many requests coming from one place, and recorded in our server logs when someone signs in as a guest.

### On your phone

The app keeps your sign-in session, your theme choice, whether you have seen the introduction screens, and your push notification setting on your own device.

### What we do not collect

We do not collect your phone number or contacts, your card details, a history of where you have been, or any advertising identifier. The app has no advertising or analytics tools.

## Your location

Lynk uses your location in two places. It is never stored with your account.

**Finding the middle of a group.** When you open a hangout that is still voting, the app asks for your location (the first time, your phone asks for permission) and sends it to our server over an encrypted connection. The server keeps it in memory only, never in a database, and uses it to work out the average point between everyone who shared. That centre point is sent to everyone in the hangout. Your own location is not sent to them, but if you are the only person who has shared, the centre is your location. Your location is thrown away as soon as voting closes, the hangout ends or is cancelled, or you leave it.

**Finding spots near you.** When you look for spots, the app sends a location to search around (yours, or the group's centre point) to our server, which asks Google Places for nearby places. Any words you search for go to Google Places too. To avoid asking Google the same question twice, we keep the results of a nearby search for up to 15 minutes, filed under an area of roughly one kilometre. That stored copy is not linked to you or your account.

If you say no to location, you can still join hangouts and vote.

## Why we use your data

The NDPA asks us to name a lawful reason for each use.

| What we do | Why we are allowed to |
| --- | --- |
| Create your account, run your hangouts, send notifications about them | To provide the service you signed up for (contract) |
| Take payments, send refunds, pay hosts | To provide the service (contract), and to keep financial records (legal obligation) |
| Use your location to find a centre point or nearby spots | Your consent, which you give and can take back through your phone's location permission |
| Send push notifications | Your consent, through your phone's notification permission and the setting in the app |
| Limit requests, keep logs, prevent abuse and fraud | Our legitimate interest in keeping Lynk secure and working |
| Send emails about your account and payments | To provide the service (contract) |

We do not use your data for advertising, and we do not make automated decisions about you that have legal or similarly significant effects.

## Who can see what

**Other Lynk users** can see your display name, username and profile photo when they search for your exact username or share a hangout with you. People in a hangout with you can see whether you are going, which spot you voted for, and whether you have paid your share. Other users never see your email address or bank details.

**Profile photos** are stored at a web address that anyone who has the link can open.

## Companies that help us run Lynk

We share data with these service providers only as far as they need it to do their job for us. We do not sell your personal data.

| Provider | What they do for Lynk | Data involved |
| --- | --- | --- |
| Google (Sign-In) | Lets you sign in with Google | Your email, name and profile picture link |
| Google (Places) | Finds and describes places | Search text and coordinates, never your identity |
| Google (Firebase Cloud Messaging) | Delivers push notifications | Device token and the notification text |
| Paystack | Checkout, refunds and payouts | Payer email and amount; host bank account details |
| MapTiler | Draws the map | Your phone loads map images straight from MapTiler, so it sees your IP address and the area you are looking at |
| Supabase | Our database and profile photo storage | Everything stored in your account |
| Railway | Runs our servers | Everything that passes through the app, and server logs |
| Redis Cloud | Short-lived cache and request limits | Cached place results, request counters |
| CloudAMQP | Passes messages between parts of our system | Account and hangout events, such as your email and name when your account is created or deleted |
| Brevo | Sends our emails | Your email address, name and the email's contents |
| Cloudflare | Runs this website and our domain, and forwards email sent to support@lynk.com.ng | Website visits and emails you send us |

We may also share information if the law requires it, to protect someone's safety, or as part of a sale or merger of Lynk, in which case this policy would continue to apply to your data.

## Data stored outside Nigeria

Our service providers run their systems outside Nigeria, including in the European Union and the United States. When your data is transferred, we rely on providers that protect it to a standard the NDPA accepts, including their contractual commitments.

## How long we keep your data

| Data | How long |
| --- | --- |
| Your account and profile | Until you delete your account |
| Guest accounts | Deleted automatically 30 days after they are created |
| Sign-in sessions | 30 days, then removed |
| Location | Held in memory only, until voting closes, the hangout ends, or you leave it |
| Nearby search results | Up to 15 minutes, not linked to you |
| Request counters used to limit traffic | One hour |
| Notifications you have read | 90 days |
| Hangouts nobody else ever joined, without payments | Deleted 30 days after their date |
| Host bank details | The bank name, account holder name, last four digits and Paystack code are erased once the payout succeeds; the payout reference and date are kept |
| Payment records | Kept as financial records, as described below |

## Deleting your account

You can delete your account in the app, from **Profile**. Deletion happens straight away and cannot be undone. Signing out of a guest account deletes it.

**When you cannot delete yet.** To avoid leaving other people's plans or money in a mess, we ask you to finish a few things first. You cannot delete your account while you:

- host a hangout that has not finished (cancel it first),
- are going to a hangout that has not finished (leave it first),
- host a hangout whose money has not been settled (wait for the payout, or cancel so everyone is refunded),
- have a payment we are still confirming, or
- are owed a refund that has not reached you yet.

**What is deleted:** your profile, username, email address and profile photo, your sign-in sessions, your saved spots, your notifications and your device tokens. We send one last email to confirm your account is gone.

**What remains, and why:**

- **Past hangouts** you were part of stay for the people who were there. Your place in them shows as "Deleted user", with your name, username, email and photo removed.
- **Payment records** (amounts, references and dates) are kept because they are financial records. After deletion they are linked only to an account ID that no longer identifies you by name or email.
- **Notifications other people already received** may still show your name as it was, until they are cleared.
- Records that **Paystack** and our email provider keep about transactions and emails they processed are governed by their own policies.

## Your rights

Under the NDPA you have the right to:

- ask for a copy of the personal data we hold about you,
- have it corrected (you can change your username, display name and photo in the app),
- have it deleted,
- object to, or ask us to limit, how we use it,
- receive it in a format you can take elsewhere,
- take back your consent at any time, for example by turning off location or notifications in your phone's settings.

To use any of these rights, email [support@lynk.com.ng](mailto:support@lynk.com.ng). We may need to confirm the request comes from you. We will reply within 30 days.

If you are unhappy with how we handle your data, you can complain to the [Nigeria Data Protection Commission](https://ndpc.gov.ng).

## Children

Lynk is not for anyone under 18, and we do not knowingly collect data from children. If you believe a child has an account, tell us and we will delete it.

## Keeping your data safe

The app and our servers talk only over encrypted connections. Session keys are stored scrambled, card details never reach us, and we keep only the last four digits of bank account numbers. Access to our systems is limited to the people who run Lynk. No system is perfectly secure, so if a breach puts your data at risk, we will tell you and the regulator as the law requires.

## Changes to this policy

When we change this policy, we will update the date at the top. If a change affects you in an important way, we will tell you in the app or by email before it takes effect.

## Contact us

Questions, requests or complaints: [support@lynk.com.ng](mailto:support@lynk.com.ng).
