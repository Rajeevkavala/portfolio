# Complete Portfolio Redesign Specification
## From Generic to Premium: A Design System Overhaul

---

# 1. Executive UI Audit

## 1.1 Visual Problems in Current UI

### Typography Issues
| Problem | Severity | Location |
|---------|----------|----------|
| Generic font pairing lacks personality | High | Global |
| Inconsistent heading hierarchy | Medium | All sections |
| No typographic contrast between sections | High | Hero, Skills |
| Emoji usage feels unprofessional | Medium | Section headers |
| Text lacks visual breathing room | Medium | Cards, Hero |

### Color & Visual Identity
| Problem | Severity | Impact |
|---------|----------|--------|
| Purple accent is overused without variation | High | Monotonous feel |
| Grid background is distracting, not enhancing | High | Reduces readability |
| No gradient sophistication | Medium | Flat appearance |
| Lack of warm accent colors | Medium | Cold, unapproachable |
| No color hierarchy for different content types | High | Visual confusion |

### Layout & Spacing
| Problem | Severity | Location |
|---------|----------|----------|
| Hero section feels cramped | High | Above fold |
| 3D avatar dominates without purpose | Medium | Hero |
| Project cards are uniform and boring | High | Projects section |
| Skills section is a wall of pills | High | Tech stack |
| No visual rhythm or breathing space | High | Global |
| Bento/asymmetric layouts not utilized | High | All sections |

### Component Design
| Problem | Severity | Component |
|---------|----------|-----------|
| Navigation pills are generic | Medium | Navbar |
| Cards lack depth and dimension | High | Project cards |
| CTA buttons are basic | Medium | Footer, Hero |
| No hover states visible | High | Interactive elements |
| Footer is underwhelming | High | Footer |

---

## 1.2 UX Issues

### Information Architecture
- **Problem**: Skills are dumped without categorization
- **Problem**: No narrative flow from hero to contact
- **Problem**: Experience section buried below projects
- **Problem**: No "About Me" storytelling section

### User Flow
- **Problem**: No clear primary CTA above the fold
- **Problem**: Contact section is disconnected from value proposition
- **Problem**: No social proof or testimonials
- **Problem**: Projects lack context and impact metrics

### Interaction Clarity
- **Problem**: Hover states are unclear
- **Problem**: No visual feedback on interactive elements
- **Problem**: Navigation doesn't indicate current section
- **Problem**: No micro-interactions to guide attention

---

## 1.3 Responsiveness & Accessibility Issues

### Responsiveness
- Grid background likely breaks on mobile
- 3D avatar sizing will be problematic
- Skills pills will wrap awkwardly
- Card layouts need complete mobile rethink

### Accessibility
- Color contrast needs verification (purple on dark)
- No visible focus states
- Emoji-only labels lack screen reader context
- Link purposes not always clear

---

## 1.4 Emotional Tone Mismatch

| Current Tone | Target Tone |
|--------------|-------------|
| Student project | Senior professional |
| Generic developer | Design-conscious engineer |
| Cold/technical | Warm/approachable yet sophisticated |
| Playful (emojis) | Confident and refined |
| Trying too hard | Effortlessly premium |

---

# 2. Design Philosophy for the New UI

## 2.1 Target User Feeling

**Primary Emotion**: Premium Confidence
- The portfolio should feel like visiting a high-end design studio
- Every pixel should communicate intentionality
- Visitors should think: "This person has taste"

**Secondary Emotions**:
- **Intrigue**: Subtle animations invite exploration
- **Trust**: Clean layout signals professionalism
- **Warmth**: Human touches prevent sterility
- **Sophistication**: Typography and spacing show design maturity

---

## 2.2 Design Principles

### 1. Purposeful Restraint
> Every element must earn its place. If it doesn't serve the user or the narrative, remove it.

### 2. Typographic Drama
> Let type do the heavy lifting. Combine serif elegance with sans-serif clarity. Use script fonts sparingly for emotional punctuation.

### 3. Asymmetric Balance
> Bento grids create visual interest. Avoid rigid symmetry—embrace intentional imbalance.

### 4. Depth Through Subtlety
> Use shadows, borders, and layered backgrounds instead of heavy effects. Sophistication lives in the details.

### 5. Motion as Meaning
> Animations should guide attention and create delight, never distract or delay.

### 6. Warm Darkness
> Dark themes can feel cold. Introduce warmth through accent colors (coral, amber) and subtle gradients.

---

## 2.3 What Makes This Redesign Different

| Current Approach | New Approach |
|-----------------|--------------|
| Symmetric card grids | Bento-style asymmetric layouts |
| Single purple accent | Coral/red primary with warm neutrals |
| Generic sans-serif | Serif + Sans + Script combination |
| Static cards | Layered, interactive showcases |
| Emoji headers | Elegant typographic treatments |
| Background grid noise | Clean with intentional texture |
| Basic hover | Magnetic, glow, and morph effects |
| No storytelling | Clear narrative arc top to bottom |

---

# 3. Visual System Specification

## 3.1 Color System

### Primary Palette
```
Primary Red/Coral:    #E54D4D (CTAs, highlights, links)
Primary Red Hover:    #FF6B6B (Hover states)
Primary Red Muted:    #C94444 (Secondary actions)
```

### Neutral Palette
```
Background Primary:   #0A0A0A (Main background)
Background Secondary: #111111 (Cards, elevated surfaces)
Background Tertiary:  #1A1A1A (Hover states, borders)
Border Default:       #222222 (Card borders)
Border Hover:         #333333 (Hover borders)
```

### Text Colors
```
Text Primary:         #FFFFFF (Headings)
Text Secondary:       #A0A0A0 (Body text)
Text Tertiary:        #666666 (Captions, metadata)
Text Accent:          #E54D4D (Links, highlights)
```

### Accent Colors
```
Accent Gold:          #C9A962 (Premium highlights)
Accent Purple:        #8B5CF6 (Secondary accent)
Accent Blue:          #3B82F6 (Links, tech elements)
```

### Gradient Specifications
```css
/* Hero gradient overlay */
.hero-gradient {
  background: linear-gradient(
    135deg,
    rgba(229, 77, 77, 0.15) 0%,
    rgba(10, 10, 10, 0) 50%
  );
}

/* Section divider gradient */
.section-gradient {
  background: linear-gradient(
    90deg,
    #E54D4D 0%,
    #FF8C42 50%,
    #E54D4D 100%
  );
}

/* Card hover glow */
.card-glow {
  box-shadow: 0 0 60px rgba(229, 77, 77, 0.1);
}
```

---

## 3.2 Typography System

