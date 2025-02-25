import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/chownimah4.png" alt="" />
            {/* <img src="img/about/1.jpg" alt="" /> */}
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Chow Nima Debby</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Hi, I'm Chow Nima Debby, a Chowmoyed (Samoyed Chow Chow Mix) and
                the goodest boi in the world. Follow me for adorable photos and
                videos!
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About Us</span>
                </a>
              </Link>
            </div>
            {/* <div className="buttons">
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/angry.png" alt="" />
          </div>
          <div className="img_item">
            <img src="img/about/fun.gif" alt="" />
          </div>
        </div>
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/happy.gif" alt="" />
          </div>
          <div className="img_item">
            <img src="img/about/sad.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutComponent;
