import Footer from "./template-1/Footer";
import NavBar from "./template-1/NavBar";
import PageContent from "./template-1/PageContent";
import SiteHeader from "./template-1/SiteHeader";

function app() {
  return (
    <>
      <NavBar />
      <SiteHeader />
      <PageContent />
      <Footer />
    </>
  );
}

export default app;
