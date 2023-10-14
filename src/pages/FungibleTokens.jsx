import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const FungibleTokens = () => {
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
        <div className="page-title">Fungible Tokens Minting</div>
        <div className="page-nav-content">
          <a href="#general">
            <div
              className={
                locationHash.includes("general")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              General
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#assets">
            <div
              className={
                locationHash.includes("assets")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              How To Mint Fungible Tokens With Assets Trait
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#smart">
            <div
              className={
                locationHash.includes("smart")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              How To Mint Fungible Tokens With Smart Contract
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="general">
          <div className="page-content-inner">
            <div className="page-content-title">General</div>
            <div className="page-content-text">
              Fungible tokens are the ones that can be interchanged with one
              another. For example, P3D Coin is fungible, because every its unit
              is equivalent to the next one. By means of 3DPass platform you can
              mint your own fungible currency (token), which will operate on
              3DPass blockchain network. In order to move your token some P3D is
              also required for transaction fee.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="assets">
          <div className="page-content-inner">
            <div className="page-content-title">
              How To Mint Fungible Tokens With Assets Trait
            </div>
            <div className="page-content-text">1. Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org&types=eNqrVnJMTs4vzSvxzEvLV7JC5oVnlmS4lCbmBKWmOYPElHSUHFNSilKLi5HUpQBFffLzs0sLgvNLi5JT0aTCUzPTM0qAgqXGRkq1AEo%2FJWY%3D">Polkadot js wallet</Link></div>
            <div className="page-content-text">2. Go to Network - Assets</div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/asseet_fungible1.png"
              alt="img"
            />
            <div className="page-content-text">3. Create your asset</div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/minting_fungible1.png"
              alt="img"
            />
            <div className="page-content-text">
              4. Sign and submit two Extrinsics (1 - creates the asset, 2 - set
              metadata)
            </div>
            <div className="page-content-text">5. Mint your tokens</div>
            <div className="page-content-text">
              6. Transfer tokens with the wallet
            </div>
          </div>
        </div>
        <div className="page-content-block" id="smart">
          <div className="page-content-inner">
            <div className="page-content-title">
              How To Mint Fungible Tokens With Assets Trait
            </div>
            <div className="page-content-text">
              3DPass supports Substrate smart contract trait using <Link to="https://use.ink/">ink</Link>, a
              {" "} <Link to="https://www.rust-lang.org/">Rust</Link>-based embedded domain specific language (<Link to="https://wiki.haskell.org/Embedded_domain_specific_language">eDSL</Link>) for writing
              {" "} <Link to="https://webassembly.org/">WebAssembly</Link> smart contracts. Learn more about <Link to="https://use.ink/ink-vs-solidity/">how it compares to Solidity</Link>.
            </div>
            <div className="page-content-subtitle">Guidelines</div>
            <ol className="page-content-text">
              <li>Build and run <Link to="https://github.com/3Dpass/3DP">3DPass node</Link></li>
              <li>
                Follow <Link to="https://use.ink/">ink</Link> docs and set up the environment (<Link to="https://github.com/paritytech/cargo-contract">Cargo contract cli</Link>
                is required)
              </li>
              <li>Connect <Link to="https://contracts-ui.substrate.io/">contracts-ui</Link> to 3DPass node in local</li>
              <li>
                Create your own contract or use some <Link to="https://github.com/paritytech/ink/tree/master/examples">examples</Link> (ERC-20, RC-721,
                etc)
              </li>
              <li>Upload the contract via contracts-ui</li>
              <li>Interact with your contract via its API</li>
            </ol>
            <div className="page-content-subtitle">Useful links:</div>
            <ul className="page-content-text">
              <li><Link to="https://stackoverflow.com/questions/56040779/when-should-i-build-a-substrate-runtime-module-versus-a-substrate-smart-contract">Smart Contracts VS Runtime development</Link></li>
              <li>
                Visit <Link to="https://substrate.stackexchange.com/questions/tagged/ink?tab=Votes">Substrate forum</Link> to get answeres to related quiestions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FungibleTokens;
