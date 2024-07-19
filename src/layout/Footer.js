import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img
                    src="img/chownimah5.png"
                    alt=""
                    height="100"
                    width="100"
                  />
                </div>
                <h3 className="fn_title">Buy Chow Nima Debby Now!</h3>
                <p>Ticker: DEBBY</p>
                <p>CA: EsoYWSH8HU3p4rzovbuGzQkQwYsTuczMPeK4hoPozsEC</p>
                <p>
                  Buy Now:{" "}
                  <a
                    href="https://raydium.io/swap/?inputMint=sol&outputMint=EsoYWSH8HU3p4rzovbuGzQkQwYsTuczMPeK4hoPozsEC"
                    className="fn_desc"
                  >
                    Raydium
                  </a>
                </p>
                <p>
                  Chart:{" "}
                  <a
                    href="https://dexscreener.com/solana/5bmyfcqrsfgznzbqulqem1zabgldqyprtem3kg4zt2fy"
                    className="fn_desc"
                  >
                    Dexscreener
                  </a>
                </p>
                <p>
                  Chart:{" "}
                  <a
                    href="https://birdeye.so/token/EsoYWSH8HU3p4rzovbuGzQkQwYsTuczMPeK4hoPozsEC?chain=solana"
                    className="fn_desc"
                  >
                    Birdeye
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>Copyright {new Date().getFullYear()} - By Chow Nima Debby</p>
              </div>
              <div className="fb_right">
                <ul>
                  <li>
                    {/* <Link legacyBehavior href="/roadmap">
                      RoadMap
                    </Link> */}
                  </li>
                  <li>{/* <a href="#">Cookies</a> */}</li>
                  <li>{/* <a href="#">Terms &amp; Conditions</a> */}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
