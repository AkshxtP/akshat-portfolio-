import "./globals.css";

export const metadata = {
  title: "Akshat Pandey | Portfolio",
  description: "Personal portfolio of Akshat Pandey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
