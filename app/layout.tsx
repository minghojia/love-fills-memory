import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Love Fills Memory",
  description: "A memory care journal for families",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        <div className="flex min-h-screen">

          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 p-8">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}