import React, { useEffect } from 'react';
import { hotelInfo, seoData } from '../data/hotelData';

export default function MetaSEO({ page = 'home' }) {
  useEffect(() => {
    const current = seoData[page] || seoData.home;

    // 1. Dynamic Page Title
    document.title = current.title;

    // Helper for adding/updating meta tags in the document head
    const updateMetaTag = (attrName, attrVal, contentVal) => {
      if (!contentVal) return;
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.content = contentVal;
    };

    // 2. Standard SEO Meta Tags
    updateMetaTag('name', 'description', current.description);
    updateMetaTag('name', 'keywords', current.keywords);
    updateMetaTag('name', 'author', 'EKTA HOTEL & ROOMS');

    // 3. Dynamic Canonical Link Tag (Google Core SEO Requirement)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const cleanPath = window.location.pathname === '/' ? '' : window.location.pathname;
    canonical.href = `https://ektahotel.com${cleanPath}`;

    // 4. Open Graph (OG) Meta Tags for Facebook & Google Rich Search
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', `https://ektahotel.com${cleanPath}`);
    updateMetaTag('property', 'og:title', current.title);
    updateMetaTag('property', 'og:description', current.description);
    updateMetaTag('property', 'og:image', 'https://ektahotel.com/images/ekta-08-4k.webp');
    updateMetaTag('property', 'og:site_name', 'EKTA HOTEL & ROOMS');

    // 5. Twitter Card Meta Tags for Social Previews
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:url', `https://ektahotel.com${cleanPath}`);
    updateMetaTag('name', 'twitter:title', current.title);
    updateMetaTag('name', 'twitter:description', current.description);
    updateMetaTag('name', 'twitter:image', 'https://ektahotel.com/images/ekta-08-4k.webp');

    // 6. Dynamic JSON-LD Structured Data (Google Rich Snippets)
    let schemaData = {};

    if (page === 'home') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": hotelInfo.name,
        "description": current.description,
        "image": "https://ektahotel.com/images/ekta-08-4k.webp",
        "telephone": hotelInfo.phone,
        "email": hotelInfo.email,
        "priceRange": "INR",
        "url": "https://ektahotel.com/",
        "hasMap": hotelInfo.googleMapsUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A.B. Road N.H.52, Banjari Bypass, 2 K.m. from Rojawas Toll Plaza, Opp. TATA Workshop",
          "addressLocality": "Kharkhadi",
          "addressRegion": "Ujjain, Madhya Pradesh",
          "postalCode": "456770",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.3484,
          "longitude": 76.1915
        },
        "starRating": {
          "@type": "Rating",
          "ratingValue": "3"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.1",
          "reviewCount": "120",
          "bestRating": "5"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Pure Veg Restaurant", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Kids Play Garden", "value": true }
        ]
      };
    } else if (page === 'restaurant') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "EKTA Pure Veg Restaurant",
        "description": current.description,
        "image": "https://ektahotel.com/images/ekta-06-4k.webp",
        "telephone": hotelInfo.phone,
        "priceRange": "INR",
        "servesCuisine": ["North Indian", "Punjabi", "Chinese", "Pure Vegetarian"],
        "menu": "https://ektahotel.com/restaurant",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A.B. Road N.H.52, Banjari Bypass",
          "addressLocality": "Kharkhadi",
          "addressRegion": "Ujjain, Madhya Pradesh",
          "postalCode": "456770",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.3484,
          "longitude": 76.1915
        }
      };
    } else if (page === 'rooms') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "EKTA HOTEL & ROOMS - Accommodation",
        "description": current.description,
        "image": "https://ektahotel.com/images/ekta-27-4k.webp",
        "telephone": hotelInfo.phone,
        "priceRange": "INR",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A.B. Road N.H.52, Banjari Bypass",
          "addressLocality": "Kharkhadi",
          "addressRegion": "Ujjain, Madhya Pradesh",
          "postalCode": "456770",
          "addressCountry": "IN"
        },
        "containsPlace": [
          {
            "@type": "HotelRoom",
            "name": "Comfort AC Room",
            "description": "Clean and comfortable guest room equipped with air conditioning, hot water, free Wi-Fi, and quick room service.",
            "bed": {
              "@type": "BedDetails",
              "numberOfBeds": "1",
              "type": "Double Bed"
            }
          },
          {
            "@type": "HotelRoom",
            "name": "Deluxe Family Room",
            "description": "Generous room layout designed for family comfort. AC, free Wi-Fi, hot water.",
            "bed": {
              "@type": "BedDetails",
              "numberOfBeds": "2",
              "type": "Double Beds"
            }
          }
        ]
      };
    } else if (page === 'about') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About EKTA HOTEL & ROOMS",
        "description": current.description,
        "mainEntity": {
          "@type": "Hotel",
          "name": hotelInfo.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A.B. Road N.H.52, Banjari Bypass",
            "addressLocality": "Kharkhadi",
            "addressRegion": "Ujjain, Madhya Pradesh",
            "postalCode": "456770",
            "addressCountry": "IN"
          }
        }
      };
    } else if (page === 'contact') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact EKTA HOTEL & ROOMS",
        "description": current.description,
        "mainEntity": {
          "@type": "Hotel",
          "name": hotelInfo.name,
          "telephone": hotelInfo.phone,
          "email": hotelInfo.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A.B. Road N.H.52, Banjari Bypass",
            "addressLocality": "Kharkhadi",
            "addressRegion": "Ujjain, Madhya Pradesh",
            "postalCode": "456770",
            "addressCountry": "IN"
          }
        }
      };
    } else if (page === 'gallery') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Photo Gallery - EKTA HOTEL & ROOMS",
        "description": current.description,
        "url": "https://ektahotel.com/gallery"
      };
    }

    // Write the schema to script tag
    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);

  }, [page]);

  return null;
}
