import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"About"}>
      <PageBanner pageName={"About"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                {/* <img src="img/about/1.jpg" alt="" /> */}
                <img src="img/chownimah6.png" alt="" />
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
                    Hi, I'm Chow Nima Debby, a Chowmoyed (Samoyed Chow Chow Mix)
                    and the goodest boi in the world. Follow me for adorable
                    photos and videos!
                  </p>
                </div>
                <div className="buttons">
                  <a
                    href="https://x.com/Chow_Nima"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img
                        src="svg/square-x-twitter.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </span>
                    <span className="text">Twitter</span>
                  </a>
                  <a
                    href="https://t.me/chow_nima"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/telegram.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Telegram</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/checked.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Liquidity Burned</h3>
                    <h3 className="fn_title">Authorities Revoked</h3>
                    {/* <p className="fn_desc fn_animated_text">Liquidity Burnt</p> */}
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/checked.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Tax 0/0</h3>
                    {/* <p className="fn_desc fn_animated_text">
                      Team has been part of multiple successful projects
                    </p> */}
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/checked.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Fair Launch</h3>
                    {/* <p className="fn_desc fn_animated_text">
                      Based on the simplest ERC20 OpenZeppelin contract. There
                      are no mint or ownership functions
                    </p> */}
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/tokenomics.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Tokenomics</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>Launching on Solana</p>
                  <p>1B Total Supply</p>
                  <p>3% Team</p>
                  <p>97% LP</p>
                </div>
              </div>
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
      </div>
    </Layout>
  );
};
export default About;
