import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User-Based Installation Guide',
  description:
    'Secure installation guide for HireTrack with dedicated user account and restricted permissions. Recommended for production environments.',
  openGraph: {
    title: 'HireTrack User-Based Installation Guide',
    description: 'Step-by-step secure installation guide with SSH key setup and restricted sudo permissions.',
  },
};

export default function UserBasedInstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
