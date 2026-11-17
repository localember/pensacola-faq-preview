# FAQPage schema notes for Build (Premier Chiropractic of Pensacola FAQ)

Design preview only. Nothing here is live.

1. Add `faq-schema.json` as one `<script type="application/ld+json">` block on the FAQ page only.
2. Each Question/Answer in the schema matches the visible accordion text exactly. Keep them in sync if the page text changes. Google requires the marked-up text to be visible on the page.
3. The preview has 10 questions: the 8 core answers plus 2 of the extras Dr. Gilmore answered ("Why should I pick you" and "crack sound"). Four extra questions came back with blank answers (appointment length, how chiropractors are educated, pregnancy, addictive). They are left out. Do not add them to the schema or page until he answers.
4. Schema `text` is plain text. The link on "more detailed description" in the last answer is an HTML link on the page only.
5. Answers are word for word from his questionnaire, including "joint point" (likely "joint pain") and "Gilmore Chiropractic" (old name). Do not change without his OK.
6. The "Read this article" sentence in the risks answer has no link yet. We found no contraindications article on his blog. Link it once the article exists, or ask whether to drop that sentence.
7. The live site has no /faq/ page (404). Suggested URL: /faq/. Add it to the nav or footer, and add it to the sitemap. Add a breadcrumb schema Home > FAQ.
8. Keep page title, H1 and meta description for John to approve. Suggested title: "Chiropractic FAQ in Pensacola | Premier Chiropractic of Pensacola".
9. Do not carry over the preview banner, noindex tag or robots.txt.
