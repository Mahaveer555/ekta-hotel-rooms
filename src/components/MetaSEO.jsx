import React, { useEffect } from 'react';
import { hotelInfo } from '../data/hotelData';

export default function MetaSEO({ page = 'home' }) {
  useEffect(() => {
    const seoMap = {
      home: {
        title: "EKTA HOTEL & ROOMS Kharkhadi Ujjain | Rooms & Pure Veg Restaurant",
        description: "Book comfortable rooms and enjoy pure vegetarian dining at EKTA HOTEL & ROOMS, Kharkhadi, Ujjain. Call or WhatsApp for availability and the best price.",
        keywords: "Ekta Hotel Kharkhadi, Ekta Hotel Ujjain, Hotel rooms in Kharkhadi, Hotel near Tarana, Pure veg restaurant Kharkhadi, Rooms near Kothbarode Ujjain, Family hotel in Ujjain, Ekta Restaurant and Rooms, Hotel in Kharkhadi Ujjain"
      },
      about: {
        title: "About Us | EKTA HOTEL & ROOMS Kharkhadi Ujjain",
        description: "Learn about EKTA HOTEL & ROOMS in Kharkhadi, Ujjain. Offering clean accommodation, pure veg restaurant, spacious parking, and warm hospitality.",
        keywords: "About Ekta Hotel Ujjain, Kharkhadi hotel story, Pure veg dining Kharkhadi, Ekta rooms Ujjain"
      },
      rooms: {
        title: "Comfortable Rooms & Stay | EKTA HOTEL & ROOMS Kharkhadi Ujjain",
        description: "Explore comfortable AC rooms at EKTA HOTEL & ROOMS, Kharkhadi, Ujjain. Free Wi-Fi, 24/7 hot water, clean bedding, and room service. Call or WhatsApp to book.",
        keywords: "AC rooms Kharkhadi, Ujjain hotel booking, Ekta hotel room rates, budget stay Ujjain, rooms in Kharkhadi"
      },
      restaurant: {
        title: "Pure Veg Restaurant | EKTA HOTEL & ROOMS Kharkhadi Ujjain",
        description: "Enjoy freshly prepared 100% pure vegetarian food at EKTA HOTEL & ROOMS, Kharkhadi, Ujjain. Family-friendly dining, hygienic kitchen, and delicious meals.",
        keywords: "Pure veg restaurant Kharkhadi, veg food Ujjain highway, family restaurant Kharkhadi, Ekta pure veg dining"
      },
      gallery: {
        title: "Photo Gallery | EKTA HOTEL & ROOMS Kharkhadi Ujjain",
        description: "Browse actual photographs of EKTA HOTEL & ROOMS including exterior daytime & night views, comfortable rooms, pure veg restaurant, and reception.",
        keywords: "Ekta hotel photos, Kharkhadi hotel gallery, Ekta restaurant images Ujjain"
      },
      contact: {
        title: "Contact Us & Location | EKTA HOTEL & ROOMS Kharkhadi Ujjain",
        description: "Contact EKTA HOTEL & ROOMS in Kharkhadi, Ujjain. Call +91 88712 20554 or WhatsApp to check room availability and get directions.",
        keywords: "Ekta Hotel contact number, Ekta hotel Ujjain location, Kharkhadi hotel phone number, Ekta hotel address"
      }
    };

    const current = seoMap[page] || seoMap.home;

    document.title = current.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = current.description;

    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.name = "keywords";
      document.head.appendChild(metaKw);
    }
    metaKw.content = current.keywords;

    // Inject JSON-LD Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": hotelInfo.name,
      "description": "Comfortable hotel rooms and pure vegetarian restaurant located in Kharkhadi, Ujjain, Madhya Pradesh.",
      "image": "https://ektahotel.com/images/hero_night_exterior.webp",
      "telephone": hotelInfo.phone,
      "email": hotelInfo.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "85WV+Q73, Kharkhadi",
        "addressLocality": "Ujjain",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "456770",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.18,
        "longitude": 75.78
      },
      "hasMap": hotelInfo.googleMapsUrl,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.1",
        "ratingCount": "120",
        "bestRating": "5"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pure Veg Restaurant", "value": true }
      ]
    };

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
