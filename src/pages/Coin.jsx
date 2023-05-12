import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Coin = () => {
  const locationHash = useLocation().hash;
  const preText = `-- Start message --
ETH ADDRESS
P3D ADDRESS
-- End message --
            
-- Start ETH wallet signature --
ETH SIGNATURE
-- End ETH wallet signature --`;

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
        <div className="page-title">3DPass Coin</div>
        <div className="page-nav-content">
          <a href="#white-papper">
            <div
              className={
                locationHash.includes("white-papper")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              White Papper
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#pitch-dech">
            <div
              className={
                locationHash.includes("pitch-dech")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Pitch Deck Slides
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#road-map">
            <div
              className={
                locationHash.includes("road-map")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Road Map
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#specification">
            <div
              className={
                locationHash.includes("specification")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Specification
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution">
            <div
              className={
                locationHash.includes("distribution")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Distribution
              <div className="page-nav-circle"></div>
              <div className="page-nav-line distribution-line"></div>
            </div>
          </a>
          <a href="#distribution-shades">
            <div className="page-nav-inside">
              Shades And Total Supply
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-airdrop">
            <div className="page-nav-inside">
              Airdrop Campaign
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-contribution">
            <div className="page-nav-inside">
              Contribution Rewards Program
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-investors">
            <div className="page-nav-inside">
              Early Investors
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-rules">
            <div className="page-nav-inside">
              Mining Rules
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-rewards">
            <div className="page-nav-inside">
              Mining Rewards and Emission
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-validation">
            <div className="page-nav-inside">
              Validation Service Fee
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-transaction">
            <div className="page-nav-inside">
              Transaction Fee
              <div className="inside-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="white-papper">
          <div className="page-content-inner">
            <div className="page-content-title">White Papper</div>
            <Link
              className="a-none"
              to="https://3dpass.org/3DPass_white_paper.pdf"
            >
              <div className="page-lead-content">
                White Papper
                <div className="page-lead-button">PDF</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="pitch-dech">
          <div className="page-content-inner">
            <div className="page-content-title">Pitch Deck Slides</div>
            <Link
              className="a-none"
              to="https://3dpass.org/3DPass_pitch_deck.pdf"
            >
              <div className="page-lead-content">
                Pitch Deck Slides
                <div className="page-lead-button">PDF</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="road-map">
          <div className="page-content-inner">
            <div className="page-content-title">Road Map</div>
            <div className="page-content-subtitle">2019</div>
            <div className="page-content-text road-map-text">
              The idea of 3DPass
            </div>
            <div className="page-content-subtitle">2020</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Forming development team
            </div>
            <div className="page-content-text road-map-text mb0">
              Q2 - Scientific research
            </div>
            <div className="page-content-text road-map-text mb0">
              Q3 - Tests and experiments
            </div>
            <div className="page-content-text road-map-text">
              Q4 - <Link to="/grid2d">Grid2d</Link> recognition algorithm prototype creation and
              <Link to="https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">
                {" "}
                publication
              </Link>
            </div>
            <div className="page-content-subtitle">2021</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - <Link to="/grid2d">Grid2D</Link> implementation as <Link to="/pass3d">Pass3d</Link> recognition tool
            </div>
            <div className="page-content-text road-map-text mb0">
              Q2 - <Link to="/proof-of-scan">Proof of Scan</Link> consensus: research
            </div>
            <div className="page-content-text road-map-text mb0">
              Q3 - <Link to="/proof-of-scan">Proof of Scan</Link> consensus: prototype development
            </div>
            <div className="page-content-text road-map-text">
              Q4 - <Link to="/white-paper">White Paper</Link>
            </div>
            <div className="page-content-subtitle">2022</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Testnet launch
            </div>
            <ul className="page-content-text">
              <li>Testnet launch (<Link to="/testnet">launched</Link>)</li>
              <li>Private sale (<Link to="/coin#distribution">launched</Link>)</li>
              <li>Membership launch (done)</li>
              <li><Link to="https://github.com/3dpass">Source code</Link> publishing (done)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q2 - Mainnet launch
            </div>
            <ul className="page-content-text">
              <li>Official launch mainnet (<Link to="/mainnet">launched on August 30th, 2022</Link>)</li>
              <li>Web3 light wallet (<Link to="https://wallet.3dpass.org/">released</Link>)</li>
              <li>
                Smart Contract trait implementation (Rust based language <Link to="https://use.ink/">ink</Link>
                {" "}
                implemented)
              </li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q3 - Runway program
            </div>
            <ul className="page-content-text">
              <li>Cross-chain distribution 3DPt - P3D 1:1 (<Link to="/testnet-rewards">distributed</Link>)</li>
              <li>3DPass Cross-chain bridge (shifted to 2023)</li>
              <li>CEX listing (<Link to="https://xeggex.com/market/P3D_USDT">Xeggex.com</Link>)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q4 - Major upgrade
            </div>
            <ul className="page-content-text">
              <li>Mobile wallet (<Link to="/mobile-wallet">released</Link>)</li>
              <li>Web Block Explorer (<Link to="https://3dpscan.io/">released</Link>)</li>
              <li>
                Core: Major update "<Link to="/mainnet#validator">Validator set</Link> auto selection" (<Link to="https://github.com/3Dpass/3DP/releases">released v0.0.8</Link>)
              </li>
              <li>Governance elections (shifted to 2023)</li>
            </ul>
            <div className="page-content-subtitle">2023</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Mining issues
            </div>
            <ul className="page-content-text">
              <li><Link to="/grid2d">Grid2D</Link> algorithm optimization - (<Link to="https://github.com/3Dpass/3DP/releases/tag/v0.1.0">released v0.1.0</Link>)</li>
              <li>Core: Mining pool trait implementation (<Link to="/mainnet#mining-pool">released</Link>)</li>
              <li>Web wallet: <del>Validator</del> Mining pool control panel GUI (<Link to="https://wallet.3dpass.org">done</Link>)</li>
              <li><Link to="/governance">Governance</Link> elections (<Link to="https://github.com/3Dpass/3DP">released</Link>)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q2 - Object tokenization feature
            </div>
            <ul className="page-content-text">
              <li>HASH ID: <Link to="/features#multiobject">Multi object option</Link> implementation</li>
              <li>Core: Object authentication API implementation</li>
              <li>3DP-RC2 smart contract standard for NFTs based on <Link to="/features#3drecognition-hash-id">HASH ID</Link></li>
              <li>Mobile wallet: 3DP-RC2 integration</li>
              <li>Web3 wallet: 3DP-RC2 integration</li>
              <li>CEX: Middle size exchange listing (listed on <Link to="https://txbit.io/Trade/P3D/USDT">txbit</Link>)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q3 - Asset marketplace
            </div>
            <ul className="page-content-text">
              <li>Web wallet: Asset/NFT marketplace implementation</li>
              <li>DEX: Cross-chain bridge with Polkadot or Ethereum</li>
              <li>EVM (Ethereum Virtual Machine) emulator trait</li>
              <li>DEX integration</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q4 - New recognition algorithm
            </div>
            <ul className="page-content-text">
              <li>Core: 2D drawings recognition algorrithm implementation</li>
              <li>Demo dApp</li>
              <li>CEX: Tier1 exchange listing</li>
              <li>Faundation: forming up</li>
            </ul>
            <div className="page-content-subtitle">GitHub version</div>
            <div className="page-content-text road-map-text">
              <Link to="https://github.com/3Dpass/roadmap/tree/main/roadmap2023">Roadmap on GitHub</Link>
            </div>
            <div className="page-content-subtitle">2024</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Release (stability and security)
            </div>
            <div className="page-content-text road-map-text mb0">
              Q2 - Stablecoin
            </div>
            <div className="page-content-text road-map-text mb0">
              Q3 - dApp integrations
            </div>
            <div className="page-content-text road-map-text ">
              Q4 - New recognition algorithm
            </div>
          </div>
        </div>
        <div className="page-content-block" id="specification">
          <div className="page-content-inner">
            <div className="page-content-title">3DPass Coin Specification</div>
            <div className="page-table">
              <div className="page-table-header">
                <div className="page-table-left">
                  <div className="page-table-title">Property</div>
                </div>
                <div className="page-table-right">
                  <div className="page-table-title">Description</div>
                </div>
              </div>
              <div className="page-table-left page-table-info">Coin Name</div>
              <div className="page-table-right page-table-content">
                3DPass Coin
              </div>
              <div className="page-table-left page-table-info">Unit symbol</div>
              <div className="page-table-right page-table-content">P3D</div>
              <div className="page-table-left page-table-info">
                Network name
              </div>
              <div className="page-table-right page-table-content">
                The Ledger of Things
              </div>
              <div className="page-table-left page-table-info">Blockchain</div>
              <div className="page-table-right page-table-content">
                Own blockchain (Layer 1)
              </div>
              <div className="page-table-left page-table-info">
                Network genesis spec
              </div>
              <div className="page-table-right page-table-content">
                <Link to="https://raw.githubusercontent.com/3Dpass/3DP/main/mainnetSpecRaw.json">
                  mainnetSpecRaw.json
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                Address Format
              </div>
              <div className="page-table-right page-table-content">
                type: 'sr25519', ss58Format: 71;
                <Link to="https://github.com/3Dpass/3DP/wiki/Addresses-and-keys#ss58-address-format">
                  read more about 3dpass address format
                </Link>
              </div>
              <div className="page-table-left page-table-info">Purpose</div>
              <div className="page-table-right page-table-content">
                The tokenization of real and virtual objects and its utilization
                within smart-contracts and dApps
              </div>
              <div className="page-table-left page-table-info">Consensus</div>
              <div className="page-table-right page-table-content">
              <Link to="/proof-of-scan">Proof of Scan</Link> (Hybryd PoW + PoA GRANDPA deterministic finality),
                Algorithm: Grid2D
              </div>
              <div className="page-table-left page-table-info">
                Min unit "Crumb"
              </div>
              <div className="page-table-right page-table-content">
                0.000000000001 P3D
              </div>
              <div className="page-table-left page-table-info">
                Coin Decimals
              </div>
              <div className="page-table-right page-table-content">12</div>
              <div className="page-table-left page-table-info">
                Total supply
              </div>
              <div className="page-table-right page-table-content">
                1 000 000 000 P3D
              </div>
              <div className="page-table-left page-table-info">
                Target block time
              </div>
              <div className="page-table-right page-table-content">60 sec</div>
              <div className="page-table-left page-table-info">
                GRANDPA session length
              </div>
              <div className="page-table-right page-table-content">
                30 blocks, <Link to="/mainnet#validator">how to become Validator</Link>
              </div>
              <div className="page-table-left page-table-info">GitHub</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass">
                  https://github.com/3Dpass
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                API/RPC endpoint
              </div>
              <div className="page-table-right page-table-content">
                wss://rpc.3dpass.org; wss://rpc.3dpscan.io; via caldera:
                wss://rpc.caldera.network
              </div>
              <div className="page-table-left page-table-info">Web3 wallet</div>
              <div className="page-table-right page-table-content">
                <Link to="https://wallet.3dpass.org/">
                  https://wallet.3dpass.org/
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                Mobile wallet
              </div>
              <div className="page-table-right page-table-content">
                <Link to="https://play.google.com/store/apps/details?id=com.threedpass.wallet">
                  Android
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                Mobile wallet
              </div>
              <div className="page-table-right page-table-content">
                <Link to="https://apps.apple.com/app/3dpass/id6447526851">
                  iOS
                </Link>
              </div>
              <div className="page-table-left page-table-info">Block Explorer</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpscan.io">
                  https://3dpscan.io
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                Explorer API
              </div>
              <div className="page-table-right page-table-content">
                <Link to="https://explorer-api.3dpscan.io/graphql/">
                  https://explorer-api.3dpscan.io/graphql/
                </Link>
              </div>
              <div className="page-table-left page-table-info">Telemetry</div>
              <div className="page-table-right page-table-content">
                <Link to="https://telemetry.3dpscan.io/">
                  https://telemetry.3dpscan.io/
                </Link>
              </div>
              <div className="page-table-left page-table-info">Mining</div>
              <div className="page-table-right page-table-content">
                Mineable; <Link to="/mainnet">how to mine P3D</Link>
              </div>
              <div className="page-table-left page-table-info">
                Smart contracts
              </div>
              <div className="page-table-right page-table-content">
                Smart contract tools using ink (Rust based embedded language)
              </div>
              <div className="page-table-left page-table-info">Storage</div>
              <div className="page-table-right page-table-content"><Link to="https://ipfs.io/">IPFS</Link></div>
              <div className="page-table-left page-table-info">
                Decentralization
              </div>
              <div className="page-table-right page-table-content">
                Decentralized
              </div>
              <div className="page-table-left page-table-info">
                Announcement
              </div>
              <div className="page-table-right page-table-content">
                <Link to="https://bitcointalk.org/index.php?topic=5382009.0">
                  https://bitcointalk.org/index.php?topic=5382009.0
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                White Papper
              </div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.org/3DPass_white_paper.pdf">
                  https://3dpass.org/3DPass_white_paper.pdf
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                Distribution
              </div>
              <div className="page-table-right page-table-content">
                <a href="#distribution">Description page</a>
              </div>
              <div className="page-table-left page-table-info">Road Map</div>
              <div className="page-table-right page-table-content">
                <a href="#road-map">Road map page</a>
              </div>
              <div className="page-table-left page-table-info">
                Official Website
              </div>
              <div className="page-table-right page-table-content">
                <Link to="/">https://3dpass.org/</Link>
              </div>
              <div className="page-table-left page-table-info">Marketcap</div>
              <div className="page-table-right page-table-content">
                <Link to="https://www.livecoinwatch.com/price/3DPassCoin-P3D">
                  Livecoinwatch
                </Link>
              </div>
              <div className="page-table-left page-table-info">Licence</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass/3DP/blob/main/LICENSE">
                  GPL-3.0 license
                </Link>
              </div>
              <div className="page-table-left page-table-info">Fork</div>
              <div className="page-table-right page-table-content">
                <Link to="https://substrate.io/">Substrate</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div
            className="page-content-block first-page-block"
            id="distribution"
          >
            <div className="page-content-inner">
              <div className="page-content-title">3DPass Coin Distribution</div>
              <div className="page-content-subtitle" id="distribution-shades">
                Total supply 100% - 1 000 000 000 P3D
              </div>
              <ul className="page-content-text">
                <li>
                  Mining - 729 000 000 P3D (72.9 % of total supply, including
                  the <Link to="/testnet-rewards">testnet mining rewards</Link>{" "}
                  ~ 5.7%)
                </li>
                <li>
                  Team share - 101 000 000 P3D (10.1% of total supply), issued
                  in genesis block
                </li>
                <li>a. <Link to="https://3dpscan.io/account/d1CNDotJXNPvnSA5EQXpSbkUyXBVmaggkARY7kcgXim4BqeBJ">d1CNDotJXNPvnSA5EQXpSbkUyXBVmaggkARY7kcgXim4BqeBJ</Link></li>
                <li>b. <Link to="https://3dpscan.ioaccount/d1GZ8GxP3KzKJGRYmp9HMwxurnSKx3ACcqeZqLY5kpbLEyjzE">d1GZ8GxP3KzKJGRYmp9HMwxurnSKx3ACcqeZqLY5kpbLEyjzE</Link></li>
                <li>c. <Link to="https://3dpscan.io/account/d1GA9xWx3WgpQHp8LHCXHbYoZdvjY3NHhU6gR2fsdVCiC4TdF">d1GA9xWx3WgpQHp8LHCXHbYoZdvjY3NHhU6gR2fsdVCiC4TdF</Link></li>

                <li>
                  Marketing budget - 110 000 000 P3D (11% of total supply),
                  issued in genesis block
                </li>
                <li>a. <Link to="https://3dpscan.io/account/d1ESJKwsk6zP8tBNJABUnf8mtKcqo1U2UVG7iEZ7uytGbWKAL">d1ESJKwsk6zP8tBNJABUnf8mtKcqo1U2UVG7iEZ7uytGbWKAL</Link></li>
                <li>
                  b. The budget is being spent through the Treasury account
                  controlled by the <Link to="/governance">Governance</Link>
                </li>
                <li>
                  Contribution budget: 60 000 000 P3D (6% of total supply),
                  issued in genesis block
                </li>
                <li>a. <Link to="https://3dpscan.io/account/d1EVSxVDFMMDa79NzV2EvW66PpdD1uLW9aQXjhWZefUfp8Mhf">d1EVSxVDFMMDa79NzV2EvW66PpdD1uLW9aQXjhWZefUfp8Mhf</Link></li>
              </ul>
              <img
                className="page-img"
                style={{ marginBottom: "50px" }}
                src="/images/3DP_distribution1.png"
                alt="img"
              />
              <div className="page-content-subtitle" id="distribution-airdrop">
                Airdrop distribution campaign 1 ETH/BTC : 100P3D
              </div>
              <div className="page-content-text">
                Budget: 20 000 000 P3D from the Marketing budget
              </div>
              <div className="page-content-text">
                Rules: ETH and BTC holders are able to get x100 P3D to the
                amount they actually have.Example: If you have 1 ETH, you can
                get 100 P3D, provided there are still funds enough in the
                budget.
              </div>
              <div className="page-content-text">
                Blockchain captured at the hight of:
              </div>
              <ul className="page-content-text">
                <li>ETH 15917962 block</li>
                <li>BTC 762120 block</li>
              </ul>
              <div className="page-content-text">
                All BTC and ETH transfers happened after the blocks mentioned
                above are not valid!Every 10 days there is an Airdrop event.
              </div>
              <div className="page-content-subtitle">How to Apply:</div>
              <ol className="page-content-text">
                <li>
                  Prove that you have some ETH or BTC Sign your ETH or BTC
                  address with the wallet signature (<Link to="https://bitcointalk.org/index.php?topic=990345.0#post_bci">How to sign a message</Link>). Add your P3D address to the
                  message like that:
                </li>
                <pre className="main-pre">{preText}</pre>
                <li>
                  Post your message and signature on <Link to="https://discord.gg/u24WkXcwug">Discord</Link> #airdrop channel.
                </li>
                <li>
                  Wait for the upcoming Airdrop event to come and check your P3D
                  balance.
                </li>
              </ol>
              <div className="page-content-text">
                Feel free to ask your questions over <Link to="https://discord.gg/u24WkXcwug">Discord</Link> or <Link to="https://t.me/pass3d">Telegram</Link>
              </div>
              <div
                className="page-content-subtitle"
                id="distribution-contribution"
              >
                Mainnet Rewards program
              </div>
              <div className="page-content-text">
                All the activities, covered by the program, will be paid only in
                P3D. No other currencies are accepted.
              </div>
              <div className="page-content-text">
                For example, if you applied for the budget, the rewards would be
                estimated assuming the certain amount of hours needed and the
                average market price for the equal service. However, the final
                amount will be determined on the proccess of negotiations. The
                most important questions will be resolved by means of either
                Governance Coincil voting or public Referenda.
              </div>
              <div className="page-content-subtitle">Grants</div>
              <div className="page-content-text">
                There is a list of some important projects we would like to
                highlight and grqant a decent amount of P3D for its development.
              </div>
              <ul className="page-content-text">
                <li>
                  GPU mining tools - 3 000 000 P3D (as long as GPU tools is
                  reveled to be efficient more than actual CPU miners)
                </li>
                <li>
                  New recognition algorithm implementation - 3 000 000 P3D
                </li>
              </ul>
              <div className="page-content-text">
                Feel free to apply for grant over <Link to="https://discord.gg/u24WkXcwug">discord</Link>, provided you agree to
                publish the source code, pass its review and maintain the
                project in the future.
              </div>
              <div className="page-content-subtitle">
                The projects actually granted
              </div>
              <ul className="page-content-text">
                <li>Non official node and miner: <Link to="https://github.com/easy-3dp">"easy-3dp"</Link></li>
                <li>Web Block Explorer: <Link to="https://3dpscan.io/">https://3dpscan.io/</Link></li>
                <li>Mining pool trait: <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/mining-pool">GitHub</Link></li>
              </ul>
              <div className="page-content-subtitle">
                Activities to speed up 3DPass
              </div>
              <div className="page-content-subtitle">Developers:</div>
              <ul className="page-content-text">
                <li><Link to="https://github.com/3Dpass/3DP/issues">3DPass NODE issues</Link></li>
                <li><Link to="https://github.com/3Dpass/threedpass/issues">Mobile wallet issues</Link></li>
                <li><Link to="https://github.com/3Dpass/pass3d/issues">Objects recognition issues</Link></li>
                <li><Link to="https://github.com/3Dpass/3DP/issues/41">Mining issues</Link></li>
              </ul>
              <div className="page-content-subtitle">Miners:</div>
              <ul className="page-content-text">
                <li><Link to="/coin#distribution-rules">Mining rules</Link></li>
                <li><Link to="/coin#distribution-validation">Validation rewards</Link></li>
              </ul>
              <div className="page-content-subtitle">Marketing activities:</div>
              <div className="page-content-text">
                Local translation, PR, Articles, Social Media
              </div>
              <div className="page-content-subtitle">
                Marketplaces, Games, DEXes, E-commerce, Jewelry, and other
                projects:
              </div>
              <div className="page-content-text">
                3DPass <Link to="/features#3drecognition-hash-id">Hash ID</Link> feature integration, 3DPass blockchain
                integration
              </div>
              <div
                className="page-content-subtitle"
                id="distribution-investors"
              >
                Early investors
              </div>
              <div className="page-content-text">
                Private sale is closed by the communinty desision. Private sale
                budget was turned into the public contribution budget.
              </div>
              <div className="page-content-subtitle" id="distribution-rules">
                P3D mining rules
              </div>
              <div className="page-content-text">
                According to the <Link to="/coin#white-papper">White Paper</Link> there are some mining rules every
                miner have to follow in order to get rewarded by the network for
                each new block production.
              </div>
              <div className="page-content-text">
                Learn about <Link to="/proof-of-scan#nbrules">new block creation rules</Link>. Enjoy mining on the
                mainnet!
              </div>
              <div className="page-content-subtitle" id="distribution-rewards">
                Mining rewards and emission
              </div>
              <div className="page-content-text">
                Miners put efforts to find a 3D object shape corresponding the
                rules govern whether or not a new block would be rewarded by the
                network. These are two rules of rewards calculation:
              </div>
              <ul className="page-content-text">
                <li>
                  Starting from the block going after the genesis, mining
                  rewards amount is established as 500 3DP per block;
                </li>
                <li>
                  Every 243000 blocks, simultaneously to the difficulty step up
                  occasion, the amount of mining reward gets diminished dividing
                  by 1.2.
                </li>
              </ul>
              <div className="page-content-text">
                Given the fact that the network speed is 1 block per 60 sec,
                thus each step of 243000 blocks would approximately take about
                169 days.
              </div>
              <img
                className="page-img"
                style={{ marginBottom: "50px" }}
                src="/images/emission1.png"
                alt="img"
              />
              <div
                className="page-content-subtitle"
                id="distribution-validation"
              >
                Validation service fee
              </div>
              <div className="page-content-text">
                Validators represent the most reliable set of the network
                authoritiess eligible to vote for blocks finalizatiion. There is
                a rewards split 30/70 between a block author (miner) and the
                current set of validators. Let's say, 500 P3D is the mining
                reward, 150 P3D of which is to be devided among the current
                validators in equal. In order to become a validator not only
                collateral (from 100 000 P3D) is requires, but also at least one
                block authourship within a certain time frame. {" "}
                <Link to="/mainnet#validator">How to become Validator</Link>
              </div>
              <div
                className="page-content-subtitle"
                id="distribution-transaction"
              >
                Transaction fee
              </div>
              <div className="page-content-text">
                3DPass leverages transaction fee mechanism as conventional as
                the most blockchain networks do. Any transaction might be
                attached to a new block by one of the validators accepting or
                not the fee amount set up by a sender. Minimum commission amount
                is 1 Crumb/byte, where the byte is 1 byte of the transaction
                weight.
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Coin;
