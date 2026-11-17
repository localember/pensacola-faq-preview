# Active Rehabilitation preview notes (Premier Chiropractic of Pensacola)

Design preview only. Nothing here is live on chiropractorpensacola.com.

## Pages
- `/services/active-rehabilitation/` - new service page
- `/services/` - services hub mockup with a new Active Rehabilitation card
- Existing FAQ preview at `/` is unchanged

## Copy
- Base: `localember/localember` catalog file `tools/bd-generator/catalog/services/physical-rehabilitation.json`, adapted to the name "Active Rehabilitation".
- Office-specific facts from Dr. Gilmore (email Nov 17, 2026, 4:00 PM CT): therapy room with wall bands and a neck sled, used for strengthening exercises. A vibration plate is coming soon. No other equipment is named.
- Those equipment facts stay on this office page only. They were not added to the shared catalog, because that file is fleet-wide and its compliance note says not to name equipment the file cannot know an office has.
- No complimentary-visit wording. Fees and insurance stay TBD, as in the catalog.
- Bios/testimonials were not invented. Sidebar stats (5.0 stars, 184 Google reviews, 19+ years, 10,000+ patients) match the live site as of Nov 17, 2026.
- Hours on this preview use the current live homepage hours, including the mid-day breaks (the earlier FAQ preview used a simplified range).

## Booking
- Book and Schedule Now buttons go straight to the live booking calendar, in the same tab (no modal, no New/Existing choice):
  https://clinic.patienthealthcenters.org/book?clinic=GILMOR26CTFL
- That matches the live Home and Services "Book Your Appointment" / "Book Your Visit" buttons as of Nov 17, 2026. Those live Book links have no target="_blank".
- Note: the live header "Schedule Now" control still opened popup 918 (New Patients / Existing Patients) when checked the same day. This preview does not copy that leftover popup.

## Suggested live URL
`/services/active-rehabilitation/`

## Do not carry over
Preview banner, noindex/robots.txt, and the "New in this mockup" badge.
