# HireTrack Landing Page

A modern, SEO-optimized landing page for HireTrack - an AI-powered hiring and applicant tracking system.

## Features

- **Next.js 14** with App Router for optimal performance
- **SEO Optimized** with metadata API, sitemap, and robots.txt
- **Responsive Design** with Tailwind CSS
- **TypeScript** for type safety
- **shadcn/ui** components for beautiful UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── installation-guide/ # Installation guide pages
│   └── ...
├── src/
│   ├── components/         # React components
│   │   ├── landing/       # Landing page components
│   │   └── ui/            # shadcn/ui components
│   └── lib/               # Utility functions
└── public/                 # Static assets
```

## Deployment

This project is configured for deployment on Vercel. Simply push to your repository and Vercel will automatically build and deploy.

## License

Private - HireTrack
