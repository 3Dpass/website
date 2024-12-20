import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const ProofOfScan = () => {
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
        <div className="page-title">Proof Of Scan Consensus</div>
        <div className="page-nav-content">
          <a href="#p2p">
            <div
              className={
                locationHash.includes("p2p")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              LoT p2p Network
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#object">
            <div
              className={
                locationHash.includes("object")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The object Categories and Recognition Algorithms
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#privacy">
            <div
              className={
                locationHash.includes("privacy")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The Object Data Privacy
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#verification">
            <div
              className={
                locationHash.includes("verification")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              The Object Verification 
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#new-block">
            <div
              className={
                locationHash.includes("new")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              New Block
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#randomness">
            <div
              className={
                locationHash.includes("randomness")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Randomness
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#production">
            <div
              className={
                locationHash.includes("production")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Block Production Mechanism
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#break">
            <div
              className={
                locationHash.includes("break")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Tie Break Competition
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#fork-choice-rule">
            <div
              className={
                locationHash.includes("choice")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Fork Choice Rule
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#block-execution">
            <div
              className={
                locationHash.includes("execution")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Block Execution
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#forkless-upgrade">
            <div
              className={
                locationHash.includes("upgrade")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Forkless Upgrade
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#grandpa">
            <div
              className={
                locationHash.includes("grandpa")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Finally Gadget GRANDPA
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
              3DPRC-2 The user object tokenization standard
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="p2p">
          <div className="page-content-inner">
            <div className="page-content-title">
              The Ledger of Things p2p Network
            </div>
            <div className="page-content-text">
            The Ledger of Things is Layer 1 blockchain and decentralized storage providing its instruments and tools 
            for the tokenizaton of objects. The <Link to="https://github.com/3Dpass/3DP">Nodes</Link> are equipped with 
            recognition toolkit and will prevent assets form being copied, even if its file was slightly changed 
            (ex. with one dot, pixel or one byte). At minimum, it allows to establish and track 1:1 correspondence between 
            the object and its digital asset. At max - to develop endless of useful smart contracts and dApps operating within 
            the eco-system and exploiting the <Link to="/features#3drecognition-hash-id">HASH ID</Link> feature as an idea 
            of authentication of real world objects (or digital objects) all across the Internet.
            </div>
            <ul className="page-content-text">
              <li>
                "Proof of Scan" consensus protocol is a hybrid <i>PoW (Proof of Work) + PoA (Proof of Authority)</i>, where PoW aspect is based on 
                recognition technology and ASIC-resistant, as well. PoA part is ensured by {" "}
                <Link to="https://polkadot.network/blog/polkadot-consensus-part-2-grandpa/">GRANDPA</Link> deterministic blockchain 
                finality protocol leveraged by the most reliable nodes on the network called <Link to="/mainnet#validator">Validators</Link> {" "}
                operating under SLA conditions (selection mechanism is similar to Proof of Stake).
              </li>
             <li>
              <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> tokenization standard is part of the network consensus,
                 which is responsible for handling the user objects and its transformation into share-tokens (either, fungible or non-fungible). 
              </li>
              <li>
              <Link to="https://ipfs.io/">IPFS</Link> is used as a decentralized storage
              </li>
              <li>
              Integration is provided by the <Link to="https://substrate.io/">Substrate</Link> framework
              </li>
              <li>
              <Link to="#forkless-upgrade">Forkless upgrade</Link> feature, Smart-contracts, embedded <Link to="https://swap.3dpscan.io">DEX</Link> and more than 30 useful modules operating.
              </li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/p2p_network_structure.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="object">
          <div className="page-content-inner">
            <div className="page-content-title">
              The object Categories and Recognition Algorithms
            </div>
            <div className="page-content-text">
              It's widely acknowledged that conventional NFTs and smart contracts lack real-world identity, 
              often existing without tangible connections to everyday use. This limitation underscores 
              the significance of integrating object recognition algorithms within the 3DPass consensus 
              framework. By doing so, decentralized application (dApp) logic gains the ability to differentiate 
              between genuine assets and counterfeits.
            </div>
            <div className="page-content-text">
              In this context, the owner of an asset defines the boundaries of their property rights, which
              are consistently enforced through mathematical calculations. This approach ensures that the authenticity 
              and ownership of digital assets are securely established and maintained within blockchain environments.
            </div>
            <div className="page-content-text">
              We actively encourage individuals to innovate and develop new recognition algorithms that can 
              be integrated into the <Link to="https://github.com/3Dpass/pass3d">pass3d recognition toolkit</Link> {" "}
              recognition toolkit, enhancing its capabilities and overall 
              effectiveness. By expanding the toolkit with new algorithms, we aim to empower users with 
              advanced tools for object recognition across various applications and industries. 
              This collaborative effort fosters innovation and drives the evolution of 3DPass technology 
              towards greater functionality and utility in the digital landscape.
            </div>
            <div className="page-content-subtitle">
              New recognition alrorithm requirements:
            </div>
            <div className="page-content-text">
              First of all, the object idenity <Link to="/features#3drecognition-hash-id">HASH ID</Link> must be
              reproducible, i.e stable for different scans of the same object
              within a noise of scanning.
            </div>
            <div className="page-content-text">
              In the blockchain environment, where a trustworthy backend is lacking, there is no feedback mechanism 
              to automatically calculate a single, 100% reliable HASH ID from each scan or object snapshot.
              Therefore, algorithms must operate independently and be adaptable enough to adjust their 
              processing definition level according to the scanning resolution.
            </div>
            <div className="page-content-text">
              It's clear that comparing HASH IDs between objects processed with different recognition 
              algorithms or parameters is not meaningful. However, it is essential to compare HASH IDs 
              to ensure the absence of duplicates in the blockchain database.
            </div>
            <div className="page-content-text">
            To address these challenges, we categorize object types and establish "standard" algorithms 
            (presets) within each category. Each preset defines the level of precision required for 
            recognizing objects within that category. This approach ensures that objects are accurately 
            identified and distinguished according to their specific characteristics, despite variations 
            in scanning conditions or algorithms used.
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
            The categories and presets are being moderated by the Asset Committee vote. 
            The committee members are being assigned by the <Link to="/governance#council">Council</Link>.
            </div>
            <div className="page-content-text">
              Additional specific requirements:
            </div>
            <ul className="page-content-text">
              <li>
              Every recognition algorithm to add must provide “0 knowledge proof” about the object, so that the 
              network can verify and agree upon its authenticity. <Link to="/proof-of-scan#3dprc-2"></Link> 3DPRC-2 object authentication protocol as well as {" "}  
              <Link to="/grid2d">Grid2d</Link> recognition algorithm could be used as a reference.
              </li>
              <li>
              Every recognition algorithm must be open-source and free from license restrictions, which could have caused
              any obstacle to its free distribution.
              </li>
              <li>
              Every recognition algorithm must be able to get objects processed within the timeframe limit 
              of 10 sec, while running on average full 3DPass node.
              </li>
              <li>
              Every recognition algorithm must rely on public data, stored on 3dpass blockchain 
              (objects, HASH IDs, "zero knowledge proof").
              </li>
            </ul>
            <div className="page-content-text">
              Feel free to implement or propose new algorithms and jump right
              in <Link to="/coin#distribution-contribution">3DPass contribution rewards program</Link>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="privacy">
          <div className="page-content-inner">
            <div className="page-content-title">The Object Data Privacy</div>
            <div className="page-content-text">
              3DPass never collects or transmits any 3D object data processed by
              the recognition toolkit, unless the user decides to store it on the
              blockchain in open. The recognition algorithm uses RAM only,
              running on user’s local device without any Internet connection
              involved. It is assumed that users are responsible for the
              security of their own devices that are running 3Dpass. For
              example, if anyone had a 3D scan of any private physical asset,
              saved on their device, which is confidential such as the seed of
              the password or a rare diamond. The user is responsible for
              preventing the device from becoming compromised by a third party.
              This could lead to the third party gaining access to the
              confidential 3D scan file, so that the secret information is
              disclosed. 3DPass will not be held liable and the principal of
              self custody is required from users.
            </div>
            <div className="page-content-text">
              The user should also consider the capacity and purpose for which
              3DPass is used. In case of public objects such as real estates,
              vehicles, etc., the assumption should be taken that these shapes
              are disclosed and transparent. Nevertheless the user is able to
              scan any item before an exchange for authentication or eventually
              through marketplaces.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="verification">
          <div className="page-content-inner">
            <div className="page-content-title">The Object Verification Mechanism</div>
            <div className="page-content-text">
              The Ledger of Things network represents two layers of
              equal nodes leveraging <Link to="/grid2d">Grid2d</Link> recognition algorithm, mentioned
              above. The very first purpose of the network is to get the objets identified when user submits and make sure of its
              authenticity and uniqueness afterwards.
            </div>
            <div className="page-content-text">
              For example, had we had someone submitted a 3D object in hope to
              construct a new block the following aspects would have been required as an input into the queue, such as:
            </div>
            <ul className="page-content-text">
              <li>
                3D model of the object ( <Link to="https://en.wikipedia.org/wiki/STL_%28file_format%29">.stl</Link> or <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.obj</Link> standards are supported)
              </li>
              <li>
              <Link to="/features#3drecognition-hash-id">Hash ID</Link> of the object, produced by <Link to="/grid2d">Grid2d</Link> recognition algorithm
              </li>
              <li>
              An additional security token (rotation_bytes), either, being accepted by <Link to="/grid2d">Grid2d</Link>. {" "}
              The token represents 8 bytes, by which an angle of rotation <i>(μ = x)</i> of the object {" "}
              is defined before getting crossed.
              </li>
            </ul>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/x_rotation.png"
              alt="img"
            />
            <div className="page-content-text">
              Now, every Node of the network, being synchronized, can import the
              object and run its 3D shape recognition processing. In order to either
              accept or reject proposal the Node will checks on the following:
            </div>
            <ul className="page-content-text">
              <li>
                Whether or not the <Link to="/features#3drecognition-hash-id">Hash ID</Link> is corresponding to the shape of the
                object submitted. Which means the 3D object authenticity check.
                If the <Link to="/features#3drecognition-hash-id">Hash IDs</Link> won't match to one another, then the object is
                considered fake and it must be rejected;
              </li>
              <li>
                Whether or not the same-shaped object is actually existing on
                the network. If it is, obviously, we’re dealing with one of its
                3D models (duplicates), which must be rejected;
              </li>
              <li>
                Whether or not the security tokens matched. If matched, that means {" "}
                the actual recognition algorithm was properly leveraged by the user {" "}
                who submitted the object. It provides assurance that the {" "}
                <Link to="/features#3drecognition-hash-id">Hash IDs</Link> was {" "}
                not copied and pasted from somewhere or just accidentally generated.
              </li>
            </ul>
            <div className="page-content-text">
              The object passed through the verification check will be accepted.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3dpass_network2.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="new-block">
          <div className="page-content-inner">
            <div className="page-content-title">New Block</div>
            <div className="page-content-text">
              New block is going to be built on top of the Best block currently chosen for the
              Best chain (the longest chain rule is operating). Thus, Best block becomes the parent block while construction. {" "}
              The block is sealed to its parent block hash with <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA256</Link> cryptographic {" "}
              hash-function, resulting as <i>double_hash</i>, which is a subject for difficulty {" "}
              to affect in order maintain the network target block time. 
            </div>
            <div className="page-content-text">
              Block header consists of the following data:
            </div>
            <div className="page-content-text">
              1. <i>Pre-hash</i> – main block identifier, which represents SHA256 hash sealed to the parent
              block hash with the cryptographic hash function "090ae6b23e2192fa4c2fb40cddad6e8537e2b437c49ff9fb227cf32c4e4085f".
            </div>
            <div className="page-content-text">
              2. <i>Nonce</i> - 3D model of the object in the content of <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.obj</Link> file format (100kb
              limit)
            </div>
            <pre className="main-pre">
              {`
vn 0.283063 -5.353324 3.218996
v 18.720348 -73.204567 28.592705
vn 0.485004 -4.463090 4.332598
v 18.970524 -72.797684 29.112286
vn 0.214328 -4.602965 4.216415
v 18.241102 -72.822502 29.146963
vn 0.596465 -5.149169 3.457356
v 19.314495 -73.075134 28.739380
vn -0.907998 -5.773625 2.259512
v 16.425535 -73.428177 27.811790
vn -0.962188 -5.416298 2.968105
v 16.679434 -73.179283 28.457644
vn -1.245864 -5.276230 3.089694
v 16.022053 -73.088127 28.386955
vn -0.492690 -5.834898 2.220737
v 17.292595 -73.480713 27.954941
vn -0.463700 -5.458229 3.000435
v 17.404690 -73.217438 28.568790...
`}
            </pre>
            <div className="page-content-text">
              3. <i>Grid2d (μ = 0) hash</i> – 3D model Hash ID created with no rotation (μ = 0) {" "}
            </div>
            <pre className="main-pre">
              {`
~/Desktop/3dpass$ ./pass3d -i pir2.obj -a grid2d -g 8 -s 66
Select top 10 hashes
"72592f8f6ea67c60ca7d9c7683256c3636a30be464952eb82996bff52ca4415d" - the very top hash 
"3720e731b9aa04b08d83de34a796cbc389fce2c62365c68206c5610106db053d"
"a65008cdc77f72b47eda70e7c2eb57f93e4fffde5a5356549ac7dbf5d422dffa"
"5930d4a4a98ddff21997daaa8410b151f85dcdb7bfe6b0fb1a05af0e99c276fc"
"6846a36abb6dc50df6845627e6553ede8337e7350254ae8d02b7b7a696c79192"
"b20cf89afb10f14795afe517c82d7f6185da840e6035c48b488792e2df61846d"
"aa4019c8c160da9d2af69edc19589aabd925bc696966b967f92b71947f75f8f0"
"deb83d22570bfc07b8881618dc34a6624616521475bac17798b7348cf6684fd1"
"dd227121b91adcb5beabb0be9412613ebdfde8c5660301eb17583fa644b8793d"
"543e1c3929ea810f4e8c7cfc27f0b60df21a9374089f2278617dae327e32b034"  
`}
            </pre>
            <div className="page-content-text">
              4. <i>RandomX (Grid2d μ = x) hash</i> – 3D model Hash ID created with some certain 
              angle of rotation (μ = x) and then processed by the <Link to="https://github.com/tevador/RandomX">RandomX</Link> hashing algorithm 
              on top. The result is presented as a <i>blake2b</i> hash
            </div>
            <div className="page-content-text">
              5. <i>Time hash</i> – representation of the system time new block was created at
            </div>
            <div className="page-content-text">
              6. <i>Proof of Context hash</i> – the output of the <i>hist_steps</i> extension (see more Proof of Work task)
            </div>
            <div className="page-content-text">
              7. <i>Proof of Scan hash</i> – the user object verification proof in accordance with <Link to="#3dprc-2">3DPRC-2</Link> tokenization standard
            </div>
            <div className="page-content-text">
              8. GRANDPA finality digest
            </div>
            <div className="page-content-text" id="block-structure">
              Block structure:
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_structure.png"
              alt="img"
            />
            <div className="page-content-text">
            Due to the fact that computing power is required for the object processing,{" "}
            this will require a set of rules and rewards about new blocks. The rules in {" "}
            principal are quite similar to bitcoin, however, P3D mining has an object {" "}
            recognition algorithm involved.
            </div>
            <div className="page-content-text" id="nbrules">The rules are presented as follows:</div>
            <ul className="page-content-text">
              <li>New block target time: 1 block per 60 seconds</li>
              <li>
              There is a dynamic difficulty adjustment rule, which serves to maintain the network {" "}
              velocity around the block target time (1 block per 60 seconds) in average. Because {" "}
              of the network hashrate volatility, the mining issue has to be made dynamic with {" "}
              respect to difficulty by making it harder or easier to solve in order to ensure {" "}
              that a certain amount of blocks are produced for the aggregation period (1 hour).
              </li>
              <li>
              Grid2d algorithm is part of Runtime logic, which is upgradable online by Open {" "}
              Governance call (see more BLOCK EXECUTION and FORK-LESS UPGRADE)
              </li>
              <li>
              Difficulty adjustment mechanism is part of the Runtime logic, which is upgradable 
              online by Open Governance call (see more BLOCK EXECUTION and FORK-LESS UPGRADE). 
              Current implementation of the Difficulty module is <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/difficulty"></Link>.
              </li>
            </ul>
            <div className="page-content-text">
            Note, that neither of the rules above touches the user objects verification. {" "}
            So, miners have to obey the rules but the other users do not. They might submit {" "}
            any objects they want, of course, being charged with the verification fee in P3D {" "}
            in accordance to 3DPRC- 2** tokenization standard rules.
            </div>
            <div className="page-content-text">
              Once new block is produced, it is awaiting to be chosen as a {" "}
              parent block for the next new block. The block reaches maturity {" "}
              after 100 confirmations (100 blocks built on top). The block gets {" "}
              finalized in accordancde to {" "}
              <Link to="https://polkadot.network/blog/polkadot-consensus-part-2-grandpa/">GRANDPA</Link> protocol.
            </div>
            <div className="page-content-subtitle" id="pow-task">
              PoW task: 1 Node = 1 Vote, ASIC-resistant
            </div>
            <div className="page-content-text">
            This advanced version of PoW component is equipped with some unique features, especially designed to facilitate on {" "}
            distributed mining and to ensure its resistance against ASIC/FPGA, such as:
            </div>
            <ul className="page-content-text">
              <li>
               Difficulty for the reverse method "illegal way" of calculation (x) is releated to {" "}
               Difficulty for the straightforward method "legit way" (m) as (x = m^n). That will protect <i>nonce</i> {" "}
               from being recovered out of the <i>pre_hash</i> derectly, which would let the block author skip Grid2d {" "}
               recognition in the mining loop. Having this shortcut prohibited will ensure the user object to be handled {" "}
               by the block author, once submitted.
              </li>
              <li>
               <Link to="/grid2d">Grid2d</Link> recognition algorithm output is getting processed by the <Link to="https://github.com/tevador/RandomX">RandomX</Link> hashing function {" "}
               to equalize the mining velocity of CPU and GPU to one another
              </li>
              <li>
               Leveraging full blockchain db is required, because of the “proof of context” {" "}
               extension ensuring the dynamic usage of memory in the mining loop, which helps {" "}
               3DPass resist against FPGA devices sensitive to memory load speed.
              </li>
            </ul>
            <div className="page-content-subtitle" id="pow-task">
              PoW task TO DO:
            </div>
            <div className="page-content-text">
            1. In order to prove 3D object exists at the beginning of the mining loop the bock author 
            first must get 3D object scanned with no rotation angle <i>(μ = 0)</i> resulting as Grid2d {" "}
            output 1 (top 10 hashes). The second component is <i>time_hash</i>, which must timestamp upon the 
            block header and impact the <i>pre_hash</i> , as well.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/no_rotation.png"
              alt="img"
            />
            <div className="page-content-text">
            2. That is ensured by the <i>rotation_bytes</i> (8 bytes, by which the target rotation angle is defined) {" "}
            calculated out of a combination of both the <i>pre_hash</i> and the topest Grid2d zero-angled hash {" "} 
            <i>(μ = 0)</i> processed by the RandomX hashing. So that any modification made on either of them {" "} 
            will inevitably impact on the rest. That is how the process of getting Grid2d output RandomXed would look like:
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/grid2d_randomXed.png"
              alt="img"
            />
            <div className="page-content-text">
             3. It wasn’t until having the object scanned with zero angle the target rotation angle <i>(μ = x)</i> could be calculated.{" "} 
             The same as usual the block author would be challenged with picking up some 3D object shape and get it scanned{" "} 
             with the target rotation angle <i>(μ = x)</i> until the <i>pre_hash</i> makes the <i>double_hash</i> meet current difficulty number or above.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/x_rotation.png"
              alt="img"
            />
            <div className="page-content-text">
            The entire cycle of the object processing would look like this:
            </div>
            <div className="page-content-text">
            Random 3D model in obj → Grid2d (3D model μ = 0) output → Random X (Grid2d μ = 0) blake2b hash → rotation_bytes x = 4 bytes out of pre_hash + 4 bytes out of RandomX (Grid2d μ = 0) blake2b hash → Grid2d (3D model μ = xo) output → <strong>Random X (Grid2d μ = x) blake2b hash</strong> 
            </div>
            <div className="page-content-text">
              4. However, there will be an additional “proof of context” task to solve having {" "} 
              the access to the full blockchain db is required for. Depending on the pre_hash {" "} 
              calculated, there is going to be a directed sequence of N pseudo randomly chosen {" "} 
              blocks to pick up (ex. <i>104786 → 476673 → 219964 → 891987 → 12897</i> ) and prove its {" "} 
              availability for the mining loop. Every mining loop will require another one {" "} 
              different sequence to prove.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/proof_of_context.png"
              alt="img"
            />
            <div className="page-content-subtitle">
             To be ruled out on block import
            </div>
            <div className="page-content-text">
            There is a rule on new block import, which requires: <i>Grid2d output 1 ≠ Grid2d output 2</i> . {" "}
            Therefore, the object shape must be complex enough to entirely avoid the Grid2d {" "}
            recognition error that is most likely to face with, especially, when it comes to {" "}
            scanning some regular- shaped objects (ex. a sphere).
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/collision_to_avoid.png"
              alt="img"
            />
            <div className="page-content-text">
              The object shape consistency check:
            </div>
            <div className="page-content-text">
              In order to ensure 3D objects submitted as nonce meet the Grid2d recognition algorithm input {" "}
              requirements, there is a bunch of checks on the object shape being applied on the block import {" "}
              by both the Runtime and Native code, including but not limited to:
          </div>
          <ul className="page-content-text">
            <li>Vertex (..) points to an invalid halfedge</li>
            <li>Halfedge (..) pointed to by vertex (..) does not start in that vertex, but instead in (..)</li>
            <li>Vertex (..) does not point to a halfedge</li>
            <li>Halfedge (..) points to an invalid twin halfedge (..)</li>
            <li>Halfedge twin pointed to by halfedge (..) does not point back to halfedge</li>
            <li>Invalid orientation: The halfedge (..) and its twin halfedge (..) points to the same vertex</li>
            <li>Halfedge (..) does not point to a twin halfedge</li>
            <li>Halfedge (..) points to an invalid vertex (..)</li>
            <li>Halfedge (..) does not point to a vertex</li>
            <li>Halfedge (..) points to an invalid face (..)</li>
            <li>Halfedge (..) points to a face but not a next halfedge</li>
            <li>Halfedge (..) points to an invalid next halfedge (..)</li>
            <li>Halfedge (..) points to a next halfedge but not a face</li>
            <li>Halfedge next pointed to by halfedge (..) does not point back to halfedge</li>
            <li>Length of edge (..) is too small</li>
            <li>Face (..) points to an invalid halfedge (..)</li>
            <li>Halfedge pointed to by face (..) does not point to back to face</li>
            <li>Face (..) does not point to a halfedge</li>
            <li>Vertex (..) and Vertex (..) is connected one way, but not the other way</li>
            <li>Vertex (..) and Vertex (..) is connected by multiple edges</li>
            <li>Volume is lower than 0.1 * bound_volume (see the figure down below)</li>
          </ul>
          <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/bound_volume.png"
              alt="img"
            />
            <div className="page-content-text">
              These checks will ensure 3D object’s surface is simply connected and has sufficient {" "}
              volume to impact on the center of inertia of mass.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="randomness">
          <div className="page-content-inner">
            <div className="page-content-title">Randomness</div>
            <div className="page-content-text">
              Randomness is one of the most important parts of the consensus.
              It’s leveraged by miners picking up some random 3D objects of
              unique shape being as much unpredictable as it’s possible. There
              are two different ways for miners to get 3D object's model. The
              first one is to get a real world object scanned by 3D scanner,
              which would be unpredictable enough, although it takes a lot of
              work to make. It seems to be much more efficient just to generate
              it on the computer. However, computers are bad at random numbers
              and, due to that fact, they would tend to create quite
              similar-shaped 3D models. Of course, the same or very
              similar-shaped object will be rejected by the recognition
              algorithm (depending on the set of parameters applied, <Link to="/grid2d">Grid2D</Link> {" "}
              will recognize the object with certain error). Statistically it
              would accumulate additional difficulty to generate a new unique
              shape, which have yet not existed on the blockchain. The more
              blocks are mined the more difficult to find 3D model for the next
              one.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="production">
          <div className="page-content-inner">
            <div className="page-content-title">Block Production Mechanism</div>
            <div className="page-content-text">
              New block production begins with the queue handling random 3D models, which are
              being sent to the input of PoScan via the Node RPC API with <i>push_mining_object</i> method:
            </div>
            <pre className="main-pre">
              {`
{
    "jsonrpc":"2.0",
    "id":1",
    "method":"push_mining_object",
    "params": [
        1,
        "o\n
v 0.05508197844028473 0.7671535015106201 -0.14178061485290527\n
v 0.05349433422088623 0.764365017414093 -0.10946107655763626\n
v 0.04743874818086624 0.7608485817909241 -0.07884219288825989\n
.....
            ]
}
`}
            </pre>
            <div className="page-content-text">
              Where one of the parameters is the content of the file in
              <i>.obj</i> standard format, but having <i>"\n"</i> added at the tail of each line.
            </div>
            <pre className="main-pre">
              {`
v 0.05508197844028473 0.7671535015106201 -0.14178061485290527\n
v 0.05349433422088623 0.764365017414093 -0.10946107655763626\n
v 0.04743874818086624 0.7608485817909241 -0.07884219288825989\n
.....
`}
            </pre>
            <div className="page-content-text">
              There is a handler on the Node side, which checks the queue 
              and gets 3D objects processed consequentially slot by slot with grid2d 
              recognition algorithm generating HASH ID for each as an output. 
              The Node has selected Best chain by the time. So, miners will always 
              pick up current Best block (the topest block in Best chain) as the parent to 
              construct new one on top. They will join the competition simultaneously, 
              handling 3D objects form the queue in hope to find the one, 
              which makes grid2d produce correct HASH ID used as <i>nonce</i>. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_production_1.png"
              alt="img"
            />
            <div className="page-content-text">
              Block author will try sealing the object HASH ID on top of the parent block
              hash in the blockchain <Link to="https://en.wikipedia.org/wiki/Merkle_tree">Merkle tree</Link>, 
              following the <Link to="#pow-task">PoW task</Link> exactly. 
              If all required proofs are gathered and meet the rules, the new block 
              proposer will be created → executed → signed with the block author signature and 
              broadcasted out through the Node peers. <Link to="#block-execution">Block execution</Link> means the execution of
              of all the runtime calls/extrinsics and logic of its upgradable modules operating within 
              The Ledger of Things, including but not limited to: transactions, 
              smart-contracts, <Link to="#3dprc-2">3DPRC-2</Link> tokenizaton logic, etc. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_production_21.png"
              alt="img"
            />
            <div className="page-content-text">
              There is a block verification procedure implemented on the block import 
              of each Node (peer), which will repeat the <Link to="#pow-task">PoW task</Link> {" "}
              independently and check on the proofs required. Having at least one check 
              not passed will result with the block rejection by the peer, due to the invalid block header.
              Every runtime module operating will check their proofs during the <Link to="#block-execution">block execution</Link> {" "}
              in accordance of its logic. The block will also be rejected by runtime if the proofs are 
              not delivered or incorrect. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_production_31.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="break">
          <div className="page-content-inner">
            <div className="page-content-title">Tie Break Competition</div>
            <div className="page-content-text">
              The block proposer, if verified, participates in Tie Break competition against the 
              other block authors attempting to construct the block on top of the longest chain, 
              which they believe to be Best chain. This logic is quite commonly used in relation 
              to PoW approach. The block proposed earlier wins. The block time is determined by {" "}
              the <i>time_hash</i> being part of block header {" "}
              (follow the <Link to="#block-structure">block structure</Link>) required for the {" "}
              <Link to="#pow-task">PoW task</Link> to solve.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_production_41.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="fork-choice-rule">
          <div className="page-content-inner">
            <div className="page-content-title">Fork Choice Rule</div>
            <div className="page-content-text">
              The protocol contains a scoring rule for a given chain 
              (the Best chain rule). Each honest Node will propagate the chain with
              the highest score it knows about to all the other nodes through its peers. 
              Best chain is selected and must be accepted by all the nodes on the
              network. Current Best chain rule is the longest chain wins.
            </div>
            <div className="page-content-text">
             The blockchain will stick with the rules of probabilistic finality and 
             might be reorganized during the block authors competition, until Best chain 
             is determined by the second layer of authorities (Validators) leveraging {" "}
             <Link to="#grandpa">GRANDPA deterministic finality protocol</Link>. {" "}
              Best chain, once finalized, can never be reorganized. Block authors are not allowed
              to construct new block outside of the finalized chain, because of the GRANDPA proofs being
              part of block header.
            </div>
            <div className="page-content-text">
              Validators will be monitoring over the blockchain being constructed by the block 
              authors and chasing new blocks to finalize. They will vote upon Best chain and, 
              once consensus is reached, Best chain reaches finality with new blocks include. 
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/best_chain_structure.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="block-execution">
          <div className="page-content-inner">
            <div className="page-content-title">Block Execution</div>
            <div className="page-content-text">
            3DPass Node logic can be considered as kind of a two-piece design. {" "}
            The first one is the Native RUST code and the second one is a WASM (WebAssembly) {" "}
            based Runtime, which is upgradable online. Blocks are being imported through the {" "}
            Native component and then executed by the Runtime logic.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/two-piece_node.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="forkless-upgrade">
          <div className="page-content-inner">
            <div className="page-content-title">Forkless online Upgrade</div>
            <div className="page-content-text">
            By means of using WASM in Substrate (the framework powering 3DPass) the chain is given {" "}
            the ability to upgrade its runtime logic without hard forking. Hard forking is a standard {" "}
            method of upgrading a blockchain that is slow, inefficient, and error prone due to the {" "}
            levels of offline coordination required, and thus, the propensity to bundle many upgrades {" "}
            into one large-scale event. By deploying WASM on-chain and having nodes auto-enact the {" "}
            new logic at a certain block height, upgrades can be small, isolated, and very specific.
            </div>
            <div className="page-content-text">
            As a result of storing the Runtime as part of the state, the Runtime code itself becomes {" "}
            state sensitive and calls to Runtime can change the Runtime code itself. Therefore the {" "}
            3DPass Host needs to always make sure it provides the Runtime corresponding to the state {" "}
            in which the entry point has been called. The Runtime upgrades can be deployed in accordance {" "}
            with the <Link to="/community#governance">Open Governance</Link> procedures, such as Referendums, Technical Committee vote and Council vote.
            </div>
            <div className="page-content-subtitle">
            Wasm based upgradable runtime modules operating
            </div>
            <div className="page-content-text">
            Here is the list of functional modules operating on mainnet, which might be leveraged for the community {" "}
            dApps creation as well as for internal needs:
            </div>
            <ul className="page-content-text">
              <li>3Dpass recognition toolkit: Grid2d WASM version is currently used on block import</li>
              <li>Authorship module – traces block authors</li>
              <li>Difficulty module – manages PoW difficulty adjustments</li>
              <li>Rewards module – mining PoW rewards implementation</li>
              <li>MiningPool module – decentralized mining pool</li>
              <li>Validator set module – manages PoA GRANDPA** validators rewards and logic</li>
              <li>Session module – ensures the rotation of the PoA GRANDPA** Validators</li>
              <li>Grandpa module – maps GRANDPA** off-chain voter with the Runtime</li>
              <li>Offenses module – handles GRANDPA** equivocation reports (hard fork attempts)</li>
              <li>ImOnline module – ensures that GRANDPA** validators have been online during the
              session</li>
              <li>PoScan module – handles the user objects verification in 3DPRC-2 standard</li>
              <li>PoscanAssets module – allows for issuing of either 3DPRC-2 the object share
              tokens or regular fungible assets</li>
              <li>AssetsConversion module – on-chain DEX, decentralized exchange based on
              Uniswap v2 rules</li>
              <li>PoscanPoolAssets module – DEX Liquidity Pools (LP) tokens management</li>
              <li>AtomicSwap module – allows to atomically swap any asset on-chain/cross-chain for
              P3D</li>
              <li>PoscanAtomicSwap module – allows to atomically swap any asset on-chain/cross-
              chain for any on-chain asset on The Ledger of Things, except for P3D</li>
              <li>Council module – manages the Council routine and the election of its members</li>
              <li>Technical Committee module – manages the Technical Committee routine</li>
              <li>Democracy module – handles referendums proposals made by Council</li>
              <li>Referenda module – handles referendums proposals made by community members</li>
              <li>ConvictionVoting module – ensures the network majority vote</li>
              <li>phragmenElection module – ensures the Council vote</li>
              <li>Bounties module – manages Treasury spending proposals</li>
              <li>ChildBounties module – allows to split a bounty into several child-bounties and track
              them separatelly</li>
              <li>Treasury module – manages funding of spending proposals</li>
              <li>White list module – allows to whitelist any call to be available for a referendum</li>
              <li>Smart Contracts module – smart contracts based on <Link to="https://use.ink">ink</Link> language</li>
              <li>IPFS file storage – decentralized file storage</li>
              <li>Timestamp module – allows to timestamp on any on-chain data</li>
              <li>System module – ensures the block size control, etc</li>
              <li>Transaction storage module – transaction pool</li>
              <li>MultiSig module – allows for leveraging multi-signature accounts</li>
              <li>Transaction payment module – manages transaction fee</li>
              <li>Vesting module – allows for vested transfers to operate</li>
              <li>Substrate module – system substrate framework module</li>
              <li>Scored pool module – allows to create a group of members elected</li>
              <li>Scheduler module – allows to schedule any system call in the future</li>
              <li>Preimage module – allows to create and manage system calls</li>
              <li>Identity module – allows to assign on-chain identity to any account</li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="grandpa">
          <div className="page-content-inner">
            <div className="page-content-title">Finality Gadget GRANDPA</div>
            <div className="page-content-text">
              3Dpass network implicates a deterministic finality protocol called
              GRANDPA which guarantees blocks to reach finality in opposite to
              probabilistic finality (e.x. Nakamoto protocol which first was
              applied in Bitcoin). Pease refer to the <Link to="https://polkadot.network/blog/polkadot-consensus-part-2-grandpa/">GRANDPA paper</Link> to read full
              description of the protocol.
            </div>
            <div className="page-content-text">
              There is a set of the most reliable nodes on the network called Validator set, which members {" "}
              are allowed to take the authority to vote for Best chain finality, as long as they meet the {" "}
              <Link to="/mainnet#validator-requirements">SLA conditions</Link>.
            </div>
            <div className="page-content-text">
              There is a session of 120 blocks length, within which the current
              validator set is always stable. It can not be changed with new
              in/out comers until the session is expired. If any validator left
              the set, in order to come back the selection
              threshold is required to pass again.
            </div>
            <div className="page-content-text">
              Given the fact that GRANDPA gadget in 3DPass is applied on top of
              PoScan chain already built by the time and providing itself
              conventional probabilistic finality, the finalization stall
              situation is a serious incident but might not be fatal. It does
              not affect the block production as well as the chain moving
              forward. In case the current validator set is occurred to be
              incapable to vote, the next validator set takes their turn after
              the session is expired and keeps up with the best block, voting
              for all the chain non-finalized yet.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="3dprc-2">
          <div className="page-content-inner">
            <div className="page-content-title">
              3DPRC-2 the user objects tokenization standard
            </div>
            <div className="page-content-subtitle">
              What is 3DPRC-2?
            </div>
            <div className="page-content-text">
              <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> (3Dpass Request for Comments), proposed by PaulS in September 2023, is a standard 
              p2p protocol for the tokenization of the user objects operating within “The Ledger of Things”.
              This is the most useful part of the "Proof of Scan" consensus, which opens the capability 
              for the network to provide its decentralized service to customers.
            </div>
            <div className="page-content-subtitle">
              3DPRC-2 is implemented as the following components:
            </div>
            <ul className="page-content-text">
              <li>
                <strong>
                  Advanced version of “Proof of Scan”
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
                <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/poscan">PoScan</Link> Substrate-based pallet 
                (storage and <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>)
                </strong> 
                - The PoScan pallet is integrated into the network runtime providing the access to the network 
                decentralized storage by means of the object tokenization 
                <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>, which allows for:
                <ul className="page-content-text">
                  <li>
                    the user object authentication and its protection from being copied to the extent for the 
                    recognition algorithm precision;
                  </li>
                  <li>
                    non-fungible digital asset creation;
                  </li>
                  <li>
                    property rights definition and its transfers;
                  </li>
                  <li>
                    backed cryptocurrency issuance (fungible tokens backed by the asset)
                  </li>
                </ul>
              </li>
            </ul>
            <div className="page-content-subtitle">
            The User Object Authentication Protocol
            </div>
            <div className="page-content-text">
            The protocol represents a sequence of actions performing by validators and miners 
            actively participating in the network consensus at the time an object is being submitted by user.
            </div>
            <div className="page-content-text">
            <strong>
              1. Submitting the object
            </strong>
            </div>
            <div className="page-content-text">
             While placing an order, 3dpass user provides the following:
            </div>
              <ul className="page-content-text">
                <li>
                  an object to tokenize: <code>rock.obj</code> (in this example we are going to take 
                  3D model in <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.obj</Link> format)
                </li>
                <li>
                the object HASH ID (top10 hashes from the <Link to="/grid2d">Grid2d</Link> recognition algorithm 
                output; preset: <code> -a grid2d_v3a -s 12 -g 8 -d 10</code>; {" "}
                 <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> recognition toolkit is being used as 
                the implementation of Grid2d):
                <pre className="main-pre">
              {`
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
`}
            </pre>
                </li>
                <li>
                Authentication fee P3D/Byte: Let’s take 100 P3D as an example. This fee will be distributed 
                among the miners and validators taking part in the process (70 miners /30 validators). 
                The fee will be charged for each confirmation ordered (1 confirmation = 1 block). 
                The fee can be set up by the <Link to="/governance#council">Council</Link> vote.
                </li>
                <li>
                Storage fee: P3D/Byte (regular network storage fee)
                </li>
                <li>
                Number of confirmations: let’s take 6, for example. The more confirmations the user orders, 
                the more reliable result He gets, especially, when it comes to the network potentially being 
                attacked at the time. This is unlikely to happen, however, there is always a possibility for 
                every blockchain network to get through this sort of experience. It is expected that the user 
                is able to follow the gap between Best block and the Block finalized (normally the gap = 2 blocks) 
                to estimate the network state, before submitting the order.
                </li>
              </ul>
              <div className="page-content-text">
              There is a simple copy check on the object submit extrinsic (transaction). If there is a copycat on 
              the blockchain discovered, the transaction will fail (learn more about <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> output to know how objects 
              are supposed to be compared by its HASH IDs)
              </div>
              <div className="page-content-text">
            <strong>
              2. Estimation and Anti-SPAM protection
            </strong>
            </div>
            <div className="page-content-text">
            Once having the object submitted and fees paid, Validators (the most reliable nodes of 3Dpass network) 
            from the current GRANDPA validator set start estimating how long would it take for the object to get 
            processed by the network in average. They will try to process the object and, if successful, provide 
            the time in milliseconds at which they managed to get it done like this:
            </div>
            <pre className="main-pre">
              {`
Validator 1 - 128
Validator 2 - 36 
Validator 3 - 32 …
`}
            </pre>
            <div className="page-content-text">
            There is a limit of 3 blocks for the estimation phase to complete.
            </div>
            <div className="page-content-text">
            The validators will have to import the block containing the object and get it processed once again at 
            the next step when miners have added their judgements. Assuming the block target time in 3dpass set up 
            as 60 sec/block, there is a time frame limit of 10 seconds every validator must have finished processing within.
            </div>
            <div className="page-content-text">
            In disregards to the reason why a given validator didn't manage the estimation in time (10 sec), its vote won't be 
            taken. On top of that, every “weird” estimation result (vote) will be statistically ruled out and the average 
            processing time - calculated. For, example:
            </div>
            <pre className="main-pre">
              {`
Validator 1 - 1128 - (ruled out)
Validator 2 - 36 +
Validator 3 - 32 +
Validator 4 - 0.1- (ruled out) 
Validator 5 - 24 + 
Validator 6 - 18 + … 
`}
            </pre>
            <div className="page-content-text">
            The threshold for the object to pass is established at “2/3 +1” out of the actual number of validators in the set. 
            This is the same threshold ratio as the one being utilized for the GRANDPA finalization. The main requirement for this 
            procedure to work correctly would be having “2/3+1” validators providing true data on the object processing.
            </div>
            <div className="page-content-text">
            30% of the fee paid by the user will distributed among the validators-estimators in equal. Implying, there is about 
            400 validators in the set, 30 P3D/400= 0.075 P3D each validator gets.
            </div>
            <div className="page-content-text">
            It is assumed, that most of the actual validators are motivated enough to keep the network healthy, otherwise the 
            network as a whole would be considered unsafe. Although, the validators are not providing any substantial proof 
            of their work, which could not be taken for 100% truth by miners taking its turn at the next step.
            </div>
            <div className="page-content-text">
            This is a snapshot example of the object Estimated from the storage 
            (short version, the data is presented partially. See more POSCAN <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>):
            </div>
            <pre className="main-pre">
              {`
[
  [
    4
  ]
  {
    state: {
      Estimated: 2,693
    }
    obj: 0x6f200a7620302e313520302e383520302e320a7620302e313520302e383620....
    category: {
      Objects3D: Grid2dLow
    }
    hashes: [
      0x7fbe267b208d0ab9c34fa184d4593d0ae39d5bb56852ecc633cb1f6d9eb5aae0
      0x460c81f58510e211d162d458459f81575e630817c1b87bc3c0d2c3eec3ae68b7
      0x8047c7a4d2a75ce466c9510edb37ac1e98826ef383ab5d4c860b5010e42faa6e
      0x5001723ef6d85862733d25765f0700e381cc3a1f6d6b7dbb4efb8aeccc4615d4
      0xb8efd617a07099edcdbf2596d10787a6e16a4c59a5e36e46adedc1dd2424b8c9
      0x10c8d4984cf840845a7d7785871c70790bf1c55e11a3da54a41d3f21be5a7ea7
      0x833a2fc1f26ab9eb9bcc5b4e668f5d6bb91d6f87fb0798f99ce6bb4730dfc218
      0xabdedd28e03147d94e0d054d0bf24781bac01fdd81401cd3fb226b5a6e1a5371
      0x97c538a99641202385572df245d9cfb300f895a6c94e7caf074023a5ead1c62c
      0xdb2453f53270c9003a63b4d643d9bcc991ad7630d70a0d1511781f74a7a00fee
    ]
    whenCreated: 2,690
    whenApproved:
    owner: d1f5KGsoZ3xzB6Ecmv92DPizD1x5eToNHM1CPfSC1Xu4nzecN
    estimators: [
      [
        d1ePg4fK97U913xAnZzZ9dUf1W1XUA4bYVC2Zre8K9vjSixnc
        36
      ]
      [
        d1asoD7V6hdff4ExvtjRbdVT398Rg8fKEruYsKFS5P9mkT4fy
        32
      ]
    ]
    estOutliers: []
    approvers: []

    numApprovals: 6
    estRewards: 70,000,000,000,000,000
    authorRewards: 30,000,000,000,000,000
  }
]
]
            `}
           </pre>
           <div className="page-content-text">
           The object will be considered "NotApproved", if it doesn’t pass the estimation within 3 blocks timeframe limit.
           </div>
           <div className="page-content-text">
            <strong>
               3. Gathering confirmations/approvals
            </strong>
            </div>
            <div className="page-content-text">
            Once having the order status at "Estimated", the actual block author, who found new block, is getting privileged 
            to provide the judgement “Approved” about the object. There is no option for miners to provide a negative 
            judgement available.
            </div>
            <div className="page-content-text">
            Any honest block author is expected to do the processing job on the user object. The proof of work is required 
            at this step to be attached to the block. If the proof turns out to be incorrect or fake, the entire block will 
            be rejected by the majority of the network.
            </div>
            <div className="page-content-text">
            There is an additional copy check on the block import for every full 3dpass node. If there is a copycat of 
            the user object on the blockchain discovered, the block will be rejected, either. In order to get a proof 
            the block author should get the object processed with the same preset as the user actually have, with the 
            only exception for the top11 hashes are to be claimed from pass3d:
            </div>
            <pre className="main-pre">
              {`
admin@admin pass3d % ./target/release/pass3d -s 12 -g 8 -a grid2d_v3a -d 11 -i rock.obj
"7fbe267b208d0ab9c34fa184d4593d0ae39d5bb56852ecc633cb1f6d9eb5aae0"
"460c81f58510e211d162d458459f81575e630817c1b87bc3c0d2c3eec3ae68b7"
"8047c7a4d2a75ce466c9510edb37ac1e98826ef383ab5d4c860b5010e42faa6e"
"5001723ef6d85862733d25765f0700e381cc3a1f6d6b7dbb4efb8aeccc4615d4"
"b8efd617a07099edcdbf2596d10787a6e16a4c59a5e36e46adedc1dd2424b8c9"
"10c8d4984cf840845a7d7785871c70790bf1c55e11a3da54a41d3f21be5a7ea7"
"833a2fc1f26ab9eb9bcc5b4e668f5d6bb91d6f87fb0798f99ce6bb4730dfc218"
"abdedd28e03147d94e0d054d0bf24781bac01fdd81401cd3fb226b5a6e1a5371"
"97c538a99641202385572df245d9cfb300f895a6c94e7caf074023a5ead1c62c"
"db2453f53270c9003a63b4d643d9bcc991ad7630d70a0d1511781f74a7a00fee"
"ab198306dcee347bd84a942ffc9ab06c8458865fee03c5d1b20ab45b807dc1c5" - the 11th hash (proof of the first miner work)
              `}
            </pre>
            <div className="page-content-text">
            Miners know nothing about this 11th hash, until they get the object processed. This secret, called 
            “0 knowledge proof”, will be leveraged by the network majority while importing the block.
            </div>
            <div className="page-content-text">
            It is totally up to the block author whether or not to trust this collective estimation result coming 
            from validator set. So, there is always a risk for him to loose his block rewards. And there is a benefit 
            to get rewarded on top by user, if the judgement is accepted.
            </div>
            <div className="page-content-text">
            It is assumed, that every miner will rely on himself and make an independent decision about both aspects 
            the object authenticity and the processing time. If any of those fail, the judgement should never be provided.
            </div>
            <div className="page-content-text">
            If the block author decides to skip, the block will not contain the judgement, meaning, there is 
            no confirmation will be gained for the object.
            </div>
            <div className="page-content-text">
            If the block was accepted by the network majority, then “+1” confirmation the object gets. Now the next 
            block author takes its turn, and the proof of work will be the 12th hash from the grid2d output:
            </div>
            <pre className="main-pre">
              {`
admin@admin pass3d % ./target/release/pass3d -s 12 -g 8 -a grid2d_v3a -d 12 -i rock.obj
"7fbe267b208d0ab9c34fa184d4593d0ae39d5bb56852ecc633cb1f6d9eb5aae0"
"460c81f58510e211d162d458459f81575e630817c1b87bc3c0d2c3eec3ae68b7"
"8047c7a4d2a75ce466c9510edb37ac1e98826ef383ab5d4c860b5010e42faa6e"
"5001723ef6d85862733d25765f0700e381cc3a1f6d6b7dbb4efb8aeccc4615d4"
"b8efd617a07099edcdbf2596d10787a6e16a4c59a5e36e46adedc1dd2424b8c9"
"10c8d4984cf840845a7d7785871c70790bf1c55e11a3da54a41d3f21be5a7ea7"
"833a2fc1f26ab9eb9bcc5b4e668f5d6bb91d6f87fb0798f99ce6bb4730dfc218"
"abdedd28e03147d94e0d054d0bf24781bac01fdd81401cd3fb226b5a6e1a5371"
"97c538a99641202385572df245d9cfb300f895a6c94e7caf074023a5ead1c62c"
"db2453f53270c9003a63b4d643d9bcc991ad7630d70a0d1511781f74a7a00fee"
"ab198306dcee347bd84a942ffc9ab06c8458865fee03c5d1b20ab45b807dc1c5"
"82fd9527291ba30cdddeb5786bac083f8092987e379c9433d81a2eb1bb8c447a" - the 12th hash (proof of the second miner work)
              `}
            </pre>
            <div className="page-content-text">
            Again, the miner knows nothing about this 12th hash, until getting the object processed. If there is no hash 
            below the top11 available, <i>null</i> will be taken for proof.
            </div>
            <div className="page-content-text">
            This procedure repeats itself, up until the block at which required number of confirmations is reached. 
            In this particular example the number is 6, so the final 6th judgement will contain the HASH ID expanded 
            to top16 hashes:
            </div>
            <pre className="main-pre">
              {`
admin@admin pass3d % ./target/release/pass3d -s 12 -g 8 -a grid2d_v3a -d 16 -i miner/rock.obj
"7fbe267b208d0ab9c34fa184d4593d0ae39d5bb56852ecc633cb1f6d9eb5aae0"
"460c81f58510e211d162d458459f81575e630817c1b87bc3c0d2c3eec3ae68b7"
"8047c7a4d2a75ce466c9510edb37ac1e98826ef383ab5d4c860b5010e42faa6e"
"5001723ef6d85862733d25765f0700e381cc3a1f6d6b7dbb4efb8aeccc4615d4"
"b8efd617a07099edcdbf2596d10787a6e16a4c59a5e36e46adedc1dd2424b8c9"
"10c8d4984cf840845a7d7785871c70790bf1c55e11a3da54a41d3f21be5a7ea7"
"833a2fc1f26ab9eb9bcc5b4e668f5d6bb91d6f87fb0798f99ce6bb4730dfc218"
"abdedd28e03147d94e0d054d0bf24781bac01fdd81401cd3fb226b5a6e1a5371"
"97c538a99641202385572df245d9cfb300f895a6c94e7caf074023a5ead1c62c"
"db2453f53270c9003a63b4d643d9bcc991ad7630d70a0d1511781f74a7a00fee"
"ab198306dcee347bd84a942ffc9ab06c8458865fee03c5d1b20ab45b807dc1c5" - 11th hash (proof of the first miner work)
"82fd9527291ba30cdddeb5786bac083f8092987e379c9433d81a2eb1bb8c447a" - 12th hash (proof of the second miner work)
"10eac3abc33a75b16c1ca33aaf97db92542a452453265bf5c088dc33be750137" - 13th hash (proof of the third miner work)
"fdbf00e59e8b4d7ae44950751694ebeb2bb6ac969e166d4500d9bfbd886d7523" - 14th hash (proof of the forth miner work)
"2405d8048e0fead22be4aa4394104136e15c0ca578299068c2a9dbf3c7c68b59" - 15th hash (proof of the fifth miner work)
“905f5f8032ff6c956422ac0560431820e2bfa47bb0cf58368fd49dbc1e23e48c" - 16th hash (proof of the sixth miner work)
              `}
            </pre>
            <div className="page-content-text">
            Once the last confirmation ordered by user is approved by the majority of the network, the object 
            becomes "Approved" and available for further operations with the asset.
            </div>
            <div className="page-content-text">
            The object becomes NotApproved 5 blocks after last confirmation or the block, at which it was "Estimated", 
            if there is still no new confirmation available.
            </div>
            <div className="page-content-text">
            Every block author provided the network with correct judgement is getting rewarded with its share, which 
            is equal to 70%*fee/n, where n is the number of confirmations ordered by user. 
            In this example n=6 and 70% fee = 70 P3D So, every honest miner gets 11.666666666666 P3D.
            </div>
            <div className="page-content-text">
            This is a snapshot example of the object approved from the storage (short version, the data is presented partially. 
            See more POSCAN <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API">API</Link>):
            </div>
            <pre className="main-pre">
              {`
[
  [
    4
  ]
  {
    state: {
      Approved: 2,699
    }
    obj: 0x6f200a7620302e313520302e383520302e320a7620302e313520302e383620....
    category: {
      Objects3D: Grid2dLow
    }
    hashes: [
      0x7fbe267b208d0ab9c34fa184d4593d0ae39d5bb56852ecc633cb1f6d9eb5aae0
      0x460c81f58510e211d162d458459f81575e630817c1b87bc3c0d2c3eec3ae68b7
      0x8047c7a4d2a75ce466c9510edb37ac1e98826ef383ab5d4c860b5010e42faa6e
      0x5001723ef6d85862733d25765f0700e381cc3a1f6d6b7dbb4efb8aeccc4615d4
      0xb8efd617a07099edcdbf2596d10787a6e16a4c59a5e36e46adedc1dd2424b8c9
      0x10c8d4984cf840845a7d7785871c70790bf1c55e11a3da54a41d3f21be5a7ea7
      0x833a2fc1f26ab9eb9bcc5b4e668f5d6bb91d6f87fb0798f99ce6bb4730dfc218
      0xabdedd28e03147d94e0d054d0bf24781bac01fdd81401cd3fb226b5a6e1a5371
      0x97c538a99641202385572df245d9cfb300f895a6c94e7caf074023a5ead1c62c
      0xdb2453f53270c9003a63b4d643d9bcc991ad7630d70a0d1511781f74a7a00fee
    ]
    whenCreated: 2,690
    whenApproved: 2,699
    owner: d1f5KGsoZ3xzB6Ecmv92DPizD1x5eToNHM1CPfSC1Xu4nzecN
    estimators: [
      [
        d1ePg4fK97U913xAnZzZ9dUf1W1XUA4bYVC2Zre8K9vjSixnc
        36
      ]
      [
        d1asoD7V6hdff4ExvtjRbdVT398Rg8fKEruYsKFS5P9mkT4fy
        32
      ]
    ]
    estOutliers: []
    approvers: [
      {
        accountId: d1jygGfK97U913xAnZzZ9dUf1W1XUA4bYVC2Zre8KTrgnjs6
        when: 2,695
        proof: 0xab198306dcee347bd84a942ffc9ab06c8458865fee03c5d1b20ab45b807dc1c5
      }
      {
        accountId: d19ouGfK97U9edj69nZzZ9dUf1W1XUA4bYVC2Zre8K9Jgclj
        when: 2,696
        proof: 0x82fd9527291ba30cdddeb5786bac083f8092987e379c9433d81a2eb1bb8c447a
      }
    ]
    numApprovals: 6
    estRewards: 70,000,000,000,000,000
    authorRewards: 30,000,000,000,000,000
  }
]
]
              `}
            </pre>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProofOfScan;
