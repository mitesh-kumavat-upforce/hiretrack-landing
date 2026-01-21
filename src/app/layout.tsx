import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hire.upforce.tech'),
  title: {
    default: 'HireTrack - AI-Powered Hiring & Applicant Tracking System',
    template: '%s | HireTrack',
  },
  description:
    'HireTrack is a smart, AI-powered hiring platform that manages the complete recruitment lifecycle. Real-time tracking, analytics, and seamless integrations for HR teams, interviewers, and candidates.',
  keywords: [
    'hiring',
    'applicant tracking',
    'ATS',
    'recruitment',
    'HR software',
    'AI hiring',
    'interview scheduling',
    'talent management',
    'recruitment platform',
    'hiring software',
  ],
  authors: [{ name: 'HireTrack' }],
  creator: 'HireTrack',
  publisher: 'HireTrack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hire.upforce.tech',
    siteName: 'HireTrack',
    title: 'HireTrack - AI-Powered Hiring Platform',
    description:
      'Smart recruitment platform with real-time tracking, role-based access, and Google Meet integration.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HireTrack - AI-Powered Hiring Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireTrack - AI-Powered Hiring Platform',
    description: 'Smart recruitment platform for modern teams.',
    creator: '@hiretrack',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://hire.upforce.tech',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
