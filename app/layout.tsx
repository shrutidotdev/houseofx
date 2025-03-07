import '../app/styles/global.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import React from 'react';

export async function generateMetadata() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'; // Default for local development

  return {
    metadataBase: new URL(baseUrl),
    title: 'House of X',
    description: 'House of X provides end-to-end tools to launch, build and scale creator-led D2C brands. Our aim is to democratise brand creation.',
    keywords: 'D2C brands, brand creation, creator tools, ecommerce solutions',
    author: 'House of X',
    openGraph: {
      title: 'House of X',
      description: 'Democratizing brand creation with powerful tools for creators.',
      url: baseUrl,
      siteName: 'House of X',
      images: [
        {
          url: `${baseUrl}/hox-logo-default - 180x180.webp`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'House of X',
      description: 'Your website description goes here',
      images: [`${baseUrl}/twitter-image.webp`],
    },
    icons: {
      icon: [
        { url: `${baseUrl}/favicon.ico`, sizes: 'any' },
        { url: `${baseUrl}/hox-logo-default - 16x16.webp`, sizes: '16x16', type: 'image/webp' },
        { url: `${baseUrl}/hox-logo-default - 32x32.webp`, sizes: '32x32', type: 'image/webp' },
        { url: `${baseUrl}/hox-logo-default - 48x48.webp`, sizes: '48x48', type: 'image/webp' },
      ], 
      apple: [
        { url: `${baseUrl}/hox-logo-default - 180x180.webp`, sizes: '180x180', type: 'image/webp' },
      ],
      other: [
        { url: `${baseUrl}/hox-logo-default.webp`, sizes: '192x192', type: 'image/webp' },
      ],
    },
    manifest: `${baseUrl}/site.webmanifest`,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <html lang="en" className="scroll-smooth">
        <body className="overflow-x-hidden">
          <Navbar />
          <main className="mt-20 min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </React.StrictMode>
  );
}