### Font Families
```css
/* Primary Heading Font - Editorial feel */
--font-heading: 'Playfair Display', Georgia, serif;

/* Body Font - Clean and readable */
--font-body: 'Inter', -apple-system, sans-serif;

/* Script/Accent Font - For emphasis */
--font-script: 'Caveat', cursive;

/* Monospace - Code, technical elements */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
```css
/* Desktop Scale */
--text-hero:      clamp(4rem, 8vw, 7rem);      /* Hero headline */
--text-h1:        clamp(3rem, 5vw, 4.5rem);    /* Section titles */
--text-h2:        clamp(2rem, 3vw, 3rem);      /* Subsection titles */
--text-h3:        clamp(1.5rem, 2vw, 2rem);    /* Card titles */
--text-h4:        clamp(1.25rem, 1.5vw, 1.5rem);
--text-body:      1rem;                         /* 16px */
--text-body-lg:   1.125rem;                     /* 18px */
--text-small:     0.875rem;                     /* 14px */
--text-caption:   0.75rem;                      /* 12px */
```

### Line Heights
```css
--leading-tight:   1.1;   /* Hero headlines */
--leading-snug:    1.25;  /* Headings */
--leading-normal:  1.5;   /* Body text */
--leading-relaxed: 1.75;  /* Long-form content */
```

### Letter Spacing
```css
--tracking-tight:   -0.02em;  /* Large headings */
--tracking-normal:  0;        /* Body text */
--tracking-wide:    0.05em;   /* Uppercase labels */
--tracking-wider:   0.1em;    /* Small caps */
```

### Typography Classes
```css
/* Hero Title */
.text-hero {
  font-family: var(--font-heading);
  font-size: var(--text-hero);
  font-weight: 400;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

/* Script Accent */
.text-script {
  font-family: var(--font-script);
  font-size: 1.2em;
  font-weight: 400;
  color: var(--color-accent);
}

/* Section Label */
.text-label {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-weight: 500;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--text-tertiary);
}
```

---

## 3.3 Spacing & Layout System

### Spacing Scale
```css
--space-1:   0.25rem;   /* 4px */
--space-2:   0.5rem;    /* 8px */
--space-3:   0.75rem;   /* 12px */
--space-4:   1rem;      /* 16px */
--space-5:   1.5rem;    /* 24px */
--space-6:   2rem;      /* 32px */
--space-8:   3rem;      /* 48px */
--space-10:  4rem;      /* 64px */
--space-12:  5rem;      /* 80px */
--space-16:  8rem;      /* 128px */
--space-20:  10rem;     /* 160px */
```

### Grid System
```css
/* Main Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Desktop Grid */
.grid-main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-5);
}

/* Bento Grid */
.grid-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: var(--space-4);
}
```

### Section Spacing
```css
/* Section Padding */
.section {
  padding: var(--space-16) 0;
}

.section-compact {
  padding: var(--space-10) 0;
}

/* Between sections */
.section + .section {
  margin-top: var(--space-8);
}
```

### Border Radius System
```css
--radius-sm:   0.375rem;  /* 6px - buttons, pills */
--radius-md:   0.75rem;   /* 12px - cards */
--radius-lg:   1rem;      /* 16px - large cards */
--radius-xl:   1.5rem;    /* 24px - hero elements */
--radius-2xl:  2rem;      /* 32px - showcase cards */
--radius-full: 9999px;    /* Pills, avatars */
```

---

# 4. Component-by-Component Redesign

## 4.1 Navbar / Header

### Purpose
Primary navigation and brand anchor. Should be minimal yet functional, never competing with content.

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]                    [Nav Links]              [CTA Button]│
│                                                                 │
│  PARTH             Work  About  Experience  Contact    Let's Talk│
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style
- **Background**: Transparent initially, `rgba(10,10,10,0.8)` with backdrop blur on scroll
- **Height**: 72px desktop, 64px mobile
- **Logo**: Custom wordmark or stylized name (not just plain text)
- **Nav Links**: 
  - Font: Inter Medium, 14px
  - Color: `#A0A0A0` default, `#FFFFFF` on hover
  - No underlines, subtle color transition
- **CTA Button**:
  - Background: Transparent with `#E54D4D` border
  - Text: `#E54D4D`
  - On hover: Background fills with `#E54D4D`, text becomes white
  - Padding: 12px 24px
  - Border radius: 9999px (pill)

### Interaction & Animation
```css
/* Nav link hover */
.nav-link {
  transition: color 0.2s ease;
}

/* Navbar scroll state */
.navbar-scrolled {
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

/* CTA button hover */
.nav-cta {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-cta:hover {
  background: #E54D4D;
  color: white;
  transform: scale(1.02);
}
```

### Mobile Behavior
- Hamburger menu icon (animated to X on open)
- Full-screen overlay menu
- Links stacked vertically, larger touch targets (48px height)
- Background: Solid `#0A0A0A`
- Staggered fade-in animation for links

---

## 4.2 Hero Section

### Purpose
Immediate hook. Communicate who you are, what you do, and why visitors should care—all in 3 seconds.

### Layout (Bento Grid Approach)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌──────────────────────┐  ┌─────────────┐  ┌───────────────┐ │
│   │                      │  │   Avatar    │  │  LET'S BUILD  │ │
│   │   RAJEEV             │  │   Card      │  │  SOMETHING    │ │
│   │   ────────           │  │   + Stats   │  │               │ │
│   │   I craft code and   │  │             │  │  [Email/CTA]  │ │
│   │   deliver real       │  │             │  └───────────────┘ │
│   │   impact.            │  └─────────────┘                    │
│   │                      │  ┌─────────────┐  ┌───────────────┐ │
│   │   [CTA Buttons]      │  │  Interfaces │  │ Founder of    │ │
│   └──────────────────────┘  │  Showcase   │  │ [Project]     │ │
│                             └─────────────┘  └───────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style

#### Main Title Card
- Span: 2 columns, 2 rows
- Background: `#111111`
- Border: 1px solid `#222222`
- Border radius: 24px
- Padding: 48px

#### Typography Treatment
```css
/* Name */
.hero-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 400;
  color: white;
  line-height: 1;
}

/* Tagline with script */
.hero-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: #A0A0A0;
}

.hero-tagline .script {
  font-family: 'Caveat', cursive;
  font-size: 1.5em;
  color: #E54D4D;
}
```

#### Avatar Card
- Realistic professional photo OR high-quality 3D render
- Circular crop with subtle glow
- Stats below: "5+ Years", "20+ Projects"
- Small social icons

#### Interfaces Card
- Mini-gallery of 3-4 project screenshots
- Auto-scroll or hover to reveal
- Label: "Crafting Interfaces"

#### CTA Card
- Bold text: "LET'S BUILD SOMETHING"
- Email address with copy button
- Background: Slightly warmer (`#151515`)

### Interaction & Animation
```css
/* Staggered entrance */
.hero-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
}

.hero-card:nth-child(1) { animation-delay: 0s; }
.hero-card:nth-child(2) { animation-delay: 0.1s; }
.hero-card:nth-child(3) { animation-delay: 0.2s; }
/* ... */

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover lift on cards */
.hero-card:hover {
  transform: translateY(-4px);
  border-color: #333333;
  transition: all 0.3s ease;
}
```

### Desktop vs Mobile

**Desktop**: Full bento grid as shown
**Tablet**: 2-column grid, main title spans full width
**Mobile**: Single column stack
- Name/title first
- Avatar card
- Stats inline
- CTA card last

---

## 4.3 Skills / Tech Stack Section

### Purpose
Quickly communicate technical competency without overwhelming. Should feel organized, not dumped.

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              The Magic behind                                   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  [React] [Next.js] [TypeScript] [Node.js] [Tailwind]   │  │
│   │  [PostgreSQL] [MongoDB] [AWS] [Docker] [Figma]         │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   ┌─────────────┐                                              │
│   │ [3D Visual] │   ← Optional decorative element              │
│   └─────────────┘                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style

#### Section Header
```css
.section-header {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 8px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
}

.section-title .script {
  font-family: 'Caveat', cursive;
  color: #E54D4D;
}
```

#### Skill Pills
- Background: `#1A1A1A`
- Border: 1px solid `#2A2A2A`
- Border radius: 9999px
- Padding: 8px 16px
- Icon + Text (icon on left, subtle)
- Font: Inter Medium, 14px
- Color: `#CCCCCC`

#### Hover State
```css
.skill-pill:hover {
  background: #222222;
  border-color: #E54D4D;
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(229, 77, 77, 0.15);
}
```

### Categories (Optional)
Group skills subtly without heavy visual separators:
- **Frontend**: React, Next.js, TypeScript, Tailwind
- **Backend**: Node.js, Express, PostgreSQL, MongoDB
- **Tools**: Docker, AWS, Figma, Git

### Mobile Behavior
- Horizontal scroll container
- OR wrapped grid with 2-3 columns
- Maintain pill sizing for touch

---

## 4.4 Projects / Showcase Section

