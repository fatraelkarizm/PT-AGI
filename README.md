# PT AGI - Corporate Platform & International Career Landing Page (Work Sample)

This repository contains a **Work Sample** demonstrating a modern, interactive corporate platform and landing page for **PT AGI**, an organization dedicated to helping individuals build international careers legally. The platform showcases various initiatives including Exchange Programs, Partnerships (Kemitraan), "Fast Track to Career (FTTC)", "Professional Worker in Germany (PWIG)", and Vocational Studies.

## 🚀 Overview

PT-AGI is a dynamic platform designed to handle various corporate initiatives while providing a premium, highly performant experience for our partners, clients, and internal teams. The project is built with a focus on robust SEO, high-quality UI/UX, and smooth animations.

## ⚠️ Problem Statement

When building an online presence for an international career placement agency, several key challenges arise:
- **Need for High Traffic & Visibility:** Without strong SEO and fast page loads, the agency struggles to attract organic website traffic from young, ambitious professionals searching for international opportunities.
- **Brand Professionalism & Trust:** A subpar, outdated digital experience diminishes the perceived credibility, professionalism, and legal assurance of the career programs offered.
- **Information Overload:** Presenting multiple complex programs, legalities, and partnership workflows can overwhelm users if not structured cleanly.
- **Static Experience:** Traditional agency websites often lack modern micro-interactions, making the browsing experience feel dull and failing to capture user attention.

## 💡 Solution

To address these challenges, this project implements a state-of-the-art corporate platform with the following solutions:
- **SEO Optimized Architecture:** Fully optimized structure utilizing Next.js Server-Side Rendering (SSR) and dynamic metadata for robust search engine visibility to drive high organic traffic.
- **Premium Aesthetics & Animations:** Integrated **Framer Motion** to deliver smooth entry animations, floating cards, and interactive hover states that immediately elevate brand professionalism and perceived value.
- **Accessible & Clean UI:** Utilized **Tailwind CSS v4** and foundational components from **Radix UI** to ensure the design is fully accessible and adapts perfectly across all devices.
- **Secure Communications:** Integrated with **Nodemailer** for secure emailing to handle partnership inquiries and program registrations efficiently.

## 🌟 Key Features

- **SEO Optimized**: Utilizing Next.js SSR and dynamic metadata for robust search engine visibility.
- **Responsive Design**: Mobile-first architecture crafted with Tailwind CSS for seamless viewing across all devices.
- **High Performance**: Leveraging React 19 and Next.js App Router for optimal load times and smooth client-side navigation.
- **Secure Emailing**: Integrated with Nodemailer for secure and reliable communications.
- **Accessible Components**: Accessible foundational components implemented using Radix UI.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## 📁 Project Structure

```text
PT-AGI/
├── app/               # Next.js App Router (Pages, Layouts, API routes)
│   ├── kemitraan/     # Partnership portal
│   ├── programs/      # Exchange programs 
│   └── ...
├── components/        # Reusable UI components (e.g., ProgramCTA, PartnerMarquee)
├── assets/            # Static assets and typed data resources
├── public/            # Publicly accessible assets
└── package.json       # Project dependencies and scripts
```

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.