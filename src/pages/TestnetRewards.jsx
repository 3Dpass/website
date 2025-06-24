import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const TestnetRewards = () => {
  const locationHash = useLocation().hash;

  useEffect(() => {
    if (locationHash) {
      setTimeout(function () {
        window.location.hash = "";
        window.location.hash = locationHash;
      }, 300);
    }
  }, [locationHash]);

  return (
    <React.Fragment>
      <div className="page-left-menu">
        <div className="page-title">3DPass Coin Testnet Rewards Runway</div>
        <div className="page-nav-content">
          <a href="#rewards">
            <div
              className={
                locationHash.includes("rewards")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Rewards Program
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#runway">
            <div
              className={
                locationHash.includes("runway")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Runway Road Map
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block">
          <div className="page-content-inner">
            <div className="page-content-title">
              Total Supply 100% - 1 000 000 000 P3D
            </div>
            <div className="page-content-text">
              Testnet mining rewards are approximately 5.7% of the total supply actually <Link to="/mainnet">distributed</Link>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="rewards">
          <div className="page-content-inner">
            <div className="page-content-title">
              3DPass Testnet Rewards Program <Link to="/mainnet">distributed</Link>
            </div>
            <div className="page-content-text">
              Given the fact that we needed about a month since the testnet start
              to ensure that all the essential bugs revealed by that time were
              fixed and the network behaves as it's supposed to. We called the
              community not to wait long and get involved right away from the
              testnet launch date.
            </div>
            <div className="page-content-subtitle">
              DEX mechanism of guarantee
            </div>
            <div className="page-content-text">
              We proposed to use a Substrate-to-Substrate cross-chain bridge
              between the testnet and mainnet to enable participants to
              exchange their test 3DPts for mainnet P3Ds (1 for 1), as long as
              the test 3DPts had been mined before the mainnet genesis block
              time. Block #106390 on testnet is considered to be the last block for
              the exchange.
            </div>
            <div className="page-content-text">
              This mechanism guaranteed testnet users the ability to move their
              testnet 3DPts over to the mainnet.
            </div>
            <div className="page-content-text">
              On October 25, 2022, testnet rewards were distributed. All 3DPts
              mined before block #106390 were transferred to the same
              accounts on the mainnet. Here we have published the <Link to="https://github.com/3Dpass/3DP/commit/03de3da9106c06b260359a587982925fd5ba3586">distribution
              script</Link>, which separated the funds mined before and after block
              #106390 and performed the distribution. Follow <Link to="/mainnet">these guidelines</Link> to
              get access to the transferred funds on the mainnet.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="runway">
          <div className="page-content-inner">
            <div className="page-content-title">Runway Road Map</div>
            <ul className="page-content-text">
              <li>2022 March 30 – April 15 – June 2: testnet is <Link to="/testnet">launched</Link></li>
              <li>2022 June: testing around testnet, bugfixes are <Link to="/testnet-rewards">done</Link></li>
              <li>2022 June 30 – August 30: mainnet is <Link to="/mainnet">launched</Link></li>
              <li>
                2022 July, September–October: Cross-chain bridge (in process),
                October 25: Testnet rewards program distribution 3DPt - P3D 1:1
                is <Link to="/mainnet">done</Link>, Block Explorer is <Link to="https://explorer.3dpass.org/">released</Link>, December 08: CEX listing
                {" "}<Link to="https://xeggex.com/market/P3D_USDT">listed on Xeggex</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestnetRewards;
