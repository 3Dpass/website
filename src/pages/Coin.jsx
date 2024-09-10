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
        <div className="page-title">3Dpass Coin</div>
        <div className="page-nav-content">
        <a href="#P3D">
            <div
              className={
                locationHash.includes("P3D")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              P3D
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#white-papper">
            <div
              className={
                locationHash.includes("white-papper")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              White Paper
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#3DPRC-2">
            <div
              className={
                locationHash.includes("3DPRC-2")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              3DPRC-2 standard
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
          <a href="#roadmap">
            <div
              className={
                locationHash.includes("roadmap")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Roadmap
              <div className="page-nav-circle"></div>
              <div className="page-nav-line roadmap-line"></div>
            </div>
          </a>
          <a href="#roadmap-2022">
            <div className="page-nav-inside">
              2022
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#roadmap-2023">
            <div className="page-nav-inside">
              2023
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#roadmap-2024">
            <div className="page-nav-inside">
              2024
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#roadmap-2025">
            <div className="page-nav-inside">
              2025
              <div className="inside-nav-circle"></div>
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
          <a href="#distribution-shares">
            <div className="page-nav-inside">
              Shares And Total Supply
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-contribution">
            <div className="page-nav-inside">
              Contribution Grant Program
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-investors">
            <div className="page-nav-inside">
              Investors
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#distribution-rules">
            <div className="page-nav-inside">
              Mining Rules (PoW)
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
              Validation Fee (PoA)
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
        <div className="page-content-block first-page-block" id="P3D">
          <div className="page-content-inner">
            <div className="page-content-title">3Dpass coin (P3D)</div>
            <div className="page-content-text">
              <strong>P3D</strong> is a native utility token operating within <Link to="/proof-of-scan#p2p">The Ledger of Things</Link>{" "}
              to facilitate on its use and encourage the efforts of the network maintainers (Block authors and Vaildators) {" "}
              providing resources and equipment for <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> {" "}
              tokenization standard to operate.  
            </div>
            <div className="page-content-text">
              The smallest indivisible unit of account in 3Dpass is Crumb. 1 P3D is equal to <i>1e12</i> Crumb, {" "}
              which is defined by the network genesis spec <Link to="https://raw.githubusercontent.com/3Dpass/3DP/main/mainnetSpecRaw.json">mainnetSpecRaw.json</Link>.
              Explore the <Link to="#specification">network specification</Link> for more detail. 
            </div>
            <ul className="page-content-text">
              <li>
                Crumb: 0.000000000001
              </li>
              <li>
                MicroP3D (uP3D): 0.000001000000
              </li>
              <li>
                MilliP3D (mP3D): 0.001000000000
              </li>
              <li>
                P3D: 1.000000000000
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="white-papper">
          <div className="page-content-inner">
          <div className="page-content-title">White Paper</div>
            <Link
              className="a-none"
              to="/3DPass_white_paper.pdf"
              target="blank"
              download
            >
              <div className="page-lead-content">
                The Ledger of Things White Paper
                <div className="page-lead-button">PDF</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="3DPRC-2">
          <div className="page-content-inner">
            <div className="page-content-title">3DPRC-2</div>
            <Link
              className="a-none"
              to="/3DPRC-2_v2.pdf"
              target="blank"
              download
            >
              <div className="page-lead-content">
                3DPRC-2 tokenization standard
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
              to="/3Dpass_pitch_deck.pdf"
              target="blank"
              download
            >
              <div className="page-lead-content">
                Pitch Deck Slides
                <div className="page-lead-button">PDF</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="roadmap">
          <div className="page-content-inner">
            <div className="page-content-title">Road Map</div>
            <div className="page-content-subtitle" id="roadmap-2019">2019</div>
            <div className="page-content-text road-map-text">
              The idea of 3DPass
            </div>
            <div className="page-content-subtitle" id="roadmap-2020">2020</div>
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
            <div className="page-content-subtitle"id="roadmap-2021">2021</div>
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
            <div className="page-content-subtitle" id="roadmap-2022">2022</div>
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
              <li>Web Block Explorer (<Link to="https://3dpscan.io">released</Link>)</li>
              <li>
                Core: Major update "<Link to="/mainnet#validator">Validator set</Link> auto selection" (<Link to="https://github.com/3Dpass/3DP/releases">released v0.0.8</Link>)
              </li>
              <li>Governance elections (shifted to 2023)</li>
            </ul>
            <div className="page-content-subtitle" id="roadmap-2023">2023</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Mining issues
            </div>
            <ul className="page-content-text">
              <li><Link to="/grid2d">Grid2D</Link> algorithm optimization - (<Link to="https://github.com/3Dpass/3DP/releases/tag/v0.1.0">released v0.1.0</Link>)</li>
              <li>Core: Mining pool trait implementation (<Link to="/mainnet#mining-pool">released</Link>)</li>
              <li>Web wallet: <del>Validator</del> Mining pool control panel GUI (<Link to="https://wallet.3dpass.org">done</Link>)</li>
              <li><Link to="/governance">Governance</Link> elections (<Link to="https://github.com/3Dpass/3DP">released</Link>, Council members are elected)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q2 - Object tokenization feature
            </div>
            <ul className="page-content-text">
              <li>HASH ID: <Link to="/features#multiobject">Multi object option</Link> implementation (<i> in the process, shiftted to 2024</i>)</li>
              <li>Core: Object authentication API implementation (<i><Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">Done</Link></i>)</li>
              <li>3DPRC-2 tokenization standard for NFTs based on <Link to="/features#3drecognition-hash-id">HASH ID</Link> (<i>Implemented, <Link to="#3DPRC-2">3DPRC-2 Paper</Link> is published</i>)</li>
              <li>Mobile wallet: 3DPRC-2 integration (<i> in the process, shiftted to 2024</i>)</li>
              <li>Web3 wallet: 3DPRC-2 integration (<i> in the process, shifted to 2024</i>)</li>
              <li>CEX: Middle size exchange listing (listed on <Link to="https://txbit.io/Trade/P3D/USDT">txbit</Link>)</li>
              <li>Unexpected "Proof of Scan" mining loop patch (<Link to="https://github.com/3Dpass/3DP/releases/tag/v6">released</Link>)</li>
              <li>Unexpected difficulty patch (<Link to="https://github.com/3Dpass/3DP/releases/tag/v7">released</Link>)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q3 - Asset marketplace
            </div>
            <ul className="page-content-text">
              <li>Public Governance Elections (the first <Link to="https://3dpass.org/governance#general">Council</Link> are elected, the governance got operational)</li>
              <li>Web wallet: Asset/NFT marketplace implementation</li>
              <li>DEX: Cross-chain bridge with Polkadot or Ethereum (<i> shifted to 2024</i>)</li>
              <li>EVM (Ethereum Virtual Machine) emulator trait (<i> shifted to 2024</i>)</li>
              <li>DEX integration (<i><Link to="https://github.com/3Dpass/3DP/releases/tag/v10">Substrate embedded DEX module</Link> based on Uniswap v2 logic is released</i>)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q4 - New recognition algorithm
            </div>
            <ul className="page-content-text">
              <li>Unexpected security patch for the validator set (<i><Link to="https://github.com/3Dpass/3DP/releases/tag/v10">released</Link></i>)</li>
              <li>Core: 2D drawings recognition algorrithm implementation (<i> in the process, shifted to 2024</i>)</li>
              <li>Demo dApp (transformed into the "business case implementation" -  Q3, 2024)</li>
              <li>CEX: Tier1 exchange listing (<i>listed on <Link to="https://www.mexc.com/exchange/P3D_USDT">MEXC</Link></i>)</li>
              <li>Foundation: forming up (postponed by the community discussion)</li>
            </ul>
            <div className="page-content-subtitle" id="roadmap-2024">2024</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Release (stability & security)
            </div>
            <ul className="page-content-text">
              <li>PoW component (stability & security): <Link to="https://github.com/3Dpass/3DP/releases/tag/v11"> Node v11 release</Link></li>
              <li>PoA component (stability & security): <Link to="https://github.com/3Dpass/3DP/releases/tag/v12"> Node v12 release</Link></li>
              <li>PoW component (3D objects consistency check): <Link to="https://github.com/3Dpass/3DP/releases/tag/v19"> Node v19 release</Link></li>
              <li>CEX listing: <Link to="https://www.coinex.com/en/exchange/p3d-usdt">CoinEx</Link> listed</li>
              <li>Web: Embedded DEX UI: <Link to="https://swap.3dpascan.io">https://swap.3dpascan.io</Link> released</li>
              <li>Mobile wallet: <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> UI integration (Putting objects on the blockchain - <Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.13.0"><i>done</i></Link>; Backed tokens issuace - <Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.15.0"><i>done</i></Link>)</li>
              <li>Core: Atomic swap for assets (<i><Link to="https://github.com/3Dpass/3DP/releases/tag/v11">released</Link></i>)</li>
              <li>3DPRC-2: Assets management (<i> in the process</i>)</li>
              <li>3DPRC-2: Grid2D_v3a multithreading optimization (<Link to="https://github.com/3Dpass/p3d/pull/4"><i>Pull Request is reviewed</i></Link>)</li>
              <li>Core: Equivocation handler improvements: <Link to="https://github.com/3Dpass/3DP/releases/tag/v22">Node v22 release</Link></li>
              <li>PoW component: FPGA resistance feature: <Link to="https://github.com/3Dpass/3DP/releases/tag/v24">Node v24 release</Link></li>
              <li>Validator set (stability & security): additional checks on validators joining (<i> is being tested</i>)</li>
              <li>Validator set (stability & security): check if the validator is providing judgements during the session (<i> is being tested</i>)</li>
              <li>Validator set (stability & security): the validator performance test on 3DPRC-2 (done: covered by <Link to="https://github.com/3Dpass/3DP/releases/tag/v24">Node v24 release</Link>)</li>
              <li>Forkless upgrade: online upgrade public verification procedure: <i>Done</i></li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q2 - Assets marketplace & cross-chain
            </div>
            <ul className="page-content-text">
              <li>Core: EVM (Ethereum Virtual Machine) emulator trait (<i> is being estimated</i>)</li>
              <li>DEX: Cross-chain bridge over to Ethereum (<i> is being researched</i>)</li>
              <li>Mobile wallet: Embedded DEX UI integration (<i><Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.16.0">Released v2.16.0</Link></i>)</li>
              <li>Getting USDT bridged down over to the LoT eco-system (<i>research is done, estimating</i>)</li>
              <li>Web wallet: Asset/NFT marketplace UI implementation</li>
              <li>Administrative: Governance server and UI</li>
              <li>Web wallet: 3DPRC-2 UI integration (<i> in the process</i>)</li>
              <li>Promotion target: Assets issuance and the embedded DEX usage (<Link to="/community#use-cases-ideas">"Get your ideas tokenized and earn!"</Link> - a <i>play-to-earn</i> game for everyone)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q3 - dApps integration/business cases implementation
            </div>
            <ul className="page-content-text">
              <li>Utilization: A business case implementation (<Link to="/community#use-cases-lego">LEGO models marketplace</Link>, check out <Link to="https://swap.3dpscan.io/pools">Liquidity Pools</Link> on DEX)</li>
              <li>Mobile wallet: Atomic swap integration (<i> in the process</i>)</li>
              <li>Mobile wallet: tokenized 3D models preview ( <Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.17.0"><i>Released v2.17.0</i></Link>)</li>
              <li>Utilization: AI assistant (<i>in the process</i>)</li>
              <li>Decentralization: Taking out Sudo (<i> is being estimated</i>)</li>
              <ul className="page-content-text">
                <li>Treasury & Bounties: Security limits implementation</li>
                <li>Council: Security audit and limits implementation</li>
                <li>Techincal Committee: Security audit and procedures implementation</li>
                <li>Techincal Committee: Community engagement public verification, github commits for  the last quarter must be inspected {" "}
                <i>(sudo cannot be taken out safely without proven community engagement with the project development)</i>.</li>
                <li>Sudo taking out procedure: formalization</li>
                <li>Sudo taking out procedure: testing on testnet</li>
                <li>Sudo taking out procedure: execution</li>
              </ul>
              <li>Public commons: Start importing and processing (<i>in the prrocess</i>)</li>
              <li>Promotion target: Assets issuance and the embedded DEX usage</li>
            </ul>
            <div className="page-content-text road-map-text ">
              Q4 - New recognition algorithm
            </div>
              <ul className="page-content-text">
                <li>3DPass Foundation: forming up</li>
                <li>Recognition toolkit: additional recognition algorithm implementation</li>
                <li>Promotion target: dApps developers</li>
              </ul>
            <div className="page-content-subtitle" id="roadmap-2025">2025 (Forming up)</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Release (stability & security)
            </div>
            <div className="page-content-text road-map-text mb0">
              Q2 - Launchpad release
            </div>
            <div className="page-content-text road-map-text mb0">
              Q3 - Cases & Integrations
            </div>
            <div className="page-content-text road-map-text mb0">
              Q4 - Cases & Integrations
            </div>
          </div>
        </div>
        <div className="page-content-block" id="specification">
          <div className="page-content-inner">
            <div className="page-content-title">3Dpass Coin Specification</div>
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
                type: 'sr25519', ss58Format: 71
                ; <Link to="https://github.com/3Dpass/3DP/wiki/Addresses-and-keys#ss58-address-format">
                  read more about 3dpass address format
                </Link>
              </div>
              <div className="page-table-left page-table-info">Purpose</div>
              <div className="page-table-right page-table-content">
                The tokenization of real and virtual objects and its utilization
                within smart-contracts and dApps. <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> the object tokenization standard.
              </div>
              <div className="page-table-left page-table-info">Consensus</div>
              <div className="page-table-right page-table-content">
              <Link to="/proof-of-scan">Proof of Scan</Link> (Hybryd PoW + PoA GRANDPA deterministic finality),
                Algorithm: <Link to="/grid2d">Grid2D</Link> (based on recognition)
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
                120 blocks, <Link to="/mainnet#validator">how to become Validator</Link>
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
                <Link to="https://telemetry.3dpscan.io">
                  https://telemetry.3dpscan.io
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
                Smart contract tools using <Link to="https://use.ink/">ink</Link> (Rust-based embedded language)
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
                White Paper
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
              <Link to="https://www.coingecko.com/en/coins/3dpass">
                  CoinGecko
                </Link>
                ; <Link to="https://www.livecoinwatch.com/price/3DPassCoin-P3D">
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
              <div className="page-table-left page-table-info">Governance</div>
              <div className="page-table-right page-table-content">
                <Link to="/community#governance">Self-governed</Link>
              </div>
              <div className="page-table-left page-table-info">Forkless upgrade</div>
              <div className="page-table-right page-table-content">
                <Link to="/forkless-upgrade">Yes</Link> (based on WASM)
              </div>
            </div>
          </div>
        </div>
          <div
            className="page-content-block"
            id="distribution"
          >
            <div className="page-content-inner">
              <div className="page-content-title">3Dpass Coin Distribution</div>
              <div className="page-content-subtitle" id="distribution-shares">
                Total supply 100% - 1 000 000 000 P3D
              </div>
              <ul className="page-content-text">
                <li>
                  Mining - 729 000 000 P3D (72.9 % of total supply, including
                  the <Link to="/testnet-rewards">testnet mining rewards</Link>{" "}
                  ~ 5.7%)
                </li>
                <li>
                  The team share - 101 000 000 P3D (10.1% of total supply), issued
                  in genesis block. Vesting schedule: 30 000 000 P3D locked until the block #905700; 30 000 000 P3D locked until the block #1431300; 30 000 000 P3D locked until the block #1956900:
                  <ol>
                    <li><Link to="https://3dpscan.io/account/d1CNDotJXNPvnSA5EQXpSbkUyXBVmaggkARY7kcgXim4BqeBJ">d1CNDotJXNPvnSA5EQXpSbkUyXBVmaggkARY7kcgXim4BqeBJ</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1E8Bh1ZoTjnSfRnnQCKgteV1ipd9yMvK3dQnD3gAHLv3notP">d1E8Bh1ZoTjnSfRnnQCKgteV1ipd9yMvK3dQnD3gAHLv3notP</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1GejSwamhiKSGP9sbChYq4GJjWSrpA7v3PdfNijdwL8aGYCB">d1GejSwamhiKSGP9sbChYq4GJjWSrpA7v3PdfNijdwL8aGYCB</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1GZ8GxP3KzKJGRYmp9HMwxurnSKx3ACcqeZqLY5kpbLEyjzE">d1GZ8GxP3KzKJGRYmp9HMwxurnSKx3ACcqeZqLY5kpbLEyjzE</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1F9pWAgHjcADhxrg9DeuiE4KJaNnFBzxCHJvsJUysygrWFnQ">d1F9pWAgHjcADhxrg9DeuiE4KJaNnFBzxCHJvsJUysygrWFnQ</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1GjsUT5uKxmzrBZo2ed7Q5Woc8gi3g6mRenK8nXw9qhA9SSx">d1GjsUT5uKxmzrBZo2ed7Q5Woc8gi3g6mRenK8nXw9qhA9SSx</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1GA9xWx3WgpQHp8LHCXHbYoZdvjY3NHhU6gR2fsdVCiC4TdF">d1GA9xWx3WgpQHp8LHCXHbYoZdvjY3NHhU6gR2fsdVCiC4TdF</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1HBZPs7ZMs5wa3PWk6RorjXKXHx85XkuD9JjN3nyEofW5MBp">d1HBZPs7ZMs5wa3PWk6RorjXKXHx85XkuD9JjN3nyEofW5MBp</Link></li>
                    <li><Link to="https://3dpscan.io/account/d1Hun336VEgwk5tYFs6TusUESTyKMrLyHh3Yk3d2LMdZqaeDp">d1Hun336VEgwk5tYFs6TusUESTyKMrLyHh3Yk3d2LMdZqaeDp</Link></li>
                  </ol>
                </li>
                <li>
                  Marketing budget - 110 000 000 P3D (11% of total supply),
                  issued in genesis block. The budget is being spent through the Treasury account
                  controlled by the <Link to="/governance">Governance</Link>
                  <ul>
                  <li><Link to="https://3dpscan.io/account/d1ESJKwsk6zP8tBNJABUnf8mtKcqo1U2UVG7iEZ7uytGbWKAL">d1ESJKwsk6zP8tBNJABUnf8mtKcqo1U2UVG7iEZ7uytGbWKAL</Link></li>
                  </ul>
                </li>
                <li id="contribution-budget">
                  Contribution budget: 60 000 000 P3D (6% of total supply),
                  issued in genesis block. The budget is transferred to and being spent through the <Link to="https://3dpscan.io/account/d1EjCsWUVnKTG3dysQC2MWDfZKngtiwV2ZLegWRfFMbUR5d6c">Treasury account</Link> controlled by the <Link to="/governance">Governance</Link>
                  <ul>
                  <li>Initial address the budget was issued with: <Link to="https://3dpscan.io/account/d1EVSxVDFMMDa79NzV2EvW66PpdD1uLW9aQXjhWZefUfp8Mhf">d1EVSxVDFMMDa79NzV2EvW66PpdD1uLW9aQXjhWZefUfp8Mhf</Link></li>
                  </ul>
                </li>
              </ul>
              <img
                className="page-img"
                style={{ marginBottom: "50px" }}
                src="/images/3DP_distribution1.png"
                alt="img"
              />
              <div
                className="page-content-subtitle"
                id="distribution-contribution"
              >
                Contribution Grant Program 
              </div>
              <div className="page-content-text">
              There is a <Link to="/grants">Contribution Grant Program</Link> operating around The Ledger of Things, 
              which is established and managed by 3Dpass {" "}
              <Link to="/community#governance">Open Governance</Link>{" "}
              to encounrage community efforts on development of the eco-system. The program offers a variety of 
              bounty options for contributors, as long as they meet the program <Link to="/grants">conditions</Link>.
               </div>
              <div
                className="page-content-subtitle"
                id="distribution-investors"
              >
                Investors
              </div>
              <div className="page-content-text">
                Dear Investors, private sale was closed in 2022 by the community desision, totaling with ~5M P3D at 0.0495 USD. Private sale {" "}
                budget was turned into the public <Link to="/coin#contribution-budget">contribution budget</Link> {" "}
                controlled by the <Link to="/community#governance">Open Governance</Link>. No ICO has ever taken place around the project. 
              </div>
              <div className="page-content-text">
                The formula of synergy would be as follows:
              </div>
              <div className="page-content-text">
                <i> 1. Come up with some useful agenda to The Ledger of Things → 2. Head in and implement your plan to add some value → 3. Capitalize on the project value.</i>
              </div>
              <div className="page-content-text">
                The contribution aspect should never be skipped in the formula. P3D is a pure utility token, {" "}
                and the best way to impact on its value is to add to its utilization. Additional options would be:
              </div>
              <ul className="page-content-text">
                <li>Joining the <Link to="/community#governance">Council</Link> to balance decisions by vote</li>
                <li>Participating in the <Link to="/grants"> Contribution Grant Program</Link> to ask communinty support for your project</li>
              </ul>
              <div className="page-content-subtitle" id="distribution-rules">
                P3D mining rules (PoW ASIC-resistant, CPU-oriented protocol)
              </div>
              <div className="page-content-text">
                According to the <Link to="/coin#white-papper">White Paper</Link> there are some mining rules every
                miner have to follow in order to get rewarded by the network for
                each new block production.
              </div>
              <div className="page-content-subtitle" id="distribution-rewards">
                Mining rewards and emission
              </div>
              <div className="page-content-text">
                Miners are puting their efforts to pick up some specific 3D object shape corresponding the
                rules govern whether or not new block will be rewarded by the
                network. Mining share is 50% of total block rewards (the rest 50% is being distributed among the Validators PoA)
                P3D emission curve rules are:
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
                Given the fact that the network speed is 1 block per 60 sec, {" "}
                thus each step of 243000 blocks would approximately take about {" "}
                169 days. Check on current mining rewards and distribution over {" "}
                the <Link to="http://3dpassmining.info">3dpassmining.info</Link> and {" "}
                the <Link to="https://telemetry.3dpscan.io/">network telemetry</Link>. {" "}
                Follow the <Link to="/mainnet">mining guidelines</Link> to join competition.
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
                Validation service fee (PoA)
              </div>
              <div className="page-content-text">
                Validators represent the most reliable set of the network {" "}
                authorities eligible to vote for Best chain finalizatiion as well {" "}
                as to participate in the user object verification process specified in  {" "}
                <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> tokenization standard. {" "}
                Current validator set gets rewarded by the network 50% of total block rewards (the rest 50% goes to the block author). {" "}
                The user objects processing rewards: 50% of the object verification fee (paid by user). {" "}
                Rewards are getting distributed in equal among the current validator set members.  <Link to="/mainnet#validator">How to become Validator</Link>
              </div>
              <div
                className="page-content-subtitle"
                id="distribution-transaction"
              >
                Transaction fee
              </div>
              <div className="page-content-text">
                3Dpass leverages its transaction fee mechanism in the way the most blockchain networks do. New transaction might be
                attached to a block by its author (miner) while in construction. The block author is willing to either accept or reject, dependidng on both the transaction weight and transaction fee proposed by its sender. Minimum transaction fee
                to propose is 1 Crumb/byte (0.000000000001 P3D/byte).
                weight.
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
};

export default Coin;
