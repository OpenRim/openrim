# 🚀 Prompt Professionnel pour Gemini-CLI - Projet OpenRim

## 📋 INSTRUCTION PRINCIPALE
Créez un site web complet et moderne pour **OpenRim**, une organisation open source dédiée au développement de projets collaboratifs. Le site doit parfaitement représenter l'esprit open source, être optimisé, responsive, et supporter le multilinguisme avec RTL pour l'arabe.

## 🎯 SPÉCIFICATIONS TECHNIQUES OBLIGATOIRES

### Stack Technologique
- **Frontend**: React 18+ avec TypeScript (strict mode)
- **CSS Framework**: Bootstrap 5.3+ (utiliser les dernières fonctionnalités)
- **Routing**: React Router DOM v6
- **Internationalisation**: react-i18next
- **Build Tool**: Vite (configuration optimisée)
- **Icons**: React Icons ou Lucide React
- **Animations**: Framer Motion (optionnel mais recommandé)

### Design Requirements
- **Style**: Design moderne, minimaliste et professionnel
- **Responsive**: Mobile-first approach, compatible tous écrans
- **Dark Mode**: Toggle fonctionnel avec persistence localStorage
- **Theme Colors**: Palette cohérente avec variables CSS custom
- **Typography**: Polices modernes (Inter, Poppins, ou similaire)
- **Accessibility**: WCAG 2.1 AA compliant

### Fonctionnalités Multilinguisme
- **Langues supportées**: Arabe (ar), Français (fr), Anglais (en)
- **Direction**: RTL automatique pour l'arabe, LTR pour fr/en
- **Switcher**: Dropdown élégant dans le header
- **Persistence**: Sauvegarde de la langue choisie
- **Fallback**: Anglais par défaut si traduction manquante

## 📁 STRUCTURE DE PROJET EXACTE

```
openrim-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── logo-light.svg
│       ├── logo-dark.svg
│       └── og-image.jpg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ProjectCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contribute.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useLanguage.ts
│   ├── i18n/
│   │   ├── index.ts
│   │   ├── locales/
│   │   │   ├── en.json
│   │   │   ├── fr.json
│   │   │   └── ar.json
│   │   └── resources.ts
│   ├── styles/
│   │   ├── index.css
│   │   ├── variables.css
│   │   ├── themes.css
│   │   └── rtl.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── README.md
```

## 🎨 DESIGN GUIDELINES DÉTAILLÉES

### Header Navigation
- Logo OpenRim (adaptable dark/light mode)
- Menu navigation horizontal (responsive burger menu mobile)
- Language switcher avec drapeaux
- Dark/Light mode toggle
- Effet glassmorphism ou ombre subtile

### Pages Content Specifications

#### 1. **Home Page**
- Hero section avec gradient background
- Logo OpenRim centré et animé
- Tagline accrocheur : "Building the future through open source collaboration"
- CTA Button "Join Our Community" / "Contribute Now" avec hover effects
- GitHub organization stats (repositories, contributors, stars total)
- Featured open source projects showcase
- Open source values highlight (Collaboration, Transparency, Innovation)
- Community testimonials et success stories
- "Why Open Source?" section avec benefits

#### 2. **About Page**
- Hero section avec open source illustration
- OpenRim story et mission open source
- Timeline de l'organisation et milestones
- Open source values : Collaboration, Transparency, Community, Innovation
- Team section avec contributeurs principaux
- Statistics importantes (projets, contributeurs, commits, issues resolved)
- Open source philosophy et impact
- Community guidelines preview

#### 3. **Projects Page**
- Grid layout responsive des projets open source
- Filtres par : langue de programmation, statut, difficulté, type
- Chaque projet avec:
  - Nom et description claire
  - Technologies utilisées (badges colorés)
  - GitHub repository link avec statistiques (stars, forks, issues)
  - Status (active, seeking contributors, archived)
  - Difficulty level (beginner, intermediate, advanced)
  - Contributors avatars avec nombre total
  - "Good first issue" badges
  - License information

#### 4. **Contribute Page**
- Welcome message pour nouveaux contributeurs
- Getting started guide step-by-step
- Code of conduct complet
- Contribution guidelines
- Development setup instructions
- Issue reporting process
- Pull request guidelines
- Community channels (Discord, Slack, forum)
- Mentor program information
- Recognition system (contributor of the month, etc.)

