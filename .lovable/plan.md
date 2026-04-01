

## Plan: Convert to Multi-Page Site with Premium Navigation

### Summary
Remove the Instagram Follow button from the navbar, replace it with a premium dropdown menu for multi-page navigation. Add 4 new pages: Transactions, Dubai Insights, Contact/Lead Form, and Services. Reuse existing Navbar and Footer across all pages.

---

### New Pages

1. **Real Estate Transactions** (`/transactions`)
   - Hero banner: "Dubai's latest property transaction data — updated daily from official sources"
   - Styled data table showing sample Dubai property transactions (area, price, type, date)
   - Dark luxury theme consistent with the site
   - Filter chips for property type, area, price range

2. **What's Going On in Dubai** (`/dubai-insights`)
   - Blog/news-style page with cards covering Dubai real estate market trends
   - Sections: Market Overview, Latest Developments, Investment Hotspots
   - Cards with images, dates, short descriptions
   - Same dark theme with gold accents

3. **Contact / Lead Form** (`/contact`)
   - Premium lead capture form: Name, Email, Phone, Budget Range, Property Interest, Message
   - Dark background with gold-bordered form fields
   - CTA: "Get Expert Guidance"
   - Side panel showing Ekansh's contact info (phone, WhatsApp, Instagram)

4. **Services** (`/services`)
   - Cards for: Property Buying, Investment Advisory, Off-Plan Projects, Rental Management
   - Each card with icon, description, and "Enquire Now" linking to contact page
   - Premium dark layout with motion animations

---

### Navbar Redesign

- **Remove**: Instagram Follow button
- **Add**: Premium dropdown menu button (gold-bordered, "Explore" label with chevron)
- Dropdown items: Home, Transactions, Dubai Insights, Services, Contact
- Use `react-router-dom` `Link` for navigation
- Mobile: hamburger menu with slide-out drawer
- Keep the fixed/scroll behavior and dark glassmorphism style

---

### Technical Changes

| File | Action |
|------|--------|
| `src/components/Navbar.tsx` | Replace Follow button with dropdown nav menu with links to all pages |
| `src/App.tsx` | Add routes for `/transactions`, `/dubai-insights`, `/services`, `/contact` |
| `src/pages/Transactions.tsx` | New page — transaction data table |
| `src/pages/DubaiInsights.tsx` | New page — market trends/news cards |
| `src/pages/Contact.tsx` | New page — lead capture form |
| `src/pages/Services.tsx` | New page — services overview |
| `src/pages/Index.tsx` | No changes (home page stays as-is) |

All new pages will import and use the existing `Navbar` and `Footer` components, maintaining consistent site chrome. Animations via `framer-motion`. Color palette: `#0A0A0A`, `#111111`, `#FFFFFF`, `#C9A96E`.

