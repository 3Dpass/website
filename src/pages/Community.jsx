import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import UserCard from "../components/UserCard";

const Community = () => {
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
        <div className="page-title">Community</div>
        <div className="page-nav-content">
          <a href="#about-us">
            <div
              className={
                locationHash.includes("about-us")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              About Us
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#our-team">
            <div
              className={
                locationHash.includes("our-team")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Our Team
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#governance">
            <div
              className={
                locationHash.includes("governance")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Governance
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#resources">
            <div
              className={
                locationHash.includes("resources")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Resources
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#download">
            <div
              className={
                locationHash.includes("download")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Download
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases">
            <div
              className={
                locationHash.includes("use-cases")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Use Cases
              <div className="page-nav-circle"></div>
              <div className="page-nav-line usecase-line"></div>
            </div>
          </a>
          <a href="#use-cases-diamonds">
            <div className="page-nav-inside">
              Diamonds and presious stones
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases-gaming">
            <div className="page-nav-inside">
              Gaming, Virtual Reality, Metaverse
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases-crypto">
            <div className="page-nav-inside">
              Cryptocurrency wallets
              <div className="inside-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="about-us">
          <div className="page-content-inner">
            <div className="page-content-title">About Us</div>
            <div className="page-content-text">
              <Link to="/images/3DPass_pitch_deck.pdf">
                Download pitch deck slides (.pdf)
              </Link>
            </div>
            <div className="page-content-text">
              3DPass is an OpenSource decentralized Layer 1 blockchain-based <Link to="/features#ledger">WEB
              3.0 platform</Link> for the tokenization of real physical and virtual
              objects and its transformation into digital assets. Since the
              early days of 2019 we have put our mind on solving the <Link to="https://3dpass.medium.com/3d-objects-digital-transformation-5181973909a8">Real world
              objects digital transformation challenge</Link>. The very first algorithm
              called <Link to="/grid2d">Grid2d</Link> was <Link to="https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">suggested</Link> by Michael Co in 2020 and has been
              implemented now as <Link to="/pass3d">pass3d recognition toolkit</Link> serving the basement
              of 3DPass network consensus called <Link to="/proof-of-scan">Proof of Scan</Link>. The main idea of
              3DPass is to make it possible for people to use real world objects
              in digital within smart-contracts and deals and to take all
              advantages of that. By means of creation and implementation <Link to="https://github.com/3Dpass/pass3d/issues">new
              recognition algorithms</Link> into our network, we are building this
              bridge between decentralized blockchain digital space and
              trillions in deals all over the globe. Every 3D object,
              transformed by 3DPass, has its own unique and stable identity
              called <Link to="/features#3drecognition-hash-id">HASH ID</Link> the object might be recognized by. In order to
              encourage users to maintain the network and to solve issues there
              is a cryptocurrency <Link to="/coin">3DP Coin</Link> which is also required to move the
              assets.
            </div>
            <video
              src="/images/3dpass_concept.mp4"
              className="page-video"
              controls
            ></video>
          </div>
        </div>
        <div className="page-content-block" id="our-team">
          <div className="page-content-inner">
            <div className="page-content-title">Our Team</div>
            <UserCard
              name="PaulS"
              title="Inventor and founder"
              description="Several exits, 16+ years experience"
              image="/images/anon.jpg"
            />
            <UserCard
              name="Michael Co"
              title="CORE developer and co-founder"
              description="10+ years experience"
              image="/images/anon.jpg"
            />
            <UserCard
              name="tvc.Micle"
              title="Front-end developer and co-founder"
              description="10+ years experience"
              image="/images/anon.jpg"
            />
            <UserCard name="L3odr0id" 
              title="Mobile Developer" 
              description="3+ years experience"
              image="/images/anon.jpg"
            />
            <UserCard
              name="Andrew Coleman"
              title="Partner relations"
              description="USA"
              image="/images/andrew_coleman.png"
            />
            <UserCard
              name="A Mo"
              title="Community Representative"
              description="Europe"
              image="/images/anon.jpg"
            />
          </div>
        </div>
        <div className="page-content-block" id="governance">
          <div className="page-content-inner">
            <Link to="/governance"><div className="page-content-title">Governance</div></Link>
            <div className="page-content-text">
              3DPass leverages a sophisticated self governance mechanism, which
              allows it to evolve gracefully overtime at the ultimate behest of
              its assembled stakeholders. The stated goal is to ensure that the
              majority of the stake can always command the network.
            </div>
            <div className="page-content-text">
              3DPass decentralised governance system is comprised of three main
              components:
            </div>
            <ol className="page-content-text">
              <li>
                <Link to="/governance#council">Council</Link> - An approval-voted, elected executive "government" to
                manage parameters, admin and spending proposals.
              </li>
              <li>
              <Link to="/governance#technical">Technical Committee</Link> - A technocratic committee to manage the
                {" "} <Link to="/forkless-upgrade">forkless online upgrade</Link>{" "}
                timelines.
              </li>
              <li>
              <Link to="/governance#democracy">Referenda</Link> - A general voting system for everything else which
                rewarded long-term stakeholders with increased influence.
              </li>
            </ol>
            <div className="page-content-text">
              The network brings together various novel mechanisms, including an
              amorphous state-transition function stored on-chain and defined in
              a platform-neutral intermediate language (i.e. <Link to="/forkless-upgrade#wasm">WebAssembly</Link>) and
              several on-chain voting mechanisms such as referenda with adaptive
              super-majority thresholds and batch approval voting. All changes
              to the protocol must be agreed upon by stake-weighted referenda.
            </div>
            <div className="page-content-text">
              There is a <Link to="/governance#treasury">Treasury</Link> pot controled by the Council, which adds to
              transparency, especially, when it comes to the budget spendings
              and grants. The funds held in the Treasury can be spent by making
              a spending proposal that, if approved by the Council, will enter a
              waiting period before distribution.
            </div>
            <div className="page-content-text">
              There is also the <Link to="/governance#governance">Governance token 3DPg</Link>, which serves for internal
              communinty needs, permissions and governance services.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="resources">
          <div className="page-content-inner full-m-w">
            <div className="page-content-title">Resources</div>
            <div className="url-block">
              <div className="url-block-title">Forums</div>
              <ul className="page-content-text">
                <Link to="https://bitcointalk.org/index.php?topic=5382009.0">
                  <li>Bitcointalk</li>
                </Link>
                <Link to="https://3dpass.medium.com/">
                  <li>Medium</li>
                </Link>
                <Link to="https://www.reddit.com/r/3DPass_live">
                  <li>Reddit</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Network</div>
              <ul className="page-content-text">
                <Link to="https://wallet.3dpass.org/">
                  <li>3DPass Web3 wallet</li>
                </Link>
                <Link to="/mobile-wallet">
                  <li>Mobile wallet</li>
                </Link>
                <Link to="https://explorer.3dpass.org/">
                  <li>Web Block Explorer</li>
                </Link>
                {/*<Link to="">
                  <li>Web Block Explorer 2</li>
                </Link>*/}
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://telemetry.3dpass.org">
                  <li>Telemetry server</li>
                </Link>
                <Link to="https://explorer-api.3dpass.org/graphql/">
                  <li>Block Explorer API graphql</li>
                </Link>
                <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org&types=eNqrVnJMTs4vzSvxzEvLV7JC5oVnlmS4lCbmBKWmOYPElHSUHFNSilKLi5HUpQBFffLzs0sLgvNLi5JT0aTCUzPTM0qAgqXGRkq1AEo%2FJWY%3D">
                  <li>Polkadot js wallet</li>
                </Link>
                <Link to="https://www.3dpassmining.info/">
                  <li>Mining dash board</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Market cap</div>
              <ul className="page-content-text">
                <Link to="https://nomics.com/assets/p3d-3dpass-coin/">
                  <li>Nomics</li>
                </Link>
                <Link to="https://coinpaprika.com/coin/p3d-3dpass-coin/">
                  <li>Coinpaprika</li>
                </Link>
                <Link to="https://www.livecoinwatch.com/price/3DPassCoin-P3D">
                  <li>Livecoinwatch</li>
                </Link>
                <Link to="https://coincodex.com/crypto/3dpass/">
                  <li>Coincodex</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://blockspot.io/coin/3dpass-coin/">
                  <li>Blockspot</li>
                </Link>
                <Link to="">
                  <li>Coinmarketcap</li>
                </Link>
                <Link to="">
                  <li>Coingecko</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Exchanges</div>
              <ul className="page-content-text">
                <Link to="https://xeggex.com/market/P3D_USDT">
                  <li>Xeggex P3D/USDT</li>
                </Link>
                <Link to="https://xeggex.com/market/P3D_BTC">
                  <li>Xeggex P3D/BTC</li>
                </Link>
                <Link to="https://txbit.io/Trade/P3D/USDT">
                  <li>Txbit P3D/USDT</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Social Media</div>
              <ul className="page-content-text">
                <Link to="https://twitter.com/3Dpass_official">
                  <li>Twitter</li>
                </Link>
                <Link to="https://www.youtube.com/channel/UCYkrRxTgAQYwzFqRuQPOZ4w">
                  <li>Youtube</li>
                </Link>
                <Link to="https://www.instagram.com/3dpass_org/">
                  <li>Instagram</li>
                </Link>
                <Link to="https://discord.com/invite/u24WkXcwug">
                  <li>Discord</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://t.me./threedpass_updates">
                  <li>Telegram channel</li>
                </Link>
                <Link to="https://t.me/pass3d">
                  <li>Telegram chat</li>
                </Link>
                <Link to="https://t.me/p3dtrading">
                  <li>Unofficial Price & Trading TG group</li>
                </Link>
                <Link to="https://t.me/pass3dESP">
                  <li>Spanish speaking TG group</li>
                </Link>
                <Link to="https://t.me/ger3dpass">
                  <li>German speaking TG group</li>
                </Link>
                <Link to="https://t.me/p3dtr">
                  <li>Turkish speaking TG group</li>
                </Link>
                <Link to="https://t.me/p3dpassru">
                  <li>Russian speaking TG group</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Source Code</div>
              <ul className="page-content-text">
                <Link to="https://github.com/3Dpass/">
                  <li>3DPass GitHub</li>
                </Link>
                <Link to="https://github.com/easy-3dp">
                  <li>Non official Node and miner (easy-3dp)</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://github.com/WlinkNET/Prometheus/tree/main">
                  <li>Prometheus and Graphana for 3DPass</li>
                </Link>
                <Link to="https://github.com/Caldera-Trade/3dp-registrar/">
                  <li>https://github.com/Caldera-Trade/3dp-registrar/</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="download">
          <div className="page-content-inner">
            <div className="page-content-title">
              Download: Stable Official{" "}
              <Link to="https://github.com/3Dpass/3DP/releases">Release</Link>
            </div>
            <div className="page-content-text">
              Mainnet: <Link to="/mainnet">guidelines</Link>
            </div>
            <div className="page-table">
              <div className="page-table-header">
                <div className="page-table-left">
                  <div className="page-table-title">OS</div>
                </div>
                <div className="page-table-right">
                  <div className="page-table-title">Description</div>
                </div>
              </div>
              <div className="page-table-left page-table-info">Android</div>
              <div className="page-table-right page-table-content">
                <Link to="https://play.google.com/store/apps/details?id=com.threedpass.wallet">
                  Get it on Google Play
                </Link>
              </div>
              <div className="page-table-left page-table-info">IOS</div>
              <div className="page-table-right page-table-content">
                <Link to="https://apps.apple.com/app/3dpass/id6447526851">
                  Download on AppStore
                </Link>
              </div>
              <div className="page-table-left page-table-info">Windows</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.org/mainnet.html#mining_docker">
                  How to run the Node with Docker{" "}
                </Link>
                |{" "}
                <Link to="https://3dpass.org/mainnet.html#mining_manually_windows">
                  How to build the Node manualy
                </Link>
              </div>
              <div className="page-table-left page-table-info">Mac OS</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.org/mainnet.html#mining_docker">
                  How to run the Node with Docker{" "}
                </Link>
                |{" "}
                <Link to="https://3dpass.org/mainnet.html#mining_manually_windows">
                  How to build the Node manualy
                </Link>
              </div>
              <div className="page-table-left page-table-info">Linux</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass/3DP/releases">
                  Node: poscan-consensus bin{" "}
                </Link>
                |{" "}
                <Link to="https://3dpass.org/mainnet.html#mining_docker">
                  How to run the Node with Docker{" "}
                </Link>
                |{" "}
                <Link to="https://3dpass.org/mainnet.html#mining_manually_linux">
                  How to build the Node manualy
                </Link>
              </div>
              <div className="page-table-left page-table-info">Source code</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass/">Github</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="use-cases">
          <div className="page-content-inner">
            <div className="page-content-title">Use Cases</div>
            <div className="page-content-subtitle" id="use-cases-diamonds">
              Diamonds and presious stones tokenization
            </div>
            <iframe
              src="https://www.youtube.com/embed/Yxc-nJj7qeQ"
              className="page-video"
              controls
              title="diamonds"
            ></iframe>
            <div className="page-content-subtitle" id="use-cases-gaming">
              Tokenization of items for Gaming, Virtual reality, Metaverse
            </div>
            <iframe
              src="https://www.youtube.com/embed/O6c3ZOB0Glg"
              className="page-video"
              controls
              title="diamonds"
            ></iframe>
            <div className="page-content-subtitle" id="use-cases-crypto">
              Real world objects as cryptocurrency wallets
            </div>
            <iframe
              src="https://www.youtube.com/embed/YAl2R_DefQE"
              className="page-video"
              controls
              title="diamonds"
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Community;
