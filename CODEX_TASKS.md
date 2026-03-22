# Codex Task List — Portfolio

## Rules
- Do NOT touch any Docker files.
- Do NOT change anything in `next.config.js` image domain config (already correct).
- Delete this file when all tasks are done.

---

## Task 1 — Update `src/data/siteContent.ts`

### 1a. Replace Recipe App with Jobjaldi
Find the project entry with `title: 'Recipe App'` and replace the entire object with:
```ts
{
  title: 'Jobjaldi',
  description: 'A job discovery platform built for modern job seekers — browse listings, filter by role, and apply seamlessly.',
  githubLink: 'https://github.com/csy20/jobjaldi',
  tags: ['Flutter', 'Dart', 'Job Board'],
},
```

### 1b. Add Bytewise as a new project entry
Add the following object to the projects array (after Jobjaldi):
```ts
{
  title: 'Bytewise',
  description: 'Bytewise — a Flutter app available on the Google Play Store.',
  playStoreLink: 'https://play.google.com/store/apps/details?id=com.csy20.bytewise',
  tags: ['Flutter', 'Dart', 'Android', 'Play Store'],
},
```

### 1c. Update the project type definition
If there is a TypeScript type/interface for projects, add optional fields:
```ts
videoLink?: string;
githubLink?: string;
playStoreLink?: string;
```

---

## Task 2 — Update `src/components/Projects.tsx`

### 2a. Make "Demo Video" button conditional
Only render the Demo Video button if `project.videoLink` is defined:
```tsx
{project.videoLink && (
  <a href={project.videoLink} target="_blank" rel="noopener noreferrer" ...>
    Demo Video
  </a>
)}
```

### 2b. Make "GitHub" button conditional
Only render the GitHub button if `project.githubLink` is defined:
```tsx
{project.githubLink && (
  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" ...>
    GitHub
  </a>
)}
```

### 2c. Add "Play Store" button
Render a Play Store button when `project.playStoreLink` is defined:
```tsx
{project.playStoreLink && (
  <a
    href={project.playStoreLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{ backgroundColor: '#01875f' }}
    className="px-4 py-2 rounded text-white text-sm font-medium"
  >
    Play Store
  </a>
)}
```

### 2d. Ensure all external links have `rel="noopener noreferrer"`
Audit every `<a target="_blank">` in this file and confirm the attribute is present.

---

## Task 3 — Remove `border-b` from Section Wrappers

Run: `grep -rn "border-b" src/`

Remove any `border-b` or `border-b-*` Tailwind class found on `<section>` wrapper elements across all components. Do NOT remove `border-t` from the Footer — that is intentional.

---

## Task 4 — Remove Pasted Icons

Run: `grep -rn "🔥\|✅\|⚡\|🚀\|📱\|💡\|🎯\|⭐" src/`

Delete any emoji or pasted unicode icons found inline in component JSX or data files. Replace with nothing (just remove them).

---

## Task 5 — Replace `<img>` with Next.js `<Image>` in TechStack and GitHubNotes

**Files:** `src/components/TechStack.tsx` and `src/components/GitHubNotes.tsx`

- Add `import Image from 'next/image'` at the top of each file.
- Replace every `<img src={...} alt={...} />` with:
```tsx
<Image src={...} alt={...} width={48} height={48} />
```
- Keep the same className/styling that was on the `<img>` tag.

---

## Task 6 — Contact Form Improvements

**File:** `src/components/ContactSection.tsx`

- Add `required` attribute to Name, Email, and Message/Project details inputs.
- Add `autoComplete="name"` to the Name input.
- Add `autoComplete="email"` to the Email input.
- Add `minLength={20}` to the textarea.

---

## Task 7 — Accessibility: Add `aria-label` to Social Icon Links

**Files:** `src/components/Footer.tsx` and `src/components/BottomDock.tsx`

Add descriptive `aria-label` to every social icon anchor tag that contains only an SVG (no visible text). Examples:
- GitHub link → `aria-label="GitHub profile"`
- LinkedIn link → `aria-label="LinkedIn profile"`
- X / Twitter link → `aria-label="X (Twitter) profile"`
- Email link → `aria-label="Send email"`

---

## Task 8 — Add Google Fonts Preconnect

**File:** `src/app/layout.tsx`

In the `<head>` section, add before the font `<link>`:
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

---

## Task 9 — Hero CTA Button Visual Hierarchy

**File:** `src/components/Hero.tsx`

- "Let's Collaborate" should be the primary (filled/solid) button.
- "Download Résumé" should be the secondary (outlined/ghost) button.
- Keep the same colors and sizing — just make sure one is filled and one is outlined so there is a clear visual hierarchy.

---

## Task 10 — About Section Card Accent

**File:** `src/components/About.tsx`

Add a left border accent to both info cards ("How I Work" and "Currently Exploring"):
```
border-l-4 border-blue-500
```
Add this to the existing className of each card `<div>`.

---

## Task 11 — Bottom Dock Safe Area

**File:** `src/app/page.tsx` or the main wrapper

Add `pb-20` (or `pb-24`) to the main page content wrapper so the fixed BottomDock does not overlap footer content on mobile.

---

## Done
Delete this file (`CODEX_TASKS.md`) after all tasks are complete.
