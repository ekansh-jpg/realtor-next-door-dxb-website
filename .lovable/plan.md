

## Plan: Redesign Transactions Page + Improve Navbar + Enhance All Pages

### 1. Transactions Page — Complete Redesign (Reference: Uploaded Screenshot)

Rebuild `src/pages/Transactions.tsx` to match the light/cream dashboard style from the screenshot:

- **Light cream background** (`#F5F0E8` / warm beige) instead of dark
- **"LIVE MARKET DATA" pill badge** at top (gold outlined)
- **Title**: "Real Estate **Transactions**" with "Transactions" in gold
- **Subtitle**: "Dubai's latest property transaction data — updated daily from official sources"
- **3 Summary Stat Cards** in a row:
  - Total Transactions (7 Days): 5,120
  - Total Worth (7 Days): AED 17.82B  
  - Property Breakdown: 4,085 Units / 422 Buildings / 613 Land/s
- **Line Chart** — "Daily Transaction Worth — Existing vs Off-Plan" with two lines (gold for Existing, dark for Off-Plan), dates on X-axis, AED values on Y-axis. Use `recharts` library.
- **"Refresh" button** on the chart card
- **Data table** below (keep existing transaction data but restyle for light theme)
- **CTA button**: "Check Real-Time Data on DubaiLand" linking to `https://dubailand.gov.ae/en/eservices/real-estate-transaction/`
- Install `recharts` package

### 2. Navbar — Replace Dropdown with Inline Nav Links

Remove the "Explore" dropdown entirely. Replace with **inline horizontal nav links** on desktop (like a standard premium navbar):
- Links: Home | Transactions | Dubai Insights | Services | Contact
- Active link highlighted in gold (`#C9A96E`)
- Keep mobile hamburger menu as-is
- Clean, minimal style matching the dark glassmorphism navbar

### 3. Dubai Insights Page — Add More Content

- Add a **"Subscribe to Market Updates"** email capture section
- Add a **Market Trends FAQ** accordion section at bottom
- Add more articles (6 total instead of 3)
- Add a **"Source: Dubai Land Department"** footer note with link

### 4. Services Page — Add More Premium Content

- Add a **"Why Choose Our Services"** section with 3 value propositions
- Add a **process timeline** section: "How It Works" — 4 steps (Consult → Search → Negotiate → Handover)
- Add a **CTA banner** at bottom: "Ready to Start?" linking to contact

### 5. Contact Page — Enhance

- Add a **Google Maps embed** or location card showing Dubai
- Add **"Response Time: Within 2 Hours"** badge
- Add **FAQ section**: common questions about buying in Dubai

---

### Technical Changes

| File | Action |
|------|--------|
| `package.json` | Add `recharts` dependency |
| `src/pages/Transactions.tsx` | Complete rewrite — light cream dashboard with stats, chart, table, DLD link |
| `src/components/Navbar.tsx` | Replace dropdown with inline horizontal nav links |
| `src/pages/DubaiInsights.tsx` | Add newsletter section, FAQ accordion, more articles |
| `src/pages/Services.tsx` | Add "How It Works" timeline, value props, CTA banner |
| `src/pages/Contact.tsx` | Add map section, response badge, FAQ |

