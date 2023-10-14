import "../styles/header.css";

import { Link, useLocation } from "react-router-dom";

import Button from "./Button";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation().pathname;
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const el = document.querySelector("meta[name='description']");
    if (el) {
      if (location.includes("features")) {
        el.setAttribute("content", "3DPass features, Proof of Scan protocol based on recognition, HASH ID, object recognition, Useful smart contracts and dApps, multi-object feature");
      } else if (location.includes("community")) {
        el.setAttribute("content", "3DPass: community resources, about 3DPass");
      } else if (location.includes("coin")) {
        el.setAttribute("content", "3DPass Coin- Layer 1 blockchain platform for the tokenization of objects, Proof of Scan protocol based on recognition, useful smart contracts and dApps");
      } else if (location.includes("mainnet")) {
        el.setAttribute("content", "3DPass - Mainnet, mining guidelines");
      } else if (location.includes("grid2d")) {
        el.setAttribute("content", "3DPass - Grid2d 3D object recognition algorithm");
      } else if (location.includes("pass3d")) {
        el.setAttribute("content", "3DPass: pass3d recognition cli tool");
      } else if (location.includes("governance")) {
        el.setAttribute("content", "3DPass - governance");
      } else if (location.includes("proof-of-scan")) {
        el.setAttribute("content", "3DPass - Proof of Scan protocol description");
      } else if (location.includes("fungible-tokens-minting")) {
        el.setAttribute("content", "3DPass - fungible tokens issuance guidelines");
      } else if (location.includes("forkless-upgrade")) {
        el.setAttribute("content", "3DPass - forkless upgrade");
      } else if (location.includes("testnet-rewards")) {
        el.setAttribute("content", "3DPass - Testnet rewards runway program");
      } else if (location.includes("mobile-wallet")) {
        el.setAttribute("content", "3DPass mobile wallet, guideliones, download");
      } else if (location.includes("testnet")) {
        el.setAttribute("content", "3DPass - Testnet, canary network  | Layer 1 blockchain platform for the tokenization of objects, Proof of Scan protocol based on recognition, useful smart contracts and dApps");
      } else {
        el.setAttribute("content", "3DPass - Layer 1 blockchain platform for the tokenization of objects, Proof of Scan protocol based on recognition, useful smart contracts and dApps");
      }
    }
  }, [location]);


  return (
    <div>
    <div className="special-message">
  <div style={{width: "100%"}}>
    <div className="message-text">Hey dev, we need your contribution and support. We are creating something special here!</div>
  </div>
</div>
    <header className="main-header">
      <div className="inner-content">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="header-navs">
          <Link to="/features">
            <div
              className={
                location.indexOf("features") > -1
                  ? "header-nav active"
                  : "header-nav"
              }
            >
              Features
            </div>
          </Link>
          <Link to="/community">
            <div
              className={
                location.indexOf("community") > -1
                  ? "header-nav active"
                  : "header-nav"
              }
            >
              Community
            </div>
          </Link>
          <Link to="/coin">
            <div
              className={
                location.indexOf("coin") > -1
                  ? "header-nav active"
                  : "header-nav"
              }
            >
              3Dpass Coin
            </div>
          </Link>
          <Link to="/mainnet">
            <div
              className={
                location.indexOf("mainnet") > -1
                  ? "header-nav active"
                  : "header-nav"
              }
            >
              Mainnet
            </div>
          </Link>

          <div
            className="hamburger-menu"
            onClick={() => setOpenMenu(!openMenu)}
          ></div>

          <div
            className={openMenu ? "right-menu active" : "right-menu"}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="logo-holdeer-right">
              <Link to="/">
                <div className="logo"></div>
              </Link>
            </div>
            <Link to="/features">
              <div
                className={
                  location.indexOf("features") > -1
                    ? "right-menu-nav active"
                    : "right-menu-nav"
                }
              >
                Features
              </div>
            </Link>
            <Link to="/community">
              <div
                className={
                  location.indexOf("community") > -1
                    ? "right-menu-nav active"
                    : "right-menu-nav"
                }
              >
                Community
              </div>
            </Link>
            <Link to="/coin">
              <div
                className={
                  location.indexOf("coin") > -1
                    ? "right-menu-nav active"
                    : "right-menu-nav"
                }
              >
                3DPass Coin
              </div>
            </Link>
            <Link to="/mainnet">
              <div
                className={
                  location.indexOf("mainnet") > -1
                    ? "right-menu-nav active"
                    : "right-menu-nav"
                }
              >
                Mainnet
              </div>
            </Link>
          </div>
        </div>
        <div className="header-right-navs">
          <Link to="/mainnet">
            <Button type="button" label="Join The Mainnet" />
          </Link>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
