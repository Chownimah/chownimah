const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">How To Buy?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Create Wallet</h3>
                  <p className="fn_desc fn_animated_text">
                    Download Phantom wallet or any wallet of your choice from
                    Google Chrome Extension. Create a new wallet and make sure
                    you keep your seed phrase safe!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Buy SOL</h3>
                  <p className="fn_desc fn_animated_text">
                    Buy SOL from any of the CEX and fund your wallet or buy
                    using MoonPay/Coinbase Onramp on Phantom Wallet directly
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Swap on Raydium</h3>
                  <p className="fn_desc fn_animated_text">
                    Go to Raydium, paste our contract address and swap your SOL
                    for DEBBY and you are done! Make sure to leave some SOL for
                    gas!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Join our Community</h3>
                  <p className="fn_desc fn_animated_text">
                    Make sure to join our Telegram and Twitter communities,
                    actively engage with us, and help us become one of top dog
                    memes on Solana!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