### Purpose
Hero section of the portfolio. This is where visitors spend the most time. Must be visually stunning and tell a story.

### Layout (Inspiration-Style Venture Showcase)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              VENTURE SHOWCASE                                   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │ Featured Project                                         │  │
│   │ ┌───────────────────────────────────────────────────┐   │  │
│   │ │                                                    │   │  │
│   │ │              [Large Hero Image]                    │   │  │
│   │ │                                                    │   │  │
│   │ └───────────────────────────────────────────────────┘   │  │
│   │                                                          │  │
│   │  NoteAura                                                │  │
│   │  AI-Powered Note Taking SaaS                            │  │
│   │                                                          │  │
│   │  [Description paragraph...]                              │  │
│   │                                                          │  │
│   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │  │
│   │  │Screenshot│ │Screenshot│ │Screenshot│ │Screenshot│       │  │
│   │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │  │
│   │                                                          │  │
│   │  [Tech Stack Pills]                [Live Demo] [GitHub]  │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│   │  Project 2  │ │  Project 3  │ │  Project 4  │             │
│   │  [Image]    │ │  [Image]    │ │  [Image]    │             │
│   │  Title      │ │  Title      │ │  Title      │             │
│   └─────────────┘ └─────────────┘ └─────────────┘             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style

#### Featured Project Card
- Full-width container
- Background: `#0F0F0F`
- Border: 1px solid `#1A1A1A`
- Border radius: 32px
- Padding: 48px
- Contains:
  - Hero image (16:9, rounded corners)
  - Project name (Playfair Display, 48px)
  - One-liner tagline
  - Paragraph description
  - Screenshot gallery (horizontal scroll)
  - Tech stack pills
  - Action buttons

#### Secondary Project Cards
- Aspect ratio: 4:3
- Image fills most of card
- Title and brief description overlay at bottom
- Gradient overlay for text readability
- Hover: Scale up slightly, show full description

### Interaction & Animation
```css
/* Featured project entrance */
.featured-project {
  opacity: 0;
  transform: translateY(60px);
}

.featured-project.in-view {
  animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Screenshot gallery */
.screenshot-gallery {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.screenshot-gallery img {
  scroll-snap-align: start;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.screenshot-gallery img:hover {
  transform: scale(1.02);
}

/* Project card hover */
.project-card {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
}
```

### Mobile Behavior
- Featured project becomes vertical layout
- Screenshot gallery remains horizontal scroll
- Secondary projects stack vertically
- Full-width cards with 16px margin

---

## 4.5 Experience Section

### Purpose
Build credibility through work history. Should feel professional yet personal.

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   Building the bridge between                                   │
│   ideas and experiences                                         │
│                                                                 │
│   ┌───┐                                                        │
│   │ P │  Hi, I'm Rajeev...                                     │
│   │ H │  [Brief personal intro paragraph]                       │
│   │ O │                                                        │
│   │ T │  Currently focused on building products that            │
│   │ O │  blend design and engineering excellence.               │
│   └───┘                                                        │
│                                                                 │
│   Timeline:                                                     │
│   ─────────────────────────────────────────                    │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │ [Company Logo]  EY Global Delivery Services              │  │
│   │                 Web Developer Intern                     │  │
│   │                 Dec 2024 - Jan 2025                      │  │
│   │                                                          │  │
│   │ • Built modern web apps using MERN stack                 │  │
│   │ • Implemented authentication and payment systems         │  │
│   │ • Ranked Top 10 out of 100+ projects                     │  │
│   │                                                          │  │
│   │                              [View Certificate] →        │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style

#### Section Background
- Gradient: Subtle warm gradient from left (coral tint)
- Creates visual separation from projects section

#### Intro Block
- Two-column layout
- Left: Personal photo (rounded, with border)
- Right: Personal narrative text
- Font: Inter Regular, 18px, #A0A0A0

#### Experience Cards
- Background: `#111111`
- Border: 1px solid `#222222`
- Border radius: 20px
- Left accent: 4px coral bar
- Padding: 32px

#### Typography
```css
.experience-company {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: #FFFFFF;
}

.experience-role {
  font-size: 1rem;
  color: #A0A0A0;
}

.experience-date {
  font-size: 0.875rem;
  color: #666666;
}

.experience-bullet {
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.75;
}
```

### Mobile Behavior
- Single column layout
- Photo above text in intro
- Cards full-width

---

## 4.6 Testimonials / Social Proof

### Purpose
Third-party validation. Let others speak to your work quality.

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              The Voices behind                                  │
│                                                                 │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐│
│   │                 │  │                 │  │                 ││
│   │ "Rajeev's       │  │ "Attention to   │  │ "A great        ││
│   │  attention to   │  │  detail and     │  │  frontend       ││
│   │  detail..."     │  │  smooth UX..."  │  │  developer..."  ││
│   │                 │  │                 │  │                 ││
│   │ ┌───┐           │  │ ┌───┐           │  │ ┌───┐           ││
│   │ │ A │ Name      │  │ │ A │ Name      │  │ │ A │ Name       ││
│   │ └───┘ Role      │  │ └───┘ Role      │  │ └───┘ Role       ││
│   └─────────────────┘  └─────────────────┘  └─────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style

#### Testimonial Cards
- Background: `#111111`
- Border: 1px solid `#1A1A1A`
- Border radius: 20px
- Padding: 32px
- Min-height: 280px

#### Quote Typography
```css
.testimonial-quote {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.75;
  font-style: normal;
}

/* Opening quote mark */
.testimonial-quote::before {
  content: '"';
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: #E54D4D;
  opacity: 0.3;
  position: absolute;
  top: -10px;
  left: -5px;
}
```

#### Author Block
- Avatar: 48px circle
- Name: Inter Semibold, 16px, white
- Role: Inter Regular, 14px, #666666

### Interaction
- Cards can have subtle rotation on hover
- Carousel with dots for mobile

---

## 4.7 Call-to-Action Sections

### Purpose
Convert interest into action. Should feel inviting, not pushy.

