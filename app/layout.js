import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import "./globals.css";  // Your custom global styles
import CustomNavbar from './Components/Navbar';
import 'typeface-poppins';
import Footer from './Components/Footer';

export const metadata = {
  title: "Cuentista Tech",
  description: "Your Own Tech Partner",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div style={{ zIndex: 999, position: 'relative' }}>
          <CustomNavbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
