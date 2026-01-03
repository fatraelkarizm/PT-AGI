import { Metadata } from "next";
import { StaticImageData } from "next/image";

export interface SEOProps {
     title: string;
     description: string;
     keywords?: string[];
     canonical?: string;
     ogImage?: string | StaticImageData;
     ogType?: "website" | "article";
     noindex?: boolean;
     author?: string;
     publishedTime?: string;
     modifiedTime?: string;
}

import AGILogo from "../assets/icons/AGI-LOGO.jpeg";

const SITE_CONFIG = {
     name: "PT Akselerasi Global Indonesia",
     shortName: "PT AGI",
     description: "Mitra resmi karier internasional Indonesia. Program studi dan kerja legal ke Jerman, USA, Belgia, dan China.",
     url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.agiindonesia.id",
     logo: AGILogo,
     ogImage: AGILogo,
     twitterHandle: "@ptagi_official",
     locale: "id_ID",
     localeAlternate: "en_US",
};

export function generateMetadata({
     title,
     description,
     keywords = [],
     canonical,
     ogImage,
     ogType = "website",
     noindex = false,
     author = "PT Akselerasi Global Indonesia",
     publishedTime,
     modifiedTime,
}: SEOProps): Metadata {
     const pageTitle = title.includes(SITE_CONFIG.shortName)
          ? title
          : `${title} | ${SITE_CONFIG.shortName}`;

     const fullUrl = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url;
     const rawImageUrl = ogImage || SITE_CONFIG.ogImage;
     const imageUrlString = typeof rawImageUrl === "string" ? rawImageUrl : rawImageUrl.src;
     const fullImageUrl = imageUrlString.startsWith("http") ? imageUrlString : `${SITE_CONFIG.url}${imageUrlString}`;

     const defaultKeywords = [
          "karier internasional",
          "kerja luar negeri",
          "studi ke Jerman",
          "ausbildung jerman",
          "beasiswa china",
          "culture exchange",
          "PT AGI",
          "program magang luar negeri",
          "legal internasional",
     ];

     const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

     return {
          title: pageTitle,
          description,
          keywords: allKeywords.join(", "),
          authors: [{ name: author }],
          creator: SITE_CONFIG.name,
          publisher: SITE_CONFIG.name,
          formatDetection: {
               email: false,
               address: false,
               telephone: false,
          },
          metadataBase: new URL(SITE_CONFIG.url),
          alternates: {
               canonical: fullUrl,
               languages: {
                    "id-ID": fullUrl,
                    "en-US": fullUrl.replace("/id/", "/en/"),
               },
          },
          openGraph: {
               title: pageTitle,
               description,
               url: fullUrl,
               siteName: SITE_CONFIG.name,
               images: [
                    {
                         url: fullImageUrl,
                         width: 1200,
                         height: 630,
                         alt: title,
                    },
               ],
               locale: SITE_CONFIG.locale,
               type: ogType,
               ...(publishedTime && { publishedTime }),
               ...(modifiedTime && { modifiedTime }),
          },
          twitter: {
               card: "summary_large_image",
               title: pageTitle,
               description,
               images: [fullImageUrl],
               creator: SITE_CONFIG.twitterHandle,
          },
          robots: {
               index: !noindex,
               follow: !noindex,
               googleBot: {
                    index: !noindex,
                    follow: !noindex,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
               },
          },
          icons: {
               icon: "/AGI-LOGO.jpeg",
               shortcut: "/AGI-LOGO.jpeg",
               apple: "/AGI-LOGO.jpeg",
          },
          manifest: "/site.webmanifest",
          verification: {
               google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
               // yandex: "",
               // yahoo: "",
          },
     };
}

// Helper function for generating breadcrumb schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
     return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
               "@type": "ListItem",
               position: index + 1,
               name: item.name,
               item: `${SITE_CONFIG.url}${item.url}`,
          })),
     };
}

// Helper for Organization schema
export function generateOrganizationSchema() {
     return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
          description: SITE_CONFIG.description,
          address: {
               "@type": "PostalAddress",
               addressCountry: "ID",
               addressLocality: "Cimahi Selatan, Bandung",
               streetAddress: "Jl. Gajah No 83",
               postalCode: "40531",
               addressRegion: "Jawa Barat",
          },
          contactPoint: {
               "@type": "ContactPoint",
               contactType: "Customer Service",
               availableLanguage: ["Indonesian", "English"],
          },
          sameAs: [
               // Add social media URLs here
          ],
     };
}

// Helper for Educational Course schema (for program pages)
export function generateCourseSchema({
     name,
     description,
     provider = SITE_CONFIG.name,
     url,
}: {
     name: string;
     description: string;
     provider?: string;
     url: string;
}) {
     return {
          "@context": "https://schema.org",
          "@type": "Course",
          name,
          description,
          provider: {
               "@type": "Organization",
               name: provider,
               url: SITE_CONFIG.url,
          },
          url: `${SITE_CONFIG.url}${url}`,
          hasCourseInstance: {
               "@type": "CourseInstance",
               courseMode: "blended",
               courseWorkload: "PT6M",
          },
     };
}

export { SITE_CONFIG };
