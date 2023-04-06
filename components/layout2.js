import Header from "./navigation/navigation";
import Footer from "./footer/footer";
import Head from "./head/head";
import Copyright from "./copyright/copyright";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <Copyright />
      <style jsx global>{`
        /* Global styles can be added here */
      `}</style>
    </>
  );
}
