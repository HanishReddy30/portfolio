# 🚀 Hanish Reddy - Creative Portfolio & Freelance Hub

Welcome to the official repository of **Hanish Reddy's Freelance Portfolio**. This website is designed to be an immersive, high-conversion digital showcase that immediately grabs the attention of prospective clients, demonstrating high-end design, frontend mastery, and interactive motion systems.

---

## ✨ Features & Architecture

* **🌀 Scroll-Driven Immersive Narrative**: Experience a beautifully timed text and visual token reveal system as you scroll, creating a modern storytelling experience.
* **🎥 Integrated Motion Media**: Embedded high-performance background motion showcase demonstrating premium graphic and brand direction projects.
* **⚡ High-Performance Scroll Engine**: Fully optimized scroll pipeline running at fluid 60fps/120fps. Bottlenecks like active-decoded hidden video tags and CPU-heavy CSS raster blur operations have been replaced with GPU-accelerated rendering transitions (such as opacity and y-axis vertical offsets).
* **💼 Bottom Details & Lead Capture**: A premium, custom glassmorphic bottom section with:
  - **Live Availability Pulse**: Visual workload status indicator (*"Available for Q3/Q4 2026"*).
  - **High-Conversion Inquiry Form**: Micro-form with project type selection and direct visual success toast feedback.
  - **Social Hub**: Seamless external hooks for LinkedIn, Instagram, and YouTube.
  - **Premium Footer**: Sleek Ubuntu-inspired background wordmarks and standard copyright layouts.

---

## 🛠️ Tech Stack

* **Core**: [Next.js](https://nextjs.org/) (App Router, React 19)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **CMS Connector (Optional)**: Sanity CMS client integration configured inside `lib/sanity.ts`

---

## 🚀 Getting Started

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Local Development
Spin up the local hot-reloading development server:
```bash
npm run dev
```
Once started, open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
Verify typings, linting, and compile an optimized static bundle:
```bash
npm run build
```

---

## ✍️ How to Personalize Your Details

You can easily customize all your freelance and contact information directly in [app/page.tsx](file:///c:/Users/Hanish%20Reddy/Downloads/pofolioHanish/app/page.tsx). 

Locate the following commented block starting around line **770**:

```typescript
// ============================================================================
// BOTTOM DETAILS & CONTACT SECTION (FOR HANISH'S FREELANCING CLIENTS)
// ============================================================================
// Hanish, you can update your email, social links, location, availability, and
// other contact details directly in this component below!
// ============================================================================
```

Simply edit the strings inside the `personalInfo` object to update your details:

```typescript
const personalInfo = {
  email: "hanishreddy30@gmail.com",       // <-- EDIT YOUR EMAIL ADDRESS HERE
  whatsapp: "https://wa.me/917054b5250",  // <-- EDIT YOUR WHATSAPP LINK HERE
  location: "India / Remote Worldwide",   // <-- EDIT YOUR LOCATION OR WORK TYPE
  availability: "Available for Q3/Q4 2026",// <-- EDIT YOUR CURRENT WORKLOAD STATUS
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hanish-reddy-7054b5250/", // <-- LINKEDIN LINK
      username: "hanish-reddy"
    },
    ...
  ]
};
```

---

## ☁️ CMS Integration (Optional)

The website is set up to run fast out of the box using static content lists. If you choose to connect a Sanity CMS backend in the future:

1. Create a project at [Sanity.io](https://www.sanity.io/).
2. Add your project credentials to your `.env.local` file:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. Use the pre-configured `sanityClient` inside `lib/sanity.ts` to replace the local JSON variables in `app/page.tsx` with live data queries.
