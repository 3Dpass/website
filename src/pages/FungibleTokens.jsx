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
              The Assets module
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
              Smart Contracts
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
              also required.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="assets">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to deal with Fungible Tokens using the Assets module
            </div>
            <div className="page-content-text">
              The Ledger of Things has the <Link to="https://github.com/paritytech/substrate/tree/master/frame/assets">Assets</Link> pallet implemented, 
              which provided some useful methods for dealing with simple fungible assets without a necessity to run a smart contract:
            </div>
            <ul className="page-content-text">
              <li><i>Asset Issuance:</i> New asset creation, the total supply of which will belong to the issuer account</li>
              <li><i>Asset Transfer:</i> Transfering assets from one account to another</li>
              <li><i>Asset Destruction:</i> Allows to destroy the asset and its supply entirely</li>
              <li><i>Asset Burning:</i> Burning some certain amount of tokens (reducing the balance of a given account and update the total supply)</li>
              <li><i>Asset Ownership Transfer:</i> Changing the asset owner</li>
              <li><i>Asset Freeze:</i> Disalows the asset transfers from a given account</li>
              <li><i>Set the Asset Team:</i> Sets up the Issuer, Admin and Freezer of the asset</li>
            </ul>
            <div className="page-content-text">
              All the methods of the Assets module are available via the <Link to="https://polkadot.js.org/docs/api/">polkadot JS API</Link>. The Assets <Link to="https://polkascan.github.io/py-substrate-metadata-docs/statemint/assets/">API metadata</Link> description. 
            </div>
            <div className="page-content-subtitle">
              How to mint fungible tokens via the wallet:
            </div>
            <div className="page-content-text">1. Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org">Polkadot js wallet</Link></div>
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
              6. Transfer tokens
            </div>
          </div>
        </div>
        <div className="page-content-block" id="smart">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to deal with Fungible Tokens using Smart Contracts
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
