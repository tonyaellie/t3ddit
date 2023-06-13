import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Logo from "./T3logo";

export const metadata = {
  title: "T3ddit",
  description: "T3ddit - The next generation of social media",
};

const Header = () => {
  return (
    <nav className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-x-4">
        <a href="/" className="ml-4">
          <Logo />
        </a>
        <span className="text-2xl text-gray-400">/</span>
        <div className="text-bold">blah</div>
      </div>

      <SignedIn>
        <UserButton showName={true} />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="h-screen w-screen">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
