import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Liceu Concessionária",
  description: "Venha comprar o carro na liceu concessionária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
