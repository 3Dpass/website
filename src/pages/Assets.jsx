import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Assets = () => {
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
        <div className="page-title">Assets</div>
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
              <div className="page-nav-line assets-general-line"></div>
            </div>
          </a>
          <a href="#general-tools">
            <div className="page-nav-inside">
              Tools and components
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#general-rwa">
            <div className="page-nav-inside">
              Real World Assets (RWA)
              <div className="inside-nav-circle"></div>
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
              <div className="page-nav-line assets-line"></div>
            </div>
          </a>
          <a href="#3dprc-2-object-authentication">
            <div className="page-nav-inside">
              The object authentication
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-non-fungible">
            <div className="page-nav-inside">
              The tokenization into non-fungible asset
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-fungible">
            <div className="page-nav-inside">
              The tokenization of the object share (fungible)
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#3dprc-2-asset-management">
            <div className="page-nav-inside">
              Asset management
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#conventional-assets">
            <div
              className={
                locationHash.includes("conventional")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Conventional assets
              <div className="page-nav-circle"></div>
              <div className="page-nav-line fungibleassets-line"></div>
            </div>
          </a>
          <a href="#conventional-fungible-assets">
            <div className="page-nav-inside">
              Fungible assets
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#conventional-non-fungible-assets">
            <div className="page-nav-inside">
              Non-fungible assets
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#smart-contracts">
            <div
              className={
                locationHash.includes("smart-contracts")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Smart contracts
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#transfers">
            <div
              className={
                locationHash.includes("transfers")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Assets transfers
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
              DEX (Decentralized Exchange)
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="general">
          <div className="page-content-inner">
            <div className="page-content-title">General</div>
            <div className="page-content-subtitle" id="general-tools">
              Tools and components
            </div>
            <div className="page-content-text">
              The Ledger of Things assets hub provides dApp developers with the following capabilities:
            </div>
            <ol className="page-content-text">
               <li>
                <Link to="#3dprc-2" className="link-title">3DPRC-2 standard</Link> - is a revolutionary tool for the tokenization of objects providing the object authentication/copy protection (based on recognition technology) as well as the  
                on-chain storage. The object could be tokenized into either non-fungible or fungible backed asset (the tokenization of the object share). 
               </li>
               <li>
                `poscanAssets` is an embedded universal module for dealing with either {" "}
                <Link to="#conventional-poscan-assets-fungible">regular fungible assets</Link> {" "}
                or <Link to="#3dprc-2-fungible">backed share-tokens</Link> used in 3DPRC-2 standard.
               </li>
               <li>
               <Link to="/assets#smart-contracts" className="link-title">Smart contract module</Link> using <Link to="https://use.ink/">ink</Link> embedded domain specific language.
               </li>
               <li>
               <Link to="https://swap.3dpscan.io" className="link-title">DEX (Decentralized Exchange)</Link>{" "}
               - embedded DEX module, based on Uniswap v2 rules, to trade the assets without a middleman. 
               The implementaion of the DEX is a custom version of the <i>`assetConversion`</i> trait available 
               through its <Link to="https://github.com/3Dpass/3DP/wiki/DEX-module-API">API</Link>. 
               </li>
            </ol>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/the_tokenization_of_the_object_share.png"
              alt="img"
            />
            <div className="page-content-subtitle" id="general-rwa">
              The Tokenization Of Real And Virtual 3D Objects
            </div>
            <div className="page-content-text">
              The tokenization process for both real and virtual 3D objects 
              primarily differs in how seed data is obtained to create the {" "}
              <Link to="/features#3drecognition-hash-id">HASH ID</Link>. {" "}
              With virtual objects, acquiring 3D models and other 
              properties is straightforward since they are inherently digital. 
              In contrast, extracting seed data from real 3D objects requires 
              significant effort and is sometimes constrained by current 
              technological limitations.
            </div>
            <div className="page-content-text">
              Moreover, tokens generated from virtual objects can differ significantly 
              due to their "virtual" nature. They do not face the same fungibility 
              restrictions or proof of existence challenges encountered with 
              real-world objects. This distinction underscores the unique 
              characteristics and advantages of tokenizing virtual assets 
              in digital environments.
            </div>
            <div className="page-content-subtitle">
              The Tokenization Of Real World Assets (RWA)
            </div>
            <div className="page-content-text">
              Using either a smartphone camera for basic needs or professional 
              scanners and lab measurements for higher precision, you can extract 
              seed data from a real 3D object through a process known as 3D scanning 
              (compatible with standards like ({" "}
              <Link to="https://en.wikipedia.org/wiki/STL_%28file_format%29">
                .stl
              </Link>{" "}
              or{" "}
              <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">
                .obj
              </Link>{" "}). 
              With this data, the 
              pass3d recognition toolkit can generate its HASH ID, provided the 
              object has a stable and solid shape. Objects that are flexible or 
              have unstable shapes may not be suitable for recognition by 3Dpass.
            </div>
            <div className="page-content-text">
              However, there's an alternative approach for tokenizing flexible 
              3D models, such as clothing. For instance, you can capture a 3D 
              model of a t-shirt worn on a mannequin in a specific state and 
              use it as a standard for recognition through Machine Learning 
              techniques. This method leverages the static representation of 
              the object to facilitate its recognition and tokenization in 
              digital environments.
            </div>
            <div className="page-content-text">
            For instance, you could tokenize a rough diamond and then divide it 
            digitally by carats to trade them on the market. By incorporating 
            the owner's fingerprint and creating a complex <Link to="/features#3drecognition-hash-id">HASH ID</Link> from both 
            the fingerprint and the diamond's properties (such as shape, weight, 
            clarity, etc.), you can create a personalized digital asset. In this 
            scenario, not only can the diamond be recognized, but its owner as well, 
            enabling comprehensive tracking of property rights. This approach ensures 
            both the authenticity and ownership of the digital asset are verifiable and secure.
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
              The Tokenization of virtual objects
            </div>
            <div className="page-content-text">
              As mentioned earlier, extracting seed data from virtual 3D objects poses no challenges. 
              Simply obtain the 3D model (.stl or .obj) along with additional property values and 
              process them using the 3Dpass recognition toolkit. Once the HASH ID is generated, 
              there are no restrictions tied to the physical object. Consequently, you can utilize 
              your asset however you wish, a capability that is often impossible in the real world.
            </div>
            <div className="page-content-text">
              For example, you can tokenize a virtual diamond and then leverage
              it as a fungible token or you can get it melted within the virtual
              space such as: metaverse, augmented reality, gaming, etc.
            </div>
            <div className="page-content-subtitle">
              The Tokenization Of The Object Shape Changes (in dynamic)
            </div>
            <div className="page-content-text">
              One crucial aspect of tokenization is its ability to capture changes in object shape 
              dynamically, not just in static states. Consider a scenario such as a car accident: 
              the car originally had a specific 3D shape, but after being damaged, its physical 
              form has changed while the ownership remains unchanged.
            </div>
            <div className="page-content-text">
              If the car's <Link to="/features#3drecognition-hash-id">HASH ID</Link> was previously saved on 
              the decentralized ledger of 3Dpass before 
              the accident, the owner can create a new HASH ID that reflects the car's altered shape 
              and link it to the original one through a transaction. This process results in a sequence 
              of linked assets on the blockchain, effectively documenting the dynamic changes in the 
              object's shape over time. This capability highlights the flexibility and comprehensive 
              record-keeping potential of blockchain-based asset tokenization.
            </div>
            <div className="page-content-subtitle">
              Property rights definition
            </div>
            <div className="page-content-text">
              To establish ownership rights and differentiate genuine assets from counterfeits, 
              it's crucial to adjust the algorithm's recognition parameters. This customization 
              defines the boundary that safeguards against fraudulent replicas. When creating 
              a personal asset, integrate biometric data along with <Link to="/features#multiobject">multi-object options</Link>. 
              This approach enhances security by ensuring that the asset's authenticity is 
              verifiable through a robust combination of unique identifiers and recognition algorithms.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3Dpass_ledger.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2">
          <div className="page-content-inner">
            <div className="page-content-title">3DPRC-2 the object tokenization standard</div>
            <div className="page-content-text">
                <Link to="/features#3dprc-2-overview">3DPRC-2</Link> standard is a revolutionary and the most powerful tool for the tokenization of objects leveraging these unique 
                features of the <Link to="/features#scanproof">Proof of Scan</Link> protocol based on recognition technology and thus protecting the assets from being copied.
                While in the process of the tokinizatiton, every object is being endowed with its unique identity called <Link to="/features#3drecognition-hash-id">Hash ID</Link> 
                {" "} the object will be recognized by all around the globe (in real as well as in virtual). 

                </div>
                <div className="page-content-text">
                It depends on the tokenization strategy that the object could be tokenized into either non-fungible or fungible backed asset 
                (the tokenization of the object share: <strong><i>%</i>; <i>Weight</i>; <i>Square</i>; <i>Length</i>; <i>Volume</i></strong>, etc).
                The object is being stored on The Ledger of Things decentralized storage, if approved by the object authentication protocol.
                Explore more detail by whatcing the 3DPRC-2 video explainer. {" "}
                Enjoy the <Link tp="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">3DPRC-2 poScan API</Link>. 
                Follow full <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2 standard description</Link>.
            </div>
            <video
              src="/images/3DPRC-2.mp4"
              className="page-video"
              controls
            ></video>
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2-object-authentication">
          <div className="page-content-inner">
            <div className="page-content-title">Put the object on chain through the authentication protocol</div>
                <div className="page-content-text">
              The user objects can be tokenized in accordance to <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> standard rules. 
            </div>
            <div className="page-content-subtitle" id="3dprc-2-put-object">
              Submit new object on The Ledger of Things
            </div>
            <div className="page-content-text">
              <strong>Using MOBILE WALLET:</strong>
            </div>
            <a className="message-text" href="/mobile-wallet#download">
            <div className="page-lead-content">
              Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-text">
              <strong>Using WEB WALLET or API:</strong>
            </div>
            <div className="page-content-text">
             1. 3D model in <i>.obj</i> format could be submitted:
            </div>
            <ul className="page-content-text">
              <li>Max file size: 150 kB</li>
              <li>Authentication fee: 1000 P3D (will be paid to miners and validators for their job)</li>
            </ul>
            <div className="page-content-text">
             2. Calculate the object <Link to="/features#3drecognition-hash-id">Hash ID</Link> by means of any of the following ways:
             <ul className="page-content-text">
              <li>
               Via the <Link to="/mobile-wallet">mobile wallet</Link>
              </li>
              <li>
               Using <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> cli tool with the exact set of parameters provided down below:
               <pre className="main-pre">
admin@admin pass3d % ./target/release/pass3d -s 12 -g 8 -a grid2d_v3a -d 10 -i rock.obj    
               </pre>
               The output would be like this:
               <pre className="main-pre">
admin@admin pass3d % ./target/release/pass3d -s 12 -g 8 -a grid2d_v3a -d 10 -i rock.obj
"7fbe267b208d0ab9c34fa184d4593d0ae39d5bb56852ecc633cb1f6d9eb5aae0"
"460c81f58510e211d162d458459f81575e630817c1b87bc3c0d2c3eec3ae68b7"
"8047c7a4d2a75ce466c9510edb37ac1e98826ef383ab5d4c860b5010e42faa6e"
"5001723ef6d85862733d25765f0700e381cc3a1f6d6b7dbb4efb8aeccc4615d4"
"b8efd617a07099edcdbf2596d10787a6e16a4c59a5e36e46adedc1dd2424b8c9"
"10c8d4984cf840845a7d7785871c70790bf1c55e11a3da54a41d3f21be5a7ea7"
"833a2fc1f26ab9eb9bcc5b4e668f5d6bb91d6f87fb0798f99ce6bb4730dfc218"
"abdedd28e03147d94e0d054d0bf24781bac01fdd81401cd3fb226b5a6e1a5371"
"97c538a99641202385572df245d9cfb300f895a6c94e7caf074023a5ead1c62c"
“db2453f53270c9003a63b4d643d9bcc991ad7630d70a0d1511781f74a7a00fee"
               </pre>
              </li>
              <li>
               Through the <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/extrinsics">Polka wallet</Link>  
               {" "} while being connected to the <Link to="https://github.com/3Dpass/3DP">Node</Link> in local (RPC API endpoint wss://127.0.0.1.:9944).
               The Node will calculate the Hash ID automatically on the object submit. 
              </li>
              </ul>
              </div>
              <div className="page-content-text">
                The object HASH ID represents top10 hashes from the <Link to="/grid2d">Grid2d</Link> recognition algorithm 
                output like in the example above (sometimes, it could be less than 10 hashes provided). The exact preset of its parameters such as <code>"-a grid2d_v3a -s 12 -g 8 -d 10"</code> must be used to create the Hash ID for the <code>Objects3D</code> category and <code>Grid2dLow</code> algorithm. 
                Learn more about the <Link to="/features#object-categories">object categories</Link>. 
              </div>
            <div className="page-content-text">
              3. Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/extrinsics">Polka wallet</Link> 
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#1-extrinsic-poscanputobject">PoScan pallet API</Link>)
            </div>
            <div className="page-content-text">
              In order to submit the object this method should be used <i> Extrinsics - PoScan - putObject(category, obj, numApprovals, hashes,  properties)</i>: 
            </div>
            <img
              className="page-img"
              src="/images/put_object_mainnet.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              4. Add the HASH ID calculated:
            </div>
            <img
              className="page-img"
              src="/images/poscan_add_hashid.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text" id="pick-up-additional-properties">
              5. Pick up the object additional properties.
              {" "} Be noticed, that a certain way of the object tokenization as well as the asset MaxSupply limitations will be defined by each property.
              {" "} So, pick up the properties inherent to the object in dependence on your tokenization strategy.
            </div>
            <div className="page-content-text">
            The object properties are categorized as follows:
            </div>
            <div className="page-content-text">
            <strong>Relative:</strong>
            </div>
            <ul className="page-content-text">
              <li>
              <strong>Non-fungible (propIdx: 0; MaxValue: 1)</strong> - allows for the object to be tokenized as a non-fungible asset. 
              {" "} <code>MaxSupply=1</code> rule will be applied to the token created for this property.
              </li>
              <li>
                <strong>Share (propIdx: 1; MaxValue: 1000000)</strong> - allows for the tokenization of the object share (percentage), 
                the MaxSupply value format of which is restricted to <code>10^x</code>. So, the <code>MaxSupply=10^x</code> rule will be applied to the token created for this property.
              </li>
            </ul>
            <div className="page-content-text">
            <strong>Absolute:</strong>
            </div>
            <ul className="page-content-text">
              <li>
            <strong> Weight (propIdx: 2; MaxValue: 1000000000000000000000000000000)</strong> - allows for the tokenization of the object weight, the <code>MaxSupply</code> value is limited to <code>2^128</code> (max value in the system).
              </li>
              <li>
              Any other measurable object property, which could be presented as an abloute value (ex. Length, Square, Volume, Density, Clarity, Presure, Time, Speed, Frequency, Bandwith, Amount of symbols and so forth)
              </li>
            </ul>
            <div className="page-content-text">
              The actual list of the object properties is available on the poScan module storage:
            </div>
            <img
              className="page-img"
              src="/images/poscan_properties.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              6. Set up the object additional properties.
              <img
              className="page-img"
              src="/images/poscan_additional_properties.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
             <div className="page-content-text">
              Here you go! Once having the object sumbmitted just wait for the authentication to finish and <Link to="/assets#get-object-info">get the object data</Link> to check the status on the poScan module storage.
              {" "} If Approved, the object starts being protected from copying and will be allowed to the tokenization steps. 
             </div>
             <img
              className="page-img"
              src="/images/poscan_sumbmit_the_object.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            </div>
            <div className="page-content-subtitle" id="get-object-info">
              Get the object data
            </div>
            <div className="page-content-text">
              Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/chainstate">Polka wallet</Link> 
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#2-poscan_getposcanobject">PoScan pallet API</Link>)
            </div>
            <div className="page-content-text">
              In order to get some data from the blockchain this method should be used <i> Chain state - PoScan - Objects(u32)</i>: 
            </div>
            <img
              className="page-img"
              src="/images/get_object_info.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
            The output returns the authentication status and all the data about the object from the storage. 
            Use <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#2-poscan_getposcanobject">this description</Link> for better understanding of the object parameters. 
          </div>
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2-non-fungible">
          <div className="page-content-inner">
            <div className="page-content-title">Getting the object tokenized into non-fungible asset</div>
            <div className="page-content-text">
            This method provided by the <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> module allows for the object creator to issue a backed currency 
            (a token backed by the object property). Only one of the object properties is allowed to be tokenized, 
            as long as the object is Approved at the authentication stage (see more <Link to="/assets#object-authentication">the object authentication</Link>).
            </div>
            <div className="page-content-text">
              In order to turn the object into non-fungible asset we are going to get its <code>Non fungible (propIdx: 0; MaxValue: 1)</code> property tokenized, if attached. 
              {" "} If the object has no "Non fungible" property <Link to="/assets#pick-up-additional-properties">attached</Link>, it is going to be impossible to create its backed non fungible asset. 
            </div>
            <div className="page-content-text">
            The poscanAsset logic gets the asset bounded to the user object and thus guarantees to have the token <strong>MaxSupply</strong> complied with the limit set up by the property value.
            {" "} For Non fungible assets the <strong>MaxSupply</strong> will be restricted to 1 mininmum indivisible unit in the system. While transfering this token, the property rights to the object are being transferred entirely, 
            {" "} because of indivisibility of the min unit tethered to the object. 
            </div>
            <div className="page-content-text">
              <strong>Using MOBILE WALLET:</strong>
            </div>
            <a className="message-text" href="/mobile-wallet#download">
            <div className="page-lead-content">
              Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-text">
              <strong>Using WEB WALLET or API:</strong>
            </div>
            <div className="page-content-text">
              1. Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/chainstate">Polka wallet</Link> 
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#6-extrinsic-poscanassetscreate">poscanAssets pallet API</Link>)
            </div>
            <img
              className="page-img"
              src="/images/create_backed_asset.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
             <div className="page-content-text">
              2. Set up metadata for the asset created
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#7-extrinsic-poscanassetssetmetadata">poscanAssets pallet API</Link>)
            </div>
            <img
              className="page-img"
              src="/images/set_metadata_non-fungible.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              3. Mint your non fungible token, which stands for transferrable property rights to the object.
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#8-extrinsic-poscanasstsmint">poscanAssets pallet API</Link>)
            </div>
            <img
              className="page-img"
              src="/images/mint_non_fungible.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Congratulations! You have actually issued the Non fungible asset backed by the object, which can be transfered from one account to another.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2-fungible">
          <div className="page-content-inner">
            <div className="page-content-title">The tokenizaton of the object share</div>
            <div className="page-content-text">
            This method provided by the <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> module allows for the object creator to issue a backed currency 
            (a token backed by the object property). Only one of the object properties is allowed to be tokenized, 
            as long as the object is Approved at the authentication stage (see more <Link to="/assets#object-authentication">the object authentication</Link>).
            </div>
            <div className="page-content-text">
              In order to turn the object share into a backed fungible asset we are going to get its <code>Share (propIdx: 1; MaxValue: 1000000)</code> property tokenized, if attached. 
              {" "} If the object has no <strong>Share</strong> property <Link to="/assets#pick-up-additional-properties">attached</Link>, it is going to be impossible to create its share token. 
            </div>
            <div className="page-content-text">
              Not only the object <strong>ownership share</strong> (its stake in %) can be tokenized but also such measurable properties as <strong> Length, Square, Volume, Density, Clarity, Presure, Time, Speed, Frequency, Bandwith, Amount of symbols</strong> and so forth.
              All we have to do is to pick up one of these properties instead. The list of additional properties is available on the poScan module storage: <Link to="/assets#pick-up-additional-properties">how to pick up an additional property</Link>. 

            </div>
            <div className="page-content-text">
            The poscanAsset logic gets the asset bounded to the user object and thus guarantees to have the token <strong>MaxSupply</strong> complied with the limit set up by the property value.
            {" "} For the object <strong>Share</strong> the <strong>MaxSupply</strong> will be restricted to 1000000 mininmum indivisible units. While transfering any amout of the share tokens, the property rights to the object are being transferred accordingly. 
            {" "} For example, if 1000000 share tokens was issued (100% of the objects share), and 200000 of them was transferred, therefore 20% of the object ownership rights was transferred.  
            </div>
            <div className="page-content-text">
              <strong>Using MOBILE WALLET:</strong>
            </div>
            <a className="message-text" href="/mobile-wallet#download">
            <div className="page-lead-content">
              Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-text">
              <strong>Using WEB WALLET or API:</strong>
            </div>
            <div className="page-content-text">
              1. Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/extrinsics">Polka wallet</Link> 
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#6-extrinsic-poscanassetscreate">poscanAssets pallet API</Link>)
              and create a fungible token tethered to the object. Thre MaxSupply value defined by the object property cannot be exceeded.
            </div>
            <img
              className="page-img"
              src="/images/share_token_create.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
             <div className="page-content-text" id="set-metadata">
              2. Set up metadata for the asset created
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#7-extrinsic-poscanassetssetmetadata">poscanAssets pallet API</Link>)
            </div>
            <img
              className="page-img"
              src="/images/share-token_set_metadata.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text" id="mint">
              3. Mint your share token, which stands for transferrable property rights to the object.
              {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#8-extrinsic-poscanasstsmint">poscanAssets pallet API</Link>)
              {" "} Thee token MaxSupply cannot be exceeded.
            </div>
            <img
              className="page-img"
              src="/images/mint_share_tokens.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Congratulations! You have actually issued 100% share tokens backed by the object, which can be transfered from one account to another. 
            </div>
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2-asset-management">
          <div className="page-content-inner">
            <div className="page-content-title">Backed asset management</div>
            <div className="page-content-text">
                Coming soon!

                </div>
          </div>
        </div>
        <div className="page-content-block" id="conventional-assets">
          <div className="page-content-inner">
            <div className="page-content-title">
              Conventional assets
            </div>
            <div className="page-content-subtitle" id="conventional-fungible-assets">
              Regular fungible assets
            </div>
            <div className="page-content-text">
              The Ledger of Things is equipped with two different modules to deal with simple fungible assets, such as: </div>
              
              <ol className="page-content-text">
                <li>
                <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> embedded module
                </li>
                <li>
                Substrate <Link to="https://github.com/paritytech/substrate/tree/master/frame/contracts">Smart contracts</Link> module using <Link to="https://use.ink/">ink</Link>, a
              {" "} <Link to="https://www.rust-lang.org/">Rust</Link>-based embedded domain specific language (<Link to="https://wiki.haskell.org/Embedded_domain_specific_language">eDSL</Link>) for writing
              {" "} <Link to="https://webassembly.org/">WebAssembly</Link> smart contracts. Learn more about <Link to="https://use.ink/ink-vs-solidity/">how could it be compared to Solidity</Link>
                </li>
              </ol>
              <div className="page-content-text">
                The main difference between these two approaches is the smart contract logic could be totally separated from the Ledger of Things 
                {" "} <Link to="https://github.com/3Dpass/3DP">Node</Link> logic the contract is running on. 
                So, any potential changes in the Ledger of Things Node logic will not affect the smart contract operating. However, the <i>GAS fee</i> 
                {" "} is supposed to be paid, and the <i>limitations</i> of <Link to="https://use.ink/">ink</Link> must be taken by the asset owner/developer.
              </div>
              <div className="page-content-text">
                The implication for the utilization of <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> module is having the 
                asset owner engagement at such level, which would be enough to agree with the general vision of 3Dpass as well as with any potential 
                changes applied onto the next versions of The Ledger of Things <Link to="https://github.com/3Dpass/3DP">Node</Link>.
                Good news is using <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> is always <i>GAS free</i>. 
                There is no limitaions to the language dApp is written in is being applied, as well.
              </div>
            <div className="page-content-subtitle" id="poscan-assets-fungible">
              Using `poscanAssets` module to deal with regular fungible assets:
            </div>
            <div className="page-content-text">
              The <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan-assets">poscanAssets</Link> embedded module 
              provides some useful methods for dealing with simple fungible assets without a necessity to run a smart contract:
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
              <strong>Using MOBILE WALLET:</strong>
            </div>
            <a className="message-text" href="/mobile-wallet#download">
            <div className="page-lead-content">
              Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-text">
              <strong>Using WEB WALLET or API:</strong>
            </div>
            <div className="page-content-text">
               1. Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/extrinsics">Polka wallet</Link> {" "}
               and create your asset with `create`. (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#6-extrinsic-poscanassetscreate">poscanAssets pallet API</Link>){" "}
               Make sure the <i>`objDetails`</i> option is skipped: 
            </div>
            <img
              className="page-img"
              src="/images/create_fungible.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              2. Once created, follow these methodes to <Link to="#set-metadata">Set metadata</Link> and <Link to="#mint">Mint</Link>.
            </div>
            <div className="page-content-text">
              3. In order to send tokens from one account to another use the <Link to="#3dprc2-transfers">transfer</Link> method.
            </div>
            <div className="page-content-text">
              All the methods of the poscanAssets module are available via the <Link to="https://polkadot.js.org/docs/api/">polkadot JS API</Link>. 
              The Assets <Link to="https://polkascan.github.io/py-substrate-metadata-docs/statemint/assets/">API metadata</Link> description. 
            </div>
            <div className="page-content-subtitle" id="conventional-non-fungible-assets">
              Conventional non-fungible assets
            </div>
            <div className="page-content-text">
             There is the only way to exploit some regular NFT (ex. based on ERC-721) on The Ledger of Things 
             is to run a <Link to="#smart-contracts">smart contract</Link>. 
             Due to the lack of the object identity and other limitations, it is recommended leveraging 
             {" "} <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> standard instead. 
             Check out  <Link to="/features#3dprc-2-overview">3DPRC-2 explainer video</Link> or enjoy 
             {" "} <Link tp="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">3DPRC-2 poScan API</Link>.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="smart-contracts">
          <div className="page-content-inner">
            <div className="page-content-title">Smart contracts</div>
            <div className="page-content-text">
              3DPass is supporting Substrate smart contract trait using <Link to="https://use.ink/">ink</Link>, a
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
                Create your own contract or use some <Link to="https://github.com/paritytech/ink/tree/master/examples">examples</Link> (ERC-20, ERC-721,
                etc)
              </li>
              <li>Upload the contract via contracts-ui</li>
              <li>Interact with your contract via its API</li>
            </ol>
            <div className="page-content-subtitle">Useful links:</div>
            <ul className="page-content-text">
              <li>
                Visit <Link to="https://substrate.stackexchange.com/questions/tagged/ink?tab=Votes">Substrate forum</Link> to get answeres to related quiestions.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="transfers">
          <div className="page-content-inner">
            <div className="page-content-title">Asset transfers</div>
            <div className="page-content-text">
                Irrespective to whether there is a non fungible asset or share tokens to transfer, the same method of the poscanAssets module is supposed to be used.
                {" "} (This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#9-extrinsic-poscanassetstransfer">poscanAssets pallet API</Link>)
                </div>
                <div className="page-content-text">
              <strong>Using MOBILE WALLET:</strong>
            </div>
            <a className="message-text" href="/mobile-wallet#download">
            <div className="page-lead-content">
              Mobile Wallet
                <div className="page-lead-button">Download</div>
            </div>
            </a>
            <div className="page-content-text">
              <strong>Using WEB WALLET or API:</strong>
            </div>
                <img
              className="page-img"
              src="/images/transfer_assets.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>
        <div className="page-content-block" id="dex">
          <div className="page-content-inner">
            <div className="page-content-title">DEX (Decentralized Exchange)</div>
            <Link className="message-text" to="https://swap.3dpscan.io">
            <div className="page-lead-content">
                 Swap your tokens
                <div className="page-lead-button">Swap</div>
            </div>
            </Link>
            <div className="page-content-text">
            A custom version of the <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/asset-conversion">assetConversion</Link> {" "}
            module, which represents a full featured decentralized exchange based on <Link to="https://github.com/Uniswap/v2-core">Uniswap v2</Link> {" "}
            protocol rules and integrated into The Ledger of Things runtime. Enjoy the <Link to="https://github.com/3Dpass/3DP/wiki/DEX-module-API">DEX API</Link> {" "}
            on Github, create Liquidity Pools and trade the assets issued on The Ledger of Things.
           </div>
           <ul className="page-content-text">
            <li>
            Use the <Link to="https://swap.3dpscan.io">DEX User Interface</Link> to either swap your tokens or 
            add liquidity. Create new liquidity pool if needed. 
            </li>
            <li>
            Make Pull Request into the <Link to="https://github.com/3Dpass/swap">GitHub</Link> to add your token's logo. 
            </li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/the_ledger_of_things_dex.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Assets;
