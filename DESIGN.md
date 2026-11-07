# HighlightsHub design system

Broadcast quality for grassroots football. A floodlit evening kickabout, not a SaaS dashboard.

## Palette
| Role | Hex | Use |
|---|---|---|
| Night | #0B0E14 | ground |
| Stand | #131722 | raised surfaces |
| Chalk | #F7F3EA | primary text |
| Amber (accent) | #FFB224 | primary actions, live numbers, XP |
| Sky | #6EC6FF | Goal of the Week, voting |
| Gold / Silver / Bronze / Legend | #FFD872 / #EEF1F5 / #D59A5C / #D6C6FF | card tiers |
| Live | #E5312B | live badge |
| Win / Draw / Loss | #58D68D / #FFB224 / #FF6B6B | form pips |

Club skin: set `--club-primary`, `--club-secondary`, `--club-ink` and the club name. Badge, header, lower-thirds, tag box, story cards and leaderboard follow. Demo skins in `SKINS` in `index.html`.

## Type
- Display: Barlow Condensed 700-900, italic for the hero and big moments.
- Body: Barlow 400-700. 15px base, 13px meta, nothing below 11px.
- Handwritten notes: Caveat 600-700, amber, slight rotation. Used sparingly for human asides.

## Surfaces
Glass panels (`--lift`) with inner highlight and deep soft shadow. Hairline rows inside panels. Glow (`--glow`) only on primary actions, live elements and the player card.

## Motion
- Focal moment: "I scored this" - club-colour flash, confetti, roll-up, card flip.
- Supporting: ticker, scroll reveals, 3D tilt card with glare, scrubber markers, pitch-scan upload, rank-change arrows, trophy takeover, swipe-to-vote.
- Easing `cubic-bezier(.16,1,.3,1)`. All of it reduces under `prefers-reduced-motion` and the in-demo toggle; feedback stays.

## Gamification
XP (120 goal, 60 assist, 300 GOTW, 20 vote, 50 per ten keepy-uppies), levels, tiered collectible card, trophy cabinet (11), challenges, streaks, weekly promotion/relegation leaderboard, Player of the Week, Goal of the Week bracket, club trophy room, 9:16 achievement cards.

Designed by POJOboys.com
