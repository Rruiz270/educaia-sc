import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EducaIA-SC | Transformando a Educação com IA",
  description: "Plataforma de capacitação em Inteligência Artificial para professores da rede pública de Santa Catarina",
  keywords: "educação, IA, inteligência artificial, professores, Santa Catarina, capacitação",
  authors: [{ name: "EducaIA-SC" }],
  openGraph: {
    title: "EducaIA-SC | Transformando a Educação com IA",
    description: "Capacitação em IA para 10.000 professores da rede pública de Santa Catarina",
    url: "https://educaia-sc.vercel.app",
    siteName: "EducaIA-SC",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
