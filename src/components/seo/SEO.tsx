import { Helmet } from 'react-helmet-async';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  type = 'website',
  image = 'https://e-tailed.com/logo.png', // Fallback, would ideally use real domain
  structuredData,
}: SEOProps) {
  const siteName = 'E-Tailed Digital India';
  const fullTitle = `${title} | ${siteName}`;
  const url = canonicalUrl ? `https://e-tailed.com${canonicalUrl}` : 'https://e-tailed.com'; // Change domain as needed

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* OpenGraph Metadata */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Dynamic JSON-LD Schema */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
