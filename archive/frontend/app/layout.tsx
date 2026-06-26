import "./globals.css";

export const metadata = {
  title: "Love Fills Memory",
  description: "AI Caregiving Memory System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        <div style={{ display: "flex", height: "100vh" }}>
          {children}
        </div>
      </body>
    </html>
  );
}