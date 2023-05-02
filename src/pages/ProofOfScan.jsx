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
              3DPass p2p Network
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
              Object Recognition Algorithms
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
              Object’s Data Privacy
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
              Verification Mechanism
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#block">
            <div
              className={
                locationHash.includes("block")
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
          <a href="#fork">
            <div
              className={
                locationHash.includes("fork")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Fork Choice Rule
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#granpda">
            <div
              className={
                locationHash.includes("granpda")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Finally Gadget GRANDPA
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#chains">
            <div
              className={
                locationHash.includes("chains")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Layer 2: Public Chains Of Limited Assets
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="p2p">
          <div className="page-content-inner">
            <div className="page-content-title">
              3DPass Blockchain p2p Network
            </div>
            <div className="page-content-text">
              3DPass decentralized network is available to provide the next
              level of quality to the entire blockchain market, so that anyone
              could obtain proof that there is only one original object that is
              published as a digital asset. At a minimum this will make it
              transparent when dealing with copies. It is called the network of
              unique things, which can be utilized within smart-contracts and
              dApps. The network nodes will prevent the duplication of assets.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/blockchain_of_things2.png"
              alt="img"
            />
            <div className="page-content-text">
              It is essential to not only have the opportunity of issuing
              non-fungible tokens but to also reliably be sure that the digital
              assets are corresponding with the physical asset. Irrespective of
              whether it pertains to the physical object or the digital 3D model
              due to each one having a set of distinctive properties that can be
              recognized. In order to solve this issue, computing power is
              required within the network for 3D object processing as well as
              spam protection. <Link to="https://ipfs.io/">IPFS</Link> is used as a decentralized storage for 3D
              objects. Integration is provided by the <Link to="https://substrate.io/">Substrate</Link> framework.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="object">
          <div className="page-content-inner">
            <div className="page-content-title">
              Object Recognition Algorithms
            </div>
            <div className="page-content-text">
              It's not a secret that conventional NFTs and smart contracts are
              useless, due to the lack of identity. They are just "hanging up in
              the air" not being tethered to anything we use in life. That's why
              leveraging object recognition algorithms is such an important part
              of 3DPass consensus. It just makes dApp's logic able to
              dinstinguish original ones from fakes, assuming that an asset's
              owner defines the border of their property rights themself. Thus,
              the border is always determined by math calculations.
            </div>
            <div className="page-content-text">
              We encourage people to develop new recognition algorithms to be
              added into <Link to="https://3dpass.org/pass3d.html">pass3d recognition toolkit</Link> and to make it even more
              powerful.
            </div>
            <div className="page-content-subtitle">
              Conditions for canditate-algorithms
            </div>
            <div className="page-content-text">
              Types of things to recognize:
            </div>
            <ul className="page-content-text">
              <li>3D objects</li>
              <li>2D objects (drawings)</li>
              <li>2D fingerprints</li>
              <li>face recognition</li>
              <li>voice</li>
              <li>melody</li>
              <li>radio signal</li>
              <li>barcodes</li>
              <li>
                qr codes, etc - everything recognizable by means of machine
                processing.
              </li>
            </ul>
            <div className="page-content-text">
              First of all, an object's <Link to="/features#3drecognition-hash-id">HASH ID</Link> calculated has to be
              reproducible i.e stable for different scans of the same object
              within a noise of scanning.
            </div>
            <div className="page-content-text">
              We don’t have any feedback to compare and get a single 100%
              working hash from each scan automatically. However, the
              algorithm's logic has to be flexible enough to adjust the
              definition level of processing to the resolution and accuracy of
              objects scanning or its model.
            </div>
            <div className="page-content-subtitle">
              Conditions for canditate-algorithms
            </div>
            <ul className="page-content-text">
              <li>
                <Link to="/grid2d">Grid2d</Link> - 3D shape recognition algorithm, which allows to
                calculate a stable identity <Link to="/features#3drecognition-hash-id">HASH ID</Link> for 3D objects (models).
              </li>
              <li>
                Feel free to implement or suggest new algotishms and jump right
                in <Link to="/coin#distribution-contribution">3DPass contribution rewards program</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="privacy">
          <div className="page-content-inner">
            <div className="page-content-title">Object’s Data Privacy</div>
            <div className="page-content-text">
              3DPass never collects or transmits any 3D object data processed by
              the recognition toolkit unless the user decides to store it on the
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
            <div className="page-content-title">Verification Mechanism</div>
            <div className="page-content-text">
              3Dpass network based on blockchain and represents one layer of
              equal nodes leveraging <Link to="/grid2d">Grid2d</Link> recognition algorithm, mentioned
              above. The very first purpose of the network is to check up the
              authenticity and uniqueness of objects submitted by users.
            </div>
            <div className="page-content-text">
              For example, someone has just submitted a 3D object, hoping to
              construct a new block. Technically, it’s required three things to
              be added into the queue, such as:
            </div>
            <ul className="page-content-text">
              <li>
                3D model of the object ( <Link to="https://en.wikipedia.org/wiki/STL_%28file_format%29">.stl</Link> or <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.obj</Link> standards are supported)
              </li>
              <li>
              <Link to="/features#3drecognition-hash-id">Hash ID</Link> of the object, produced by <Link to="/grid2d">Grid2d</Link> recognition algorithm
              </li>
              <li>
                An additional security token (rotation bytes) either produced by{" "}
                <Link to="/grid2d">Grid2d</Link> which allows to verify the certain algorithm was really
                used. This represents a hash taken from randomly chosen
                intermediate calculation result of the object processing. So,
                anyone can check it up and verify while the processing of the
                object is going on.
              </li>
            </ul>
            <div className="page-content-text">
              Now, every Node of the network, being synchronized, can import the
              object and run its 3D shape recognition processing. In order to
              accept or decline the Node checks up the following:
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
                Whether or not the security tokens matched. If matched, that
                means the actual recognition algorithm was really leveraged by
                user who submitted the object. It makes us sure that the <Link to="/features#3drecognition-hash-id">Hash ID</Link>{" "}
                wasn’t copied and pasted from somewhere or just accidentally
                generated.
              </li>
            </ul>
            <div className="page-content-text">
              The object which passed the verification check will be accepted.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/3dpass_network2.png"
              alt="img"
            />
            <div className="page-content-text">
              P - Publisher (node which has submitted the object) V - Validators
              (nodes which have verified the object authenticity)
            </div>
          </div>
        </div>
        <div className="page-content-block" id="block">
          <div className="page-content-inner">
            <div className="page-content-title">New Block</div>
            <div className="page-content-text">
              Each new block is going to be built on top of the parent block of
              the best chain (longest chain rule is actually applied). It is
              also sealed to the parent block hash with <Link to="https://en.wikipedia.org/wiki/SHA-2">SHA256</Link> cryptographic
              hash-function.
            </div>
            <div className="page-content-text">
              Block header consists of the following data:
            </div>
            <div className="page-content-text">
              3D model of the object in the content of <Link to="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.obj</Link> file format (100kb
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
              The object's <Link to="/features#3drecognition-hash-id">Hash ID</Link> (Top10 hashes list coming from <Link to="/grid2d">Grid2d</Link> output
              <Link to="/pass3d">result, -g 8 -s 66</Link>)
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
              Block hash - the main block identifier. It represents SHA256 hash
              sealed to the parent block hash with the cryptographic hash
              function. And besides, the very top hash of the Top10 is used as
              an additional nonce. Let's say, if the parent block hash is
              "090ae6b23e2192fa4c2fb40cddad6e8537e2b437c49ff9fb227cf32c4e4085fc"
              and the very top hash is
              "72592f8f6ea67c60ca7d9c7683256c3636a30be464952eb82996bff52ca4415d",
              then the new block hash would be the hash taken from the seed like
              this:
            </div>
            <pre className="main-pre">
              {`
"090ae6b23e2192fa4c2fb40cddad6e8537e2b437c49ff9fb227cf32c4e4085fc72592f8f6ea67c60ca7d9c7683256c3636a30be464952eb82996bff52ca4415d"
`}
            </pre>
            <div className="page-content-text">
              Difficulty number the block had been proposed with (e.x. 10)
            </div>
            <div className="page-content-text">
              Considering the network needs the computing power for objects
              processing, we came up with the rules applied to the object shape
              possible to get rewarded for a new block with. The rules
              principals, actually, quite similar to bitcoin, however, P3D
              mining has objects recognition algorithm being involved.
            </div>
            <div className="page-content-text" id="nbrules">Here is the rules:</div>
            <ul className="page-content-text">
              <li>New block target time: 1 block per 60 seconds</li>
              <li>
                By default, each 243000 blocks there is a difficulty step up
                involving “+0” requirement to be added at the front of the new
                block hash. So, in order to create a new block after “climbing”
                over the step and get rewarded, someone has to pick up a unique
                3D object, the new block hash would include one more zero at the
                front like in the examples below:
              </li>
              <li>
                Block hash example, from genesis block to the block number
                243000:
                “090ae6b23e2192fa4c2fb40cddad6e8537e2b437c49ff9fb227cf32c4e4085fc”
              </li>
              <li>
                from the block number 243001 to 486000:
                “008cfda2b4811bf2ff1fe3ab92b38e64fc134d98c3dc8764eb8641a477b77a47”
              </li>
              <li>
                from the block number 3402001 to 3645000:
                “00000000000000f2ff1fe3abr6bt8e64fc134d98c3dc8764eb8641aff7b7sa4f”,
                etc.
              </li>
              <li>
                There is a difficulty adjustment dynamic rule on top, which
                serves to maintain the network velosity around the block target
                time (1 block per 60 seconds) in average. Because of the network
                hashrate volatility, we have to be able to make the mining issue
                harder and easier to solve in order to ensure the certain amount
                of blocks to be produced for the aggregation period (1 hour).
              </li>
            </ul>
            <div className="page-content-text">
              Note that neither of the rules above touches the objects submitted
              not in the reason of getting mining rewards. So, miners have to
              strict the rules but the other users don’t. They might submit any
              objects they want, of course, being charged P3D for the
              authenticity validation service provided by miners while they're
              constructing a new block. So, they have all the authority at the
              moment to validate either the object just mined and the users'
              commercial ones.
            </div>
            <div className="page-content-text">
              Once new block is produced, it is awaiting to be chosen as a
              parent block for the next new block. The block reaches maturity
              after 100 confirmations (100 blocks built on top). The block gets
              finalized according to <Link to="https://polkadot.network/blog/polkadot-consensus-part-2-grandpa/">GRANDPA</Link> protocol.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="randomness">
          <div className="page-content-inner">
            <div className="page-content-title">Randomness</div>
            <div className="page-content-text">
              Randomness is one of the most important parts of the consensus.
              It’s leveraged by miners picking up some random 3D objects of
              unqie shape being as much unpredictable as it’s possible. There
              are two different ways for miners to get 3D object's model. The
              first one is to get a real world object scanned by 3D scanner,
              which would be unpredictable enough, although it takes a lot of
              work to make. It seems to be much more efficient just to generate
              it on the computer. However, computers are bad at random numbers
              and, due to that fact, they would tend to create quite
              similar-shaped 3D models. Of course, the same or very
              similar-shaped object will be rejected by the recognition
              algorithm (depending on the set of parameteres applied, <Link to="/grid2d">Grid2D</Link> {" "}
              will recognize the obgect with certain error). Statistically it
              would accomulate additional difficulty to generate a new uniqe
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
              Our block production begins with 3D objects queue. 3D models are
              being sent to the input of PoScan via RPC like this:
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
              Where one of the parameters is the content of 3D model's file in
              .obj format, but with\n added at the end of each line.
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
              There is a handler on the Node's side, which checks the queue. If
              there is a 3D model found, the handler would run its shape
              processing. Miners join the process, doing the same
              simultaneuosly. All the nodes, including miners, have chosen the
              best chain at the time. In odrder to create a new block they will
              use the parent block (the top block of the best chain). So, the
              process might look like this:
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_production_1.png"
              alt="img"
            />
            <div className="page-content-text">
              After the HASH ID is calculated, miner tries to create a new block
              hash. In order to do so, it seales the very top hash of the HASH
              ID to the parent block hash already chosen at the time. If the
              resulting hash corresponds to the new block mining rules, it
              becomes a new block hash, and the new block proposer will be
              created and broadcasted over the network.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_production_21.png"
              alt="img"
            />
            <div className="page-content-text">
              If the resulting hash doesn't correspond to the rules, the object
              will be rejected. And the node will keep checking the queue for a
              new one to appear. The block verified participates the Tie Break
              competition among the miners trying to construct the block on top
              of the longest chain they believe to be the best one. This logic
              is quite similar to conventional PoW.
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
              The block verified participates the Tie Break competition among
              the other block Authors (miners), trying to construct the block on
              top of the longest chain they believe to be the best one. The
              block proposed earlier wins. This logic is quite similar to the
              conventional PoW, 51% attack is possible.
            </div>
            <div className="page-content-text">
              Once being created, the new block proposer consists of such things
              as: block header, thansactions from transaction pool and some
              metadata. All the data is signed with the block Author's
              signature. In order to be able to prove authorship miner must have
              generated the account, its private and public keys and a miner's
              key (address). The block proposer is being imported by the network
              Nodes and there is a validation procedure on import that causes
              the blockchain reconstrucion. The best chain has to be chosen.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/block_production_41.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="fork">
          <div className="page-content-inner">
            <div className="page-content-title">Fork Choice Rule</div>
            <div className="page-content-text">
              The protocol contains a chain scoring rule for a given chain (the
              best chain rule). Each honest node will propagate the chain with
              the highest score it knows about to all other nodes. The best
              chain is selected and must be accepted by all the nodes on the
              network. The best block should be no further, than 3 blocks away
              ahead from the last block finalized. Because of this rule, 51%
              attack is still possible, however, the attacker must have taken
              over at least 2/3 of GRANDPA votes in addition (see more Finality
              gadget: GRANDPA), which makes it much more difficult to arrange.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/best_chain2.png"
              alt="img"
            />
          </div>
        </div>
        <div className="page-content-block" id="granpda">
          <div className="page-content-inner">
            <div className="page-content-title">Finality Gadget GRANDPA</div>
            <div className="page-content-text">
              3Dpass network implicates a provable finality protocol called
              GRANDPA which guarantees blocks to reach finality in opposite to
              probabilistic finality (e.x. Nakamoto protocol which first was
              applied in Bitcoin). Pease refer to the <Link to="https://polkadot.network/blog/polkadot-consensus-part-2-grandpa/">GRANDPA paper</Link> to read full
              description of the protocol.
            </div>
            <div className="page-content-text">
              The block Author produced a correct block takes the authority to
              vote for the best chain finality, as long as they have put 100 000
              - 400 000 P3D in a collateral. Thus, Grandpa Authority set
              consists of the most reliable block authors producing some blocks
              in the 100 - 8000 most recent blocks looking back, and 2/3 votes
              of which is needed to make the final decision. After the voting is
              complete there would be no chance to reselect the best chain.
            </div>
            <div className="page-content-text">
              There is a session of 100 blocks length within which the current
              validator set is always stable. It can not be changed with new
              in/outcomers until the session is expired. In case a validator is
              heading off the validator set, in order to come back the selection
              threshold is required to pass again.
            </div>
            <div className="page-content-subtitle">
              Council responsibilities
            </div>
            <ul className="page-content-text">
              <li>
                100 000 P3D locked + 1 block mined in 100 recent blocks back
              </li>
              <li>
                200 000 P3D locked + 1 block mined in 2000 recent blocks back
              </li>
              <li>
                300 000 P3D locked + 1 block mined in 4000 recent blocks back
              </li>
              <li>
                400 000 P3D locked + 1 block mined in 8000 recent blocks back
              </li>
            </ul>
            <div className="page-content-subtitle">
              Council responsibilities
            </div>
            <div className="page-content-text">
              There is a list of punishments for Validators that behave against
              the GRANDPA protocol rules:
            </div>
            <ul className="page-content-text">
              <li>
                PreVote Equivocation (voting for two different chains
                simultaneously): 40 000 P3D and get excluded from the validator
                set
              </li>
              <li>
                Not being online/available: 20 000 P3D and get excluded from the
                validator set
              </li>
              <li>
                Not being able to vote for any reason (e.x. Firewall): 20 000
                P3D and get excluded from the validator set
              </li>
            </ul>
            <div className="page-content-text">
              Given the fact, that GRANDPA gadget in 3DPass is applied on top of
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
        <div className="page-content-block" id="chains">
          <div className="page-content-inner">
            <div className="page-content-title">
              Layer 2: Public Chains Of Limited Assets
            </div>
            <div className="page-content-text">
              Proof of Scan consensus allows to create your own rules to produce
              chains of limited supply assets for gaming, metaverse,
              augmented/virtual reality. All you need to do is to utilize the
              same <Link to="/proof-of-scan#verification">verification mechanism</Link>.
            </div>
            <div className="page-content-text">
              You could come up with some conditions for your objects submitted,
              which will put some limitation to the total supply. For example,
              you can set up the rule of only 3D models accepted which would
              have up to 9 peaks on the surface and the HASH ID of which would
              contain at least 10 prime numbers. Use 3DPass <Link to="/proof-of-scan#nbrules">new block rules</Link> as a
              template.
            </div>
            <img
              className="page-img"
              style={{ marginBottom: "50px" }}
              src="/images/l21.png"
              alt="img"
            />
            <div className="page-content-text">
              The are a lot of variations of that kind of rules which is
              garanteed to provide you limited supply items for metaverse/AR/VR,
              using 3DPass. And all of those assets would be tethered to its
              owners, not to the particular platform. That makes owners able to
              use their essets within different games and platforms, because the
              asset has its own stabele identity <Link to="/features#3drecognition-hash-id">Hash ID</Link> it might be recognized
              by anywhere you want.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProofOfScan;
