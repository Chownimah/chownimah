import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import ServicesComponent from "@components/ServicesComponent";
import Drops from "@components/Drops";

const Index = () => {
  return (
    <Layout pageName={"Home"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/bg.gif" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h2 className="fn_title" title="Neoh">
                Chow Nimah
              </h2>
              {/* <p className="fn_desc fn_animated_text">
                The collection built by and runby codeefly. Together we are
                strong than ever.
              </p> */}
            </div>
          </div>
          <a
            href="#about"
            className="neoh_fn_down magic-hover magic-hover__square"
          >
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      {/* !Hero Header */}
      {/* About Section */}
      <AboutComponent />
      <ServicesComponent />
      <Drops />
    </Layout>
  );
};
export default Index;
