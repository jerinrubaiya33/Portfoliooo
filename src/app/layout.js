import { Inter, Supermercado_One } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

// Configure Inter Font Pack
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

// Configure Supermercado One Font Pack locally via built-in optimizer
const supermercado = Supermercado_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-supermercado",
  display: "swap",
});

export const metadata = {
  title: "Portfolio of Rubaiya",
  description: "Rubaiya Khan Jerin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, supermercado.variable)}>
      <body className="bg-background text-foreground font-inter antialiased">
        {children}
      </body>
    </html>
  );
}