### Marquee/Ticker Strip
```
┌─────────────────────────────────────────────────────────────────┐
│ ✧ FRIENDLY ✧ ADAPTIVE ✧ FLUID ✧ FUTURE-PROOF ✧ SEO-READY ✧   │
│ → Continuous horizontal scroll                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Style**:
- Background: Gradient (coral to red)
- Text: White, uppercase, 14px
- Star/diamond separators
- Infinite scroll animation

```css
.marquee {
  background: linear-gradient(90deg, #E54D4D 0%, #FF6B4A 100%);
  padding: 16px 0;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Final CTA Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│            Let's create                                         │
│            something real.                                      │
│                                                                 │
│                              ┌────────────────────────────┐    │
│                              │                            │    │
│                              │     [Large Circle /        │    │
│                              │      Interactive Element]  │    │
│                              │                            │    │
│                              └────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Style**:
- Typography: "Let's create" in Playfair Display, "something" in Caveat script (coral)
- Large interactive element on right (could be animated orb, or clickable CTA)
- Clean, minimal, maximum whitespace

---

## 4.8 Contact Section

### Purpose
Final conversion point. Remove all friction.

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   Decoding logic                                               │
│   & the lyrics                                                  │
│                                                                 │
│   ┌────────────────────────────┐  ┌────────────────────────┐  │
│   │ [GitHub Icon]              │  │                        │  │
│   │ rajeev.github              │  │ Leave your             │  │
│   │                            │  │ signature              │  │
│   │ "Open-source enthusiast"   │  │                        │  │
│   └────────────────────────────┘  │ ┌──────────────────┐   │  │
│   ┌────────────────────────────┐  │ │ Last Played:     │   │  │
│   │ [Email Icon]               │  │ │ [Song Name]      │   │  │
│   │ contact@rajeev.dev         │  │ │ [Artist]         │   │  │
│   │                            │  │ └──────────────────┘   │  │
│   │ [Copy to clipboard]        │  │                        │  │
│   └────────────────────────────┘  └────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style

#### Contact Cards
- Bento grid layout
- Each card: 1px border, 16px radius
- Icon-forward design
- Hover: Subtle glow

#### Personal Touch
- "Last Played" Spotify integration
- Adds personality without being unprofessional

---

## 4.9 Footer

### Purpose
Navigation redundancy, legal, social links. Should feel complete, not thrown together.

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   RAJEEV                                                        │
│   KAVALA            General     Career      Social    Legal    │
│                     Home        Resume      GitHub    Privacy  │
│   Building digital  About       Contact     LinkedIn  Terms    │
│   experiences that  Projects               Twitter            │
│   matter.           Experience                                  │
│                                                                 │
│   ─────────────────────────────────────────────────────────────│
│                                                                 │
│   © 2026 Rajeev Kavala. All rights reserved.                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Visual Style
- Background: `#0A0A0A` (same as body for seamless feel)
- Top border: 1px solid `#1A1A1A`
- Grid: 5 columns (Logo/tagline + 4 link groups)
- Links: 14px, #666666, hover #FFFFFF
- Bottom bar: Copyright, muted text

---

# 5. Motion & Interaction Design

## 5.1 Hover Behaviors

### Cards
```css
.card {
  transition: 
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s ease,
    border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
  border-color: #333333;
}
```

### Buttons
```css
.button-primary {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(229, 77, 77, 0.3);
}
```

### Links
```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #E54D4D;
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}
```

---

## 5.2 Scroll Animations

### Reveal on Scroll
```javascript
// Using Framer Motion
const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
```

### Staggered Children
```javascript
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Parallax Effects
- Hero background elements move at 0.3x scroll speed
- Section dividers have subtle parallax
- Images scale slightly on scroll

---

## 5.3 Page Transitions

```javascript
// Page wrapper
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 }
};
```

---

## 5.4 Micro-interactions

### Copy to Clipboard
- Click: Button scales down briefly
- Success: Checkmark replaces icon, green flash
- Toast notification: "Copied!"

### Form Inputs
- Focus: Border color transitions to coral
- Valid: Subtle green indicator
- Error: Red border, shake animation

### Navigation Active State
- Dot indicator below current section
- Smooth position transition as user scrolls

---

## 5.5 Cursor & Glow Effects (Optional Advanced)

### Custom Cursor
```css
.cursor {
  width: 20px;
  height: 20px;
  border: 1px solid rgba(229, 77, 77, 0.5);
  border-radius: 50%;
  pointer-events: none;
  position: fixed;
  transition: transform 0.1s ease;
  z-index: 9999;
}

.cursor.hovering {
  transform: scale(2);
  background: rgba(229, 77, 77, 0.1);
}
```

### Magnetic Buttons
```javascript
// Buttons pull toward cursor on hover
const handleMouseMove = (e) => {
  const { left, top, width, height } = button.getBoundingClientRect();
  const x = (e.clientX - left - width / 2) * 0.3;
  const y = (e.clientY - top - height / 2) * 0.3;
  button.style.transform = `translate(${x}px, ${y}px)`;
};
```

### Gradient Glow Following Cursor
```css
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(229, 77, 77, 0.1),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover::before {
  opacity: 1;
}
```

---

# 6. Page Structure Blueprint

## 6.1 Home Page (Top → Bottom)

```
1. NAVBAR
   └── Sticky, blur-on-scroll

2. HERO SECTION
   └── Bento grid introduction
   └── Name, tagline, avatar, stats, mini-showcase

3. MARQUEE STRIP
   └── Keywords ticker (optional, after hero)

4. PROJECTS SECTION
   ├── Section header
   ├── Featured project (full-width)
   └── Secondary projects grid (3 columns)

5. SKILLS SECTION
   ├── Section header
   └── Tech stack pills (categorized)

6. EXPERIENCE SECTION
   ├── Personal intro with photo
   └── Experience timeline cards

7. TESTIMONIALS SECTION (If applicable)
   └── 3-column testimonial cards

8. CTA MARQUEE STRIP
   └── Gradient ticker

9. CONTACT SECTION
   └── Bento grid contact methods

10. FOOTER
    └── Links, social, copyright
```

---

## 6.2 Scroll Flow & Pacing

| Section | Breathing Room (padding) | Transition |
|---------|-------------------------|------------|
| Hero | 120px bottom | Fade into marquee |
| Marquee | 0 (full-bleed) | Hard cut |
| Projects | 100px top/bottom | Fade up |
| Skills | 80px top/bottom | Fade up |
| Experience | 100px top/bottom | Fade up (different bg) |
| Testimonials | 80px top/bottom | Stagger fade |
| CTA Marquee | 0 (full-bleed) | Hard cut |
| Contact | 100px top/bottom | Fade up |
| Footer | 60px top, 40px bottom | Subtle separation |

---

# 7. UI Library Component Mapping

## 7.1 Library Overview & Installation

### Required Libraries
```bash
# Core UI Libraries
npx shadcn@latest init
npm install framer-motion

# React Bits (copy components from reactbits.dev)
# Aceternity UI (copy components from ui.aceternity.com)

# Supporting Libraries
npm install clsx tailwind-merge
npm install @radix-ui/react-tooltip
npm install lucide-react
npm install sonner
npm install react-hook-form zod @hookform/resolvers
```

### Theme Configuration for Libraries
To maintain our coral/warm dark theme across all libraries:

```typescript
// lib/theme.ts
export const themeConfig = {
  colors: {
    primary: '#E54D4D',
    primaryHover: '#FF6B6B',
    background: '#0A0A0A',
    backgroundSecondary: '#111111',
    backgroundTertiary: '#1A1A1A',
    border: '#222222',
    borderHover: '#333333',
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    textTertiary: '#666666',
  }
};
```

---

## 7.2 Component-by-Section Mapping

### 🎯 NAVBAR
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Base Navigation | Shadcn | `NavigationMenu` | Restyle with coral accents |
| Mobile Menu | Shadcn | `Sheet` | Slide-in from right |
| Nav Link Hover | React Bits | `Magnet` | Subtle magnetic pull on hover |
| CTA Button | Shadcn | `Button` | Custom coral variant |

**Implementation Notes:**
```tsx
// Magnetic nav links
import { Magnet } from '@/components/reactbits/Magnet';

<Magnet padding={50} disabled={false}>
  <a href="#projects" className="nav-link">Projects</a>
</Magnet>
```

---

### 🎯 HERO SECTION
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Name Animation | React Bits | `SplitText` | Character-by-character reveal |
| Tagline | React Bits | `BlurText` | Blur-in effect |
| Script Text | React Bits | `GradientText` | Coral gradient |
| Bento Grid | Aceternity | `BentoGrid` | Custom grid layout |
| Avatar Card | Aceternity | `CardSpotlight` | Coral spotlight on hover |
| Background | React Bits | `Aurora` | Subtle coral/red aurora |
| Stats Counter | React Bits | `CountUp` | Animated numbers |
| CTA Button | React Bits | `ShimmerButton` | Coral shimmer effect |
| Floating Elements | Aceternity | `FloatingDock` | For social icons |

**Implementation Notes:**
```tsx
// Hero name with split text animation
import { SplitText } from '@/components/reactbits/SplitText';

<SplitText
  text="RAJEEV"
  className="font-playfair text-7xl"
  delay={50}
  animationFrom={{ opacity: 0, y: 40 }}
  animationTo={{ opacity: 1, y: 0 }}
/>

// Tagline with blur effect
import { BlurText } from '@/components/reactbits/BlurText';

<BlurText
  text="I craft code and deliver"
  className="text-secondary"
  delay={100}
/>
<span className="font-caveat text-primary">real impact.</span>

