import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const ForklessUpgrade = () => {
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
        <div className="page-title">Forkless Upgrade</div>
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
          <a href="#wasm">
            <div
              className={
                locationHash.includes("wasm")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              WebAssembly (Wasm)
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#webassembly">
            <div
              className={
                locationHash.includes("webassembly")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Why WebAssembly?
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
              By means of using <Link to="https://webassembly.org/">Wasm</Link> in <Link to="https://substrate.io/">Substrate</Link>, the framework powering
              3DPass, the chain is given the ability to upgrade its runtime
              logic without hard forking. Hard forking is a standard method of
              upgrading a blockchain that is slow, inefficient, and error prone
              due to the levels of offline coordination required, and thus, the
              propensity to bundle many upgrades into one large-scale event. By
              deploying Wasm on-chain and having nodes auto-enact the new logic
              at a certain block height, upgrades can be small, isolated, and
              very specific.
            </div>
            <div className="page-content-text">
              As a result of storing the Runtime as part of the state, the
              Runtime code itself becomes state sensitive and calls to Runtime
              can change the Runtime code itself. Therefore the 3DPass Host
              needs to always make sure it provides the Runtime corresponding to
              the state in which the entrypoint has been called.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="wasm">
          <div className="page-content-inner">
            <div className="page-content-title">WebAssembly (Wasm)</div>
            <div className="page-content-text">
              <Link to="https://webassembly.org/">WebAssembly</Link>, shortened to simply Wasm, is a binary instruction
              format for a stack-based virtual machine. Wasm is designed as a
              portable target for compilation of high-level languages like
              C/C++/Rust, enabling deployment on the web for client and server
              applications.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="webassembly">
          <div className="page-content-inner">
            <div className="page-content-title">Why WebAssembly (Wasm)?</div>
            <div className="page-content-text">
            <Link to="https://webassembly.org/">WebAssembly</Link> is a platform agnostic binary format, meaning that it
              will run the same instructions across whatever machine it is
              operating on. Blockchains need determinacy in order to have
              reliable state transition updates across all nodes in the
              peer-to-peer network without forcing every peer to run the same
              exact hardware. Wasm is a nice fit for reliability among the
              possibly diverse set of machines. Wasm is both efficient and fast.
              The efficiency means that it can be uploaded onto the chain as a
              blob of code without causing too much state bloat while keeping
              its ability to execute at near-native speeds.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForklessUpgrade;
