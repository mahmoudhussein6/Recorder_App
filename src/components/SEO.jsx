import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title ? `${title} | StudioRecord` : 'StudioRecord | Professional Browser Screen Recorder';
  const siteDescription = description || 'Record your screen in high fidelity directly from your browser. Private, fast, and free.';
  const siteKeywords = keywords || 'screen recorder, online screen recorder, browser screen recording';
  const siteImage = image || 'https://studiorecord.app/og-image.png';
  const siteUrl = url || 'https://studiorecord.app/';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;
