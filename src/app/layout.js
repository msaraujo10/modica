import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-white text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}