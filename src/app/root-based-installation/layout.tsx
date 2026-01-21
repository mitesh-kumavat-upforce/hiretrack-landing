import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Root-Based Installation Guide',
  description:
    'Quick installation guide for HireTrack using root account. Simpler setup but less secure than user-based installation.',
  openGraph: {
    title: 'HireTrack Root-Based Installation Guide',
    description: 'Quick installation guide for HireTrack deployment with root access.',
  },
};

export default function RootBasedInstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
