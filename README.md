# Divergent 2026 — Camp guides Katankye

Site web du camp scout **Divergent 2026** de la compagnie guides Katankye de Malèves.
Camp d'été du 13 au 31 juillet 2026, Ferme Moulin · 55600 Han-lès-Juvigny, France.

## Structure

```
.
├── index.html               Accueil — hero, manifeste, vidéo, factions
├── patrouille-guepards.html Sincères (noir & blanc, balance)
├── patrouille-loups.html    Fraternels (chaleureux, arbre)
├── patrouille-eperviers.html Érudits (bleu, savoir, œil)
├── patrouille-pumas.html    Audacieux (sombre+rouge, flamme)
├── patrouille-castors.html  Altruistes (gris, mains)
├── annees.html              Vue d'ensemble des 5 échelons
├── annee-1.html → annee-5.html  Page par échelon (Recrues → Doyens)
├── infos.html               Dossier complet 12 sections
├── css/style.css            Système de design
├── js/main.js               Countdown, dropdowns, reveal au scroll
└── assets/                  Images + polices
```

## Polices

- **Universal Serif** — titres (fichier local `assets/fonts/`)
- **Cormorant Garamond** — italiques éditoriales (Google Fonts)
- **JetBrains Mono** — mono / countdown (Google Fonts)
- **Manrope** — corps de texte (Google Fonts)

## Hébergement

Site 100 % statique (HTML/CSS/JS) — peut être hébergé sur :
- Netlify (drag-drop du dossier)
- Vercel (import du repo GitHub)
- GitHub Pages (Settings → Pages → main branch)
- Cloudflare Pages

## Compte à rebours

Le compte à rebours pointe vers le **13 juillet 2026 à 09h00**.
Pour modifier la date, éditer `js/main.js`, ligne `const CAMP_DATE = …`.

---

© 2026 · Faction Katank' · Compagnie guides Katankye de Malèves
