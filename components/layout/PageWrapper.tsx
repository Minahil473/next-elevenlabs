// components/layout/PageWrapper.tsx
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function PageWrapper({
  children,
  showNavFooter = true,
}: {
  children: React.ReactNode;
  showNavFooter?: boolean;
}) {
  return (
   
    <div className="flex flex-col min-h-screen">
      {showNavFooter && <Navbar />}
      <main className="flex-1">{children}</main>
      {showNavFooter && <Footer />}
    </div>
    
  );
}
