import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Features = () => {
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
        <div className="page-title">Features</div>
        <div className="page-nav-content">
          <a href="#3drecognition">
            <div
              className={
                locationHash.includes("3drecognition")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The Object Recognition
              <div className="page-nav-circle"></div>
              <div className="page-nav-line object-line"></div>
            </div>
          </a>
          <a href="#3drecognition-hash-id">
            <div className="page-nav-inside">
              Hash ID
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#object-categories">
            <div className="page-nav-inside">
              The Object Categories
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#multiobject">
            <div
              className={
                locationHash.includes("multiobject")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Multi-Object Option
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#scanproof">
            <div
              className={
                locationHash.includes("scanproof")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Proof of Scan Protocol
              <div className="page-nav-circle"></div>
              <div className="page-nav-line scanproof-line"></div>
            </div>
          </a>
          <a href="#scanproof-block-production">
            <div className="page-nav-inside">
              Block production (Mining)
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#scanproof-object-authenticity">
            <div className="page-nav-inside">
              Object authenticity and block verification
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#scanproof-deterministic">
            <div className="page-nav-inside">
              Deterministic blockchain finality
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#ledger">
            <div
              className={
                locationHash.includes("ledger")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The Ledger of Things
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2">
            <div
              className={
                locationHash.includes("3dprc-2")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              3DPRC-2 standard
              <div className="page-nav-circle"></div>
              <div className="page-nav-line rc-line"></div>
            </div>
          </a>
          <a href="#3dprc-2-overview">
            <div className="page-nav-inside">
              Overview
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-implementation">
            <div className="page-nav-inside">
              Implementation
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-assets">
            <div className="page-nav-inside">
              Fungible and Non-fungible backed assets
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-asset-management">
            <div className="page-nav-inside">
              Asset management
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#fungibleassets">
            <div
              className={
                locationHash.includes("fungibleassets")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Fungible assets
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#smartcontracts">
            <div
              className={
                locationHash.includes("smartcontracts")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Smart Contracts
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#atomicswap">
            <div
              className={
                locationHash.includes("atomicswap")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Atomic Swap
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#dex">
            <div
              className={
                locationHash.includes("dex")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Embedded DEX
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#tokenization">
            <div
              className={
                locationHash.includes("tokenization")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The Tokenization of 3D Objects
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#passwords">
            <div
              className={
                locationHash.includes("passwords")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Password and Keys Creation
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#integration">
            <div
              className={
                locationHash.includes("integration")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Integration
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="3drecognition">
          <div className="page-content-inner">
            <div className="page-content-title">The Object Recognition</div>
            <div className="page-content-text">
              In the foundation of 3Dpass lies the object
              recognition <Link to="https://github.com/3dpass">open source</Link> technology presented as a stuctured set of {" "}
              fundamental-research-based algorithms created by either the team or
              community members. 
              </div>
              <div className="page-content-text">
              The algorithms are especially adapted to operate within the blockchain inviroment, 
              which doesn't provide any feedback to compare objects to one another while its processing.
              Essentially, it is caused by the absence of trustworthy backend in
              the blockchain architecture, which implies a number of equal nodes to be
              admininstrated by users not providing substantial trust towards each other. Thus, any object,
              event or transaction must rather be proved by math calculations performing off-line. 
              </div>
              <div className="page-content-text">
              The first algorithm <Link to="/grid2d">Grid2d</Link>, <Link to="/https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">suggested</Link> by Michael Co in
              2020, is designed for 3D object shape recognition, however, the scope of potential 3Dpass applications goes way beyond that and not limited to. The algorithms implementation is available as <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> recognition toolkit, which plays essential role
              in the <Link to="/proof-of-scan">Proof of Scan</Link> consensus protocol operating on the <Link to="/features#ledger">The Ledger of Things</Link> blockchain.
            </div>
            <div className="page-content-subtitle" id="3drecognition-hash-id">
              Hash ID
            </div>
            <ul className="page-content-text">
              <li>
                <Link to="/pass3d">pass3d</Link> recognition toolkit captures some distinctive properties
                of the object and produces its digital identity called <Link to="/features#3drecognition-hash-id">HASH ID</Link>, 
                which will remain stable for every different
                scan taken out of the same object. The HASH ID allows to
                establish <i>one-to-one</i> correspondence between the object and its
                digital asset, which any conventional NFT could never sustain <a href="#difference">Learn the difference</a>.
              </li>
              <li>
                HASH ID provides excellent level of privacy containing <i>"0
                knowlege"</i> about the object itself. The original
                data <i>(seed)</i> is protected by cryptographic standard <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA-256</Link>.
              </li>
              <li>
                HASH ID allows to define the property rights as being distinguishable to the extent of the error of recognition. 
                Meaning, original assets could be distinguished from fakes and, thus, protected from being copied. 
              </li>
            </ul>
            <img
              className="page-img"
              src="/images/slide2_phone1.png"
              alt="img"
            />
            <a href="/mobile-wallet#download">
            <div className="page-lead-content">
              Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-subtitle" id="object-categories">
              The Object Categories
            </div>
            <div className="page-content-text">
              3DPass is called to encourage developers to upgrade the <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> open source toolkit with new fascinating recognition algorithms and add to its usefulness for people.
              In order to simplify the challenge we have put it into some structure, which makes it easy for machines to understand on input. 
              Learn more about <Link to="/proof-of-scan#object">the algorithm requirements</Link>.
            </div>
            <div className="page-content-text">
              This is apparent, that it does not make sense to compare objects by its HASH ID, 
              provided they got processed with different recognition algorithms/parameters. However, 
              HASH IDs need to be compared with one another in order to guarantee for users the absence of copies on the blockchain data base.
            </div>
            <div className="page-content-text">
              By means of categorization of the object types, we are setting up some <i>“standard”</i> algorithms <i>(presets)</i> to be available to use within each category. 
              And the level of precision is being determined by every preset, at which the object is going to be recognized. Learn more about <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> tokenization standard implementation. 
            </div>
            <div className="page-content-text">
              Initial list of categories is presented as follows:
            </div>
            <ul className="page-content-text">
              <li>3D objects
              <ul className="page-content-text">
                <li>
                  Algo: <code>grid2d_v3a -s 12 -g 8</code> (learn more about <Link to="/grid2d">Grid2d</Link>)
                </li>
              </ul>
              </li>
              <li>2D drawings</li>
              <li>Music</li>
              <li>Biometrics</li>
              <li>Radio signals</li>
              <li>Movements</li>
              <li>Texts</li>
            </ul>
            <div className="page-content-text">
              Feel free to implement or suggest new algorithm for any category above and jump right
              in <Link to="/coin#distribution-contribution">3DPass contribution rewards program</Link>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="multiobject">
          <div className="page-content-inner">
            <div className="page-content-title">Multi-Object Option</div>
            <div className="page-content-text">
              Not only could single object have been used for the (<Link to="/features#3drecognition-hash-id">HASH ID</Link>) creation, 
              but also a combination of several ones instead. For example, the object shape, combined with its additional
              properties (size, weight, density, clarity, owner's biometric
              data, etc.), or just a bunch of different-shaped 3D objects might
              be chosen. This complex <Link to="/features#3drecognition-hash-id">HASH ID</Link>, calculated out of multi-seed,
              becomes much more secure against the attack, due to the {" "}
              <Link to="https://en.wikipedia.org/wiki/Multi-factor_authentication">multi-factor authentication</Link>. It might, as well, help us
              capture a few different properties inherent to the object. 
              Let's consider these examples:
            </div>
            <ul className="page-content-text">
              <li>Piece of rock + Owner's fingerprint - HASH-ID 1</li>
              <li>3D object shape + Its weight - Hash-ID 2</li>
              <li>Object_1 shape + Object_2 shape - Hash-ID 3</li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/multiseed1.png"
              alt="img"
            />
            <div className="page-content-text">In the example above:</div>
            <ul className="page-content-text">
              <li>3D Object is <i>"something that you have"</i> factor</li>
              <li>Fingerprint is <i>"something that you are"</i> factor</li>
              <li>
                PIN code or password or special movement or what so ever might
                be added as "something that you know" factor as well.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="scanproof">
          <div className="page-content-inner">
            <div className="page-content-title">Proof Of Scan Protocol</div>
            <div className="page-content-text">
            <Link to="/proof-of-scan">Proof of Scan</Link> is a revolutionary decentralized protocol, which is
              leveraged not only as 3Dpass blockchain network consensus, but
              also designed to prevent digital assets from copying. All of those
              assets present nothing, but endless of kinds of objects tokenized,
              such as: 3D objects, 2D drawings, melodies, voices, radio signals,
              and so on. Due to the recognition technology the protocol is based
              on, this novel approach unfolds the access to potential trillions
              in deals all over the globe.
            </div>
            <div className="page-content-text">
              "One object = One asset" rule
            </div>
            <div className="page-content-text">
              The first and the most important PoScan (<Link to="/proof-of-scan">Proof of Scan</Link>) rule
              states "1 object = 1 asset", which refers to the recognition
              algorithm being used instead of some usual hash function like <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA256</Link>. As such, <Link to="/grid2d">Grid2d</Link> algorithm is leveraged for 3D object
              recognition in 3Dpass.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/oneobject_oneasset1.png"
              alt="img"
            />
            <div
              className="page-content-subtitle"
              id="scanproof-block-production"
            >
              Block Production (Mining)
            </div>
            <div className="page-content-text">
              3Dpass exploits PoW (Proof of Work) concept for the block
              production, due to the fact that the recognition always takes
              computing power for the objects to get veryfied. In <Link to="/proof-of-scan">Proof of Scan</Link>{" "}
              3D object ( in <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">obj</Link>. format) is used as a "nonce". And so, miners
              are picking up a unique-shaped 3D object the <Link to="/features#3drecognition-hash-id">HASH ID</Link> of which,
              being sealed to the parent block hash with <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA256</Link>, would make {" "}
              <Link to="/grid2d">Grid2d</Link> recognition algorithm produce a specific output ( the hash
              value below the limit called "Difficulty") like 000000...". <Link to="/mainnet">Learn {">>"}{" "}
              how to mine 3Dpass coin</Link>
            </div>
            <div
              className="page-content-subtitle"
              id="scanproof-object-authenticity"
            >
              Object Authenticity And Block Verification
            </div>
            <div className="page-content-text">
              The network will always agree upon the state of whether or not
              each one object tokenized is considered to be original. It serves
              as an object authentication service provided by one layer of equal
              nodes.
            </div>
            <div className="page-content-text">
              Use <Link to="/mobile-wallet">3Dpass mobile wallet</Link> to verify <Link to="/proof-of-scan">Proof of Scan</Link> to work.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3dpass_network1.png"
              alt="img"
            />
            <div className="page-content-subtitle" id="scanproof-deterministic">
              Deterministic Blockchain Finality
            </div>
            <div className="page-content-text">
            <Link to="/proof-of-scan">Proof of Scan</Link> implementation is equipped with <Link to="/proof-of-scan#granpda">GRANDPA</Link> finality
              gadget which is guaranteed for blocks to reach finality in
              opposite to probabilistic finality (e.x. Nakamoto protocol which
              first was applied in Bitcoin). PoA (Proof of Authority) concept is
              being used for block finalization. There is an Authority set
              called Validators consisting of the most reliable nodes thoroughly
              selected from miners. They vote upon Best chain and, after the
              voting is complete, there is going to be no chance for the
              finalized chain to get reorganized (2/3 + 1 positive votes is
              enough to make the final decision)
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/best_chain1.png"
              alt="img"
            />
            <div className="page-content-text">
              Read <Link to="https://3dpass.medium.com/proof-of-scan-consensus-how-does-that-work-7a88b0fc8530">this article</Link> to learn more about how <Link to="/proof-of-scan">Proof of Scan</Link> could be
              compared to conventional PoW <i>(Proof of Work)</i>. Follow either the <Link to="/proof-of-scan">full protocol description</Link> or <Link to="/coin#white-papper">White paper</Link> to get some detailed
              information.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="ledger">
          <div className="page-content-inner">
            <div className="page-content-title">
              The Ledger Of Things
            </div>
            <div className="page-content-text">
              3DPass decentralized p2p platform represents Layer 1 blockchain,
              the Nodes of which will prevent assets form copying, even if you
              change its model with one dot, pixel or one byte. We call it "The
              Ledger of Unique Things".
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/blockchain_of_things1.png"
              alt="img"
            />
            <div className="page-content-text">
              The platform provides the ability to develop the endless of useful
              smart contracts and dApps the logic of which would be tightly
              tethered to something we use in life. Every object, transformed by
              3Dpass, acquires its own unique and sustainable identity called
              HASH ID which serves to be as 1:1 correspondence between the
              object and its asset.
            </div>
            <div className="page-content-text">Useful Links: </div>
            <ul className="page-content-text">
              <li>
                <Link to="https://github.com/3Dpass/3DP">The Network NODE</Link>
              </li>
              <li>
                <Link to="https://github.com/3Dpass/3DP/wiki">Development Wiki</Link>
              </li>
              <li>
                <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">3DPRC-2 tokenization API</Link>
              </li>
              <li>
                <Link to="https://telemetry.3dpscan.io/">
                  Network telemetry server
                </Link>
              </li>
              <li>
                <Link to="https://3dpscan.io/">Block explorer</Link>
              </li>
              <li>
                <Link to="https://explorer-api.3dpscan.io/graphql/">
                  Block data graphql API
                </Link>
              </li>
              <li>
                <Link to="https://wallet.3dpass.org/">3Dpass Web3 wallet</Link>{" "}
                |{" "}
                <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org&types=eNqrVnJMTs4vzSvxzEvLV7JC5oVnlmS4lCbmBKWmOYPElHSUHFNSilKLi5HUpQBFffLzs0sLgvNLi5JT0aTCUzPTM0qAgqXGRkq1AEo%2FJWY%3D">
                  polkadot js wallet
                </Link>
              </li>
              <li>
                <Link to="/mainnet#mining-pool">How to start mining</Link>
              </li>
              <li>
                <Link to="/mainnet#validator">How to become Validator</Link>
              </li>
              <li>
                <Link to="/features#smartcontracts">Smart contracts</Link> trait
                leveraging <Link to="https://use.ink/">ink</Link>, a Rust-based
                embedded domain specific language (eDSL) for writing WebAssembly
                smart contracts.
              </li>
              <li>
                <Link to="/governance">Governance</Link> and{" "}
                <Link to="/forkless-upgrade">forkless upgrade</Link>,{" "}
                <Link to="/mainnet#chain">On-chain Identity</Link>
              </li>
              <li>
                <Link to="https://substrate.io">Substrate</Link>-based and
                scalable solution: IPFS storage,{" "}
                <Link to="/features#smartcontracts">Smart contracts</Link>, etc.
                Learn more about{" "}
                <Link to="/features#integration">
                  3Dpass network NODE integration.
                </Link>
              </li>
            </ul>
            <a href="/mainnet">
            <div className="page-lead-content">
              Mainnet
                <div className="page-lead-button">Join the Network</div>
            </div>
            </a>
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2">
          <div className="page-content-inner">
          <div className="page-content-title">3DPRC-2 the object tokenizaton standard</div>
          <div
              className="page-content-subtitle"
              id="3dprc-2-overview"
            >
              Overview
            </div>
            <div className="page-content-text">
              <Link to="/proof-of-scan#3dprc-2">3DPRC-2</Link> (3Dpass Request for Comments), <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">proposed</Link> by PaulS in September 2023, 
              is a standard p2p protocol for the tokenization of the user objects operating within “The Ledger of Things”. Its implementation represents
               one of the most useful aspects of "Proof of Scan" consensus, which opens the capability 
               for the network to provide the tokenization service to customer. 
            </div>
            <div className="page-content-text" id="difference">
              Learn the difference between the revolutionary 3DPRC-2 tokenizaton standard based on the object recognition
              {" "}
               and conventional ERC-721 for NFT using just an account signature:
            </div>
            <video
              src="/images/3DPRC-2.mp4"
              className="page-video"
              controls
            ></video>
            <Link to="/assets#object-authentication">
            <div className="page-lead-content">
               Put your object on The Ledger of Things
                <div className="page-lead-button">Put the object</div>
            </div>
            </Link>
            <div className="page-content-subtitle" id="3dprc-2-implementation">
              3DPRC-2 implementation:
            </div>
            <ul className="page-content-text">
              <li>
                <strong>
                  Advanced version of <Link to="/proof-of-scan">Proof of Scan</Link>
                </strong>
                - The protocol is weaved into “The Ledger of Things” PoW component in a way to tackle the user 
                objects authentication along with the ones being mined. The protocol ensures for users to get 
                a complete service always resulting as either the object acceptance (the asset is allowed to 
                be created) or its rejection (copy is found on the db). The network is responsible for the user 
                object authentication as much as for any block on the blockchain irrespective to the actual 
                dollar value attached to
              </li>
              <li>
                <strong>
                  “0 knowledge proof”
                </strong> 
                - Every judgement provided by miners about the object authenticity is protected by a secret knowledge 
                of its HASH ID being unavailable for them, until they get the object processed. Every proof is being 
                verified by the majority of the network to make a final decision on whether to accept or reject the 
                block containing the judgement
              </li>
              <li>
                <strong>
                <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan">PoScan</Link> pallet and <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> module
                (storage and <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>) </strong> 
                - The PoScan pallet as well as the poscanAssets module are both integrated into the network runtime providing the access to the network 
                decentralized storage by means of the object tokenization <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>, which allows for:
                <ul className="page-content-text">
                  <li>
                    the user object authentication and its protection from being copied to the extent for the 
                    recognition algorithm precision;
                  </li>
                  <li>
                    non-fungible backed asset creation;
                  </li>
                  <li>
                    property rights definition and its transfers;
                  </li>
                  <li>
                    backed cryptocurrency issuance (the tokenizaton of the object share)
                  </li>
                  <li>
                    collective asset management
                  </li>
                </ul>
              </li>
            </ul>
            <div className="page-content-subtitle" id="3dprc-2-assets">
              Fungible and Non-fungible backed assets
            </div>
            <div className="page-content-text">
            By means of dealing with the additional properties 3DPRC-2 makes it possible to tokenize the object into either 
            Fungible or Non-fungible asset, depending on the purpose of its tokenization. And only one of its properties could have been tokenized simultaneously. 
            It is prohibited to have multiple properties tokenized at the time (It's not allowed to sell one object twice).
            </div>

            <div className="page-content-text">
            Thus, the tokenization of the object Share, as well as such properties as: Weight, Square, Volume, Length, etc, 
            will always stand for its collective ownership or ICO (Initial Coin Offering). 
            These properties will be tokenized as Fungible assets, the MaxSupply of which is limited to the property value attached to the object. 
            For example, if the object weight is 1000 gram, then the "MaxSupply=1000" limit will be set up for the token created (you won't be able to issue more than 1000 minimum indivisible units). 
            While transferring tokens, the object share ownership is being transferred accordingly.
            </div>
            <Link to="/assets#3dprc2-fungible">
            <div className="page-lead-content">
               Get the object share tokenized
                <div className="page-lead-button">Tokenize</div>
            </div>
            </Link>
            <div className="page-content-text">
            3DPRC-2 allows to tokenize every single object into the Non-Fungible asset.
            If chosen, the "MaxSupply = 1" limit will be applied to the token created. Whereas "1" is the minimum indivisible unit of The Ledger of Things. 
            By means of transferring this unit, the ownership of the entire object is being transferred.
            </div>
            <Link to="/assets#3dprc2-non-fungible">
            <div className="page-lead-content">
               Turn the object into non-fungible asset
                <div className="page-lead-button">Tokenize</div>
            </div>
            </Link>
            <div className="page-content-subtitle" id="3dprc-2-asset-management">
              Collective asset management
            </div>
            <div className="page-content-text">
              The asset management system is designed for its shareholders to manage the asset via democracy vote.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="fungibleassets">
          <div className="page-content-inner">
          <div className="page-content-title">Fungible assets</div>
          <div className="page-content-text">
              "The Ledger of Things" is equipped with the <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> module
              providing some useful methods for dealing with simple fungible assets without a necessity to run a smart contract.
            </div>
            <Link to="/assets#conventional-fungible-assets">
            <div className="page-lead-content">
              Regular fungible asset
                <div className="page-lead-button">Create</div>
            </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="smartcontracts">
          <div className="page-content-inner">
            <div className="page-content-title">Smart Contracts</div>
            <div className="page-content-text">
              Substrate Smart contract trait using <Link to="https://use.ink/">ink</Link>, a <Link to="https://www.rust-lang.org/">Rust</Link>-based embedded
              domain specific language (
              <Link to="https://wiki.haskell.org/Embedded_domain_specific_language">
                eDSL
              </Link>
              ) for writing{" "}
              <Link to="https://webassembly.org/">WebAssembly</Link> smart
              contracts. Learn more about{" "}
              <Link to="https://use.ink/ink-vs-solidity/">
                how could that be compared to Solidity
              </Link>
              . Follow the <Link to="/fungible-tokens-minting">guiudelines</Link> to run your smart contract on 3Dpsass.
            </div>
            <div className="page-content-text">
              Coming soon! EVM emulator pallet, which allows for unmodified EVM
              code to be executed on 3Dpass blockchain. This feature is designed
              to closely emulate the functionality of executing contracts on the
              Ethereum mainnet within 3Dpass network.
            </div>
            <Link to="/assets#smart-contracts">
            <div className="page-lead-content">
              Smart contract
                <div className="page-lead-button">Run</div>
            </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="atomicswap">
          <div className="page-content-inner">
          <div className="page-content-title">Atomic Swap</div>
           <div className="page-content-text">
            <Link to="https://github.com/paritytech/substrate/tree/master/frame/atomic-swap">Atomic Swap</Link> Substrate module providing the option of making safely and the time-proof-based p2p swap between two given assets issued on The Ledger of Things.
            In order to recieve some funds, atomically sent from one account to another, the "claim" transaction must be initiated by the target account. 
            If the swap has still not been claimed during the timeframe limit, it will then be available to cancel by its sender. 
           </div>
          </div>
        </div>
        <div className="page-content-block" id="dex">
          <div className="page-content-inner">
          <div className="page-content-title">Embedded DEX module</div>
           <div className="page-content-text">
            The <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/asset-conversion">assetConversion</Link> Substrate module representing a full featured decentralized exchange, based on <Link to="https://github.com/Uniswap/v2-core">Uniswap v2</Link> protocol rules, integrated into The Ledger of Things runtime.  
            Enjoy the <Link to="https://github.com/3Dpass/3DP/wiki/DEX-module-API">DEX API</Link> on Github, create Liquidity Pools and trade the assets issued on The Ledger of Things.
           </div>
           <ul className="page-content-text">
            <li>
            <Link to="https://swap.3dpscan.io">3DPass swap DEX User Interface</Link>
            </li>
            <li>
            <Link to="https://github.com/3Dpass/swap">DEX UI GitHub link</Link>
            </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="tokenization">
          <div className="page-content-inner">
            <div className="page-content-title">
              The Tokenization Of Real And Virtual 3D Objects
            </div>
            <div className="page-content-text">
              The only difference between tokenization process of either real or
              virtual 3D objects is the way you are getting seed data to create{" "}
              <Link to="/features#3drecognition-hash-id">HASH ID</Link> out of. Dealing with virtual ones, there is no problem to
              get 3D model and other properties, since they are initially
              digital. Howener, seed data extraction out of real 3D objects
              takes efforts and is not always possible because of nowadays
              limited technological capabilities. On top of it, the utilization
              of tokens, produced out of virtual objects, might be the way
              different due to the "virtual" material they are created from.
              There is no fungibility restrictions, no proof of exisctence
              problems, etc.
            </div>
            <div className="page-content-subtitle">
              Tokenization Of Real World Objects
            </div>
            <div className="page-content-text">
              Using a smartphone camera or professional scanners and lab
              measurements (depends on how much precision do you need), you can
              extract some seed data from a real 3D object which is, basically,
              a 3D scan ({" "}
              <Link to="https://en.wikipedia.org/wiki/STL_%28file_format%29">
                .stl
              </Link>{" "}
              or{" "}
              <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">
                .obj
              </Link>{" "}
              standards are supported). And then, by means of using <Link to="/pass3d">pass3d
              </Link> recognition toolkit, you can produce its <Link to="/features#3drecognition-hash-id">HASH ID</Link>, as long as the
              object has a solid shape. Flexible ones won't work because their
              shape is unstable and might not be recognized by 3Dpass. However,
              there is a possibility to tokenize a 3D model of flexible things
              (ex. clothes) in one state (ex. a t-shirt put on a mannequin) and
              then use it as the standard for Machine Learning recognition.
            </div>
            <div className="page-content-text">
              For example, you can tokenize a rough diamond and then divide it
              by carats in digital and trade the carats on the market. And if
              you put in an owner's fingerprint and create a complex <Link to="/features#3drecognition-hash-id">HASH ID</Link>
              {" "}
              from both the fingetprint and the diamond's properties (shape,
              weight, clarity, etc), then you'll have a personal digital asset.
              Now, not only the diamond is able to recognize but also its owner,
              so all the property rights might be followed.
            </div>
            <div className="page-content-text">
              However, all the initial seed data of the asset remains private,
              unless the owner would reveal it themself (in the case described
              above it's original data of both fingerprint and the diamond shape
              + its additional properties). It's "hidden behind the <Link to="/features#3drecognition-hash-id">HASH ID</Link>"
              which is suppose to be public since it's strong enough to stand
              against the attack attempting to reconstruct the seed data. At
              least, the <Link to="/features#3drecognition-hash-id">HASH ID</Link> is protected by{" "}
              <Link to="https://en.wikipedia.org/wiki/Multi-factor_authentication">
                multi-factor authentication
              </Link>
              :
            </div>
            <div className="page-content-subtitle">
              Tokenization of virtual objects
            </div>
            <div className="page-content-text">
              As it was mentioned above, there is no problem to extract seed
              data if you are dealing with virtual 3D objects. All you need to
              do is to get 3D model (.stl or .obj) + additional property values
              and process them via 3Dpass recognition toolkit. After <Link to="/features#3drecognition-hash-id">HASH ID</Link> is
              produced, there is no restrictions related to physical object.
              Therefore, you can use your asset what eveter you like, although
              it would've never been possible to do the same in real world.
            </div>
            <div className="page-content-text">
              For example, you can tokenize a virtual diamond and then leverage
              it as a fungible token or you can get it melted within the virtual
              space such as: metaverse, augmented reality, gaming, etc.
            </div>
            <div className="page-content-subtitle">
              Tokenization Of The Object Shape Changes (in dynamic)
            </div>
            <div className="page-content-text">
              One of the most important options to acknowledge about
              tokenization is that you can capture the object shape changes in
              dynamic. Not only static option is avalable. Let's imagine the
              case of a car accident. A car had its original 3D shape and then
              it was damaged, although the asset is still the same. The car's
              owner has not been changed as well. Assuming the car had its <Link to="/features#3drecognition-hash-id">HASH ID</Link> saved on 3Dpass dezentralized ledger before the accident, the
              owner can create a new <Link to="/features#3drecognition-hash-id">HASH ID</Link> and link it to the former one in
              the transaction. As a result we have a sequence of assets linked
              together on a blockchain which represents the object shape changes
              in dynamic.
            </div>
            <div className="page-content-subtitle">
              Property rights definition
            </div>
            <div className="page-content-text">
              Adjust the algorithm's recognition parameters to define the
              ownership rights border which would distinguish the real asset
              from the fake ones. In order to create a personal asset use the
              biometric data with{" "}
              <Link to="/features#multiobject">multi-object options</Link>.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3Dpass_ledger.png"
              alt="img"
            />
            <div className="page-content-text">Utilization:</div>
            <ul className="page-content-text">
              <li>NFT (non-fungible tokens)</li>
              <li>Insurance</li>
              <li>Banking</li>
              <li>E-commerce</li>
              <li><Link to="/community#use-cases-gaming">Gaming</Link></li>
              <li><Link to="/community#use-cases-gaming">Added reality</Link></li>
              <li><Link to="/community#use-cases-gaming">Metaverse</Link></li>
              <li><Link to="/community#use-cases-diamonds">Jewelry and Art</Link></li>
              <li>Real estate and construction</li>
              <li>Health care</li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="passwords">
          <div className="page-content-inner">
            <div className="page-content-title">
              Passwords And Keys Creation & Recovery
            </div>
            <div className="page-content-text">
              One of the sideways of 3Dpass technology aplication is passwords
              and keys creation and its recovery by means of 3D scanning the
              object. And, of course, <Link to="/features#multiobject">Multi-object option</Link> is supposed to be
              used. To say, there is a similarity to the wide spread "brain
              wallet" technology providing the ability to recover your crypto
              wallet keys with the backup "seed phrase". 3Dpass exploits the
              same idea with the only difference of 3D object shape provides the
              seed data instead. In combination with owner's biometric data or
              any additional properties, this complex <Link to="/features#3drecognition-hash-id">HASH ID</Link>, made out of
              several objects, becomes quite resistant against the attack and
              has its own advantages, such as:
            </div>
            <ul className="page-content-text">
              <li>
                Resistant data carrier might be chosen for a seed. Ex. a piece
                of rock won't have any damage after being several months under
                the solar radiation, water, electromagnetic radiation,
                temperature (-100C +500C), etc. A piece of paper or flash memory
                drive would be completely damaged at the same circumstances.
              </li>
              <li>
                Human factor protection might be applied. Ex. there's no
                possibility to put any changes into the seed data without
                deforming the real object if it was picked up as a seed.
                Comparing to the back up phrase, people have direct access to
                the data and might damage it by accident while copy and paste or
                what ever. Unfortunately, this is a really common case.
              </li>
              <li>
                Quick copy protection might be leveraged. Ex. It takes time to
                scan a real 3D object much more than just to grab a photo of
                which, meaning the piece of paper or a tablet screen is easy to
                take capture from.
              </li>
            </ul>
            <div className="page-content-text">Utilization:</div>
            <ul className="page-content-text">
              <li><Link to="/community#use-cases-crypto">Cryptocurrency wallets</Link></li>
              <li>Access control systems</li>
              <li>Backups data encryption</li>
              <li>Keys and passwords from internet accounts</li>
              <li>Multi-factor authenticaton</li>
            </ul>
            <div className="page-content-text">
              Use either <Link to="/mobile-wallet">3Dpass mobile wallet</Link> or{" "}
              <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> CLI tool
              for Linux to generate your password out of 3D object. The mobile
              wallet is equiped with the feature of <Link to="/mobile-wallet#creation">3D-object-wallet creation</Link>.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="integration">
          <div className="page-content-inner">
            <div className="page-content-title">Integration</div>
            <div className="page-content-text">
              Given the fact that 3Dpass is an <Link to="https://github.com/3dpass">open source</Link> and non-profit
              project, meaning anyone can add to development, there is an
              eco-system scheme (exposed down below) representing general
              functional elements:
            </div>
            <Link to="https://github.com/3Dpass/3DP" className="link-title">
              3Dpass NODE
            </Link>
            <div className="page-content-text">
              <Link to="/features#ledger">The Ledger of Unique Things</Link> Layer 1 blockchain Node
              implementation. Based on <Link to="https://substrate.io/">Substrate</Link> framework.
            </div>
            <Link to="https://github.com/3Dpass/pass3d" className="link-title">
              Pass3d Toolkit
            </Link>
            <div className="page-content-text">
              Object recognition algorithms integration (<Link to="/grid2d">Grid2D</Link> and others) This
              toolkit consists of stable recognition algorithms used for
              identification of objects (3D objects and others, <Link to="/proof-of-scan#object">learn more {">>"}</Link> ). Since the
              recognition technology is what the digital transformation process
              of any object is beginning from, and the result of which would
              always be its <Link to="/features#3drecognition-hash-id">HASH ID</Link>, it implies every application, integrated
              into 3Dpass eco-system, to have <Link to="/pass3d">Pass3d</Link> toolkit implemented.
            </div>
            <Link to="/features#scanproof" className="link-title">
              Proof of Scan protocol
            </Link>
            <div className="page-content-text">
              The consensus logic, using <Link to="/pass3d">Pass3d</Link> recognition toolkit, that allows
              network participants to agree upon the state of the blockchain.
              Hybrid: PoW + PoA GRANDPA deterministic finality , Algorithm:{" "}
              <Link to="/grid2d">Grid2D</Link>.
            </div>
            <Link to="https://wallet.3dpass.org/" className="link-title">
              3Dpass Web 3.0 wallet
            </Link>
            <div className="page-content-text">
              Desktop users and IoT labs integration
            </div>
            <Link
              to="https://github.com/3Dpass/threedpass"
              className="link-title"
            >
              Mobile Wallet
            </Link>
            <div className="page-content-text">
              Smartphone and tablets users integration, object recognition and
              its tokenization
            </div>
            <Link
              to="https://substrate.io/developers/smart-contracts/"
              className="link-title"
            >
              Smart contracts toolkit
            </Link>
            <div className="page-content-text">
              <Link to="https://substrate.io/">Substrate</Link> smart contract tools using <Link to="https://paritytech.github.io/ink-docs/">ink</Link>, a <Link to="https://www.rust-lang.org/">Rust</Link>-based embedded
              domain specific language (<Link to="https://wiki.haskell.org/Embedded_domain_specific_language">eDSL</Link>) for writing <Link to="https://webassembly.org/">WebAssembly</Link> smart
              contracts. Learn more about <Link to="https://paritytech.github.io/ink-docs/ink-vs-solidity">how it compares to Solidity</Link>. As well,
              it allows unmodified EVM code to be executed on 3Dpass blockchain.
              Some special Substrate features are designed to closely emulate
              the functionality of executing contracts on the Ethereum mainnet
              within the 3Dpass network.
            </div>
            <Link to="https://ipfs.io/" className="link-title">
              IPFS storage
            </Link>
            <div className="page-content-text">
              Decentralized storage for assets
            </div>
            <Link to="#" className="link-title">
              RPC
            </Link>
            <div className="page-content-text">
              Remote Procedure Call provides some capabilities that allow
              blockchain users to interact with the network. The NODE provides
              HTTP and WebSocket RPC servers. Follow{" "}
              <Link to="https://github.com/3Dpass/3DP/wiki/Set-up-WSS-for-Remote-Connections">
                these
              </Link>{" "}
              guidelines set up the wss API endpoint.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/eco_system1.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