// Bento grid cards with spotlight
import { BentoGrid, BentoGridItem } from '@/components/aceternity/BentoGrid';
import { CardSpotlight } from '@/components/aceternity/CardSpotlight';

<BentoGrid className="max-w-6xl">
  <BentoGridItem className="col-span-2 row-span-2">
    <CardSpotlight className="h-full" color="#E54D4D">
      {/* Main title card content */}
    </CardSpotlight>
  </BentoGridItem>
</BentoGrid>
```

---

### 🎯 SKILLS / TECH STACK SECTION
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Section Title | React Bits | `SplitText` | Word reveal |
| "behind" Script | React Bits | `GradientText` | Coral gradient |
| Skill Pills | Shadcn | `Badge` | Custom hover states |
| Tooltip on Hover | Aceternity | `AnimatedTooltip` | Show skill details |
| Background Visual | React Bits | `Squares` | Subtle animated grid |
| Icon Animation | React Bits | `TiltCard` | 3D tilt on hover |

**Implementation Notes:**
```tsx
// Animated tooltip for skills
import { AnimatedTooltip } from '@/components/aceternity/AnimatedTooltip';

const skills = [
  { id: 1, name: "React", icon: "⚛️", description: "3+ years" },
  { id: 2, name: "TypeScript", icon: "📘", description: "2+ years" },
];

<AnimatedTooltip items={skills} />

// Or individual skill pills with hover
import { Badge } from '@/components/ui/badge';
import { Magnet } from '@/components/reactbits/Magnet';

<Magnet>
  <Badge variant="skill" className="hover:border-primary hover:shadow-glow">
    <ReactIcon /> React
  </Badge>
</Magnet>
```

---

### 🎯 PROJECTS / SHOWCASE SECTION
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Section Header | React Bits | `SplitText` | "VENTURE" animated |
| "SHOWCASE" Text | React Bits | `GradientText` | Multi-color gradient |
| Featured Card | Aceternity | `CardSpotlight` | Large spotlight effect |
| Image Gallery | React Bits | `CircularGallery` or `RollingGallery` | Project screenshots |
| Secondary Cards | Aceternity | `HoverEffect` | 3D hover effect |
| Project Hover | Aceternity | `CardHoverEffect` | Lift and glow |
| Tech Pills | Shadcn | `Badge` | Smaller variant |
| View Project Button | React Bits | `ShimmerButton` | Coral shimmer |
| Image Transitions | React Bits | `PixelTransition` | On image change |

**Implementation Notes:**
```tsx
// Featured project with spotlight
import { CardSpotlight } from '@/components/aceternity/CardSpotlight';
import { RollingGallery } from '@/components/reactbits/RollingGallery';

<CardSpotlight color="#E54D4D" className="p-8 rounded-3xl">
  <h3 className="font-playfair text-4xl">NoteAura</h3>
  <p className="text-secondary">AI-Powered Note Taking SaaS</p>
  
  <RollingGallery
    images={projectScreenshots}
    autoplay={true}
    pauseOnHover={true}
  />
</CardSpotlight>

// Secondary projects with hover effect
import { HoverEffect } from '@/components/aceternity/HoverEffect';

<HoverEffect items={secondaryProjects} />
```

---

### 🎯 EXPERIENCE SECTION
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Section Title | React Bits | `SplitText` | "Building the bridge" |
| "experiences" Text | React Bits | `GradientText` | Coral script style |
| Timeline Cards | Aceternity | `Timeline` | Vertical timeline |
| Company Logo | Aceternity | `MovingBorder` | Animated border |
| Card Hover | Aceternity | `CardSpotlight` | Warm spotlight |
| Background | React Bits | `Threads` | Subtle connection lines |
| View Certificate | Shadcn | `Button` | Ghost variant |

**Implementation Notes:**
```tsx
// Timeline component
import { Timeline } from '@/components/aceternity/Timeline';

const experiences = [
  {
    title: "2024 - 2025",
    content: (
      <CardSpotlight color="#E54D4D">
        <div className="flex items-center gap-4">
          <MovingBorder duration={3000}>
            <img src="/ey-logo.png" className="w-12 h-12" />
          </MovingBorder>
          <div>
            <h4>EY Global Delivery Services</h4>
            <p className="text-secondary">Web Developer Intern</p>
          </div>
        </div>
      </CardSpotlight>
    ),
  },
];

<Timeline data={experiences} />
```

---

### 🎯 TESTIMONIALS SECTION
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Section Title | React Bits | `SplitText` | "The Voices" |
| "behind" Text | React Bits | `GradientText` | Coral gradient |
| Testimonial Cards | Aceternity | `InfiniteMovingCards` | Auto-scroll cards |
| Avatar | Aceternity | `AnimatedTooltip` | Hover for more info |
| Quote Mark | Custom CSS | Playfair Display | Large coral quote |
| Card Background | Aceternity | `BackgroundGradient` | Subtle glow |

**Implementation Notes:**
```tsx
// Infinite scrolling testimonials
import { InfiniteMovingCards } from '@/components/aceternity/InfiniteMovingCards';

const testimonials = [
  {
    quote: "Rajeev's attention to detail...",
    name: "John Doe",
    title: "Senior Developer at TechCorp",
  },
];

<InfiniteMovingCards
  items={testimonials}
  direction="right"
  speed="slow"
/>
```

---

### 🎯 CTA / MARQUEE SECTIONS
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Marquee Strip | React Bits | `Marquee` (custom) | Gradient background |
| Keywords | React Bits | `ShinyText` | White on gradient |
| Final CTA Title | React Bits | `SplitText` | "Let's create" |
| "something real" | React Bits | `GradientText` | Coral script |
| Interactive Orb | React Bits | `BlobCursor` | Large interactive element |
| Glow Effect | Aceternity | `SpotlightNew` | Background spotlight |

**Implementation Notes:**
```tsx
// Custom marquee with gradient
<div className="bg-gradient-to-r from-primary to-orange-500 py-4 overflow-hidden">
  <div className="animate-marquee flex gap-8 whitespace-nowrap">
    {['FRIENDLY', 'ADAPTIVE', 'FLUID', 'FUTURE-PROOF'].map((word) => (
      <span key={word} className="flex items-center gap-2">
        <span className="text-white/80">✦</span>
        <ShinyText text={word} className="text-white font-medium" />
      </span>
    ))}
  </div>
</div>

// Final CTA with blob
import { BlobCursor } from '@/components/reactbits/BlobCursor';

<section className="relative">
  <BlobCursor blobType="circle" fillColor="#E54D4D" />
  <SplitText text="Let's create" className="font-playfair text-6xl" />
  <GradientText text="something real." className="font-caveat text-5xl" />
</section>
```

---

### 🎯 CONTACT SECTION
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Section Title | React Bits | `SplitText` | "Decoding logic" |
| Bento Cards | Aceternity | `BentoGrid` | Contact methods |
| Card Spotlight | Aceternity | `CardSpotlight` | Coral glow |
| Form Inputs | Shadcn | `Input`, `Textarea` | Custom focus states |
| Form Validation | Shadcn | `Form` | With React Hook Form |
| Submit Button | React Bits | `ShimmerButton` | Loading state |
| Copy Button | Shadcn | `Button` | With toast feedback |
| Toast | Shadcn/Sonner | `Sonner` | Success/error states |
| GitHub Link | React Bits | `Magnet` | Magnetic hover |
| Spotify Widget | React Bits | `Lanyard` | Now playing card |

**Implementation Notes:**
```tsx
// Contact bento grid
import { BentoGrid, BentoGridItem } from '@/components/aceternity/BentoGrid';
import { CardSpotlight } from '@/components/aceternity/CardSpotlight';
import { Lanyard } from '@/components/reactbits/Lanyard';

