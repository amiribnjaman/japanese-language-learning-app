import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Learn japanese language in the easy way",
  description: "You can learn japanese language here in the easy way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ToastContainer position="top-center" />
        <Navbar />
        <div className="min-h-screen">{children}</div>

        <Footer />
        <Script src="../path/to/flowbite/dist/flowbite.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
