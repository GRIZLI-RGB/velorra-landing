import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5A5AE6",
};

export const metadata: Metadata = {
  title: {
    default: "Velorra - ИИ-агенты для автоматизации телефонных звонков",
    template: "%s | Velorra",
  },
  description:
    "Автоматизируйте телефонные звонки с помощью ИИ-агентов Velorra. Естественная речь, 24/7 работа, быстрый запуск за 5 минут.",
  keywords: [
    "ИИ-агенты",
    "автоматизация звонков",
    "телефонные звонки",
    "AI-телефония",
    "голосовые ассистенты",
    "автообзвон",
    "голосовой бот",
    "Velorra",
  ],
  applicationName: "Velorra",
  authors: [{ name: "Velorra", url: "https://velorra.ru" }],
  creator: "Velorra",
  publisher: "Velorra",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://velorra.ru"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Velorra - ИИ-агенты для автоматизации телефонных звонков",
    description:
      "Автоматизируйте телефонные звонки с помощью ИИ-агентов Velorra. Естественная речь, 24/7 работа, быстрый запуск за 5 минут.",
    url: "https://velorra.ru",
    siteName: "Velorra",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Velorra - ИИ-агенты для автоматизации телефонных звонков",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velorra - ИИ-агенты для автоматизации телефонных звонков",
    description:
      "Автоматизируйте телефонные звонки с помощью ИИ-агентов Velorra. Естественная речь, 24/7 работа, быстрый запуск за 5 минут.",
    images: ["/images/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