<BentoGrid>
  <BentoGridItem className="col-span-1">
    <CardSpotlight color="#E54D4D">
      <GithubIcon className="w-8 h-8" />
      <p>@rajeevkavala</p>
    </CardSpotlight>
  </BentoGridItem>
  
  <BentoGridItem className="col-span-1 row-span-2">
    <Lanyard userId="YOUR_DISCORD_ID" /> {/* Shows Spotify/Discord status */}
  </BentoGridItem>
</BentoGrid>

// Contact form
import { Form, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ShimmerButton } from '@/components/reactbits/ShimmerButton';

<Form {...form}>
  <FormField
    name="email"
    render={({ field }) => (
      <Input 
        {...field} 
        className="focus:border-primary focus:ring-primary/20" 
      />
    )}
  />
  <ShimmerButton type="submit" shimmerColor="#FF6B6B">
    Send Message
  </ShimmerButton>
</Form>
```

---

### 🎯 FOOTER
| Feature | Library | Component | Customization |
|---------|---------|-----------|---------------|
| Logo/Name | React Bits | `GradientText` | Subtle gradient |
| Link Hover | React Bits | `Magnet` | Subtle pull effect |
| Social Icons | Aceternity | `FloatingDock` | Horizontal dock |
| Divider | Custom CSS | Gradient line | Coral to transparent |

---

## 7.3 Background & Ambient Effects

### Global Background Options
| Effect | Library | Component | Where to Use |
|--------|---------|-----------|--------------|
| Aurora | React Bits | `Aurora` | Hero section |
| Particles | React Bits | `Particles` | Hero or full page |
| Grid Distortion | React Bits | `GridDistortion` | Hero background |
| Squares | React Bits | `Squares` | Skills section |
| Threads | React Bits | `Threads` | Experience section |
| Noise | React Bits | `Noise` | Global subtle texture |
| Spotlight | Aceternity | `Spotlight` | Section backgrounds |
| Dot Pattern | Aceternity | `DotPattern` | Subtle background |
| Grid Pattern | Aceternity | `GridPattern` | Subtle background |

**Recommended Setup:**
```tsx
// app/layout.tsx - Global subtle effects
import { Noise } from '@/components/reactbits/Noise';

<body>
  <Noise 
    opacity={0.03} 
    className="fixed inset-0 pointer-events-none z-50" 
  />
  {children}
</body>

// Hero section with Aurora
import { Aurora } from '@/components/reactbits/Aurora';

<section className="relative min-h-screen">
  <Aurora 
    colorStops={["#E54D4D", "#FF6B6B", "#0A0A0A"]}
    amplitude={1.2}
    blend={0.6}
  />
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</section>
```

---

## 7.4 Micro-Interactions Library

| Interaction | Library | Component | Usage |
|-------------|---------|-----------|-------|
| Button Click | React Bits | `ClickSpark` | Primary CTAs |
| Cursor Following | React Bits | `FollowCursor` | Global cursor |
| Copy Feedback | Shadcn | `Sonner` | Clipboard actions |
| Tilt on Hover | React Bits | `TiltCard` | Cards, images |
| Magnetic Pull | React Bits | `Magnet` | Buttons, links |
| Star Border | React Bits | `StarBorder` | Featured elements |
| Ripple Click | React Bits | `Ripple` | Buttons |

---

# 8. Implementation Guidance

## 8.2 Recommended Tech Stack

| Layer | Technology | Reason |
|-------|------------|--------|
| Framework | Next.js 16+ (App Router) | SSR, routing, optimization |
| Styling | Tailwind CSS + CSS Variables | Utility-first, theming |
| Animation | Framer Motion | Declarative, performant |
| Icons | Lucide React | Consistent, lightweight |
| Font Loading | next/font | Optimal loading |
| Components | Shadcn/ui (base) | Accessible, customizable |
| Premium Effects | React Bits + Aceternity | Visual polish |
| Forms | React Hook Form + Zod | Validation |
| Toast | Sonner | Already in project |

---

## 8.3 Suggested Folder Structure

```
app/
├── globals.css              # CSS variables, base styles
├── layout.tsx               # Root layout
├── page.tsx                 # Home page
├── ThemeProvider.tsx        # Theme context
│
├── components/
│   ├── sections/            # Page sections
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroBentoCard.tsx
│   │   │   └── HeroStats.tsx
│   │   ├── Projects/
│   │   │   ├── ProjectShowcase.tsx
│   │   │   ├── FeaturedProject.tsx
│   │   │   └── ProjectCard.tsx
│   │   ├── Skills/
│   │   │   └── SkillsSection.tsx
│   │   ├── Experience/
│   │   │   └── ExperienceSection.tsx
│   │   ├── Testimonials/
│   │   │   └── TestimonialsSection.tsx
│   │   ├── Contact/
│   │   │   └── ContactSection.tsx
│   │   └── Footer/
│   │       └── Footer.tsx
│   │
│   ├── ui/                  # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   │
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   │
│   ├── motion/              # Animation wrappers
│   │   ├── FadeIn.tsx
│   │   ├── StaggerContainer.tsx
│   │   └── Parallax.tsx
│   │
│   └── shared/              # Shared components
│       ├── SectionHeader.tsx
│       ├── Marquee.tsx
│       └── ScrollProgress.tsx
│
├── lib/
│   ├── utils.ts             # Utility functions
│   ├── constants.ts         # Design tokens
│   └── animations.ts        # Animation variants
│
├── hooks/
│   ├── useScrollPosition.ts
│   ├── useInView.ts
│   └── useMouse.ts
│
└── data/
    ├── projects.json
    ├── skills.json
    └── experiences.json
```

---

## 8.4 Reusable Component Strategy

### Base Components (Primitives)
```typescript
// Card component with variants
interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  children: React.ReactNode;
}

export const Card = ({ variant = 'default', size = 'md', hover = true, children }: CardProps) => {
  return (
    <div className={cn(
      cardVariants({ variant, size }),
      hover && 'hover:border-border-hover hover:-translate-y-1 transition-all'
    )}>
      {children}
    </div>
  );
};
```

### Section Wrapper
```typescript
interface SectionProps {
  id?: string;
  className?: string;
  background?: 'default' | 'elevated' | 'gradient';
  children: React.ReactNode;
}

export const Section = ({ id, className, background = 'default', children }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        'py-20 md:py-32',
        backgroundVariants[background],
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
};
```

### Animation Wrapper
```typescript
export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};
```

---

## 8.5 Performance Considerations

### Image Optimization
- Use `next/image` for all images
- Provide appropriate `sizes` prop
- Use WebP format with JPEG fallback
- Lazy load images below the fold

### Font Loading
```typescript
// app/layout.tsx
import { Inter, Playfair_Display, Caveat } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
});
```

### Animation Performance
- Use `transform` and `opacity` only for animations
- Add `will-change` sparingly for known animations
- Use `viewport={{ once: true }}` for scroll animations
- Reduce motion for users who prefer it

```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

### Bundle Size
- Import Lucide icons individually
- Dynamic import heavy components
- Use Tailwind's purge for CSS

---

# 9. Design Consistency Checklist

## 9.1 Visual Consistency

| Check | Status |
|-------|--------|
| All colors match defined palette | ☐ |
| Typography uses defined scale | ☐ |
| Spacing follows 8px grid | ☐ |
| Border radius consistent (sm/md/lg/full) | ☐ |
| Card styles match specification | ☐ |
| Icons are same family and size | ☐ |
| Shadows follow defined levels | ☐ |
| Gradients match specification | ☐ |

## 9.2 UX Consistency

| Check | Status |
|-------|--------|
| All interactive elements have hover states | ☐ |
| Focus states visible for keyboard users | ☐ |
| Loading states for async operations | ☐ |
| Error states are clear and helpful | ☐ |
| Navigation indicates current section | ☐ |
| CTAs are consistently styled | ☐ |
| Form validation is consistent | ☐ |
| Toast notifications match style | ☐ |

