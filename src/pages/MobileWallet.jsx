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
              3D Object Recognition
              <div className="page-nav-circle"></div>
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
            </div>
          </a>
          <a href="#proof">
            <div
              className={
                locationHash.includes("proof")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Proof of Scan verification demo
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="download">
          <div className="page-content-inner">
            <div className="page-content-title">Download</div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/mobile1.png"
              alt="img"
            />
            <div className="page-lead-content">
              iOS
              <Link to="https://apps.apple.com/app/3dpass/id6447526851">
                <div className="page-lead-button">App Store</div>
              </Link>
            </div>
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
              This embedded option allows to recognize the same shaped 3D
              objects by means of processing its 3D models in .obj format. Due
              to the fact, that the app hasn't had a native 3D scanner
              integrated yet, now you can only process 3D models made by third
              party scanning/modeling apps and devices. <Link to="/pass3d">pass3d</Link> is an
              implementation of <Link to="/grid2d">Grid2d</Link> algorithm, which is leveraged by the app.
            </div>
            <div className="page-content-text">
              Once the the model is picked up, the <Link to="/features#3drecognition-hash-id">Hash ID</Link> creation process is
              getting started. All you should to do is to process 3D models one
              by one and save its snapshots. The app will compare the <Link to="/features#3drecognition-hash-id">Hash ID</Link>s
              and detect if there is any hashes matched. In the case the object
              is considered to be recognized. Notice, that the same set of
              parameter values must be applied every time in the settings. Learn
              {" "} <Link to="/pass3d#params">how Grid2D algorithm parameters are suppose to be used</Link>.
            </div>
            <div className="page-content-text">
              Just keep processing some more different scans/models of the same
              object until you get the stable hash, which will be highlighted.
              This hash is inherent to the object shape the most. It remains
              stable for all the future scans/models made with the same
              precision.
            </div>
            <div className="page-content-text">In summary:</div>
            <ul className="page-content-text">
              <li>
                Get 3D models processed one by one and save its snapshots until
                hash match is found (the object recognized)
              </li>
              <li>
                Keep processing different scans/models of the same object until
                the stable hash is found (the HASH ID created)
              </li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/recognition1.png"
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
              3DPass mobile app allows to produce crypto wallet (address + keys)
              out of 3D object and its recovery by means of scanning. Once HASH
              ID is created, the stable hash might be used as a raw seed. In
              order to recover all you need to do is to scan the object again.
              The same presision of scanning is mandatory, as well as the same
              Rotation bytes serving as an aditional secret. Either recognition
              parameters or rotation bytes must be applied in the "Settings"
              before the processing. Learn more about the <Link to="/grid2d#hash">hash strength</Link>.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/3d-object-wallet1.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="light">
          <div className="page-content-inner">
            <div className="page-content-title">Light Wallet Functions</div>
            <div className="page-content-text">
              "The Ledger of Things" mobile light client is designed to help you
              enjoy P3D transfers safely and have your balanses on the
              smartphone. Connect the wallet to any WSS RPC/API endpoint
              available to fetch some information or make a transfer.
            </div>
            <div className="page-content-text">
              Mainnet public RPC/API endpoints are: wss://rpc.3dpass.org;
              wss://rpc2.3dpass.org.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/accounts1.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="proof">
          <div className="page-content-inner">
            <div className="page-content-title">
              Proof of Scan Verification Demo
            </div>
            <div className="page-content-text">
              In this demo we are about to provide you with some tips of how can {" "}
              <Link to="/proof-of-scan">Proof of Scan</Link> protocol be proved to work. Using the <Link to="https://github.com/3Dpass/threedpass/releases">mobile app</Link>, we
              are going to verify 3D object from a certain block. Then we will
              slightly modify the cooridnates of just one peak of the object,
              which doesn't cause any damage to its shape. Although, it
              definitelly changes the file data. Now we have two different .obj
              files but still the same object shape in each. Thus, we have made
              a potential copy of the asset this block had been mined with.
              However, after the processing of both, the object reveals to be
              the same. Meaning, the fake has been recognized and the original
              asset is secured.
            </div>
            <div className="page-content-text">
              We suggest that you watch this one-minute video before you get
              started:
            </div>
            <iframe
              src="https://www.youtube.com/embed/5TlDE69Tmms"
              className="page-video"
              controls
              title="wallet"
            ></iframe>
            <div className="page-content-subtitle">
              Step 1: The object mined verification
            </div>
            <ul className="page-content-text">
              <li>
                Open the <Link to="https://wallet.3dpass.org/">Web wallet</Link> and download 3D object (.obj) form any block
                header. In this demo we are about to use the object from the
                block <Link to="https://wallet.3dpass.org/block/51414">#51414</Link>. You can download it from <a href="/assets/3dpass-51414.obj.zip">here</a>
              </li>
              <li>
                Open <Link to="https://github.com/3Dpass/threedpass/releases">3Dpass mobile wallet</Link> and set up the recognition parameters.
                Get the object processed and verify its HASH ID. Save the
                shapshot.
              </li>
            </ul>
            <div className="page-content-text">Set up Grid2d precision</div>
            <div className="page-content-text">
              Set up exactly the same parameter values as it's defined by The
              <Link to="/features#ledger">Ledger of Things</Link> for the object.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/grid2d_settings1.png"
              alt="img"
            />
            <div className="page-content-text">Set up Rotation</div>
            <div className="page-content-text">
              Look up the parent block hash and get the Rotation bytes. In this
              demo the parent block is <Link to="https://wallet.3dpass.org/block/51413">#51413</Link>.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/rotation_bytes_settings1.png"
              alt="img"
            />
            <div className="page-content-text">HASH ID Verification</div>
            <div className="page-content-text">
              Download and unzip the object from <a href="/assets/3dpass-51414.obj.zip">here</a> - on your smartphone. Open {" "}
              <Link to="https://github.com/3Dpass/threedpass/releases">3Dpass mobile wallet</Link> and run the object (.obj) processing. Make
              sure that you have got the same HASH ID as it is exposed on the
              web wallet page.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/block_verification1.png"
              alt="img"
            />
            <div className="page-content-text">Snapshot</div>
            <div className="page-content-text">
              Save the snapshot to make the app aware of the object in the
              future.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/snapshot1.png"
              alt="img"
            />
            <div className="page-content-subtitle">
              Step 2: The Asset Copy Creation
            </div>
            <div className="page-content-text">
              In order to create a copy of the asset open the object (.obj)
              mined with Text editor. Pick up any vertice and modify its
              coordinates just slightly, so that it doesn't affect the object
              shape. In this demo we have changed the very first coordinate in
              the list. Download and compare: <a href="/assets/3dpass-51414.obj.zip">Original one</a> and the <a href="/assets/3dpass-51414_modified.obj.zip">Fake one</a>.
              Here we used MD5 hashes to prove the difference between those two
              files:
            </div>
            <pre className="main-pre">
              {`
MD5 (3dpass-51414.obj) = bbeb319c8c27e73298bdad936ecf524f
MD5 (3dpass-51414_modified.obj) = d65277a787889e20ad1b3b4f22dadccf

`}
            </pre>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/modification1.png"
              alt="img"
            />
            <div className="page-content-text">
              It's very important to understand at this point, that any
              conventional blockchain platform (e.x. Ethereum), could only
              provide the ability to mint two different assets out of those
              files. And you would have never known if they are containing the
              same object.
            </div>
            <div className="page-content-subtitle">
              Step 3: The Asset Copy Creation
            </div>
            <div className="page-content-text">
              Open <Link to="https://github.com/3Dpass/threedpass/releases">3Dpass mobile wallet</Link> and run the fake object (.obj)
              processing. Once match is found, the fake object is becoming
              recognized. Due to the fact, that the object shape is still the
              same, the asset remains secured. You can never build new block
              using this fake.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "20px" }}
              src="/images/compare_hashes1.png"
              alt="img"
            />
            <div className="page-content-text">
              By the way, you might continue this experiment and put some more
              serious modification on the fake object. At the point 3DPass
              mobile app will no longer be able to recognize it, the object
              modified is different enough for the current definition error to
              sustain its HASH ID.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileWallet;
