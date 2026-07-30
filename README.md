# Quran Companion

Role: You are an expert senior UI/UX engineer and frontend developer.

Goal: Create a fully functional, exact replica of a Quran reading web application based on the following detailed specifications.

1. Visual Design & UI Replication (EXACT MATCH):

Color Palette (Hex Codes):

Primary Accent/Green: #009688 (Teal)

Main Background: #F8F9FA (Very light grey)

Card Backgrounds: #FFFFFF (Pure white)

Text Main: #1A1A1A (Near black)

Text Secondary (metadata): #9E9E9E (Light gray)

Selected Surah Border: #009688

Ayah Highlight Text: #009688

Tafsir Link Color: #FFA726 (Gold/Orange)

Fonts: Use 'Inter' or 'Roboto' for English text, and 'Scheherazade New' or 'Amiri' for the Arabic Quranic text to ensure beautiful typography matching the reference.

2. Layout & Structure (Dashboard View):

Sidebar (Narrow, Left): Vertically stacked icons (Quran book, Heart, Bookmark, Filter, Share, Trash) with a green header block containing the Quran icon. Background must be white.

Left Panel (Surah List): Wide scrollable list.

Top: Search input with a magnifying glass icon and placeholder "Search here for surah, ayah".

List Item: Each Surah must be a card.

Left: Circular badge with a teal border and the Surah number (e.g., "1").

Center: Surah Name (Bold, Arabic transliteration, e.g., "Al-Fatihah") and English Translation underneath (uppercase, light gray, e.g., "THE OPENING").

Active State: The currently selected Surah (initially Al-Fatihah) must have a solid teal border (border: 1px solid #009688) around the entire list item card.

Data: Include all 114 Surahs (1-114) with their Arabic names and English translations.

Main Content Area (Right): White background, displaying the selected Surah's verses.

Layout: Split view. Top right: Arabic text (right-aligned, large, beautiful font). Bottom left: English translation.

Ayah Cards: Each Ayah is a separate white card with subtle shadow and rounded corners (border-radius: 8px).

Ayah Header:

Left: Surah Number + ":" + Ayah Number (e.g., "1:1") in bold green.

Right: "ENGLISH - SAHIH INTERNATIONAL" (uppercase, gray). Next to it, a link "SEE TAFSIR ->" in gold/orange (#FFA726).

Interaction Icons: Beneath each Ayah, place 4 icons: Heart (favorite), Share arrow, Info (i), and Link (chain) in a light gray color.

3. Technical Specifications & Functionality:

Framework: React.js (Next.js preferred for routing, but a standard React SPA is acceptable). Do NOT use jQuery.

Styling: Use Tailwind CSS for layout and exact styling. If Tailwind isn't available, use raw CSS with Flexbox and CSS Grid, mirroring the exact pixel-perfect margins and padding seen in the image (padding: 20px, gap: 15px).

Responsiveness (Crucial):

Desktop (>1024px): 3-column layout (Sidebar, Surah List, Main Content).

Tablet (768px - 1024px): Hide the left sidebar, keep Surah List, and show Main Content.

Mobile (<768px): Hide sidebar. Hide Surah List by default. Show a bottom navigation bar with hamburger menu to open the Surah list overlay. Ensure Ayah cards stack vertically (Arabic text top, English bottom).

Data Import: Do not ask me to type 114 Surahs. Create a large JavaScript const surahData = [...] array object that contains the Surah ID, English Name, Arabic Name, and at least the first 7 Ayahs (1:1 to 1:7) for Al-Fatihah, and placeholders (e.g., "Ayah 1", "Ayah 2") for the rest. I will replace the text with the actual Quran JSON later.

State Management: Use React useState to handle the active Surah selection. Clicking a Surah in the left list must immediately update the Main Content Area to show that Surah's verses.

4. Deliverables:

Provide App.js or page.js (the main React component).

Provide the tailwind.config.js (if using Tailwind) or the CSS file.

Provide the data.js file containing all 114 Surah metadata.

The code must be self-contained and ready to run in a standard environment (npx create-react-app or npx create-next-app).


exactly same ui want

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://quran-read-harmony.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/36279e8e-44ee-4f1e-a0aa-5703f4bfaaad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
