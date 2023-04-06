
import Header from "./navigation/navigation";
import HeroSection from "./hero/hero";
import Footer from "./footer/footer";
import Head from "./head/head"
import Featured from "./featured/featured";
import Copyright from "./copyright/copyright";
import Popup from "./popup/popup";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Header />
      <main>
        <div>
          <HeroSection />
        </div>
        {children}
        <div>
          <Featured />
        </div>
      </main>
      <Footer />
      <Copyright />
      <style jsx global>{`
        /* Global styles can be added here */
      `}</style>
    </>
  );
}

