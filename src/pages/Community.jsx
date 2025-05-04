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
              <div className="page-nav-line aboutus-line"></div>
            </div>
          </a>
          <a href="#about-us-challenge">
            <div className="page-nav-inside">
              Challenge
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#about-us-existing-alternatives">
            <div className="page-nav-inside">
              Exisitng Alternatives
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#about-us-high-level-concept">
            <div className="page-nav-inside">
              High-level Concept
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#about-us-solution">
            <div className="page-nav-inside">
              Solution
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#about-us-unique-value-proposition">
            <div className="page-nav-inside">
              Uniquie Value Proposition
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#ecosystem">
            <div
              className={
                locationHash.includes("ecosystem")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Ecosystem
              <div className="page-nav-circle"></div>
              <div className="page-nav-line ecosystem-line"></div>
            </div>
          </a>
          <a href="#ecosystem-overview">
            <div className="page-nav-inside">
              Overview
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#ecosystem-community-structure">
            <div className="page-nav-inside">
              Community structure
              <div className="inside-nav-circle"></div>
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
          <a href="#use-cases-ideas">
            <div className="page-nav-inside">
              Play-to-Earn game
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases-lego">
            <div className="page-nav-inside">
              LEGO open marketplace
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases-jewelry">
            <div className="page-nav-inside">
              3D Jewelry marketplace
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#use-cases-diamonds">
            <div className="page-nav-inside">
              Precious stones
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
              Access Control
              <div className="inside-nav-circle"></div>
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
              Open Governance
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#representatives">
            <div
              className={
                locationHash.includes("representatives")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Representatives
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
              Community Resources
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
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="about-us">
          <div className="page-content-inner">
            <div className="page-content-title">About Us</div>
            <div className="page-content-subtitle" id="about-us-challenge">
              Challenge
            </div>
            <div className="page-content-text">
              People do not trust the information about Real World Assets (RWA) posted on the 
              Internet, due to the lack of identity. It is not enough for them to make p2p 
              deals without a middleman.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/no_trusted_content.png"
              alt="img"
            />
            <div className="page-content-subtitle" id="about-us-existing-alternatives">
              Existing Alternatives
            </div>
            <div className="page-content-text">
              People create such metadata as: pictures, texts, videos, 3D models, and so 
              forth to describe the objects. In order to identify they always need to leverage 
              their imagination and intelligence, which both have limited capacity and no standard for.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/data_distortion.png"
              alt="img"
            />
            <div className="page-content-text">
              The outcome are anonymous users being the only accountable for the RWAs authenticity. Everyone is 
              allowed to create millions of copy-cat assets with no mechanism in place preventing it to happen.
              Since, no responsibility is taken by anybody, no safe environment is actually provided to somebody.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/irresponsible_blockchain.png"
              alt="img"
            />
            <div className="page-content-subtitle" id="about-us-high-level-concept">
              High-level Concept
            </div>
            <div className="page-content-text">
             <i>"3Dpass is like what Bitcoin meant for digital money, but for RWAs."</i>
            </div>
            <div className="page-content-text">
              It was in 2009 that Satoshi Nakamoto presented his p2p protocol, which was designed to shift 
              responsibility for Bitcoin currency units authentication from each and every user of the monetary 
              system to a decentralized network of trustless entities. Which created this safe environment, 
              where the level of trust towards the system is much greater than to one another. That is what
              Bitcoin revolution was all about. 
            </div>
            <div className="page-content-text">
             <i>"The root problem with conventional currency is all the trust that's required 
              to make it work."  - Satoshi Nakamoto</i>
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/responsibility_shift.png"
              alt="img"
            />
            <div className="page-content-text">
              The <Link to="/features#scanproof">Proof of Scan</Link> recognition-based p2p protocol, combined 
              with <Link to="/features#3dprc-2">3DPRC-2</Link> token standard, are designed to shift 
              responsibility for the user RWAs authenticity to a decentralized network of trustless entities.
              That is what 3DPass revolution is all about.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/rwa_authenticity_responsibility_shift.png"
              alt="img"
            />
            <div className="page-content-subtitle" id="about-us-solution">
              Solution
            </div>
            <div className="page-content-text">
              <Link to="/features#3drecognition-hash-id">HASH ID</Link> is an object identity sustainable 
              enough to authenticate the object by its unique characteristics.
            </div>
            <div className="page-content-text">
               <Link to="/features#ledger">The Ledger of Things (LoT)</Link> is 
               an <Link to="https://github.com/3dpass">open source</Link> L1 decentralized blockchain 
               platform for the tokenization of objects and its transformation 
               into digital assets (RWA), which is capable of taking ultimate responsibility for the assets 
               authenticity and thus providing sufficient level of trust for everyone. Current list 
               of the object categories is presented as follows:
            </div>
            <ul className="page-content-text">
              <li>3D objects</li>
              <li>2D drawings</li>
              <li>Music</li>
              <li>Biometrics</li>
              <li>Radio signals</li>
              <li>Movements</li>
              <li>Texts</li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/the_lot_categories.png"
              alt="img"
            />
              <div className="page-content-text">
                <Link to="/features#scanproof">Proof of Scan</Link> is a decentralized p2p protocol, which is based on recognition 
                technology and preventing the assets from being copied. This will shift responsibility for the digital 
                assets authenticity towards the p2p network as a whole and thus open a door for the entire blockchain 
                space to potentially trillions in deals all over the globe.
              </div>
              <div className="page-content-text">
                <Link to="/grid2d">Grid2d</Link> is the first 3D shape recognition 
                algorithm, <Link to="https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">suggested</Link> by Michael Co in 2020, which is
                implemented now as <Link to="/pass3d">pass3d</Link> recognition toolkit. Grid2d is utilized as the hash function for
                the <Link to="/features#scanproof">Proof of Scan</Link> protocol.
              </div>
              <div className="page-content-text">
                <Link to="/proof-of-scan#3dprc-2">3DPRC-2</Link> (3Dpass Request for Comments) is a novel token 
                standard protocol operating within the Ledger of Things (LoT) and providing the asset owner with 
                useful <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API methods</Link> for 
                the object digital transformation and its tokenization into
                either a <i>Share-asset</i> or <i>Non-fungible</i> asset accordingly.
              </div>
              <div className="page-content-text">
                The scope of potential 3Dpass applications goes way beyond 3D object recognition and not limited to.
                Being naturally organized and still cultivating this community driven spirit, 3Dpass is here to encourage developers 
                from all around the globe to upgrade the <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> open source 
                toolkit with new fascinating recognition algorithms and make it even more useful for human civilization.
                Learn more about the <Link to="http://localhost:3000/proof-of-scan#object">algorithm requirements</Link>.
              </div>
              <div className="page-content-text">
                <Link to="/coin">3DPass Coin</Link> (P3D) is a native utility token, operating within The Ledger of Things, 
                which serves as an incentive factor for the community members maintaining its infrastructure. 
                Such aspects as: Storage fee, Gas fee, The object authentication fee, Transaction fee, 
                The validator collaterals, Penalties -  are all being counted in P3D.
            </div>
            <video
              src="/images/3DPass_concept_v3.mp4"
              className="page-video"
              controls
            ></video>
              <div className="page-content-subtitle" id="about-us-unique-value-proposition">
              Unique Value Proposition
            </div>
            <ul className="page-content-text">
              <li>
               People can trust the information about the Real World Assets (RWA) put on the 
               Ledger of Things like they do trust Bitcoin for money.
              </li>
              <li>
               People can create endless of dApps to deal with RWAs within this trustworthy environment.
              </li>
              <li>
               People can move and trade their assets freely all over the LoT ecosystem.
              </li>
              <li>
               People can teleport their assets over the cross-chain capabilities amongst
               different blockchain platforms all around the crypto space.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="ecosystem">
          <div className="page-content-inner">
            <div className="page-content-title">Ecosystem</div>
            <div className="page-content-subtitle" id="ecosystem-overview">Overview</div>
            <div className="page-content-text">
              The Ledger of Things ecosystem provides a revolutionaly toolkit for the tokenization of objects and its 
              transformation into Real World Assets (RWA) presented as either <Link to="/assets#3dprc-2-fungible">share-tokens</Link> {" "}
              or <Link to="/assets#3dprc-2-non-fungible">non-fungible</Link> assets. 
              Once transformed, there is a viriety of options available for the asset owner on how to proceed 
              with their plan, including but not limited to: transfers, trading, ICO, dApp creation/integration, smart-contracts,
              cross-chain teleport, etc. 
              </div>
              <ul className="page-content-text">
                <li>
              <Link to="https://github.com/3Dpass/3DP" className="link-title">Node</Link>{" "}
              - The implemetation of The Ledger of Things Node
                </li>
                <li>
                <Link to="/features#3dprc-2" className="link-title">3DPRC-2</Link>{" "}
                - revolutionary tokinization standard proposed by 3Dpass
                </li>
                <li>
                <Link to="/features#dex" className="link-title">DEX</Link>{" "}
                - embedded DEX module to trade share-tokens
                </li>
                <li>
                 Marketplace - to swap non-fungible backed assets
                </li>
                <li>
                  dApps - <Link to="/features#smart-contracts">smart-contracts</Link> module and runtime development
                </li>
                <li>
                 Cross-chain bridge - to teleport the assets over to the external blockchains
                </li>
                <li>
                 Stablecoins - on-chain or bridged (over the cross-chain bridge)
                </li>
                <li>
                 Launchpads - to welcome start-ups into The Ledger of Things ecosystem
                </li>
              </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/lot_eco-system_moon_1.png"
              alt="img"
            />
            <div className="page-content-text">
              Follow our progress on <Link to="/coin#2024">Roadmap</Link> and join the <Link to="/grants">Contribution Grant Program</Link> to speed it up. 
            </div>
            <div className="page-content-subtitle" id="ecosystem-community-structure">Community structure</div>
            <div className="page-content-text">
              3Dpass is a community driven project offering its valuable proposal 
              to different groups and individuals all across the globe: 
            </div>
            <ul className="page-content-text">
              <li>
                Miners: 50% of block rewards, 50% of the user object authentication fee in 3DPRC-2. <Link to="/mainnet#docker">Start mining</Link>
              </li>
              <li>
                Validators: 50% of block rewards, 50% of the user object authentication fee in 3DPRC-2. <Link to="/mainnet#validator">Become Validator</Link>
              </li>
              <li>
                Contributors: Join the <Link to="/grants">Contribution Grant Program</Link>.
              </li>
              <li>
                Users: Leverage unique <Link to="/assets#general-tools">instruments and tools</Link> within 
                the Ledger of Things DeFi ecosystem available through 
                the <Link to="/mobile-wallet">Mobile wallet</Link>, {" "}
                <Link to="https://wallet.3dpass.org">Web3 wallet</Link> or {" "}
                <Link to="https://github.com/3Dpass/3DP/wiki">RPC API</Link> provided
                by the decentralizaed modules running on the LoT blockchain. 
              </li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3dpass_community_structure.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="use-cases">
          <div className="page-content-inner">
            <div className="page-content-title">Use Cases</div>
            <div className="page-content-subtitle" id="use-cases-ideas">
              Tokenize your ideas and earn!
            </div>
            <div className="page-content-text">
              Jump right into this <i>play-to-earn</i> economic game for everyone, which allows 
              to tokenize your ideas into its share-tokens and make an ICO. Educate yourself playing
              and get a chance to earn P3D on ICOs of your creative ideas reflecting in our hearts and minds
              as outstanding pieces of art or just sharp and full of sense of humor and creativity items.
            </div>
            <div className="page-content-text">
            <strong>The more extraordinary and beautiful ideas you can imagine, the more you can earn!</strong>
            </div>
            <ol className="page-content-text">
              <li>
              <strong>All you need to do is to express your idea in words</strong> (could be something like: <i>"a funny cow"</i> or <i>"an airplain that 
              looks like a banana"</i> or <i>"a piggy wheel automobile"</i> or anything that you might consider to be smart 
              or funny or worthwile to create). Create anything you'd like and make it into a low-poly 3D model (<i>.obj</i> format)
              with the AI text-to-3Dmodel generator! <Link to="https://meshy.ai">https://meshy.ai</Link> or similar tools could be used, for instance.
              </li>
              <li>
                Get your model tokenized into its share tokens via the <Link to="/mobile-wallet#tokenization">mobile wallet</Link>. {" "}
                Just put your model on blockchain (pick up its "Share" for the tokenization) and, once approved, create and mint its 
                share-tokens (Max supply is limited to 100%).
              </li>
              <li>
                Trade your share-token on DEX without a middleman via the <Link to="/mobile-wallet#dex-liquidity-pools">mobile wallet {" "}
                </Link> or <Link to="https://3dpswap.online">3DPswap Web3 UI</Link>. 
                Get your idea share-token listed on DEX yourself (no listing fee) and enjoy community support!
              </li>
            </ol>
            <Link
              className="a-none"
              to="/tokenize_ideas_and_earn.pdf"
              target="blank"
              download
            >
              <div className="page-lead-content">
                Download the tips: "How-To"
                <div className="page-lead-button">PDF</div>
              </div>
            </Link>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/tokenize_ideas_and_earn.png"
              alt="img"
            />
            <div className="page-content-text">
              If you are an artist or 3D-sculptor or NFT creator, an alternative option of 3D modeling for you could be:  
            </div>
            <ul className="page-content-text">
              <li>
               Using 3D modeling tools and editors
              </li>
              <li>
               Getting real world objects scanned with your smartphone camera or professional 3D-scanner and then making
               the model simplified into a low-poly <i>.obj </i> {" "}
               (ex. with <Link to="https://lowpoly3d.xyz/">https://lowpoly3d.xyz/</Link> or <Link to="https://www.meshlab.net">Meshlab</Link>)
              </li>
            </ul>
            <div className="page-content-text">
               A "funny cow" tokenized example:
            </div>
            <ul className="page-content-text">
              <li>
                Object tokenized: <strong>#16</strong>; {" "}
               <Link to="https://3dpscan.io/object/16">A funny cow</Link>.
              </li>
              <li>
               AssetId: <strong>#16</strong>; <Link to="https://3dpscan.xyz/#/assets/16"><strong>COW</strong></Link>;
              </li>
              <li>
               Listed on DEX: Swap the cow shares: <Link to="https://3dpswap.online">P3D/COW</Link>; {" "}
               Liquidity Pool: <Link to="https://3dpswap.online/pools"> P3D/COW</Link>
              </li>
            </ul>
            <div className="page-content-subtitle" id="use-cases-lego">
              LEGO models open marketplace for architects and individuals
            </div>
            <ol className="page-content-text">
              <li>
                <Link to="/mobile-wallet#tokenization-put_object">Put your LEGO model on blockchain</Link> (copy protection will be enabled). 
              </li>
              <li>
                Tokenize your model into a <Link to="/mobile-wallet#tokenization-share-token">share-asset</Link> {" "}
                or non-fungible asset via the mobile wallet. {" "}
                <Link to="/mobile-wallet#tokenization-metadata">Set up metadata</Link> {" "}
                and <Link to="/mobile-wallet#tokenization-mint">mint</Link> share-tokens.
              </li>
              <li>
                <Link to="/mobile-wallet#dex-liquidity-pools"> List your asset on DEX</Link> seamlessly 
                and without a middleman (no listing fee, no request forms, no bureaucracy etc.)
              </li>
              <li>
                <Link to="/mobile-wallet#dex-swap">Swap</Link> your asset or make ICOs without 
                a middleman, buy and sell worldwide freely. 
              </li>
            </ol>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/LoT_lego_mobile_put_on_blockchain.png"
              alt="img"
            />
            <div className="page-content-text">
               Example:
            </div>
            <ul className="page-content-text">
              <li>
               Object tokenized: <strong>#21</strong>; {" "}
               <Link to="https://3dpscan.io/object/21">Lego brick 2x2</Link>.
              </li>
              <li>
               AssetId: <strong>#21</strong>; <Link to="https://3dpscan.xyz/#/assets/21"><strong>L2X2</strong></Link>;
              </li>
              <li>
               Listed on DEX: Swap: <Link to="https://3dpswap.online">P3D/L2X2</Link>; {" "}
               Liquidity Pool: <Link to="https://3dpswap.online/pools"> P3D/L2X2</Link>
              </li>
            </ul>
            <div className="page-content-text">
             <strong>Description:</strong>
            </div>
            <div className="page-content-text">
            LEGO models privately designed by individual architects and players represent 
            a million-dollar market where users are sharing their best models with each 
            other and are able to sell, trade and make ICOs. Whereas, the model ownership 
            is assigned to its creator and the bricks ownership, the models are built out of, 
            are referred to a brand (LEGO and its analogs).
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/lego_bricks_3d.png"
              alt="img"
            />
            <div className="page-content-text">
              Each and every model or brick belongs both real and virtual worlds simultaneously and has its 
              unique characteristics (3D shape, color, etc.), which make them a value. 
              The most worthwhile property in the context is the low-poly 3D shape, which is 
              distinguishable by <Link to="/grid2d">grid2d</Link> recognition algorithm operating 
              within the Ledger of Things and thus can be tokenized into a backed {" "}
              <Link to="/mobile-wallet#tokenization-share-token">share-asset</Link> {" "}
              (collective public ownership) or a single non-fungible asset in accordance 
              with <Link to="/features#3dprc-2">3DPRC-2</Link> standard.
              </div>  
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/lego_piggy.png"
              alt="img"
            />
            <ul className="page-content-text">
              <li>
               <strong>Real-to-Virtual</strong> path: Both bricks and models are scannable by 
               means of smartphone camera or proffessional 3D scanning devices.
              </li>
              <li>
               <strong>Virtual-to-Real</strong> path:  Both bricks and models are printable on 3D printers.
              </li>
              <li>
                Unique value proposition for LEGO and its analogs: The tokenization of bricks and its copy protection,
                no listing fees, no bureaucracy.
              </li>
              <li>
                Unique value proposition for architects and designers: The tokenization 
                of models and its copy protection as well as monetization/trade/ICO seamlessly 
                without a middleman within the LoT DeFi ecosystem.
              </li>
              <li>
                Unique value proposition for players: The access to endless of models to 
                build, interoperability, no logistics cost.
              </li>
              <li>
                No commercial relationship and competition: The Ledger of Things is an 
                open-source platform that is owned by everyone in the world, which provides 
                no competition towards the private business sector in relation to any 
                commercial organization all across the globe.
              </li>
            </ul>
            <div className="page-content-text">
              This case goes far beyond the LEGO models and applicable to any 
              pre-manufactured model which is printable, scannable and consisting of 
              solid components (like LEGO bricks, they must not be flexible/easy to damage).
            </div>
            <div className="page-content-subtitle" id="use-cases-jewelry">
              3D Jewelry open marketplace for designers and and individuals
            </div>
            <ol className="page-content-text">
              <li>
                <Link to="/mobile-wallet#tokenization-put_object">Put your jewelry item on blockchain</Link> (copy protection will be enabled). 
              </li>
              <li>
                Tokenize your item into a <Link to="/mobile-wallet#tokenization-share-token">share-asset</Link> {" "}
                or non-fungible asset via the mobile wallet. {" "}
                <Link to="/mobile-wallet#tokenization-metadata">Set up metadata</Link> {" "}
                and <Link to="/mobile-wallet#tokenization-mint">mint</Link> share-tokens.
              </li>
              <li>
                <Link to="/mobile-wallet#dex-liquidity-pools"> List your asset on DEX</Link> seamlessly 
                and without a middleman (no listing fee, no request forms, no bureaucracy etc.)
              </li>
              <li>
                <Link to="/mobile-wallet#dex-swap">Swap</Link> your asset or make ICOs without 
                a middleman, buy and sell worrldwide freely. 
              </li>
            </ol>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/LoT_jewelry_mobile_put_on_blockchain.png"
              alt="img"
            />
            <div className="page-content-text">
               Example:
            </div>
            <ul className="page-content-text">
              <li>
               Object tokenized: <strong>#27</strong>; {" "}
               <Link to="https://3dpscan.io/object/27">Ring 3D</Link>.
              </li>
              <li>
               AssetId: <strong>#27</strong>; <Link to="https://3dpscan.xyz/#/assets/27"><strong>RING</strong></Link>;
              </li>
              <li>
               Listed on DEX: Swap: <Link to="https://3dpswap.online">P3D/RING</Link>; {" "}
               Liquidity Pool: <Link to="https://3dpswap.online"> P3D/RING</Link>
              </li>
            </ul>
            <div className="page-content-text">
             <strong>Description:</strong>
            </div>
            <div className="page-content-text">
            Jewelry items, privately designed by individual designers and proffesional jewelers, represent 
            a billion-dollar market where users are creating, trading and making ICOs.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/jewelry_3d_modeling.png"
              alt="img"
            />
            <div className="page-content-text">
              Each and every item belongs both real and virtual worlds simultaneously and has its 
              unique characteristics (3D shape, color, etc.), which make them a value. 
              The most worthwhile property in the context is the low-poly 3D shape, which is 
              distinguishable by <Link to="/grid2d">grid2d</Link> recognition algorithm operating 
              within the Ledger of Things and thus can be tokenized into a backed {" "}
              <Link to="/mobile-wallet#tokenization-share-token">share-asset</Link> {" "}
              (collective public ownership) or a single non-fungible asset in accordance 
              with <Link to="/features#3dprc-2">3DPRC-2</Link> standard.
              </div>  
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3d_ring.png"
              alt="img"
            />
            <ul className="page-content-text">
              <li>
               <strong>Real-to-Virtual</strong> path: Jwelry items are scannable by 
               means of smartphone camera or proffessional 3D scanning devices.
              </li>
              <li>
               <strong>Virtual-to-Real</strong> path:  3D jewelry items are printable on 3D printers.
              </li>
              <li>
                Unique value proposition for designers: The tokenization 
                of models and its copy protection as well as monetization/trade/ICO seamlessly 
                without a middleman within the LoT DeFi ecosystem.
              </li>
              <li>
                Unique value proposition for individuals: The access to endless of items to 
                purchase, interoperability, no logistics cost.
              </li>
              <li>
                No commercial relationship and competition: The Ledger of Things is an 
                open-source platform that is owned by everyone in the world, which provides 
                no competition towards the private business sector in relation to any 
                commercial organization all across the globe.
              </li>
            </ul>
            <div className="page-content-text">
              This case goes far beyond 3D printable jewelry items and applicable to any 
              solid-shaped model which is printable, scannable and sustainable enough in 
              terms of its 3D shape.
            </div>
            <div className="page-content-subtitle" id="use-cases-diamonds">
              The tokenization of precious stones
            </div>
            <div className="page-content-text">
              <strong>Get your gem tokenized before and after getting cut to turn it into a liquid digital asset:</strong>
            </div>
            <ol className="page-content-text">
              <li>
                Visit a gemological lab to get your gem 3D scanned and properly measured. 
              </li>
              <li>
                <Link to="/mobile-wallet#tokenization-put_object">Put a 3D model of the gem on blockchain</Link>. 
                Additionally, specify the values for each unique characteristic available, such as: weight, clarity, 
                hardness, etc. (copy protection will be enabled). 
              </li>
              <li>
                Tokenize your model into a <Link to="/mobile-wallet#tokenization-share-token">share-asset</Link> {" "}
                or non-fungible asset via the mobile wallet. {" "}
                <Link to="/mobile-wallet#tokenization-metadata">Set up metadata</Link> {" "}
                and <Link to="/mobile-wallet#tokenization-mint">mint</Link> share-tokens.
                Either, you can pick up share or weight or any other characteristic for the tokenization. 
                For instance, pick up the "weight" to tokenize your gem into its digital carats. Token Max supply
                is limited to its property value <i>(if the gem weight is <strong>1.2348866</strong> Carat, the max supply limit 
                is <strong>12348866</strong> in min indivisible units)</i>. No one can overissue this limit, 
                including the asset owners.
              </li>
              <li>
                <Link to="/mobile-wallet#dex-liquidity-pools"> List your share asset on DEX</Link> seamlessly 
                and without a middleman (no listing fee, no request forms, no bureaucracy etc.)
              </li>
              <li>
                <Link to="/mobile-wallet#dex-swap">Swap</Link> your asset or make ICOs without 
                a middleman, buy and sell worldwide freely. 
              </li>
            </ol>
            <div className="page-content-text">
              <strong>Before getting cut:</strong>
            </div>
            <img
              className="page-img"
              src="/images/the_object_properties_tokenization_mobile.png"
              alt="img"
            />
            <div className="page-content-text">
               Example:
            </div>
            <ul className="page-content-text">
              <li>
               Object tokenized: <strong>#29</strong>; {" "}
               <Link to="https://3dpscan.io/object/29">3D crystal</Link>.
              </li>
              <li>
               AssetId: <strong>#29</strong>; <Link to="https://3dpscan.xyz/#/assets/29"><strong>DCRT</strong></Link>;
              </li>
              <li>
               Listed on DEX: Swap: <Link to="https://3dpswap.online">P3D/DCRT</Link>; {" "}
               Liquidity Pool: <Link to="https://3dpswap.online/pools"> P3D/DCRT</Link>
              </li>
            </ul>
            <div className="page-content-text">
              <strong>After getting cut:</strong>
            </div>
            <img
              className="page-img"
              src="/images/diamond_cut_properties_tokenization_mobile.png"
              alt="img"
            />
            <div className="page-content-text">
               Example:
            </div>
            <ul className="page-content-text">
              <li>
               Object tokenized: <strong>#27</strong>; {" "}
               <Link to="https://3dpscan.io/object/27">3D diamond cut</Link>.
              </li>
              <li>
               AssetId: <strong>#27</strong>; <Link to="https://3dpscan.xyz/#/assets/27"><strong>DIA</strong></Link>;
              </li>
              <li>
               Listed on DEX: Swap: <Link to="https://3dpswap.online">P3D/DIA</Link>; {" "}
               Liquidity Pool: <Link to="https://3dpswap.online/pools"> P3D/DIA</Link>
              </li>
            </ul>
            <div className="page-content-text">
              <strong>Large precious stones:</strong>
            </div>
            <div className="page-content-text">
              Current safe haven for investors is limited to gold and silver, 
              and it's not enough for growing population and preservation of its assets.
              The tokenization of large precious stones will add liquidity and reduce volatility.
            </div>
            <div className="page-content-text">
             <strong>Mining industry dilemma:</strong>
            </div>
            <div className="page-content-text">
              The amount of information about end-user price that most precious stones 
              can provide once excavated is relatively small, compared to after getting cut, which means 
              certain risk to take for mining companies from all across the globe. It cost them 
              time and money that they have to spend on exploration of new deposits, 
              but no one knows how things play out in terms of total profit/loss.
            </div>
            <div className="page-content-text">
              Investors, however, are willing to take on risk, provided the level of transparency is appropriate.
              Getting unique characteristics of a stone captured and having them at recognizable with {" "}
              <Link to="/features#recognition-hash-id">HASH ID</Link> {" "}
              can provide such an excellent level of definition that might fit in public 
              expectations.
            </div>
            <div className="page-content-text">
              Although, it doesn't exclude this requirement of having a third-party storage in place to
              guarantee the assets physical safety as well as - gemological lab for measurements, it allows to 
              identify the asset on the blockchain by several aspects, as such: 3D shape, weight, clarity, 
              density, hardness.
            </div>
            <img
              className="page-img"
              src="/images/object_characteristics.png"
              alt="img"
            />
            <div className="page-content-text">
             <strong>Solution:</strong>
            </div>
            <div className="page-content-text">
              One of the innovative solutions would be getting gems tokenized before and after cut.
              Mining companies would use rough diamonds ICO as a leverage for mitigation 
              risks as well as for crowdfunding purposes (ex. to raise some funds for exploration).
              And the cut diamonds, when tokenized, are representing this liquid end-user gem market
              with clear track record from mining to the counter.
            </div>
            <div className="page-content-subtitle" id="use-cases-gaming">
              Gaming, Virtual reality, Metaverse
            </div>
            <div className="page-content-text">
              In traditional gaming, in-game assets are held on centralized servers 
              managed by game developers or publishers. Players invest significant 
              time and money to acquire these assets, yet they don’t genuinely own 
              them. Game companies can modify, delete, or restrict access to these 
              items at any time, often without player consent.
            </div>
            <div className="page-content-text">
              Blockchain technology revolutionizes this by decentralizing asset ownership. 
              When in-game assets are tokenized on the blockchain, they transform into digital 
              assets that are fully owned by the player. These assets are recorded on The Ledger of Things, 
              meaning no single entity has control over them. As a result, developers cannot 
              alter or confiscate these assets, granting players true ownership. This represents a 
              significant shift in NFT game development, prioritizing player empowerment 
              through unique in-game tokens.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/nft_game.png"
              alt="img"
            />
            <div className="page-content-text">
              For instance, if a player obtains a rare sword in a blockchain-based game, 
              that sword is represented as a <Link to="/assets#3dprc-2-non-fungible">Non-fungible Token (NFT)</Link> {" "}
              or <Link to="/assets#3dprc-2-fungible">Share-Token</Link> on The Ledger of Things. 
              The player retains complete ownership of the sword and can trade or sell it—even 
              outside the game—without requiring permission from the developer.
            </div>
            <div className="page-content-subtitle" id="use-cases-crypto">
              Access Control
            </div>
            <div className="page-content-text" id="use-cases-seed">
              <strong>The object's identity as secret seed</strong>
            </div>
            <div className="page-content-text">
              RWA-based crypto accounts leveraging the <Link to="/features#recognition-hash-id">HASH ID</Link> {" "} 
              as seed data for its recovery provide a solid solution 
              for <Link to="/features#multiobject">multi-factor authentication</Link>, which is 
              a cricital component in every Access Control system. The best example of it would be the {" "} 
              <Link to="/mobile-wallet#creation">3D Object Wallet</Link>, where 3D shape unique characteristics
              are <Link to="/assets#general-digital-transformation">transformed</Link> with recognition technnology
              and used as secret seed instead of a mnemonic phrase.
            </div>
            <div className="page-content-text">
              Examples:
            </div>
            <ul className="page-content-text">
              <li>
              <strong>Access to the wallet funds (for smart contracts and dApps)</strong>: Imagine a blockchain game 
              offering a jackpot to someone who found a virtual object of specific shape. Once the object is found, 
              the <Link to="/mobile-wallet#creation">3D Object Wallet</Link> is going to be created providing 
              the access to the winner (or to the system). If either public acknowledgement or copy protection is required, 
              the object might be disclosed afterwards and passed throught 
              the <Link to="/assets#3dprc-2-object-authentication">3DPRC-2 authentication protocol</Link> to 
              get as much confirmations from the network as needed.
              <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/object_wallet.png"
              alt="img"
              />
              </li>
              <li>
              <strong>Transaction trigger (for smart contracts and dApps)</strong>: Once the valid object is presented 
              and the wallet is generated it might be triggering additional logic, as such: opening doors, vaults, gates, etc. 
              by signing a specific transaction from the account.
              <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/transaction_trigger.png"
              alt="img"
              />
              </li>
            </ul>
            <div className="page-content-text" id="use-cases-identity">
              <strong>Personal public on-chain identity for Web3</strong>
            </div>
            <div className="page-content-text">
              As the contemporary Internet faces <Link to="/community#about-us-challenge">challenges</Link> posed 
              by artificial intelligence, bots, 
              and various anonymous entities, the significance of a personal digital public 
              identity is increasingly paramount. The proliferation of misinformation and fake 
              identities has rendered it nearly impossible to ascertain trustworthiness online.
            </div>
            <div className="page-content-text">
              Current alternative solutions offered by corporations, governmental entities, and 
              blockchain platforms often lack transparency regarding personal data. These solutions 
              frequently provide an inadequate representation of an individual’s identity through a 
              convoluted series of processes, despite the widespread availability of personal data 
              shared by individuals themselves. Commonly disseminated information includes selfie images, 
              videos, and even 3D representations, which reveal distinct human attributes such as facial 
              features and iris characteristics. This raises the question of whether it would be prudent 
              to utilize this data for automated and public verification of sources.
            </div>
            <div className="page-content-text">
              It is important to recognize that certain types of personal data are inherently more 
              sensitive than others. For example, fingerprints are typically less commonly shared publicly. 
              Nevertheless, relying solely on fingerprints to safeguard access to one's digital identity 
              is insufficient. A multifactor approach is essential to ensure an adequate level of security.
            </div>
            <div className="page-content-text">
              The 3Dpass <Link to="/mainnet#chain"></Link> on-chain identity decentralized module facilitates 
              the linking of an object-wallet, 
              generated from private biometric data, to a public HASH ID derived from a face or iris scan. 
              This integration enhances security and simplifies verification processes on the blockchain.
              Following <Link to="/assets#general-digital-transformation"></Link> transformation, the 
              public data becomes a non-fungible backed asset, safeguarded 
              against duplication through the <Link to="/features#3dprc-2">3DPRC-2</Link> standard. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/personal_public_identity_1.png"
              alt="img"
              />
          </div>
        </div>
        <div className="page-content-block" id="governance">
          <div className="page-content-inner">
            <Link className="message-text" to="/governance"><div className="page-content-title">Open Governance</div></Link>
            <div className="page-content-text">
              3DPass leverages a sophisticated self governance mechanism, which
              allows for it to evolve gracefully overtime at the ultimate behest of
              its assembled stakeholders. The stated goal is to ensure that the
              majority of the stake can always command the network.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3dpass_society.png"
              alt="img"
            />
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
              Follow the <Link to="/governance">detailed description</Link> to explore the underlying logic.  
            </div>
            <div className="page-content-text">
              Track the {" "} 
              <a href="https://wallet.3dpass.org/governance/">
              Council motions
              </a> {" "} 
              online.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="representatives">
          <div className="page-content-inner">
            <div className="page-content-title">Representatives</div>
            <div className="page-content-text">
              Representatives are the most akwnowledged community members willing to represent 3Dpass all around the globe. 
              There is no employment practice taking place around 3Dpass, but the contribution only. Explore the {" "} 
              <Link to="/grants">Contribution Grant program</Link> to dive into detail.
            </div>
            <UserCard
              name="PaulS"
              title="Product and Strategy"
              description="founder"
              image="/images/anon.jpg"
            />
            <UserCard
              name="Michael Co"
              title="Core Developer"
              description="co-founder"
              image="/images/anon.jpg"
            />
            <UserCard
              name="Mikhail"
              title="Front-end and AI Developer"
              description="co-founder"
              image="/images/anon.jpg"
            />
            <UserCard name="L3odr0id" 
              title="Mobile Developer" 
              description="contributor"
              image="/images/anon.jpg"
            />
            <UserCard
              name="A Mo"
              title="Business Development and Community Representative"
              description="Discord: A_Mo#2060"
              image="/images/anon.jpg"
            />
             <UserCard
              name="breukmeister"
              title="Community Representative"
              description="Europe, Discord: breukmeister"
              image="/images/anon.jpg"
            />
          </div>
        </div>
        <div className="page-content-block" id="resources">
          <div className="page-content-inner full-m-w">
            <div className="page-content-title">Community Resources</div>
            <div className="page-content-text">
              <strong><i>Disclaimer!</i></strong> All the resources below are managed by community 
              members and there might be many others untracked. The resources represent independent 
              groups and channels about 3Dpass by its creators. Due to decentralized nature of the 
              project there is <strong>NO PRIMARY CHANNEL</strong> taking place around 
              the system, and the most reliable source of data is the blockchain data base containing 
              all transaction history including the <Link to="#governance">Open Governance</Link>{" "}
              and <Link to="/governance#democracy">Referendum</Link> vote. Be careful choosing which 
              source to trust and make sure the information is referenced to either the blockchain db 
              or the source codes for proof! 
            </div>
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
                  <li>3Dpass Web3 wallet</li>
                </Link>
                <Link to="/mobile-wallet">
                  <li>Mobile wallet</li>
                </Link>
                <Link to="https://3dpscan.xyz">
                  <li>Explorer</li>
                </Link>
                <Link to="https://talisman.xyz">
                  <li>Talisman muli-chain wallet</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://3dpass.network">
                  <li>Telemetry server</li>
                </Link>
                <Link to="https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.3dpass.org">
                  <li>Polkadot js wallet</li>
                </Link>
                <Link to="https://novawallet.io">
                  <li>Nova wallet</li>
                </Link>
                <Link to="https://www.3dpassmining.info/">
                  <li>Mining dash board</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Market cap</div>
              <ul className="page-content-text">
                <Link to="https://coinmarketcap.com/currencies/3dpass/">
                  <li>CoinMarketCap</li>
                </Link>
                <Link to="https://www.coingecko.com/en/coins/3dpass">
                  <li>CoinGecko</li>
                </Link>
                <Link to="https://coinpaprika.com/coin/p3d-3dpass-coin/">
                  <li>Coinpaprika</li>
                </Link>
                <Link to="https://www.livecoinwatch.com/price/3DPassCoin-P3D">
                  <li>Livecoinwatch</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://blockspot.io/coin/3dpass-coin/">
                  <li>Blockspot</li>
                </Link>
                <Link to="https://coincodex.com/crypto/3dpass/">
                  <li>Coincodex</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Exchanges</div>
              <ul className="page-content-text">
              <Link to="https://www.mexc.com/exchange/P3D_USDT">
                  <li>MEXC P3D/USDT</li>
                </Link>
                <Link to="https://www.coinex.com/en/exchange/p3d-usdt">
                  <li>Coinex P3D/USDT</li>
                </Link>
                <Link to="https://nonkyc.io/market/P3D_USDT">
                  <li>NonKYC P3D/USDT</li>
                </Link>
                <Link to="https://3dpswap.online">
                  <li>3DPswap DEX</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Social Media</div>
              <ul className="page-content-text">
                <Link to="https://twitter.com/3Dpass_genesis">
                  <li>X [Genesis] (major news only)</li>
                </Link>
                <Link to="https://x.com/3dpass_open_gov">
                  <li>X (The Open Gov news)</li>
                </Link>
                {/* Hereby, I confirm that I am the owner of this group and taking fullresponsibility for its content as well as the activities. 
                This is 100%% my own initiative.

                My accounts: 
                d1GKrrR55vQP73WfAuQ6U9eipRz8QeNHgz9amhX3owa1v8Hjo
                d1DqgaXyQzwyDH4VfX1tppYFwDQkLHSwGxdwkYExJWErKmSAV*/}
                <Link to="https://x.com/3DPassCommunity">
                  <li>X 3dpassCommunity</li>
                </Link>
                <Link to="https://discord.com/invite/u24WkXcwug">
                  <li>Discord [Genesis]</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://t.me./threedpass_updates">
                  <li>Tg channel [updates]</li>
                </Link>
                <Link to="https://t.me/pass3d">
                  <li>Tg group [Genesis]</li>
                </Link>
                {/* Hereby, I confirm that I am the owner of this group and taking fullresponsibility for its content as well as the activities. 
                This is 100%% my own initiative.

                My accounts: 
                d1GKrrR55vQP73WfAuQ6U9eipRz8QeNHgz9amhX3owa1v8Hjo
                d1DqgaXyQzwyDH4VfX1tppYFwDQkLHSwGxdwkYExJWErKmSAV*/}
                <Link to="https://t.me/P3Dpass">
                  <li>Tg group 3dpassCommunity</li>
                </Link>
                <Link to="https://t.me/p3dtrading">
                  <li>Tg group [Price & Trading]</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title">Source Codes</div>
              <ul className="page-content-text">
                <Link to="https://github.com/3Dpass/">
                  <li>3Dpass GitHub [Genesis]</li>
                </Link>
                <Link to="https://github.com/seineken/unofficial-3dp-miner/">
                  <li>Seineken's miner "HiveOS integration"</li>
                </Link>
              </ul>
            </div>
            <div className="url-block">
              <div className="url-block-title url-empty-title"></div>
              <ul className="page-content-text">
                <Link to="https://github.com/WlinkNET/Prometheus/tree/main">
                  <li>Prometheus and Graphana by WlinkNet</li>
                </Link>
                <Link to="https://github.com/Caldera-Trade/3dp-registrar/">
                  <li>Idenity Registrar bot by Caldera</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="download">
          <div className="page-content-inner">
            <div className="page-content-title">
              Download: {" "}
            </div>
            <div className="page-content-text">
            <ul className="page-content-text">
              <li><Link to="https://github.com/3Dpass/3DP/releases">The Node latest release</Link></li>
              <li>Latest blockchian db snapshots <i>(by community)</i>: <Link to="https://github.com/xchainw/p3d-db/releases">Repo 1</Link>, {" "}
              <Link to="https://github.com/Snezhnaya-Fatui/p3d-mainnet-db">Repo 2</Link></li> 
              <li><Link to="/mainnet">Mainnet guidelines</Link></li>
            </ul>
            </div>
            <div className="page-content-text">
              <i>Disclaimer: This is an open source free p2p software. Use it at your own risk. </i>
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
                  Get the wallet on Google Play
                </Link>
              </div>
              <div className="page-table-left page-table-info">Windows</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.org/mainnet.html#mining_docker">
                  How to run the Node with Docker{" "}
                </Link>
              </div>
              <div className="page-table-left page-table-info">Mac OS</div>
              <div className="page-table-right page-table-content">
                <Link to="https://3dpass.org/mainnet.html#mining_docker">
                  How to run the Node with Docker{" "}
                </Link>
              </div>
              <div className="page-table-left page-table-info">Linux</div>
              <div className="page-table-right page-table-content">
                <Link to="https://github.com/3Dpass/3DP/releases">
                  Prebuilt poscan-consensus binaries{" "}
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
      </div>
    </React.Fragment>
  );
};

export default Community;