#### 5. **Contact Page**
- Multiple contact methods pour différents besoins
- General inquiries form
- Partnership opportunities
- Media contact
- Community support channels
- Social media links (GitHub, Twitter, LinkedIn, Discord)
- Open source events et meetups
- Newsletter signup

### Footer
- Logo + mission statement brief
- Quick links vers projets populaires
- Community links (GitHub, Discord, Twitter)
- Open source resources
- License information
- "Fork us on GitHub" button
- Copyright info
- Back to top button

## 🌍 CONFIGURATION I18N COMPLÈTE

### Fichiers de traduction requis:

**en.json**: Toutes les clés en anglais
**fr.json**: Traduction française complète
**ar.json**: Traduction arabe complète

### Clés de traduction obligatoires:
```json
{
  "nav": {
    "home": "...",
    "about": "...",
    "projects": "...",
    "contribute": "...",
    "contact": "..."
  },
  "home": {
    "hero_title": "Building the future through open source",
    "hero_subtitle": "Join OpenRim community of developers...",
    "cta_button": "Join Our Community",
    "cta_secondary": "Explore Projects",
    "features": {
      "collaboration": "Collaborative Development",
      "transparency": "Open & Transparent",
      "innovation": "Innovation Driven"
    },
    "stats": {
      "projects": "Active Projects",
      "contributors": "Contributors",
      "commits": "Commits"
    }
  },
  "about": {
    "mission": "Our mission is to foster innovation through open source collaboration",
    "values": {
      "collaboration": "We believe in the power of working together",
      "transparency": "Everything we do is open and transparent",
      "community": "Building a welcoming community for all developers"
    }
  },
  "projects": {
    "title": "Our Open Source Projects",
    "filter": {
      "all": "All Projects",
      "active": "Active",
      "seeking_contributors": "Seeking Contributors",
      "beginner_friendly": "Beginner Friendly"
    },
    "labels": {
      "good_first_issue": "Good First Issue",
      "help_wanted": "Help Wanted",
      "license": "License"
    }
  },
  "contribute": {
    "title": "Join Our Community",
    "subtitle": "Every contribution matters, no matter how small",
    "getting_started": "Getting Started",
    "code_of_conduct": "Code of Conduct",
    "guidelines": "Contribution Guidelines"
  },
  "contact": {...},
  "common": {
    "loading": "...",
    "error": "...",
    "back": "..."
  }
}
```

## 🔧 CONFIGURATION FILES NÉCESSAIRES

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
      '@i18n': resolve(__dirname, 'src/i18n')
    }
  },
  server: {
    port: 3000
  }
})
```

### tsconfig.json avec paths mapping
### package.json avec toutes les dépendances
### CSS Variables pour thèmes
### RTL Support complet

## 📱 RESPONSIVE BREAKPOINTS
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large: 1440px+

## 🎭 ANIMATIONS REQUIREMENTS
- Page transitions fluides
- Hover effects sur tous les éléments interactifs
- Loading states
- Smooth scrolling
- Parallax effects (optionnel)

## 🛠️ PERFORMANCE OPTIMIZATIONS
- Lazy loading des images
- Code splitting par route
- Bundle size optimization
- SEO meta tags
- PWA ready (optionnel)

## 🚀 DEPLOYMENT READY
- Build configuration optimisée
- Environment variables setup
- GitHub Actions workflow (optionnel)
- Netlify/Vercel ready

## ✅ VALIDATION CHECKLIST
Avant de livrer, vérifiez:
- [ ] Toutes les pages fonctionnent parfaitement
- [ ] Responsive sur tous les écrans
- [ ] Dark/Light mode opérationnel
- [ ] 3 langues avec RTL pour arabe
- [ ] Formulaire de contact fonctionnel
- [ ] GitHub integration et links opérationnels
- [ ] Open source badges et statistiques
- [ ] Performance optimisée
- [ ] Code TypeScript strict
- [ ] Accessibilité respectée (WCAG 2.1)
- [ ] SEO optimisé
- [ ] Community features fonctionnelles
- [ ] Contribution guidelines claires
- [ ] License information visible

---

**IMPORTANT**: Générez un code production-ready, bien commenté, et suivant les meilleures pratiques React/TypeScript. Le design doit être moderne, professionnel et représenter parfaitement une organisation open source avec l'esprit de collaboration, transparence et innovation. Intégrez des éléments visuels qui rappellent l'écosystème open source (GitHub, badges, statistiques, community features).