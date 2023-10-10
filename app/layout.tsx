import { Footer, Header } from "@/components/organisms";
import { Container } from "@/components/atoms";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "Early Birdrs",
    template: "% Coffe",
  },
  openGraph: {
    title: "Best Coffee Shop Ever",
    description: "Best Coffee Shop Ever",
    type: "website",
    url: "/",
    locale: "en",
    images: [
      {
        url: "/logo-black-1.svg",
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

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="format-detection" content="telephone=no" />{" "}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo-black-1.svg"
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
