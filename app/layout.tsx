import { Footer, Header } from "@/components/organisms";
import { Container } from "@/components/atoms";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "Early Birds",
    template: "% Coffe",
  },
  description: "Best Coffee Shop Ever",
  openGraph: {
    title: "Early Birds",
    description: "Best Coffee Shop Ever",
    type: "website",
    url: "/",
    locale: "en",
    images: [
      {
        url: "/coffe-cup.svg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const DISABLE_HYDRATION_WARNINGS =
    process.env.NEXT_PUBLIC_DISABLE_HYDRATION_WARNINGS === "true";

  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Executive Anvil",
        "image": [
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg"
        ],
        "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
        "sku": "0446310786",
        "mpn": "925872",
        "brand": {
          "@type": "Brand",
          "name": "ACME"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Fred Benson"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "89"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://example.com/anvil",
          "priceCurrency": "USD",
          "price": "119.99",
          "priceValidUntil": "2020-11-20",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock"
        }
      }
    }`,
    };
  }

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="format-detection" content="telephone=no" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo-black-1.svg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <body suppressHydrationWarning={DISABLE_HYDRATION_WARNINGS}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
