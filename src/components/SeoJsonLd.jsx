import { siteConfig } from '../config/site';

export default function SeoJsonLd({ calculator }) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: calculator.name,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      url: `${siteConfig.url}/calculators/${calculator.slug}/`,
      description: calculator.metaDescription,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Calculators', item: `${siteConfig.url}/calculators/` },
        { '@type': 'ListItem', position: 3, name: calculator.name, item: `${siteConfig.url}/calculators/${calculator.slug}/` }
      ]
    }
  ];

  return schemas.map((schema, index) => (
    <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  ));
}