## 9.3 Responsiveness

| Breakpoint | Check |
|------------|-------|
| Mobile (< 640px) | ☐ Navigation works, cards stack, text readable |
| Tablet (640px - 1024px) | ☐ 2-column layouts work, spacing adjusted |
| Desktop (> 1024px) | ☐ Full bento grid, all features enabled |
| Large (> 1400px) | ☐ Max-width container, proper centering |

## 9.4 Accessibility

| Check | Status |
|-------|--------|
| Color contrast meets WCAG AA | ☐ |
| All images have alt text | ☐ |
| Headings follow hierarchy (h1 > h2 > h3) | ☐ |
| Links have descriptive text | ☐ |
| Forms have associated labels | ☐ |
| Skip navigation link exists | ☐ |
| Animations respect prefers-reduced-motion | ☐ |
| Touch targets minimum 44x44px | ☐ |
| Keyboard navigation works | ☐ |
| ARIA labels where needed | ☐ |

---

# 10. Phased Implementation Roadmap

## Overview
Total estimated time: **6-8 weeks** for complete redesign with all premium effects.

---

## 📦 PHASE 0: Setup & Foundation (Days 1-2)

### Objectives
- Project setup and dependencies
- Design tokens configuration
- Base component library installation

### Tasks

#### 0.1 Install Dependencies
```bash
# Core
npx shadcn@latest init
npm install framer-motion clsx tailwind-merge

# UI Support
npm install @radix-ui/react-tooltip lucide-react
npm install sonner react-hook-form zod @hookform/resolvers
```

#### 0.2 Setup Fonts
```typescript
// app/layout.tsx
import { Inter, Playfair_Display, Caveat } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
});
```

#### 0.3 Configure Tailwind Theme
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E54D4D',
          hover: '#FF6B6B',
          muted: '#C94444',
        },
        background: {
          DEFAULT: '#0A0A0A',
          secondary: '#111111',
          tertiary: '#1A1A1A',
        },
        border: {
          DEFAULT: '#222222',
          hover: '#333333',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          tertiary: '#666666',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
    },
  },
};
```

#### 0.4 Install Shadcn Components
```bash
npx shadcn@latest add button
npx shadcn@latest add badge
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add form
npx shadcn@latest add sheet
npx shadcn@latest add navigation-menu
npx shadcn@latest add tooltip
```

#### 0.5 Create Folder Structure
```
app/components/
├── aceternity/          # Copy Aceternity components here
│   ├── BentoGrid.tsx
│   ├── CardSpotlight.tsx
│   ├── HoverEffect.tsx
│   ├── InfiniteMovingCards.tsx
│   ├── MovingBorder.tsx
│   ├── AnimatedTooltip.tsx
│   └── Timeline.tsx
├── reactbits/           # Copy React Bits components here
│   ├── SplitText.tsx
│   ├── BlurText.tsx
│   ├── GradientText.tsx
│   ├── ShimmerButton.tsx
│   ├── Magnet.tsx
│   ├── Aurora.tsx
│   ├── CountUp.tsx
│   ├── TiltCard.tsx
│   └── Noise.tsx
├── sections/
├── ui/                  # Shadcn components (auto-generated)
└── layout/
```

### Deliverables
- [ ] All dependencies installed
- [ ] Tailwind configured with design tokens
- [ ] Fonts loaded and working
- [ ] Shadcn components installed
- [ ] Folder structure created
- [ ] Base component files copied from libraries

---

## 🎨 PHASE 1: Core Layout & Navigation (Days 3-5)

### Objectives
- Implement responsive navbar with scroll effects
- Create base layout components
- Setup global styles and backgrounds

### Tasks

#### 1.1 Navbar Component
**Components Used:**
- Shadcn: `NavigationMenu`, `Sheet`, `Button`
- React Bits: `Magnet`

```tsx
// Key features to implement:
// - Transparent → blur on scroll
// - Magnetic nav links
// - Mobile sheet menu
// - Coral CTA button
```

#### 1.2 Global Layout
```tsx
// app/layout.tsx features:
// - Noise overlay (React Bits)
// - Font variables applied
// - Smooth scroll behavior
// - Theme wrapper
```

#### 1.3 Base Section Component
```tsx
// components/layout/Section.tsx
// - Consistent padding
// - Background variants
// - Fade-in on scroll wrapper
```

#### 1.4 Container Component
```tsx
// components/layout/Container.tsx
// - Max-width 1400px
// - Responsive padding
// - Centered content
```

### Deliverables
- [ ] Navbar with all interactions
- [ ] Mobile menu working
- [ ] Scroll-based navbar blur
- [ ] Section and Container components
- [ ] Global noise/texture overlay

---

## 🚀 PHASE 2: Hero Section (Days 6-10)

### Objectives
- Build the premium bento grid hero
- Implement all text animations
- Add ambient background effects

### Tasks

#### 2.1 Copy & Configure Components
From React Bits:
- `SplitText` - Name animation
- `BlurText` - Tagline reveal
- `GradientText` - Script accent
- `CountUp` - Stats animation
- `ShimmerButton` - CTA
- `Aurora` - Background

From Aceternity:
- `BentoGrid` - Layout
- `CardSpotlight` - Cards with glow

#### 2.2 Hero Layout Implementation
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   ┌─────────────────────┐ ┌───────────┐ ┌──────────────┐  │
│   │                     │ │  Avatar   │ │ LET'S BUILD  │  │
│   │   RAJEEV            │ │  + Stats  │ │ SOMETHING    │  │
│   │   ──────            │ │           │ │              │  │
│   │   I craft code...   │ └───────────┘ │ [Email CTA]  │  │
│   │                     │ ┌───────────┐ └──────────────┘  │
│   │   [CTA Buttons]     │ │Interfaces │ ┌──────────────┐  │
│   └─────────────────────┘ │ Showcase  │ │ Founder of   │  │
│                           └───────────┘ │ [Project]    │  │
│                                         └──────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

#### 2.3 Animation Sequence
1. Aurora background fades in (0ms)
2. Main card fades up (200ms)
3. Name splits and animates (300ms)
4. Tagline blurs in (500ms)
5. Other cards stagger in (600ms+)
6. Stats count up (800ms)

#### 2.4 Mobile Considerations
- Stack cards vertically
- Reduce Aurora intensity
- Simplify animations on mobile
- Touch-friendly CTAs

### Deliverables
- [ ] Bento grid layout complete
- [ ] All text animations working
- [ ] Aurora background implemented
- [ ] Card spotlight effects
- [ ] Responsive mobile layout
- [ ] Stats counter working
- [ ] CTA buttons with shimmer

---

## 💼 PHASE 3: Projects Section (Days 11-16)

### Objectives
- Featured project showcase with gallery
- Secondary projects grid with hover effects
- Screenshot gallery with transitions

### Tasks

#### 3.1 Components Required
From React Bits:
- `SplitText` - Section header
- `GradientText` - "SHOWCASE"
- `RollingGallery` or `CircularGallery` - Screenshots
- `ShimmerButton` - View project
- `PixelTransition` - Image transitions

From Aceternity:
- `CardSpotlight` - Featured card
- `HoverEffect` - Secondary cards

From Shadcn:
- `Badge` - Tech stack pills

#### 3.2 Featured Project Card
```tsx
// Features:
// - Large hero image (16:9)
// - Auto-scrolling screenshot gallery
// - Tech stack badges
// - Live demo + GitHub buttons
// - Full-width spotlight effect
```

#### 3.3 Secondary Projects Grid
```tsx
// Features:
// - 3-column grid (desktop)
// - Hover lift + glow effect
// - Image zoom on hover
// - Quick tech stack preview
```

#### 3.4 Data Structure
```typescript
interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  screenshots: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

