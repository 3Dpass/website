import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const MobileWallet = () => {
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
        <div className="page-title">Mobile Wallet</div>
        <div className="page-nav-content">
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
          <a href="#recognition">
            <div
              className={
                locationHash.includes("recognition")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              3D Object recognition
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
              The object tokenization
              <div className="page-nav-circle"></div>
              <div className="page-nav-line tokenization-mobile-line"></div>
            </div>
          </a>
          <a href="#put_object">
            <div className="page-nav-inside">
              Put the Object on blockchian
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#share-token">
            <div className="page-nav-inside">
              Create Share-token
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#fungible">
            <div
              className={
                locationHash.includes("fungible")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Fungible asset creation
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#light">
            <div
              className={
                locationHash.includes("light")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Light wallet functions
              <div className="page-nav-circle"></div>
              <div className="page-nav-line transfer-mobile-line"></div>
            </div>
          </a>
          <a href="#p3d-transfer">
            <div className="page-nav-inside">
              P3D transfer
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#assets-transfer">
            <div className="page-nav-inside">
              Assets transfer
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#creation">
            <div
              className={
                locationHash.includes("creation")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              3D-object-wallet creation and recovery
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="download">
          <div className="page-content-inner">
            <div className="page-content-title">Download</div>
            <div className="page-lead-content">
              Android
              <Link to="https://play.google.com/store/apps/details?id=com.threedpass.wallet">
                <div className="page-lead-button">Play Store</div>
              </Link>
            </div>
            <div className="page-lead-content">
              GitHub
              <Link to="https://github.com/3Dpass/threedpass/releases">
                <div className="page-lead-button">Download</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="recognition">
          <div className="page-content-inner">
            <div className="page-content-title">3D Object Recognition</div>
            <div className="page-content-text">
              This feature allows to recognize the object shape
              by means of its 3D model processing, and thus orinal scans can be distinguished from fakes. <Link to="/pass3d">pass3d</Link> is an
              implementation of <Link to="/grid2d">Grid2d</Link> algorithm, which is being utilized by the app.
            </div>
            <video
              src="/images/3Dobject_original_fake_recognition.mp4"
              className="page-video"
              controls
            ></video>
            <div className="page-content-subtitle">
              Guidelines:
            </div>
            <ul className="page-content-text">
              <li>
                Pick up 3D models in <i><Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.obj</Link></i> format up to 100 Kb. 
                (Feel free to download this <Link to="https://github.com/3Dpass/threedpass/tree/main/objects_to_scan/preciouss_stones_collection">precious stones collection</Link> for testing purposes) 
              <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/object_picked_up.png"
              alt="img"
            />
              </li>
              <li>
                Get the models processed one by one and save its snapshots, until the
                {" "} HASH ID is matched <i>(the object is recognized)</i>. Otherwise, the object is considered to be unique. 
                
                <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/object_recognized.png"
              alt="img"
            />
              </li>
              <li>
                If the object tokenization is your primary goal, just keep processing its alternative scans/models, until
                at least one stable hash is found <i>(the HASH ID is created)</i>. Make sure the stable hash is included into the HASH ID, before you put it on the blockchain.
                <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/object_stable_hash_.png"
              alt="img"
            />
              </li>
              <li>
                Using the same scanning settings is mandatory for every object processed. 
                The <i>Rotation bytes</i> must be set at the same value, as well. "None" (no rotation) is recomended. 
                <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/rotation_bytes_settings.png"
              alt="img"
            />
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="tokenization">
          <div className="page-content-inner">
            <div className="page-content-title">The object tokenization</div>
            <div className="page-content-text">
             The object tokenization procedure is being carried out in accordance to <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> standard.
             3D models in  <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file"><i>.obj</i></Link> format only.
            </div>
            <div className="page-content-subtitle" id="put_object">
              Put the object on the blockchain
            </div>
            <div className="page-content-text">
              Put the object on chain to enable its copy protection. 
              The property rights will take an effect as soon as the object is approved by the Ledger of Things.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/put_object_mobile.png"
              alt="img"
            />
            <div className="page-content-text">
              Pick up the object properties allowed for its tokenization.
              It is possible to tag along a bunch of properties inherent to the object, however, 
              only one of them can be tokenized later on. Neither of the properties can be changed afterwards.
            </div>
            <ul className="page-content-text">
              <li><i>"Non-fungible"</i> - if chosen, it means that the object can be tokenized into a non-fungible token</li>
              <li><i>"Share"</i> - if chosen, the object is permitted to be tokenized as the share tokens, Max Supply of which will be equal to 100% of the object share.</li>
              <li><i>"Weight"</i> - if chosen, the object is allowed to be tokenized into its weight tokens (gramms, kilogramms, carats, ounces, etc.), and Max supply will be equal to the total weight.</li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/put_object_properties_mobile.png"
              alt="img"
            />
             <div className="page-content-text">
              Follow the object status on the Explorer. If approved, the copy protection is being enabled, as well as the token issuance. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/objects_explorer_mobile.png"
              alt="img"
            />
          </div>
          <div className="page-content-text">
              Make sure the <i>Rotation bytes</i> is set at <strong>"None"</strong> before getting the object imported into the app!
                <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/rotation_bytes_settings.png"
              alt="img"
            />
            <div className="page-content-subtitle" id="share-token">
              Create the object Share-token
            </div>
            <div className="page-content-text">
              Open the wallet and proceed with creation of new asset.  
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/create_an_asset_mobile.png"
              alt="img"
            />
             <div className="page-content-text">
              Specify the Asset parameters and create the asset. You'll need some P3D to cover transaction fee.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/create_share-token_mobile.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="fungible">
          <div className="page-content-inner">
            <div className="page-content-title">Regular Fungible Asset creation</div>
            <div className="page-content-text">
             The mobile wallet is capable of creation on regular fungible assets managed by is owner's account. 
            </div>
            <div className="page-content-subtitle">
              Create new Asset
            </div>
            <div className="page-content-text">
              Open the wallet and proceed with new asset creation. 
              The proceess won't take longer than a few minutes to succeed in. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/create_an_asset_mobile.png"
              alt="img"
            />
            <div className="page-content-text">
              Specify the asset parameters and sign on transaction. You'll need some P3D to cover transaction fee.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/create_regular_fungible_asset_mobile.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="light">
          <div className="page-content-inner">
            <div className="page-content-title">Light Wallet Functions</div>
            <div className="page-content-subtitle" id="rpc">
              RPC API endpoint connection
            </div>
            <div className="page-content-text">
              "The Ledger of Things" mobile light client is designed to help you
              enjoy P3D/assets transfers safely and have your balanses on the
              smartphone. Connect the wallet to any WSS RPC/API endpoint
              available to fetch some information or make a transfer.
            </div>
            <div className="page-content-text">
              Mainnet public RPC/API endpoint is: <strong>wss://rpc.3dpscan.io</strong>
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/accounts1.png"
              alt="img"
            />
            <div className="page-content-subtitle" id="p3d-transfer">
              P3D transfer
            </div>
            <div className="page-content-text">
              Transfer your P3D in one click. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/p3d_transfer_mobile.png"
              alt="img"
            />
              <div className="page-content-subtitle" id="assets-transfer">
              Assets transfer
            </div>
            <div className="page-content-text">
              Transfer your asset in one click. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/assets_transfer_mobile.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="creation">
          <div className="page-content-inner">
            <div className="page-content-title">
              3D-Object-Wallet Creation and Recovery
            </div>
            <div className="page-content-text">
              3DPass mobile app allows for creation of crypto wallet
              out of 3D object and its recovery by means of scanning. 
              Learn more about the <Link to="/grid2d#hash">HASH ID strength</Link>.
            </div>
            <ul className="page-content-text">
              <li>Follow the instructions <Link to="#recognition">above</Link> to get the object processed for several times.</li>
              <li>Use the <i>stable hash</i> to import an account, instead of mnemonic seed.</li>
              <li>In order to recover, all you need to do is to get the object processed again.</li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/3d-object-wallet1.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileWallet;
