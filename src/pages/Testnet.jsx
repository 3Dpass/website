import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Testnet = () => {
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
        <div className="page-title">Canary Network P3Dt</div>
        <div className="page-nav-content">
          <a href="#requirements">
            <div
              className={
                locationHash.includes("requirements")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Requirements
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#linux-mac">
            <div
              className={
                locationHash.includes("linux-mac")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Mining On Linux or Mac OS
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#windows">
            <div
              className={
                locationHash.includes("windows")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Mining On Windows
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#wallet">
            <div
              className={
                locationHash.includes("wallet")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Web Wallet
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="/mainnet#validator">
            <div
              className={
                locationHash.includes("mainnet#validator")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              How to set up a Validator
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="https://github.com/3Dpass/3DP/wiki/3DPass-Node-interaction">
            <div
              className={
                locationHash.includes("")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              API and Node interaction
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="sub-header-holder">
          <a href="https://telemetry.3dpass.org/">
            <div className="one-subheader">Testnet Telemetry</div>
          </a>
          <a href="https://wallet.3dpass.org/">
            <div className="one-subheader">Web Wallet</div>
          </a>
          <a href="/mobile-wallet">
            <div className="one-subheader">Mobile Wallet</div>
          </a>
          <a href="https://discord.gg/u24WkXcwug">
            <div className="one-subheader">Discord</div>
          </a>
          <a href="https://t.me/pass3d">
            <div className="one-subheader">Telegram</div>
          </a>
        </div>
        <div className="page-content-block first-page-block" id="requirements">
          <div className="page-content-inner">
            <div className="page-content-title">Requirements</div>
            <div className="page-content-text">
              The most common way for a beginner to run a miner and validator is
              to leverage a cloud server running Linux. You may choose whatever
              VPS provider that your prefer, and whatever operating system you
              are comfortable with. The transactions weights in PoScan were
              benchmarked on standard hardware. It is recommended that miners
              and validators run at least the standard hardware in order to
              ensure they are able to process all blocks in time. The following
              are not minimum requirements but if you decide to run with less
              than this beware that you might have performance issue.
            </div>
            <div className="page-content-subtitle">Standard Hardware</div>
            <ul className="page-content-text">
              <li>CPU - Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz</li>
              <li>
                Storage - A NVMe solid state drive. Should be reasonably sized
                to deal with blockchain growth. Starting around 80GB - 160GB
                will be okay for the first six months of Realis, but will need
                to be re-evaluated every six months.
              </li>
              <li>Memory - 64GB.</li>
            </ul>
            <div className="page-content-text">
              The specs posted above are by no means the minimum specs that you
              could use when running a validator, however you should be aware
              that if you are using less you may ne​ed to toggle some extra
              optimizations in order to be equal to other validators that are
              running the standard.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="linux-mac">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to start mining on Linux or MAC OS
            </div>
            <div className="page-content-text">
              Open your Terminal and build the testnet Node with the folowing:
            </div>
            <pre className="main-pre">
              {`
cd ~ git clone https://github.com/3Dpass/3DP.git cd 3DP git checkout test curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly source $HOME/.cargo/env rustup update nightly rustup target add wasm32-unknown-unknown --toolchain nightly sudo apt-get install -y libclang-dev libssl-dev clang cargo build --release
`}
            </pre>
            <div className="page-content-text">Generate your mining key:</div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus generate-mining-key --base-path ~/3dp-chain/ --chain testnetSpecRaw.json
`}
            </pre>
            <div className="page-content-text">
              The output would be like this:
            </div>
            <pre className="main-pre">
              {`
Public key: 0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e Secret seed: fog olympic thrive recall allow page hood damage october curtain degrwe bubble
Address: d7GtBxnPwRZVez7VsQ9H7MskPn34H59RddrR9yXqhgDYsqC3t
`}
            </pre>
            <div className="page-content-text">
              Register your mining key in the keystore:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus import-mining-key 'your secret seed phrase' --base-path ~/3dp-chain/ --chain testnetSpecRaw.json
`}
            </pre>
            <div className="page-content-text">
              Generate the key for GRANDPA:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect --scheme Ed25519 "your secret seed phrase"
`}
            </pre>
            <div className="page-content-text">
              The seed phrase must be the same as for your mining key.
            </div>
            <div className="page-content-text">
              The output would be like this:
            </div>
            <pre className="main-pre">
              {`
Secret phrase fog olympic thrive recall allow page hood damage october curtain degrwe bubble is account:
Network ID/Version: 72
Secret seed: 0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3 Public key (hex): 0x23dad301fa6165b70bf538ca3be304ad418232c76814b38223c57d69bf2b28d1
Account ID: 0x23dad301fa6165b70bf538ca3be304ad418232c76814b38223c57d69bf2b28d1 SS58 Address: d7HqrBYq9qsTbBb4tQtnt9sLgh9UsS7XJbgQgr5Cb4CxH2xAd
`}
            </pre>
            <div className="page-content-text">
              Insert Grandpa key into the keystore:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key insert --base-path ~/3dp-chain/ --chain testnetSpecRaw.json --scheme Ed25519 --suri 0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3 --key-type gran
`}
            </pre>
            <div className="page-content-text">
              --suri is your Secret seed for Grandpa (not a Secret phrase, but
              this one
              0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3
              in the example above)
            </div>
            <div className="page-content-text">
              Insert Grandpa key into the keystore:
            </div>
            <pre className="main-pre">
              {`
ls ~/3dp-chain/chains/3dpass-test/keystore
`}
            </pre>
            <div className="page-content-text">
              You can also check the keys manualy
              ~/3dp-chain/chains/3dpass-test/keystore
            </div>
            <div className="page-content-text">
              Restart the Node with the following:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus --base-path ~/3dp-chain/ --chain testnetSpecRaw.json --name MyNodeName --validator --telemetry-url "wss://submit.telemetry.3dpass.org/submit 0" --author 0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e --threads 2 --no-mdns
`}
            </pre>
            <div className="page-content-text">
              --author is your Public key from mining account (the one you have
              generated as mining key, in the example above it is
              0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e)
              --threads is the number of threads you're about to use for mining
              ("--threads 2" means, you are going to leverage 2 threads)
            </div>
            <div className="page-content-text">Install <Link to="https://nodejs.org/en/">Nodejs v16</Link> and <Link to="https://pnpm.io/installation">pnpm</Link></div>
            <div className="page-content-text">Install miner:</div>
            <pre className="main-pre">
              {`
Yarn
`}
            </pre>
            <div className="page-content-text">
              --interval is the amount of time in miliseconds between the last
              and the next one objects being sent towards the Node. Dependidng
              on how much threads are you mining with, reduce the interval until
              you reach desired proc load.
            </div>
            <div className="page-content-text">
              Make sure you can see your Node in the list
            </div>
            <div className="page-content-text">
              In order ot remove your blockchain DB use this command:
            </div>
            <pre className="main-pre">
              {`
rm -rf ~/3dp-chain/chains/3dpass-test/db
`}
            </pre>
          </div>
        </div>
        <div className="page-content-block" id="windows">
          <div className="page-content-inner">
            <div className="page-content-title">
              How To Start Mining On Windows
            </div>
            <div className="page-content-text">Download and install <Link to="https://www.rust-lang.org/tools/install">Rust</Link></div>
            <div className="page-content-text">
              Install <Link to="https://git-scm.com/download/win">Git</Link> if you havent installed it yet
            </div>
            <div className="page-content-text">
              Install <Link tp="https://nodejs.org/en/download/">Node.js</Link>. Make sure you have picked up "Chocolatey
              installation", which is required for the node to work correctly
            </div>
            <div className="page-content-text">
              Open powershell as administrator and go to the Desktop (we use
              this as an example). You can choose any location you like:
            </div>
            <pre className="main-pre">
              {`
cd C:\Users\YourUserNameHere\Desktop\
`}
            </pre>
            <div className="page-content-text">Install llvm with choco</div>
            <pre className="main-pre">
              {`
choco install llvm
`}
            </pre>
            <div className="page-content-text">
              Configure Rust with the following:
            </div>
            <pre className="main-pre">
              {`
rustup install nightly-2022-06-17
rustup default nightly-2022-06-17
rustup toolchain install nightly-2022-06-17
rustup target add wasm32-unknown-unknown --toolchain nightly-2022-06-17-x86_64-pc-windows-msvc
`}
            </pre>
            <div className="page-content-text">
              Clone the node from the repo:
            </div>
            <pre className="main-pre">
              {`
git clone https://github.com/3Dpass/3DP.git
`}
            </pre>
            <div className="page-content-text">
              Build the node with the command:
            </div>
            <pre className="main-pre">
              {`
cd 3DP
git checkout test
cargo build --release
`}
            </pre>
            <div className="page-content-text">
              Set up your keys for mining and Grandpa finalization and run the
              Node as it's shown above
            </div>
            <div className="page-content-text">Install Yarn:</div>
            <pre className="main-pre">
              {`
npm install --global yarn
`}
            </pre>
            <div className="page-content-text">Configure miner:</div>
            <pre className="main-pre">
              {`
yarn
`}
            </pre>
            <div className="page-content-text">Run miner:</div>
            <pre className="main-pre">
              {`
yarn miner --interval 100
`}
            </pre>
            <div className="page-content-text">
              --interval is the amount of time in miliseconds between the last
              and the next one objects being sent towards the Node. Dependidng
              on how much threads are you mining with, reduce the interval until
              you reach desired proc load.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="wallet">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to use 3DPass web wallet
            </div>
            <div className="page-content-text">
            <Link to="https://wallet.3dpass.org/">3DPass browser wallet</Link> is a Java Script page interacting with the
              blockchain network directly from your browser. Once being
              downloaded it might be connected either to the remote API endpoint
              available or to the local node running on your computer. By means
              of changing endpoints you can easily switch among different
              networks. Go to Settings to switch the endpoint:
            </div>
            <img
              className="page-img"
              src="/images/3DPass_wallet_settings1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">API endpoints:</div>
            <ul className="page-content-text">
              <li>wss://test-rpc.3dpass.org - testnet</li>
              <li>ws://127.0.0.1:9944 - local Node</li>
            </ul>
            <img
              className="page-img"
              src="/images/endpoint_switch1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">
              How to create new address:
            </div>
            <div className="page-content-text">
              Open <Link to="https://wallet.3dpass.org/">3DPass wallet page</Link> in your web browser.
            </div>
            <div className="page-content-text">
              Make sure that you are connected to the correct endpoint:
              wss://test-rpc.3dpass.org or wss://test-rpc.3dpass.org as it's
              shown above. Use "+" to generate new address. Keep your seed
              phrase in a safe place. There is no any possible ways to recover
              if it's lost. You can also import your address from the seed
              phrase.
            </div>
            <img
              className="page-img"
              src="/images/new_account1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">
              Remove your address after it's being used:
            </div>
            <div className="page-content-text">
              We recommend that you not to store your addresses in browser
              constantly. Store your seed phrase in a safe place. You can import
              the address again whenever you need.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testnet;
