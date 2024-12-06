import localFont from "next/font/local";
import "@/assets/styles/base/globals.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
  title: "이스트소프트 프론트엔드 부트캠프 - 프로젝트1",
  description: "이스트소프트 프론트엔드 부트캠프 - 프로젝트1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layoutWrapper">
          <Header />

          <div className="mainContent">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
