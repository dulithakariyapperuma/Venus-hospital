import { Helmet } from "react-helmet-async";

const SITE_NAME = "Venus Hospital";
const DEFAULT_OG_IMAGE = "/venus-hospital-logo.png";
const BASE_URL = "https://venushospital.lk";

/**
 * Reusable SEO head component.
 *
 * @param {object}   props
 * @param {string}   props.title       – Page-specific title (will be appended with "| Venus Hospital")
 * @param {string}   props.description – Unique meta description (aim for 150-160 chars)
 * @param {string}   [props.canonical] – Canonical path, e.g. "/about"
 * @param {string}   [props.ogImage]   – Custom Open Graph image URL
 * @param {object|object[]} [props.jsonLd] – Structured data object(s) for JSON-LD
 * @param {Array}    [props.breadcrumbs] – Array of {name, url} for BreadcrumbList schema
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  jsonLd,
  breadcrumbs,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const ogImg = ogImage || DEFAULT_OG_IMAGE;

  // Build BreadcrumbList structured data
  const breadcrumbLd = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${BASE_URL}${crumb.url}`,
        })),
      }
    : null;

  // Normalize jsonLd to array
  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  if (breadcrumbLd) {
    jsonLdArray.push(breadcrumbLd);
  }

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImg} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />

      {/* Structured Data */}
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
}
