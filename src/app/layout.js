"use client";
import "./globals.css";
import Navbar from '@component/components/Navbar.js';
import Provider from '@component/components/Provider.js';
import { usePathname } from "next/navigation";
// import '../../public/styles.css'
//import { AuthContextProvider } from "../context/AuthContext"

export default function RootLayout({ children }) {
  const noNav = ["/login", "/register", "/"];

  if (!noNav.includes(usePathname())) {
    return (
      <html lang="en">
        <body>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </body>
      </html>
    );
  }
}
