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
              3D Object Recognition
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
          <a href="#multiobject">
            <div
              className={
                locationHash.includes("multiobject")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Multi Object Options
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
          <a href="#tokenization">
            <div
              className={
                locationHash.includes("tokenization")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Tokenization of 3D Objects
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
            <div className="page-content-title">3D Object Recognition</div>
            <div className="page-content-text">
              In the foundation of 3DPass lies an <Link to="https://github.com/3dpass">open source</Link> objects
              recognition technology including various of {" "}
              <b>fundamental-research-based algorithms</b> created by our team and
              community members. The algorithms ecpecially have been adapted to
              work within blockchain inviroment which doesn't provide any
              feedback to compare objects to one another while the processing is
              going on. Mostly, it caused by the absence of trusted backend,
              since the blockchain architecture implies the equal nodes to be
              owned by users, who don't trust to each other. So that any object,
              event or transaction must be proved by math calculations
              performing off-line. The first algorithm called <Link to="/grid2d">Grid2d</Link> is designed
              to recognize 3D objects shape. It was <Link to="/https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">suggested</Link> by Michael Co in
              2020 as a response to the <Link to="https://3dpass.medium.com/3d-objects-digital-transformation-5181973909a8">Real world objects digital
              transformation challenge</Link>. The implementation of those alghorithms
              is <Link to="/pass3d">pass3d recognition toolkit</Link> which is free to <Link to="/community#download">download</Link> and it
              serves as a significant part of <Link to="/proof-of-scan">Proof of Scan</Link> p2p network
              consensus used in <Link to="/features#ledger">3DPass blockchain decentralized platform</Link>.
            </div>
            <div className="page-content-subtitle" id="3drecognition-hash-id">
              Hash ID
            </div>
            <ul className="page-content-text">
              <li>
                <Link to="/pass3d">pass3d recognition toolkit</Link> captures some distinctive properties
                of the object shape and produces its digital identity named <Link to="/features#3drecognition-hash-id">HASH ID</Link>, 
                which would remain stable no matter how many different 3D
                scans of the same object had been processed. It allows to
                establish one-to-one correspondence between the object and its
                digital asset, which conventional NFT doesn't. <a href="#difference">Learn this huge
                difference</a>.
              </li>
              <li>
                For example, if you have made 10 or more equal quality 3D scans
                of the same object, then you can process all of them by 3DPass,
                and outcoming <Link to="/features#3drecognition-hash-id">HASH IDs</Link> would match continiously.
              </li>
              <li>
                The recognition algorithm <Link to="/grid2d">Grid2d</Link> is flexible enough to adjust
                the definition level of processing to the 3D scanning resolution
                or accuracy of 3D model. It allows to define the asset property
                rights border and to distinguish whether or not the particular
                object is considered real or fake.
              </li>
              <li>
                HASH ID provides excellent level of privacy containing "0
                knowlege" of the object it was produced from. The object's seed
                data is protected by cryptographic standard <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA-256</Link>. 3DPass
                never collects any user's data, all the calculations needed to
                produce HASH ID perform offline on the user's device and
                utilizes RAM only.
              </li>
              <li>
                However, it's understood that we are able to distinguish 3D
                objects as much as their shape uniqueness. And either the
                scanning quality and app settings also matter. <Link to="/grid2d#hash">Learn more about
                HASH ID strength</Link>
              </li>
              <li><Link to="/proof-of-scan#object">What would be recognized next?</Link></li>
            </ul>
            <img
              className="page-img"
              src="/images/slide2_phone1.png"
              alt="img"
            />
            <a href="/mobile-wallet#download">
            <div className="page-lead-content">
              Download Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-text" id="difference">
              Learn the difference between sustainable unique identity <Link to="/features#3drecognition-hash-id">HASH ID</Link>
              {" "}
               and conventional NFT based on cryptocurrency wallet signature:
            </div>
            <video
              src="/images/video3dp.mp4"
              className="page-video"
              controls
            ></video>
          </div>
        </div>
        <div className="page-content-block" id="multiobject">
          <div className="page-content-inner">
            <div className="page-content-title">Multi Object Options</div>
            <div className="page-content-text">
              You can create a unique sustainable identity (<Link to="/features#3drecognition-hash-id">HASH ID</Link>) using not
              only one seed object, but also a combination of several ones
              instead. Either the object shape, combined with its additional
              properties (size, weight, density, clarity, owner's biometric
              data, etc.), or just a bunch of different-shaped 3D objects might
              be chosen. That complex <Link to="/features#3drecognition-hash-id">HASH ID</Link>, produced from a multi seed,
              becomes much more secured against the attack by means of{" "}
              <Link to="https://en.wikipedia.org/wiki/Multi-factor_authentication">multi-factor authentication</Link>. This option, as well, helps us to
              capture a few different properties inherent to the object. Let's,
              check out some examples:
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
            <div className="page-content-text">In this example:</div>
            <ul className="page-content-text">
              <li>3D Object is "something that you have" factor</li>
              <li>Fingerprint is "something that you are" factor</li>
              <li>
                PIN code or password or special movement or what so ever might
                be added as "something that you know" factor as well
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="scanproof">
          <div className="page-content-inner">
            <div className="page-content-title">Proof Of Scan Protocol</div>
            <div className="page-content-text">
            <Link to="/proof-of-scan">Proof of Scan</Link> is a revolutionary decentralized protocol, which is
              leveraged not only as 3DPass blockchain network consensus, but
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
              algorithm being used instead of some usual hash function like
              <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA256</Link>. As such, <Link to="/grid2">Grid2d</Link> algorithm is leveraged for 3D object
              recognition in 3DPass.
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
              3DPass exploits PoW (Proof of Work) concept for the block
              production, due to the fact that the recognition always takes
              computing power for the objects to get veryfied. In <Link to="/proof-of-scan">Proof of Scan</Link>{" "}
              3D object ( in <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">obj</Link>. format) is used as a "nonce". And so, miners
              are picking up a unique-shaped 3D object the <Link to="/features#3drecognition-hash-id">HASH ID</Link> of which,
              being sealed to the parent block hash with <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA256</Link>, would make {" "}
              <Link to="/grid2">Grid2d</Link> recognition algorithm produce a specific output ( the hash
              value below the limit called "Difficulty") like 000000...". <Link to="/mainnet">Learn {">>"}{" "}
              how to mine 3DPass coin</Link>
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
              Use <Link to="/mobile-wallet">3DPass mobile wallet</Link> to verify <Link to="/proof-of-scan">Proof of Scan</Link> to work.
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
              Read <Link to="https://3dpass.medium.com/proof-of-scan-consensus-how-does-that-work-7a88b0fc8530">this article</Link> to learn more about how <Link to="/proof-of-scan">Proof of Scan</Link> can be
              compared to conventional PoW (Proof of Work). Follow either the <Link to="/proof-of-scan">full protocol description</Link> or <Link to="/coin#white-papper">White paper</Link> to get some detailed
              information.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="ledger">
          <div className="page-content-inner">
            <div className="page-content-title">
              The Ledger OF Unique Things
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
              3DPass, acquires its own unique and sustainable identity called
              HASH ID which serves to be as 1:1 correspondence between the
              object and its asset.
            </div>
            <div className="page-content-text">Useful Links: </div>
            <ul className="page-content-text">
              <li>
                <Link to="https://telemetry.3dpass.org/#/0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66">
                  Network telemetry server
                </Link>
              </li>
              <li>
                <Link to="https://explorer.3dpass.org/">Block explorer</Link>
              </li>
              <li>
                <Link to="https://explorer-api.3dpass.org/graphql/">
                  Block explorer API
                </Link>
              </li>
              <li>
                <Link to="https://wallet.3dpass.org/">3DPass Web3 wallet</Link>{" "}
                |{" "}
                <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org&types=eNqrVnJMTs4vzSvxzEvLV7JC5oVnlmS4lCbmBKWmOYPElHSUHFNSilKLi5HUpQBFffLzs0sLgvNLi5JT0aTCUzPTM0qAgqXGRkq1AEo%2FJWY%3D">
                  polkadot js wallet
                </Link>
              </li>
              <li>
                <Link to="/mainnet#mining-pool">How to start mining</Link>
              </li>
              <li>
                <Link to="/mainnet#validator">How to become a Validator</Link>
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
                  3DPass network NODE integration.
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
        <div className="page-content-block" id="smartcontracts">
          <div className="page-content-inner">
            <div className="page-content-title">Smart Contracts And dApps</div>
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
                how it compares to Solidity
              </Link>
              . Follow the <Link to="/fungible-tokens-minting">guiudelines</Link> to run your smart contract on 3DPass.
            </div>
            <div className="page-content-text">
              Coming soon! EVM emulator pallet, which allows for unmodified EVM
              code to be executed on 3DPass blockchain. This feature is designed
              to closely emulate the functionality of executing contracts on the
              Ethereum mainnet within 3DPass network.
            </div>
            <div className="page-content-subtitle">Runtime Development</div>
            <div className="page-content-text">
              There is an alternative approach to implementation and execution
              of custom business logic called Runtime development, which allows
              for creation of custom "pallets" leveraging network events as a
              trigger. Custom pallet would provide a logic "what to do on new
              block initialization or finalization, storage changes, transaction
              status changes, etc." It might, as well, be equipped with RPC API
              calls to interact with and off-chain worker possibilities. Use{" "}
              <Link to="https://docs.substrate.io/fundamentals/runtime-development/">
                Substrate documentation
              </Link>{" "}
              for more details. Compare{" "}
              <Link to="https://stackoverflow.com/questions/56040779/when-should-i-build-a-substrate-runtime-module-versus-a-substrate-smart-contract">
                Smart Contracts VS Runtime development
              </Link>{" "}
              In order to implement a custom pallet into <Link to="https://github.com/3Dpass/3DP/blob/main/runtime/src/lib.rs">
                3DPass runtime
              </Link>{" "}
              Pull request is required.
            </div>
            <div className="page-content-subtitle">Fungible Tokens</div>
            <div className="page-content-text">
              As an example of leveraging the runtime development, 3DPass has
              integrated a pallet called "Assets" providing useful methods for
              dealing with simple fungible assets without a necessity to run a
              smart contract.
            </div>
            <Link to="/fungible-tokens-minting">
            <div className="page-lead-content">
              Fungible Tokens
                <div className="page-lead-button">Mint</div>
            </div>
            </Link>
          </div>
        </div>
        <div className="page-content-block" id="tokenization">
          <div className="page-content-inner">
            <div className="page-content-title">
              Tokenization Of Real And Virtual 3D Objects
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
              shape is unstable and might not be recognized by 3DPass. However,
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
              Tokenization Of The Object Shape Changes (in dinamic)
            </div>
            <div className="page-content-text">
              One of the most important options to acknowledge about
              tokenization is that you can capture the object shape changes in
              dinamic. Not only static option is avalable. Let's imagine the
              case of a car accident. A car had its original 3D shape and then
              it was damaged, although the asset is still the same. The car's
              owner has not been changed as well. Assuming the car had its <Link to="/features#3drecognition-hash-id">HASH ID</Link> saved on 3DPass dezentralized ledger before the accident, the
              owner can create a new <Link to="/features#3drecognition-hash-id">HASH ID</Link> and link it to the former one in
              the transaction. As a result we have a sequence of assets linked
              together on a blockchain which represents the object shape changes
              in dinamic.
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
              One of the sideways of 3DPass technology aplication is passwords
              and keys creation and its recovery by means of 3D scanning the
              object. And, of course, <Link to="/features#multiobject">Multi object option</Link> is supposed to be
              used. To say, there is a similarity to the wide spread "brain
              wallet" technology providing the ability to recover your crypto
              wallet keys with the backup "seed phrase". 3DPass exploits the
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
              Use either <Link to="/mobile-wallet">3DPass mobile wallet</Link> or{" "}
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
              Given the fact that 3DPass is an <Link to="https://github.com/3dpass">open source</Link> and non-profit
              project, meaning anyone can add to development, there is an
              eco-system scheme (exposed down below) representing general
              functional elements:
            </div>
            <Link to="https://github.com/3Dpass/3DP" className="link-title">
              3DPass NODE
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
              into 3DPass eco-system, to have <Link to="/pass3d">Pass3d</Link> toolkit implemented.
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
              3DPass Web 3.0 wallet
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
              it allows unmodified EVM code to be executed on 3DPass blockchain.
              Some special Substrate features are designed to closely emulate
              the functionality of executing contracts on the Ethereum mainnet
              within the 3DPass network.
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
