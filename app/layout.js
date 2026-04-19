import { Plus_Jakarta_Sans } from "next/font/google";
import BackgroundParticles from "./components/BackgroundParticles";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://victornwafor.me"),
  title: "Victor Nwafor - Builder. Developer. System Thinker.",
  description:
    "Victor Nwafor - Builder. Developer. System Thinker. crafting fast, accessible, and beautiful web experiences with React, Node.js, and modern JavaScript.",
  keywords: [
    "Victor Nwafor",
    "web developer",
    "React",
    "Nextjs",
    "Node.js",
    "JavaScript",
    "Nigeria",
    "portfolio",
  ],
  authors: [{ name: "Victor Nwafor" }],
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Victor Nwafor - Builder. Developer. System Thinker.",
    description:
      "Crafting fast, accessible, and beautiful web experiences with modern JavaScript.",
    images: ["/icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Victor Nwafor - Builder. Developer. System Thinker.",
    description:
      "Crafting fast, accessible, and beautiful web experiences with modern JavaScript.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <BackgroundParticles />
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
