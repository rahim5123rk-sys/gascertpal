# GasPilot Marketing Loop

The goal: every pound and every user feeds the next download. One loop, five stages:

```
  Ads / Groups / Search          (paid + organic reach)
          |
          v
  gaspilotapp.com  ------------  iOS Smart App Banner pushes
          |                      iPhone visitors straight to the store
          v
  App Store install  ----------  free Starter tier = zero-risk trial
          |
          v
  Engineer uses it on site  ---  every emailed cert/invoice reaches a
          |                      landlord or agent = free impressions
          v
  Referral ("tell a mate")  ---  WhatsApp share on the site + in-app
          |
          +-----> back to the top, at no extra cost
```

---

## 1. Paid: Meta (Facebook/Instagram) ads - ~30 min setup

Do this yourself at [business.facebook.com](https://business.facebook.com) - never share your login with anyone (including AI tools).

**Campaign settings**
- Objective: **App promotion** (drives installs directly, Meta optimises for it)
- Platform: iOS, link the App Store listing (id6760321543)
- Location: United Kingdom
- Age: 21-55, all genders
- Detailed targeting (interests): *Plumbing*, *Boiler*, *Central heating*, *Gas Safe Register*, *Heating engineer*, *Screwfix*, *Toolstation*
- Placements: Advantage+ (let Meta optimise), but check Reels/Stories get budget - trades scroll Reels at lunch
- Budget: start at **£10/day**, run 2 weeks, kill ads with cost-per-install over ~£5, scale the winner

**Ad copy variants to test (use real app screenshots as creative):**

1. *Pain hook:* "Still doing gas certs on a paper pad? Cert done and emailed before you've packed the van. Free on the App Store."
2. *Money hook:* "£20/month. One gas cert pays for it. Invoices, quotes, certs and bookings - all from your phone."
3. *Evenings hook:* "Stop doing paperwork at the kitchen table at 10pm. GasPilot sorts your certs and invoices on site. 30 days free."

**Creative tip:** film a 15-second vertical video of a real engineer filling in a cert in the app and hitting send. Phone-shot, on a real job. Authentic beats polished for trade audiences, every time.

## 2. Organic: where gas engineers actually hang out

- **Facebook groups**: search "UK gas engineers", "Gas Safe engineers", "plumbers & gas engineers UK" - these groups have tens of thousands of members. Don't spam; answer questions about paperwork/software and mention you built GasPilot. Founder posts ("I'm a [trade background], built this because I hated paper pads - roast it") perform well.
- **Reddit**: r/UKPlumbing, r/Plumbing - same rule: be useful first.
- **YouTube/TikTok trade creators**: gas/plumbing YouTubers with 10-100k subs will do honest review videos for a free Pro year + small fee. One good video out-earns months of ads.
- **Screwfix/trade counter culture**: stickers and cards with a QR code for the van and merchant counters. Cheap, surprisingly effective.

## 3. Search: free intent traffic

- The site targets "gas safety record app", "gas safety certificate app", "LGSR" etc. Note: "CP12" is the legacy name and isn't used in GasPilot copy, but plenty of people still *search* it - it stays in the hidden meta keywords and one FAQ answer ("formerly known as a CP12") to catch that traffic.
- Next step when ready: short guide pages (e.g. "What is a Landlord Gas Safety Record?", "Landlord gas safety rules 2026") - these rank and funnel landlords *and* engineers to the brand.
- Google Ads on exact phrases like "cp12 app" / "gas certificate app" are pennies because nobody bids on them - worth £5/day. Bidding on a search term isn't the same as using it in your branding.

## 4. Product-powered loop (highest leverage, app-side)

- **"Sent with GasPilot" footer** on every emailed certificate and invoice PDF (Starter tier only; Pro = white label). Every landlord and letting agent who receives a cert sees it. Letting agents manage hundreds of properties and *tell their engineers what software to use*.
- **In-app referral**: "Give a mate 30 days of Pro, get a month free yourself." Engineers know engineers.
- **Ask for App Store reviews** after a successful cert send (5-job threshold). Ratings drive App Store search rank, which drives free installs.

## 5. Measure it

- UTM scheme is live on the site share link: `utm_source=referral&utm_medium=share&utm_campaign=tell_a_mate`. Use the same pattern for every channel (`utm_source=meta`, `utm_source=fbgroup`, `utm_source=google` ...).
- Free, cookie-banner-free analytics: [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) - one script tag, and the site is already on Cloudflare.
- App Store Connect > Analytics shows which referrer URLs drive installs.

**The only number that matters early on: cost per install per channel.** Double down on whatever's cheapest, kill the rest.
