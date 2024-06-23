import "./styles/global.scss";

export const metadata = {
  title: "Aixland",
  description: "Meet the world's first WEB3 Industrial Metanetwork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
