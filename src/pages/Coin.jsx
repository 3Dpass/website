import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Coin = () => {
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
          <a href="#roadmap-2026">
            <div className="page-nav-inside">
              2026
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
              Block Rewards and Emission
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
              Transaction Fees
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
              to facilitate its use and encourage the efforts of the network maintainers (Block authors and Validators) {" "}
              providing resources and equipment for <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> {" "}
              tokenization standard to operate.  
            </div>
            <div className="page-content-subtitle">P3D on Native runtime</div>
            <div className="page-content-text">
              The smallest indivisible unit of account in 3DPass is Crumb. 1 P3D is equal to <i>1e12</i> Crumbs, {" "}
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
            <div className="page-content-subtitle">P3D on 3DPass EVM</div>
            <div className="page-content-text">
              There is an EVM compatibility layer operating on LoT, in which P3D is implemented as a cross-platform {" "}
              <Link to="https://github.com/3Dpass/3DP/blob/9de7f4ad5ef0ab60d792ef808b4bb8e20fa43dde/precompiles/balances-erc20/ERC20.sol#L7">balances-erc20</Link> {" "}
              precompile callable from Solidity at the address <i>0x0000000000000000000000000000000000000802</i>. 1 P3D on EVM is equal to <i>1e18</i> Crumbs
              It does not affect total supply in Crumbs (min units), since the precompile is just an interface to the native balances module.
            </div>
             <ul className="page-content-text">
              <li>
                Crumb: 0.000000000000000001
              </li>
              <li>
                P3D on EVM: 1.000000000000000000
              </li>
              <li>
               1 P3D on EVM = 1 MP3D on native runtime
              </li>
            </ul>
          </div>
          <div className="page-content-subtitle">External Integrations</div>
          <div className="page-content-text">
            Bridged 3dpass P3D on Ethereum blockchain:
          </div>
          <ul className="page-content-text">
            <li>
              Contract: 0x4f3a4e37701402C61146071309e45A15843025E1
            </li>
            <li>
              Standard: ERC20
            </li>
            <li>
              Decimals: 18
            </li>
            <li>
              Bridge: <Link to="https://bridge.3dpswap.online">Counterstake</Link>, 
              Version: <Link to="https://github.com/3Dpass/counterstake-bridge/tree/v1.1-substrate">v1.1-substrate</Link>
            </li>
          </ul>
          <div className="page-content-text">
            Bridged 3dpass P3D on Binance Smart Chain blockchain:
          </div>
          <ul className="page-content-text">
            <li>
              Contract: 0x078E7A2037b63846836E9d721cf2dabC08b94281
            </li>
            <li>
              Standard: BEP20
            </li>
            <li>
              Decimals: 18
            </li>
            <li>
              Bridge: <Link to="https://bridge.3dpswap.online">Counterstake</Link>, 
              Version: <Link to="https://github.com/3Dpass/counterstake-bridge/tree/v1.1-substrate">v1.1-substrate</Link>
            </li>
          </ul>
        </div>
        <div className="page-content-block" id="white-papper">
          <div className="page-content-inner">
          <div className="page-content-title">White Paper</div>
          <div className="page-content-text">
              Download (<i>.pdf</i>): {" "}
             <a href="/3DPass_white_paper.pdf" target="_blank" rel="noopener noreferrer">
              The Ledger of Things White Paper
             </a>
         </div>
          </div>
        </div>
        <div className="page-content-block" id="3DPRC-2">
          <div className="page-content-inner">
            <div className="page-content-title">3DPRC-2</div>
            <div className="page-content-text">
               Download (<i>.pdf</i>): {" "}
               <a href="/3DPRC-2_v2.pdf" target="_blank" rel="noopener noreferrer">
               3DPRC-2 tokenization standard (Request for Comments)
               </a>
             </div>
             <div className="page-content-subtitle" id="economy-model">
                The economy model
              </div>
              <div className="page-content-text">
              The 3DPRC2 tokenization standard exploits the {" "}
              <Link to="/features#scanproof">Proof of Scan</Link> protocol for users' objects authentication. 
              Both <Link to="/coin#distribution-rules">block authors</Link> (miners) and  {" "}
              <Link to="/coin#distribution-validation">validators</Link> participate in the two-steps verification 
              process which allows for the network to come to an agreement upon the 
              object authenticity in a trustless way. There is the object authentication fee that must be 
              covered by users regardless of whether or not the object is ultimately approved. 
              The fee is split 50/50 between the block authors and validators. 
             </div>
          </div>
        </div>
        <div className="page-content-block" id="pitch-dech">
          <div className="page-content-inner">
            <div className="page-content-title">Pitch Deck Slides</div>
              <div className="page-content-text">
                 Download (<i>.pdf</i>): {" "}
                 <a href="/3Dpass_pitch_deck.pdf" target="_blank" rel="noopener noreferrer">
                 Pitch Deck Slides
                 </a>
            </div>
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
              <li>Web: Embedded DEX UI: <Link to="https://3dpswap.online">https://3dpswap.online</Link> released</li>
              <li>Mobile wallet: <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> UI integration (Putting objects on the blockchain - <Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.13.0"><i>done</i></Link>; Backed tokens issuace - <Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.15.0"><i>done</i></Link>)</li>
              <li>Core: Atomic swap for assets (<i><Link to="https://github.com/3Dpass/3DP/releases/tag/v11">released</Link></i>)</li>
              <li>3DPRC-2: Assets management (<i> shifted to 2025</i>)</li>
              <li>3DPRC-2: Grid2D_v3a multithreading optimization (<Link to="https://github.com/3Dpass/p3d/pull/4"><i>Pull Request is reviewed</i></Link>)</li>
              <li>Core: Equivocation handler improvements: <Link to="https://github.com/3Dpass/3DP/releases/tag/v22">Node v22 release</Link></li>
              <li>PoW component: FPGA resistance feature: <Link to="https://github.com/3Dpass/3DP/releases/tag/v24">Node v24 release</Link></li>
              <li>Validator set (stability & security): additional checks on validators joining (done: <Link to="https://github.com/3Dpass/3DP/releases/tag/v28">Node v28 release</Link>)</li>
              <li>Validator set (stability & security): check if the validator is providing judgements during the session (<i> shifted to 2025</i>)</li>
              <li>Validator set (stability & security): the validator performance test on 3DPRC-2 (done: covered by <Link to="https://github.com/3Dpass/3DP/releases/tag/v24">Node v24 release</Link>)</li>
              <li>Forkless upgrade: online upgrade public verification procedure: <i>Done</i></li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q2 - Assets marketplace & cross-chain
            </div>
            <ul className="page-content-text">
              <li>Core: EVM (Ethereum Virtual Machine) emulator trait (<i> shifted t0 2025</i>)</li>
              <li>DEX: Cross-chain bridge over to Ethereum (<i> shifted to 2025</i>)</li>
              <li>Mobile wallet: Embedded DEX UI integration (<i><Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.16.0">Released v2.16.0</Link></i>)</li>
              <li>Getting USDT bridged down over to the LoT eco-system (<i>shifted to 2025</i>)</li>
              <li>Web wallet: Asset/NFT marketplace UI implementation (<i> shifted to 2025</i>)</li>
              <li>Administrative: Governance server and UI (<i> shifted to 2025</i>)</li>
              <li>Web wallet: 3DPRC-2 UI integration (<i> shifted to 2025</i>)</li>
              <li>Promotion target: Assets issuance and the embedded DEX usage (<Link to="/community#use-cases-ideas">"Get your ideas tokenized and earn!"</Link> - a <i>play-to-earn</i> game for everyone)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q3 - dApps integration/business cases implementation
            </div>
            <ul className="page-content-text">
              <li>Utilization: A business case implementation (<Link to="/community#use-cases-lego">LEGO models marketplace</Link>, check out <Link to="https://3dpswap.online/pools">Liquidity Pools</Link> on DEX)</li>
              <li>Mobile wallet: Atomic swap integration (<i> shifted to 2025</i>)</li>
              <li>Mobile wallet: tokenized 3D models preview ( <Link to="https://github.com/3Dpass/threedpass/releases/tag/v2.17.0"><i>Released v2.17.0</i></Link>)</li>
              <li>Utilization: AI assistant (<i>shifted to 2025</i>)</li>
              <li>Decentralization: Taking out Sudo (<i> shifted to 2025</i>)</li>
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
              <li>Public commons: Start importing and processing (<i>shiftted to 2025</i>)</li>
              <li>Promotion target: Assets issuance and the embedded DEX usage</li>
            </ul>
            <div className="page-content-text road-map-text ">
              Q4 - New recognition algorithm
            </div>
              <ul className="page-content-text">
                <li>3DPass Foundation: forming up (<i>shiftted to 2025</i>)</li>
                <li>Recognition toolkit: additional recognition algorithm implementation (will be released within the "AI human impression feature")</li>
                <li>Promotion target: dApps developers</li>
              </ul>
            <div className="page-content-subtitle" id="roadmap-2025">2025</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Release (EVM & cross-chain)
            </div>
            <ul className="page-content-text">
            <li>Core: EVM emulator trait (<i>The <Link to="https://github.com/polkadot-evm/frontier">"Frontier"</Link> is being integrated, lead by Michael Co and PaulS</i>):</li>
            <ul className="page-content-text">
              <li>Adaptiing Frontier's pallets and EVM RPC methods to work within the LoT runtime (<Link to="https://github.com/3Dpass/3DP/tree/test"><i>Done</i></Link>)</li>
              <li>Testnet version deployment (<Link to="https://telemetry.3dpscan.io/#list/0xbec4a0ea6abbb20189179b4f6a23793cc6a7f1f88d94258d934ec25c5adbb15d"><i>Done</i></Link>) </li>
              <li>The consensus aspect testing/improvements ( <Link to="https://github.com/3Dpass/3DP/commit/ee16179837619ee0ed467f7efa694603cf0fc298"><i>Done</i></Link>)</li>
              <li>Configuring EVM with essential precompiles (<Link to="https://github.com/3Dpass/3DP/tree/test/pallets/evm/precompile"><i>Done</i></Link>)</li>
              <li>Environment: Node - Remix - Metamask interacton test (<i>Done</i>)</li>
              <li>P3Dt native (balances pallet) - EVM P3D ERC-20 (precompile) interaction implementation (<Link to="https://github.com/3Dpass/3DP/tree/test/precompiles/balances-erc20"><i>Done</i></Link>)</li>
              <li>Solidity smart contracts deployment test (<i>Done</i>)</li>
              <li>Local assets: poscanAssets module - EVM assets-erc20 (precompile) integration (<Link to="https://github.com/3Dpass/3DP/tree/test/precompiles/assets-erc20"><i>Done</i></Link>)</li>
              <li>Docs and guidelines (<i>Done</i>)</li>
            </ul>
            <li>DEX: Two-ways cross-chain bridge with Ethereum:</li>
            <ul className="page-content-text">
              <li>Testing different EVM-based bridges' smart-contracts on testnet (<i>Done</i>)</li>
              <li>Launching the Counterstake bridge contracts and its infrastructure:</li>
                <ul className="page-content-text">
                  <li>Testing the Counterstake <Link to="https://github.com/byteball/counterstake-bridge/tree/master/evm/contracts">contracts</Link> on testnet (<i>Done</i>)</li>
                  <li>LoT mainnet integration into the Counterstake whatchdog Node (<Link to="https://github.com/3Dpass/counterstake-bridge"><i>Done</i></Link>)</li>
                  <li>Counterstake cross-platform EVM contracts version <Link to="https://github.com/3Dpass/counterstake-bridge/tree/master/evm_substrate">v1.1-substrate</Link></li>
                  <li>Public testing stage (<i>Done</i>)</li>
                  <li>Deploy the Counterstake bridge contracts to 3dpass mainnet (<i>Done</i>)</li>
                  <li>Setting up USDT Export and wUSDT Import on both ends: LoT and Ethereum (<Link to="https://github.com/3Dpass/counterstake-bridge?tab=readme-ov-file#reading-data-directly-from-deployed-contracts"><i>Done</i></Link>)</li>
                  <li>Running the Counterstake on mainnet (<i>Done</i>)</li>
                </ul>
              <li>Preparing the Node migration version (<i>Done</i>)</li>
              <li>Mainnet EVM release - Done (<Link to="https://github.com/3Dpass/3DP/releases/tag/v31">Node v31</Link> )</li>
              <li>Testing "wrapped" wUSDT within the LoT eco-system (<i>Done</i>)</li>
              <li>Web3 counterstake bridge UI (<Link to="https://github.com/3Dpass/bridge-frontendhttps://github.com/3Dpass/bridge-frontend">Done</Link>)</li>
              <li>Docs and guidelines (<i>Done</i>)</li>
            </ul>
            <li>Web wallet:</li>
            <ul className="page-content-text">
               <li>Governance UI: Bounties (<Link to="https://wallet.3dpass.org/governance/bounties"><i>Done</i></Link>)</li>
               <li>Governance UI: Treasury</li>
               <li>Governance UI: Council (members, motions) (<Link to="https://wallet.3dpass.org/governance/members"><i>In the process</i></Link>)</li>
               <li>Governance UI: Democracy & Referenda</li>
               <li>Assets: Asstet balances (<Link to="https://wallet.3dpass.org"><i>Done</i></Link>)</li>
               <li>Assets: Asstet transfers (<Link to="https://wallet.3dpass.org"><i>Done</i></Link>)</li>
              </ul>
            <li>Blockchain explorer: Assets support (<i>lead by WlinkNet</i>)</li>
              <ul className="page-content-text">
               <li>Assets transfers (<Link to="https://3dpscan.io/account/d1H1j9SGoMcJge45CNS81ey4GhMN8jqjte1fbNMgUSBW6Zv4f"><i>Done</i></Link> )</li>
               <li>Assets metadata (<Link to="https://3dpscan.io/assets"><i>Done</i></Link> )</li>
               <li>Asset-to-Object linking (<Link to="https://3dpscan.io/assets"><i>Done</i></Link> )</li>
               <li>Bounties ( <Link to="https://3dpscan.io/bountie"><i>Done</i></Link> )</li>
               <li>Codes review ( <Link to="https://github.com/3Dpass/3dpscan"><i>Done</i></Link> )</li>
              </ul>
              <li>Public commons: Start importing and processing (<i>in the process, lead by A_Mo</i>)</li>
              <li>Business Development activities: (<i> is being researched by A_Mo</i> )</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q2 - AI human impression feature & 2D recognition
            </div>
            <ul className="page-content-text">
            <li>Essential netwok infrastructure optimization: (<i>lead by Mikhail</i>):</li>
            <ul className="page-content-text">
               <li>New open source blockchain explorer  (<i>Done</i>: <Link to="https://github.com/3Dpass/explorer">GitHub</Link>)</li>
               <li>Archive Nodes and RPC API endpoints (<i>Done</i>: <Link to="https://github.com/3Dpass/rpc-list">The endpoint providers list</Link>)</li>
               <li>New telemetry server (<i>Done</i>: <Link to="https://3dpass.network">3dpass.network</Link>)</li>
               <li>Mining & Validator dashboard (<Link to="https://github.com/3Dpass/mining-leaderboard"><i>Done</i></Link>)</li>
               <li>3Dpass to EVM address converter (<Link to="https://github.com/3Dpass/3dpass-evm-address-converter"><i>Done</i></Link>)</li>
              </ul>
             <li>3DPRC-2: (<i>in the process, lead by PaulS and Mikhail</i>):</li>
             <ul className="page-content-text">
               <li><Link to="/assets#general-human-perception-error">AI human impressions</Link> feature (<i>in the process</i>)</li>
               <li>2D recognition (based on machine vision)</li>
              </ul>
             <li>Mobile wallet: Atomic swap integration (<i> in the process, lead by L3odr0id</i>)</li>
             <li>Mobile wallet: all Substrate chains support (<i> lead by L3odr0id</i>)</li>
             <li>Web wallet: 3DPRC-2 UI integration (<Link to="https://wallet.3dpass.org/assets/objects"><i>Done</i></Link>)</li>
             <li>Web wallet: all Substrate chains support</li>
             <li>Launchpad: Web UI</li>
             <li>Business Development activities: (<i> is being researched by A_Mo</i> )</li>
            </ul>
            
            <div className="page-content-text road-map-text mb0" id="roadmap-2025-Q3">
              Q3 - Decentralization
            </div>
            <ul className="page-content-text">
            <li>Essential network infrastructure decentralization (<i>in the process, lead by PaulS</i>):</li>
              <ul>
                <li>RPC endpoints ( <Link to="https://github.com/3Dpass/rpc-list/blob/main/list.txt"><i>Done</i></Link>):</li>
                <ul>
                  <li>wss://rpc.3dpass.org - delegated to a validator owner's server (<i>Discord: bb100</i>)</li>
                  <li>wss://rpc.p3d.top - has always been running by a community representative (<i> Discord: lzmzjy, TG: @lzmzjy</i>)</li>
                  <li>https://rpc.p3d.top - delegated to a community representative (<i> Discord: lzmzjy, TG: @lzmzjy</i>)</li>
                  <li>Additional commercial RPC provider: https://xbinodes.com</li>
                </ul>
                <li>Blockhain Explorer and Telemetry Server:</li>
                <ul>
                  <li>3dpscan.xyz - stopped by the team, delegated to lzmzjy (<i> Discord: lzmzjy, TG: @lzmzjy</i>), available on <Link to="https://github.com/3Dpass/explorer">GitHub</Link></li>
                  <li>Centralized Telemetry Server (3dpass.network) - stopped by the team, available on <Link to="https://github.com/3Dpass/telemetry">GitHub</Link></li>
                </ul>
              <li>Mining and Validators dashboard:</li>
                <ul>
                   <li>mining.3dpscan.xyz - the hosting has been delegated to https://xbinodes.com (<Link to="https://3dp-mining.xbinodes.com">https://3dp-mining.xbinodes.com</Link>, discord: xbinor), 
                       available on <Link to="https://github.com/3Dpass/mining-leaderboard">GitHub</Link>
                   </li>
                </ul>
              <li>Other User Interfaces:</li>
                <ul>
                  <li>DEX UI (frontend only WEB3 app) https://3dpswap.online -  moved to a static hosting (available to fork on <Link to="https://github.com/3Dpass/swap">GitHub</Link>)</li>
                  <li>Bridge UI (frontend only WEB3 app) https://bridge.3dpswap.online -  moved to a static hosting (available to fork on <Link to="https://github.com/3Dpass/bridge-frontend">GitHub</Link>)</li>
                  <li>Address Converter (frontend only WEB3 app) https://converter.3dpass.org - moved to a static hosting (available to fork on <Link to="https://github.com/3Dpass/3dpass-evm-address-converter">GitHub</Link>)</li>
                </ul>
              </ul>
            <li>Taking out Sudo (<i> in the process, lead by PaulS</i>):</li>
              <ul className="page-content-text">
                <li>Treasury & Bounties: Security limits implementation (<i>done</i>):</li>
                  <ul>
                    <li>Vesting mechanism for Treasury (<i>done</i>)</li>
                    <li>Transferring all the budgets to Treasury under vesting schedule</li>
                  </ul>
                <li>Council: Security audit and limits implementation (<i>done</i>)</li>
                <li>Technical Committee: Security audit and procedures implementation (<i>done</i>)</li>
                  <ul>
                    <li>Technical Committee members election/rotation mechanism (projected)</li>
                    <li>Technical Committee members engagement public verification, last quarter github commits inspection</li>
                  </ul>
                <li>Sudo taking out procedure: formalization (<i>done</i>)</li>
              </ul>
              <li>Business Development activities: (<i> is being researched by A_Mo</i> )</li>
              <li>DEX: EVM methods integration (<Link to="https://3dpswap.online"><i>done</i></Link>)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q4 - Cases & Integrations
            </div>
              <ul className="page-content-text">
              <li>Business Development activities: (<i> is being researched by A_Mo</i> )</li>
              <li>Core: migration to the newest Substrate version</li>
              </ul>
            <div className="page-content-subtitle" id="roadmap-2026">2026 (Forming up)</div>
            <div className="page-content-text road-map-text mb0">
              Q1 - Sudo taking out execution
            </div>
            <ul className="page-content-text">
              <li>Node "sudo free" version implementation (<i><Link to="https://github.com/3Dpass/3DP/tree/sudo_free_test">done</Link></i>)</li>
              <li>Technical Committee members rotation mechanism public review (<i><Link to="https://github.com/3Dpass/3DP/tree/sudo_free_test/pallets/tc-candidates">in the process</Link></i>)</li>
              <li>Sudo taking out procedure: public review and testing (<i>in the process</i>)</li>
              <li>Sudo taking out procedure: execution (<i><Link to="https://github.com/3Dpass/3DP/blob/sudo_free_test/SUDO_FREE_UPGRADE.md">planned</Link></i>)</li>
              <li>Budget vesting schedule (<i>is being discussed</i>)</li>
            </ul>
            <div className="page-content-text road-map-text mb0">
              Q2 - Cases & Integrations
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
                3dpass - The Ledger of Things
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
              <Link to="/proof-of-scan">Proof of Scan</Link> (Hybryd PoW + PoA GRANDPA deterministic blockchain finality),
                Algorithm: <Link to="/grid2d">Grid2D</Link> (based on recognition)
              </div>
              <div className="page-table-left page-table-info">
                Min unit "Crumb"
              </div>
              <div className="page-table-right page-table-content">
                0.000000000001 P3D
              </div>
              <div className="page-table-left page-table-info">
                Decimals
              </div>
              <div className="page-table-right page-table-content">Native runtime: 12; EVM: 18
              </div>
               <div className="page-table-left page-table-info">
                EVM Contract
              </div>
              <div className="page-table-right page-table-content">P3D contract on EVM: 0x0000000000000000000000000000000000000802
              </div>
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
              <div className="page-table-left page-table-info">
                Emission curve
              </div>
              <div className="page-table-right page-table-content">
                Follow the <Link to="https://github.com/3Dpass/3DP/blob/9986ce55e517c61f425ecec3b6267b2ea1f93b1a/runtime/src/lib.rs#L431">GitHub</Link> link.
              </div>
              <div className="page-table-left page-table-info">GitHub</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass">
                  https://github.com/3Dpass
                </Link>
              </div>
              <div className="page-table-left page-table-info">
                API/RPC endpoints
              </div>
              <div className="page-table-right page-table-content">
              <Link to="https://github.com/3Dpass/rpc-list"> 
                  https://github.com/3Dpass/rpc-list 
              </Link>
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
              <div className="page-table-left page-table-info">Blockchain Explorer</div>
              <div className="page-table-right page-table-content">
                <Link to="https://scan.p3d.top">
                  https://scan.p3d.top
                </Link>
              </div>
              <div className="page-table-left page-table-info">Telemetry</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.neetwork">
                  https://3dpass.network
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
              <div className="page-table-left page-table-info">Marketcap</div>
              <div className="page-table-right page-table-content">
              <Link to="https://www.coingecko.com/en/coins/3dpass">
                  CoinGecko
                </Link>
                ; <Link to="https://coinmarketcap.com/currencies/3dpass/">
                  CoinMarketCap
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
                <Link to="/forkless-upgrade">Yes</Link> (WASM-based runtime)
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
                    <li><Link to="https://scan.p3d.top/#/accounts/d1CNDotJXNPvnSA5EQXpSbkUyXBVmaggkARY7kcgXim4BqeBJ">d1CNDotJXNPvnSA5EQXpSbkUyXBVmaggkARY7kcgXim4BqeBJ</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1E8Bh1ZoTjnSfRnnQCKgteV1ipd9yMvK3dQnD3gAHLv3notP">d1E8Bh1ZoTjnSfRnnQCKgteV1ipd9yMvK3dQnD3gAHLv3notP</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1GejSwamhiKSGP9sbChYq4GJjWSrpA7v3PdfNijdwL8aGYCB">d1GejSwamhiKSGP9sbChYq4GJjWSrpA7v3PdfNijdwL8aGYCB</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1GZ8GxP3KzKJGRYmp9HMwxurnSKx3ACcqeZqLY5kpbLEyjzE">d1GZ8GxP3KzKJGRYmp9HMwxurnSKx3ACcqeZqLY5kpbLEyjzE</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1F9pWAgHjcADhxrg9DeuiE4KJaNnFBzxCHJvsJUysygrWFnQ">d1F9pWAgHjcADhxrg9DeuiE4KJaNnFBzxCHJvsJUysygrWFnQ</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1GjsUT5uKxmzrBZo2ed7Q5Woc8gi3g6mRenK8nXw9qhA9SSx">d1GjsUT5uKxmzrBZo2ed7Q5Woc8gi3g6mRenK8nXw9qhA9SSx</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1GA9xWx3WgpQHp8LHCXHbYoZdvjY3NHhU6gR2fsdVCiC4TdF">d1GA9xWx3WgpQHp8LHCXHbYoZdvjY3NHhU6gR2fsdVCiC4TdF</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1HBZPs7ZMs5wa3PWk6RorjXKXHx85XkuD9JjN3nyEofW5MBp">d1HBZPs7ZMs5wa3PWk6RorjXKXHx85XkuD9JjN3nyEofW5MBp</Link></li>
                    <li><Link to="https://scan.p3d.top/#/accounts/d1Hun336VEgwk5tYFs6TusUESTyKMrLyHh3Yk3d2LMdZqaeDp">d1Hun336VEgwk5tYFs6TusUESTyKMrLyHh3Yk3d2LMdZqaeDp</Link></li>
                  </ol>
                </li>
                <li>
                  Marketing budget - 110 000 000 P3D (11% of total supply),
                  issued in genesis block. The budget is being spent through the Treasury account
                  controlled by the <Link to="/governance">Governance</Link>
                  <ul>
                  <li><Link to="https://scan.p3d.top/#/accounts/d1ESJKwsk6zP8tBNJABUnf8mtKcqo1U2UVG7iEZ7uytGbWKAL">d1ESJKwsk6zP8tBNJABUnf8mtKcqo1U2UVG7iEZ7uytGbWKAL</Link></li>
                  </ul>
                </li>
                <li id="contribution-budget">
                  Contribution budget: 60 000 000 P3D (6% of total supply),
                  issued in genesis block. The budget is transferred to and being spent through the <Link to="https://scan.p3d.top/#/accounts/d1EjCsWUVnKTG3dysQC2MWDfZKngtiwV2ZLegWRfFMbUR5d6c">Treasury account</Link> controlled by the <Link to="/governance">Governance</Link>
                  <ul>
                  <li>Initial address the budget was issued with: <Link to="https://scan.p3d.top/#/accounts/d1EVSxVDFMMDa79NzV2EvW66PpdD1uLW9aQXjhWZefUfp8Mhf">d1EVSxVDFMMDa79NzV2EvW66PpdD1uLW9aQXjhWZefUfp8Mhf</Link></li>
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
                According to the <Link to="/coin#white-papper">White Paper</Link>, there is a bunch 
                of <Link to="/proof-of-scan#new-block">block production rules</Link> every
                miner has to follow in order to get rewarded by the network. While solving the PoW task, 
                miners put their efforts on picking up a specific 3D object shape used as <i>nonce</i> {" "}
                and then participate in <Link to="/proof-of-scan#break">Tie Break Competition</Link>. 
                However, block authors are not fully responsible for the blockchain finalization. 
                Instead, Best chain is getting finalized by the Validator set to ensure its {" "} 
                <Link to="/features#ledger-why-deterministic-blockchain-finality">deterministic finality</Link>.
                Explore the <Link to="/features#scanproof">Proof of Scan</Link> protocol {" "}
                as well as <Link to="/features#ledger">The Ledger of Things</Link> p2p network to 
                dive into detail.
                </div>
              <div className="page-content-subtitle" id="distribution-rewards">
                Block rewards and emission
              </div>
              <div className="page-content-text">
                Mining share is totaling 50% of block rewards, and the rest 50% is being distributed 
                among the <Link to="/coin#distribution-validation">Validators</Link>.
              </div>
              <div className="page-content-text">
                <strong>Emission curve:</strong>
              </div>
              <ul className="page-content-text">
                <li>
                  Starting from the block going after the genesis, the block
                  reward is set up at 500 P3D per block;
                </li>
                <li>
                  Every 243000 blocks the reward amount gets diminished dividing
                  by 1.2;
                </li>
                <li>
                  Follow the emission curve implementation on the {" "}
                  <Link to="https://github.com/3Dpass/3DP/blob/9986ce55e517c61f425ecec3b6267b2ea1f93b1a/runtime/src/lib.rs#L431">Github</Link>. 
                </li>
              </ul>
              <div className="page-content-text">
                Block target time is set at 60 sec, {" "}
                therefore, each 243000 blocks step will approximately take about {" "}
                169 days to pass.
              </div>
              <img
                className="page-img"
                style={{ marginBottom: "50px" }}
                src="/images/emission1.png"
                alt="img"
              />
              <div className="page-content-text">
                Stay up to date with the current block rewards distribution over {" "}
                the  Mining Leaderborad <Link to="http://miner.p3d.top">https://miner.p3d.top</Link> {" "}
                or via the open source blockchain explorer <Link to="https://scan.p3d.top/">3dpscan</Link>. {" "}
                Follow the <Link to="/mainnet">mining guidelines</Link> to join the competition.
              </div>
              <div
                className="page-content-subtitle"
                id="distribution-validation"
              >
                Validation service fee (PoA)
              </div>
              <div className="page-content-text">
                <Link to="/mainnet#validator-general">Validators </Link>represent a set of the most 
                reliable Nodes (authorities) eligible to vote for Best chain finalization in accordance 
                with the GRANDPA <Link to="/features#scanproof-deterministic">deterministic finality</Link> {" "}
                protocol rules. The validator set is open to join for any Node that meets the {" "}
                <Link to="/mainnet#validator-requirements">SLA</Link> requirements. Current members are 
                automatically selected and managed by the validator set module, which exploits {" "}
                the <Link to="/mainnet#validator-threshold">collateral-based</Link> mechanism to 
                prevent the protocol rules violations. Validators share is 50% of total block 
                rewards, which is distributed among the current set members equally. Follow this {" "}
                <Link to="/mainnet#validator">tutorial</Link> to set up Validator.
              </div>
              <div
                className="page-content-subtitle"
                id="distribution-transaction"
              >
                Transaction fees
              </div>
              <div className="page-content-text">
                The Ledger of Things follows conventional Substrate approach which is referred to as the dynamic fees.  
                The fees are split into two components:
               </div>
               <ol className="page-content-text">
                 <li>Base fees: These are burned (removed from circulation to avoid potential abuse form block authors)</li>
                 <li>Tips to increase transaction priority: These are paid from senders to block authors (miners)</li>
               </ol>
               <div className="page-content-text">
                This distribution mechanism is implemented in the {" "}
                <Link to="https://github.com/3Dpass/3DP/blob/main/runtime/src/lib.rs#L343"><i>DealWithFees</i></Link> structure in the runtime, 
                which handles the unbalanced amounts from transaction fees.
               </div>
               <div className="page-content-text">
                The base transaction fee itself consists of two parts:
               </div>
               <ul className="page-content-text">
                <li>Length fee (starts at 0.0000000000001 P3D): A fee proportional to the transaction's size in bytes</li>
                <li>Weight fee (starts at 0.001 P3D): A fee calculated based on the computational complexity (weight) of the transaction</li>
               </ul>
               <div className="page-content-text">
                The <Link to="https://github.com/3Dpass/3DP/blob/1fd597e02e7ac86891c35c721123198ea1b8ebc7/runtime/src/lib.rs#L358"><i>TransactionByteFee</i></Link> {" "}
                parameter defines how much is charged per byte of transaction data,
                while the <Link to="https://github.com/3Dpass/3DP/blob/1fd597e02e7ac86891c35c721123198ea1b8ebc7/runtime/src/lib.rs#L368"><i>WeightToFee</i></Link> {" "}
                conversion determines how computational complexity translates to fees.
               </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
};

export default Coin;
