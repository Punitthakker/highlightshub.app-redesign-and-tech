# HighlightsHub design system

Broadcast quality for grassroots football. A floodlit evening kickabout, not a SaaS dashboard.

## Palette
Colour does jobs. Three football colours, kept quiet; no glow except the primary button.

| Role | Dark | Light | Use |
|---|---|---|---|
| Turf (accent) | #27A567 | #1E8A58 | primary actions, progress, wins |
| Royal | #2F6BFF | #2457D6 | information, Goal of the Week, voting, links |
| Crest | #D7263D | #C2112B | live, losses, alerts |
| Ground | #0F1216 | #F5F6F8 | background |
| Surface | #171B21 | #FFFFFF | raised panels |
| Text | #ECEEF1 | #10141A | primary text |
| Gold / Silver / Bronze / Legend | #FFD872 / #EEF1F5 / #D59A5C / #D6C6FF | same | card tiers |

Themes switch on `html[data-theme=light]`. Arabic switches on `html[lang=ar][dir=rtl]` with Cairo for display and IBM Plex Sans Arabic for body.

Club skin: set `--club-primary`, `--club-secondary`, `--club-ink` and the club name. Badge, header, lower-thirds, tag box, story cards and leaderboard follow. Demo skins in `SKINS` in `index.html`.

## Type
- Display: Barlow Condensed 700-900, italic for the hero and big moments.
- Body: Barlow 400-700. 15px base, 13px meta, nothing below 11px.
- Handwritten notes: Caveat 600-700 in Royal, slight rotation. Used sparingly for human asides.

## Surfaces
Glass panels (`--lift`) with inner highlight and deep soft shadow. Hairline rows inside panels. Glow (`--glow`) only on primary actions, live elements and the player card.

## Motion
- Focal moment: "I scored this" - club-colour flash, confetti, roll-up, card flip.
- Supporting: ticker, scroll reveals, 3D tilt card with glare, scrubber markers, pitch-scan upload, rank-change arrows, trophy takeover, swipe-to-vote.
- Easing `cubic-bezier(.16,1,.3,1)`. All of it reduces under `prefers-reduced-motion` and the in-demo toggle; feedback stays.

## Gamification
XP (120 goal, 60 assist, 300 GOTW, 20 vote, 50 per ten keepy-uppies), levels, tiered collectible card, trophy cabinet (11), challenges, streaks, weekly promotion/relegation leaderboard, Player of the Week, Goal of the Week bracket, club trophy room, 9:16 achievement cards.

Designed by POJOboys.com
