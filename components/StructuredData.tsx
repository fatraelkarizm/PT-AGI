"use client";

import React from "react";

interface StructuredDataProps {
     data: object | object[];
}

/**
 * Component for injecting JSON-LD structured data into the page
 * This helps search engines understand the content better
 */
export default function StructuredData({ data }: StructuredDataProps) {
     const jsonLd = Array.isArray(data) ? data : [data];

     return (
          <>
               {jsonLd.map((item, index) => (
                    <script
                         key={index}
                         type="application/ld+json"
                         dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                    />
               ))}
          </>
     );
}
