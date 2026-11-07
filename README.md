# HighlightsHub · redesign demo and incremental features

Two things live here. The site root (`index.html`) is a plain landing that links to the two proposed additions.

## 1. Incremental features for the live site (the ask)
Adam's brief: keep the current look and UX, improve at the margins, feed small changes into master one at a time.

- `components/flip-card/flip-card.js` - `<hh-flip-card>` web component. Wrap the existing rating card (front) and a career record (back). Tap, click or Enter to flip. Handles iOS Safari backface, keyboard access and reduced motion. Ships no visual styles; the site's own card markup and CSS are used as they are. Demo: `/card/`.
- `kids/index.html` - Kids Zone. Keepy-uppy with score and best, XP and four levels, six achievements. Inherits `--hh-*` tokens when the host defines them, otherwise uses neutral fallbacks. Nothing leaves the phone (localStorage only, no accounts, no tracking). Demo: `/kids/`.

Both are plain HTML/JS with no build step so they can be dropped into whatever the site runs on.

### Integration
1. Flip card: add `<script src="/components/flip-card/flip-card.js" defer>` once, then wrap the card:
   ```html
   <hh-flip-card>
     <div slot="front"> existing card </div>
     <div slot="back">  career record </div>
   </hh-flip-card>
   ```
   Give `hh-flip-card` the same `border-radius` as the card so the outline matches. Listen for the `flip` event if you want analytics.
2. Kids Zone: mount `kids/index.html` at a route (for example `/kids`). Replace the font link and the `:root` fallbacks with the site's tokens if they differ. Hook XP into the player card later if wanted; the page keeps its own state until then.

## 2. Full redesign demo (reference only, at `/demo/`)
`demo/index.html` is the interactive prototype shown to Adam: eight screens, club skins, light and dark, Arabic, walkthrough. It is parked as reference material. `DESIGN.md` documents its system.

Deployed on Netlify from `main`. Designed by POJOboys.com
