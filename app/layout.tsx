import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "@/components/providers/ToasterProvider";
import LoginModal from "@/components/modals/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";
import { log } from "console";
import RentModal from "@/components/modals/RentModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "This is an airbnb clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
