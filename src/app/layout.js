import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Gilbert Zaini - Portfolio",
  description: "Explore the portfolio of Gilbert Zaini, a computer engineering student passionate in both hardware and software development. With multiple experiences in IoT development, full-stack web development, and AI model integration, Gilbert has a proven track record in designing hardware components and developing sophisticated web applications. Discover his innovative projects, including MySalak, NemaAPP, and SIKEBAS, and learn about his experience as a Web Developer Intern at PT. Kurnia Ciptamoda Gemilang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