### Deliverables
- [ ] Featured project with spotlight
- [ ] Screenshot gallery working
- [ ] Secondary projects grid
- [ ] Hover effects on all cards
- [ ] Tech stack badges
- [ ] Action buttons
- [ ] Mobile responsive

---

## 🛠️ PHASE 4: Skills & Experience (Days 17-21)

### Objectives
- Skills section with animated tooltips
- Experience timeline with visual hierarchy

### Tasks

#### 4.1 Skills Section Components
From React Bits:
- `SplitText` - "The Magic"
- `GradientText` - "behind"
- `TiltCard` - Skill icons (optional)
- `Squares` - Background

From Aceternity:
- `AnimatedTooltip` - Skill details on hover

From Shadcn:
- `Badge` - Skill pills

#### 4.2 Skills Layout
```
Categories (subtle grouping):
├── Frontend: React, Next.js, TypeScript, Tailwind
├── Backend: Node.js, Express, PostgreSQL, MongoDB
├── Tools: Docker, AWS, Git, Figma
└── AI/ML: LangChain, Gemini, OpenAI
```

#### 4.3 Experience Section Components
From React Bits:
- `SplitText` - Section title
- `GradientText` - "experiences"
- `Threads` - Background connections

From Aceternity:
- `Timeline` - Experience layout
- `CardSpotlight` - Experience cards
- `MovingBorder` - Company logos

#### 4.4 Experience Card Features
- Company logo with animated border
- Role and date
- Bullet points
- View certificate link
- Coral left accent bar

### Deliverables
- [ ] Skills with tooltips
- [ ] Categorized layout
- [ ] Background effect
- [ ] Timeline component
- [ ] Experience cards with spotlight
- [ ] Certificate links
- [ ] Mobile responsive

---

## 💬 PHASE 5: Testimonials & CTA (Days 22-25)

### Objectives
- Auto-scrolling testimonial cards
- Marquee strips with keywords
- Final CTA section

### Tasks

#### 5.1 Testimonials Components
From Aceternity:
- `InfiniteMovingCards` - Auto-scroll testimonials
- `AnimatedTooltip` - Author details

From React Bits:
- `SplitText` - "The Voices"
- `GradientText` - "behind"

#### 5.2 Marquee Strip
```tsx
// Custom implementation with:
// - Gradient background (coral → orange)
// - ShinyText for keywords
// - Star separators
// - Infinite scroll animation
```

#### 5.3 Final CTA Section
From React Bits:
- `SplitText` - "Let's create"
- `GradientText` - "something real"
- `BlobCursor` - Interactive element

From Aceternity:
- `Spotlight` - Background effect

### Deliverables
- [ ] Testimonial cards scrolling
- [ ] Author info with tooltips
- [ ] Marquee working smoothly
- [ ] Final CTA with blob/orb
- [ ] Background spotlight

---

## 📧 PHASE 6: Contact & Footer (Days 26-30)

### Objectives
- Contact bento grid with form
- Personal touches (Spotify, etc.)
- Professional footer

### Tasks

#### 6.1 Contact Section Components
From Aceternity:
- `BentoGrid` - Layout
- `CardSpotlight` - Contact cards

From React Bits:
- `SplitText` - Section title
- `GradientText` - "lyrics"
- `Magnet` - Social links
- `Lanyard` - Discord/Spotify status
- `ShimmerButton` - Submit

From Shadcn:
- `Form`, `Input`, `Textarea` - Contact form
- `Button` - Copy email

#### 6.2 Contact Form Implementation
```tsx
// Features:
// - React Hook Form + Zod validation
// - Custom focus states (coral)
// - Loading state on submit
// - Success/error toasts
// - Email copy functionality
```

#### 6.3 Footer Components
From React Bits:
- `GradientText` - Logo
- `Magnet` - Links

From Aceternity:
- `FloatingDock` - Social icons

### Deliverables
- [ ] Contact bento grid
- [ ] Working contact form
- [ ] Email copy functionality
- [ ] Social links with effects
- [ ] Spotify/Discord widget
- [ ] Footer with all links
- [ ] Copyright section

---

## ✨ PHASE 7: Polish & Optimization (Days 31-35)

### Objectives
- Performance optimization
- Accessibility audit
- Cross-browser testing
- Final polish

### Tasks

#### 7.1 Performance
- [ ] Lazy load images below fold
- [ ] Optimize animation performance
- [ ] Reduce bundle size
- [ ] Test Core Web Vitals

#### 7.2 Accessibility
- [ ] Color contrast verification
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Focus states
- [ ] Reduced motion support

#### 7.3 Responsive QA
- [ ] Mobile (320px - 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (1024px - 1440px)
- [ ] Large screens (1440px+)

#### 7.4 Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

#### 7.5 Final Polish
- [ ] Micro-interaction timing
- [ ] Animation easing curves
- [ ] Hover state consistency
- [ ] Loading states
- [ ] Error states
- [ ] Empty states

### Deliverables
- [ ] Lighthouse score > 90
- [ ] All accessibility checks pass
- [ ] Works on all target browsers
- [ ] Smooth 60fps animations
- [ ] Production-ready

---

## 📊 Phase Summary Table

| Phase | Duration | Focus | Key Deliverables |
|-------|----------|-------|------------------|
| 0 | 2 days | Setup | Dependencies, tokens, structure |
| 1 | 3 days | Layout | Navbar, sections, containers |
| 2 | 5 days | Hero | Bento grid, animations, aurora |
| 3 | 6 days | Projects | Showcase, gallery, hover effects |
| 4 | 5 days | Skills/Exp | Tooltips, timeline |
| 5 | 4 days | Testimonials | Infinite scroll, CTA |
| 6 | 5 days | Contact | Form, footer, socials |
| 7 | 5 days | Polish | Performance, a11y, testing |
| **Total** | **35 days** | | |

---

## 🔧 Quick Component Reference

### React Bits Components to Copy
```
✓ SplitText        - Text animations
✓ BlurText         - Blur reveal
✓ GradientText     - Gradient text
✓ ShinyText        - Shiny effect
✓ CountUp          - Number counter
✓ ShimmerButton    - Animated button
✓ Magnet           - Magnetic hover
✓ TiltCard         - 3D tilt
✓ Aurora           - Background
✓ Squares          - Grid background
✓ Threads          - Line connections
✓ Noise            - Texture overlay
✓ Lanyard          - Discord/Spotify
✓ ClickSpark       - Click effect
✓ RollingGallery   - Image gallery
✓ BlobCursor       - Cursor effect
```

### Aceternity Components to Copy
```
✓ BentoGrid        - Grid layout
✓ CardSpotlight    - Glow cards
✓ HoverEffect      - 3D hover
✓ InfiniteMovingCards - Auto scroll
✓ AnimatedTooltip  - Tooltips
✓ Timeline         - Vertical timeline
✓ MovingBorder     - Animated border
✓ FloatingDock     - Icon dock
✓ Spotlight        - Background light
✓ BackgroundGradient - Glow effect
```

### Shadcn Components (Install via CLI)
```
✓ Button
✓ Badge
✓ Input
✓ Textarea
✓ Form
✓ Sheet
✓ NavigationMenu
✓ Tooltip
✓ Sonner (toasts)
```

---

# 11. Quick Reference: CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #E54D4D;
  --color-primary-hover: #FF6B6B;
  --color-bg-primary: #0A0A0A;
  --color-bg-secondary: #111111;
  --color-bg-tertiary: #1A1A1A;
  --color-border: #222222;
  --color-border-hover: #333333;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --color-text-tertiary: #666666;
  
  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-script: 'Caveat', cursive;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --space-section: 8rem;
  --space-component: 2rem;
  --space-element: 1rem;
  
  /* Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

*Document Version: 1.0*
*Created for: Portfolio Redesign Project*
*Last Updated: February 2026*
