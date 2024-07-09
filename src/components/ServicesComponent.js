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
                    Download Metamask or any wallet of your choice from Google
                    Chrome Extension. Create a new wallet and make sure you keep
                    your seed phrase safe!
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
                  <h3 className="fn_title">Buy ETH</h3>
                  <p className="fn_desc fn_animated_text">
                    Buy ETH from any of the CEX and fund your wallet or buy
                    using Debit/Credit card on Metamask directly. Make sure the
                    ETH is on BASE network.
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
                  <h3 className="fn_title">Swap on Uniswap</h3>
                  <p className="fn_desc fn_animated_text">
                    Go to Uniswap, paste the $CHOW contract address and swap
                    your ETH for $CHOW and you are done! Make sure to leave some
                    ETH for gas!
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
                    actively engage with us, and help us become the number one
                    dog meme on BASE!
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
