import "../styles/features.css";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Mainnet = () => {
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
        <div className="page-title">Mainnet</div>
        <div className="page-nav-content">
          <a href="#requirements">
            <div
              className={
                locationHash.includes("requirements")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Requirements
              <div className="page-nav-circle"></div>
            </div>
          </a>
           {/*<a href="#mining-pool">
            <div
              className={
                locationHash.includes("mining-pool")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Mining Pool Guidelines (create/join)
              <div className="page-nav-circle"></div>
              <div className="page-nav-line mining-line"></div>
            </div>
          </a>
          <a href="#mining-pool-general">
            <div className="page-nav-inside">
              General
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-rewards">
            <div className="page-nav-inside">
              Rewards
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-monopol">
            <div className="page-nav-inside">
              Monopol Restrictions & Penalties
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-identity">
            <div className="page-nav-inside">
              Identity and KYC
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-setting">
            <div className="page-nav-inside">
              Setting Up a Pool
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-joining">
            <div className="page-nav-inside">
              Joining the Pool
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-leaving">
            <div className="page-nav-inside">
              Leaving the Pool
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-fetching">
            <div className="page-nav-inside">
              Fetching Mining Info
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#mining-pool-mining">
            <div className="page-nav-inside">
              Mining Pool List
              <div className="inside-nav-circle"></div>
            </div>
          </a>*/}
          <a href="#docker">
            <div
              className={
                locationHash.includes("docker")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Mining SOLO With Docker (any system)
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#linux-mac">
            <div
              className={
                locationHash.includes("linux-mac")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Mining SOLO Linux or MacOS
              <div className="page-nav-circle"></div>
              <div className="page-nav-line node-line"></div>
            </div>
          </a>
          <a href="#linux-mac-simple_node">
            <div className="page-nav-inside">
              Setting up Node
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#linux-mac-keys">
            <div className="page-nav-inside">
              Setting up Keys
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#linux-mac-run">
            <div className="page-nav-inside">
              Running the Node
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#linux-mac-mining_solo">
            <div className="page-nav-inside">
              Setting up Miner
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#wallet">
            <div
              className={
                locationHash.includes("wallet")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              How To Use The Web Wallet
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#unlock">
            <div
              className={
                locationHash.includes("unlock")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              How To Unlock Funds Mined
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#validator">
            <div
              className={
                locationHash.includes("validator")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              How To Set Up Validator
              <div className="page-nav-circle"></div>
              <div className="page-nav-line validator-line"></div>
            </div>
          </a>
          <a href="#validator-general">
            <div className="page-nav-inside">
              General
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#validator-requirements">
            <div className="page-nav-inside">
              Requirements
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#validator-threshold">
            <div className="page-nav-inside">
              Selection Threshold
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#validator-punishments">
            <div className="page-nav-inside">
              Punishments
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#validator-setting">
            <div className="page-nav-inside">
              Setting Up Procedure
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#validator-rejoin">
            <div className="page-nav-inside">
              Rejoining the Validator Set
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#validator-locks">
            <div className="page-nav-inside">
              How to Check My Locks
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#validator-exit">
            <div className="page-nav-inside">
              Legitimate Exit
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#chain">
            <div
              className={
                locationHash.includes("chain")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              On-chain Identity
              <div className="page-nav-circle"></div>
              <div className="page-nav-line chain-line"></div>
            </div>
          </a>
          <a href="#chain-general">
            <div className="page-nav-inside">
              General
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#chain-registrars">
            <div className="page-nav-inside">
              Registrars
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#chain-kyc">
            <div className="page-nav-inside">
              KYC procedure: Reasonable
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#chain-verify">
            <div className="page-nav-inside">
              How to verify Reasonable account
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#addresses">
            <div
              className={
                locationHash.includes("addresses")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Addresses and Keys
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#troubleshooting">
            <div
              className={
                locationHash.includes("troubleshooting")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Troubleshooting
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="sub-header-holder">
          <a href="https://telemetry.3dpscan.io/">
            <div className="one-subheader">Mainnet Telemetry</div>
          </a>
          <a href="https://wallet.3dpass.org/">
            <div className="one-subheader">Web Wallet</div>
          </a>
          <a href="/mobile-wallet">
            <div className="one-subheader">Mobile Wallet</div>
          </a>
          <a href="https://swap.3dpscan.io">
            <div className="one-subheader">3DPass Swap DEX</div>
          </a>
          <a href="https://3dpscan.io">
            <div className="one-subheader">Block Explorer 1</div>
          </a>
          <a href="https://explorer.3dpassmining.info">
            <div className="one-subheader">Block Explorer 2</div>
          </a>
          <a href="https://explorer-api.3dpscan.io/graphql/">
            <div className="one-subheader">Block Explorer API</div>
          </a>
          <a href="https://discord.gg/u24WkXcwug">
            <div className="one-subheader">Discord</div>
          </a>
          <a href="https://t.me/pass3d">
            <div className="one-subheader">Telegram</div>
          </a>
          <a href="https://github.com/3Dpass/3DP/wiki">
            <div className="one-subheader">Dev Wiki</div>
          </a>
          <a href="https://github.com/3Dpass">
            <div className="one-subheader">GitHub</div>
          </a>
          <a href="https://www.3dpassmining.info">
            <div className="one-subheader">Mining Dash Board</div>
          </a>
          <a href="/assets">
            <div className="one-subheader">Assets</div>
          </a>
          <a href="/assets/#smart-contracts">
            <div className="one-subheader">Smart Contracts</div>
          </a>
        </div>
        <div className="page-content-block first-page-block" id="requirements">
          <div className="page-content-inner">
            <div className="page-content-title">Requirements</div>
            <div className="page-content-text">
              One of the most common ways for a beginner to get started with a simple Node is
              to leverage a cloud server running Linux. The transaction weights in PoScan were
              benchmarked on standard hardware. It is recommended that Node holders stick to at least 
              the standard in order to ensure the Node capability of processing new blocks on time (<i>block target time = 60 sec</i>). 
              The following are not minimum requirements, however downgrading hardware below the standard 
              might lead to some issues with the Node performance.
            </div>
            <div className="page-content-subtitle">Standard Hardware</div>
            <ul className="page-content-text">
              <li>CPU - Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz</li>
              <li>
                Storage - A NVMe solid state drive. Should be reasonably sized
                to deal with blockchain growth. Starting around 80GB - 160GB
                will be okay for the first six months of Realis, but will need
                to be re-evaluated every six months.
              </li>
              <li>Memory - 64GB.</li>
            </ul>
            <div className="page-content-text">
              <i>Important!</i> The specs posted above are by no means the minimum specs that you
              could use when running a  simple Node, however you should be aware
              that if you are using less you may ne​ed to toggle some extra
              optimizations in order to catch up with the chain.
            </div>
          </div>
        </div>
         {/* <div className="page-content-block" id="mining-pool">
          <div className="page-content-inner">
            <div className="page-content-title">Mining Pool Guidelines</div>
            <div className="page-content-subtitle" id="mining-pool-general">
              General
            </div>
            <div className="page-content-text">
              3DPass mining pool is a decentralized pallet implemented into the
              Node runtime, which allows for creation numbers of mining pools
              the block rewards of which are going to be distributed among
              miners directly from the network without a middlemen (as if they
              were to mine SOLO). This is guaranteed for miners and pool admins
              to get rewarded, irrespective to what kind of devices (CPU, GPU or
              whatever) they have connected with.
            </div>
            <div className="page-content-text">
              In order to prove the miner's work there is an additional
              off-chain difficulty number being leveraged by the client app{" "}
              <Link to="https://github.com/3Dpass/pass3d-pool">pass3d-pool</Link> and verified on the pool Node's side. The additional
              difficulty is set up by the pool's admin. Every 10 sec the client
              app is requesting the pool Node (via the <Link to="https://github.com/3Dpass/3DP/wiki/RPC-API-mining-pool-interaction">RPC API</Link>) for some
              necessary mining metadata, such as:
            </div>
            <ul className="page-content-text">
              <li>
                Node's public key for client authorization and objects
                encryption
              </li>
              <li>Actual chain difficulty</li>
              <li>Additional off-chain difficulty</li>
              <li>Best block hash</li>
              <li>Parent block hash</li>
            </ul>
            <div className="page-content-text">
            <Link to="https://github.com/3Dpass/pass3d-pool">pass3d-pool</Link> app receives 3D modes from <Link to="https://github.com/3Dpass/miner">miner</Link> (3D object generator
              being used for mining) through the port 9833. Once the object,
              corresponding to the additional difficulty found, it's being sent
              over to the pool Node the miner's account (address) is registered
              in. The pool Node is available for miniers by its --url. The pool
              Node leverages pushMiningObject <Link to="https://github.com/3Dpass/3DP/wiki/RPC-method-%22pushMiningObject%22">RPC method</Link> to submit the final
              object into the network.
            </div>
            <div className="page-content-text">
              There is a statistic report being saved by the pool Node every 20
              blocks on the chain storage, which is available for everyone. Once
              the block is mined by the mining pool Node and accepted by the
              network, the block rewards are being distributed directly in
              proportion to the input hashrate provided by each miner in the
              pool.
            </div>
            <img
              className="page-img"
              src="/images/pass3d-pool1.png"
              alt="img"
              style={{ marginBottom: "50px" }}
            />
            <div className="page-content-subtitle" id="mining-pool-rewards">
              Rewards
            </div>
            <div className="page-content-text">
              Pool's admin sets up the pool fee % being charged for every block
              mined by the pool. The fee is calculated as the % of the actual
              block rewards, <Link to="/mainnet#validator">validators</Link> fee excluded.
            </div>
            <div className="page-content-text">Example:</div>
            <div className="page-content-text">
              Block rewards = 500 P3D, pool fee = 10 %, validators fee = 30%.
              After excluding validators fee 150 P3D, the rest 350 P3D will be
              divided among miniers and and the pool operator. Therefore, pool's fee 10%
              = 35 P3D, and 315 P3D will be distributed among all miners in the
              pool.
            </div>
            <div className="page-content-text">
              In order for the minier to take a share of the block rewards it is
              required to push at least one correct 3D object, the hash ID of
              which would be below the additional off-chian difficulty number.
              All other pushed objects above the limit will not be counted.
              Assume, we have 3 miners in the pool, which pushed 10 correct 3D
              objects, and 1 block was mined.
            </div>
            <div className="page-content-text">Pool report:</div>
            <ul className="page-content-text">
              <li>Miner1: 6 objects</li>
              <li>Miner2: 3 objects</li>
              <li>Miner3: 1 object</li>
            </ul>
            <div className="page-content-text">
              Now we can calculate miner shares, and the rewards will be
              distributed like this:
            </div>
            <div className="page-content-text">Miners 315 P3D</div>
            <ul className="page-content-text">
              <li>Miner1: 60% share - 189 P3D</li>
              <li>Miner2: 30% share - 94.5 P3D</li>
              <li>Miner3: 10% share - 31.5 P3D</li>
            </ul>
            <div className="page-content-text">Pool fee: 10% - 35 P3D</div>
            <div className="page-content-text">
              Total mining rewards: 350 P3D
            </div>
            <div className="page-content-subtitle" id="mining-pool-monopol">
              Monopoly restriction and penalties
            </div>
            <div className="page-content-text">
              In order to ensure the network healthiness and prevent it from
              being taken over by just a few mining pool Nodes hosting the whole
              network, there is a restriction rule, which will incentivize to
              create 5 mining pools at minimum. Each pool should not exceed the
              limit = 20% of luck calculated statistically from the blockchain
              history. History depth for the pool_rate to calculate: 100 blocks
              back.
            </div>
            <div className="page-content-text">
              There is no technical restrictions, but the economic penalties
              being applied to the minng block rewards, once having the limit
              rule broken up. The maximum penalties share possible to get is
              100% mining block rewards, which is being slashed as the pool_rate
              has exceded the threshold of 2*limit (40% of luck). All the
              penalties are being slashed to the <Link to="/governance#treasury">Treasury</Link> pot controlled by the{" "}
              <Link to="/governance">Governance</Link>.
            </div>
            <div className="page-content-text">Penalties Share Conditions</div>
            <div className="page-content-text">
              Block rewards = 500 P3D, pool fee = 10 %, validators fee = 30%.
              After excluding validators fee 150 P3D, the rest 350 P3D will be
              divided among miniers and pool's admin. Therefore, pool's fee 10%
              = 35 P3D, and 315 P3D will be distributed among all miners in the
              pool.
            </div>
            <div className="page-content-text">
              In order for the minier to take a share in the block rewards it is
              required to push at least one correct 3D object, the hash ID of
              which would be below the additional off-chian difficulty number.
              All other pushed objects above the limit will not be counted.
              Assume, we have 3 miners in the pool, which pushed 10 correct 3D
              objects to, and 1 block was mined.
            </div>
            <pre className="main-pre">
              {`pool_rate <= limit
(pool_rate - limit) / limit
limit < pool_rate < 2*limit
pool_rate >= 2*limit`}
            </pre>
            <img
              className="page-img"
              src="/images/pool-penalties1.png"
              alt="img"
              style={{ marginBottom: "50px" }}
            />
            <div className="page-content-subtitle" id="mining-pool-identity">
              Identity and KYC
            </div>
            <div className="page-content-text">
              Minimun Idenity level of confidence requirements:
            </div>
            <ul className="page-content-text">
              <li>
                Pool admin - Reasonable, which means that there is at least one
                contact (Twitter, Google, Discord, Telegram) proved to be
                associated with the user's network address and there is no
                duplicates found on the blockchain.
              </li>
              <li>
                Pool member - depends on the option chosen by the pool admin:
                Anonymous - there is no Idenity requirements for the pool
                members to join KYC - Reasonable Identity level is required
              </li>
              <li>
              <Link to="/mainnet#chain-registrars">How to get leveled up your P3D address to Reasonable</Link>
              </li>
            </ul>
            <div className="page-content-text">Selection threshold</div>
            <div className="page-content-text">
              Not only one Registrar could provide its Identity judgement on any
              address they have been requested for, but numbers of them
              available. And 2/3 positive judgements will be enough for the
              account to pass.
            </div>
            <div className="page-content-text">Example: positive bias</div>
            <div className="page-content-text">
              magine, there are 10 Registrars on the network, and 8 of them
              judged Reasonabele, but Low Quality was provided by the rest. The
              bias would be positive:
            </div>
            <pre className="main-pre">{`8 > 2/3*10`}</pre>
            <div className="page-content-text">Example: negative bias</div>
            <div className="page-content-text">
              Imagine, there are 10 Registrars on the network, and 6 of them
              judged Reasonabele, but Low Quality was provided by the rest. The
              bias would be positive:
            </div>
            <pre className="main-pre">{`6 < 2/3*10`}</pre>
            <div className="page-content-text">
              One Reasonable Identity = One pool admin
            </div>
            <ul className="page-content-text">
              <li>
                It is allowed for only one unique Reasonable Identity to be a
                pool admin. All duplicates will be rejected.
              </li>
              <li>
                If the Idenity level was downgraded for a pool admin, the whole
                pool is geting Suspended, until it becomes Reasonable back
                again.
              </li>
            </ul>
            <div className="page-content-text">
              One Reasonable Identity = One pool member
            </div>
            <div className="page-content-text">
              These rules will be applied to the Reasonable accounts only:
            </div>
            <ul className="page-content-text">
              <li>
                It is allowed for only one unique Reasonable Identity to be a
                pool member. Either, will duplicates be rejected or removed from
                every pool. For example, there are 4 duplicates detected among
                some different pools, then all of them are to be rulled out.
              </li>
              <li>
                If the Identity level was downgraded for a pool member, will
                this member be ruled out of the KYC pool they are in now.
              </li>
              <li>
                It is allowed for the pool member to have numbers of different
                mining devices connected to the pool at the time (using the same
                mining address as a member_id for different devices is allowed).
              </li>
            </ul>
            <div className="page-content-text">
              One anonymous address = one anonymous pool member
            </div>
            <div className="page-content-text">
              There is only one rule applied to anonnymous pool members, which
              says that all addresses must be unique. For example, if someone
              would like to join several anonymous pools, they are going to have
              to create an address for each one.
            </div>
            <div className="page-content-subtitle" id="mining-pool-setting">
              Setting up a pool
            </div>
            <div className="page-content-text">
              It is assumed that you already have <Link to="/mainnet#linux-mac">set up a regular node</Link> before
              getting started with this tutorial.
            </div>
            <div className="page-content-text">
              1. Set up on-chain identity and get Reasonable level of confidence
              for your pool address. <Link to="/mainnet#chain-registrars"> How to get Reasonable</Link>.
            </div>
            <div className="page-content-text">
              2. Open up <Link to="https://wallet.3dpass.org/">3Dpass web wallet</Link> and enable Advanced mode in the settings:
            </div>
            <img
              className="page-img"
              src="/images/webwallet_settings.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
               Enable advanced mode
            </div>
            <img
              className="page-img"
              src="/images/advanced_mode_enabled.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
               3. Import your pool P3D address into the wallet and create a pool
            </div>
            <img
              className="page-img"
              src="/images/create_a_pool.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              4. Set up the pool fee %:
            </div>
            <img
              className="page-img"
              src="/images/webwallet_set_pool_fee.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              5. Set up the additional off-chain Difficulty min limit for your
              pool. All 3D objects having its hash ids below the limit will be
              rejected:
            </div>
            <img
              className="page-img"
              src="/images/webwallet_set_pool_difficulty.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              6. Set up the KYC mode. Either the KYC or no_KYC requirements will be applied
             to the pool members joining:
            </div>
            <img
              className="page-img"
              src="/images/set_up_the_pool_kyc_mode.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              7. Set up the Pool key. Use your verified account (Reasonable) as
              your Mining key for setting up a Node.Open Terminal and insert
              your Pool key into the keystore by means of using this command:
            </div>
            <pre className="main-pre">
              ./target/release/poscan-consensus key insert --scheme Sr25519
              --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --key-type
              pool --suri 0x...
            </pre>
            <div className="page-content-text">
              <code>--suri</code> is the Secret seed (hex) from your GRANDPA key. Check your
              keystore <code>~/3dp-chain/chains/3dpass/keystore</code>. There supposed to be
              3 keys in there, such as: Mining key, GRANDPA key and Pool key.
              Pool key looks almost the same to your Minig key, but with the
              different prefix "706...". Your keystore should look this way:
            </div>
            <img
              className="page-img"
              src="/images/keystore_pool1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              8. Run the Node with the following:
            </div>
            <pre className="main-pre">
              ./target/release/poscan-consensus --base-path ~/3dp-chain/ --chain
              mainnetSpecRaw.json --name MyNodeName --validator --telemetry-url
              "wss://submit.telemetry.3dpass.org/submit 0" --author 0x...
              --threads 2 --no-mdns --rpc-cors all --unsafe-ws-external
              --unsafe-rpc-external --rpc-port 9933
            </pre>
            <div className="page-content-text">
              9. Open up the port 9933 for incoming connections and make sure it is
              forwarded to your server's local LAN IP.
            </div>
            <div className="page-content-text">10. Add your first miner:</div>
            <img
              className="page-img"
              src="/images/add_miner_new.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
               In order to remove use the following:
            </div>
            <img
              className="page-img"
              src="/images/remove_miner_new.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              11. Compose the command line for miners to connet to your pool and
              share it with them:
            </div>
            <pre className="main-pre">
              ./target/release/pass3d-pool run --pool-id
              MY_POOL_P3D_ADDRESS --url http://1.2.3.4:9933/ --threads 32
              --member-id MINER's_P3D_ADDRESS --key MINER's_PRIVATE_KEY
            </pre>
            <div className="page-content-text">
              <code>--pool-id</code> is your mining pool P3D address (Reasonable),
            </div>
            <div className="page-content-text">
              <code>--url</code> is your server ip/host the node is available by,
            </div>
            <div className="page-content-text">
              <code>--threads</code> is the amount of threads used for handling the objects
              coming from miners with.
            </div>
            <div className="page-content-text">
              <code>--key</code> is the private key for the minier P3D address, which is used for signing the PoW messages being pushed over towards the pool. Inspect the seed phrase to get one.
            </div>
            <div className="page-content-text">
              12. Use <Link to="https://github.com/3Dpass/pass3d-pool">pass3d-pool</Link> client app to check connection.
            </div>
            <div className="page-content-subtitle" id="mining-pool-joining">
              Joining the pool
            </div>
            <div className="page-content-text">
              1. KYC pools only: Set up on-chain identity and get Reasonable
              level of confidence for your mining address. <Link to="/mainnet#chain-registrars"> How to get Reasonable</Link>. Skip this step if you are joining an anonymous pool!
            </div>
            <div className="page-content-text">
              2. Open up <Link to="https://wallet.3dpass.org/">3Dpass web wallet</Link> and enable Advanced mode in the settings:
            </div>
            <img
              className="page-img"
              src="/images/webwallet_settings.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
                Enable advanced mode
            </div>
            <img
              className="page-img"
              src="/images/advanced_mode_enabled.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
            Import your P3D address into the wallet and join some pool available:
            </div>
            <img
              className="page-img"
              src="/images/webwallet_join_the_pool.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
            Pick up a pool from the list:
            </div>
            <img
              className="page-img"
              src="/images/pick_up_a_pool_from_the_list.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
            Submit your request:
            </div>
            <img
              className="page-img"
              src="/images/submit_join_pool_request.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              3. Open Terminal and clone <Link to="https://github.com/3Dpass/pass3d-pool">pass3d-pool</Link> app:
            </div>
            <pre className="main-pre">
              git clone https://github.com/3Dpass/pass3d-pool
            </pre>
            <div className="page-content-text">
              4. Download pass3d-pool binaries: <Link to="https://github.com/3Dpass/pass3d-pool/releases">pass3d-pool latest</Link> (Linux,
              MacOS, Windows).
            </div>
            <pre className="main-pre">
              wget
              https://github.com/3Dpass/pass3d-pool/releases/download/v15/pass3d-pool-linux.tar.gz
              tar xzf pass3d-pool-linux.tar.gz
            </pre>
            <div className="page-content-text">
              Either, you can build the app yourself:
            </div>
            <pre className="main-pre">{`
cd pass3d-pool 
cargo build --release
            `}
            </pre>
            <div className="page-content-text">
              5. Inspect your seed phrase to extract the private key as follows:
            </div>
            <pre className="main-pre">
              ./target/release/pass3d-pool inspect --seed 'one two ... twelve'
            </pre>
            <div className="page-content-text">
              <code>--seed</code> is the seed phrase for your P3D address
            </div>
            <div className="page-content-text">
              6. Pick up some parameters for the pool you want to connect to
              (Pool address and URL) and run pass3d-pool ap with the following:
            </div>
            <pre className="main-pre">
              ./target/release/pass3d-pool run --pool-id
              POOL_P3D_ADDRESS --url http://1.2.3.4:9933 --threads 32
              --member-id YOUR_P3D_ADDRESS --key YOUR_PRIVATE_KEY
            </pre>
            <div className="page-content-text">
              You are going to see this screen if success:
            </div>
            <img
              className="page-img"
              src="/images/pass3d-pool-running.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle" id="mining-pool-leaving">
              Leaving the pool
            </div>
            <div className="page-content-text">
              In order to head off the pool use removeMemberSelf(poolId):
            </div>
            <img
              className="page-img"
              src="/images/webwallet_leave_the_pool.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle" id="mining-pool-fetching">
              Fetching some mining information
            </div>
            <div className="page-content-text">
              By following some tips below, you can get some mining information
              from the pool trait stats. Open up the <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org">polkadot js wallet</Link>.
            </div>
            <div className="page-content-text">
              Pools and its members (pool admins have passed KYC, you can look
              up their contact information on the <Link to="https://3dpscan.io">block explorer</Link>):
            </div>
            <img
              className="page-img"
              src="/images/poolsandmembers1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">Current network difficulty:</div>
            <img
              className="page-img"
              src="/images/diff1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">Pool difficulty:</div>
            <img
              className="page-img"
              src="/images/pools_diff1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Pool mode (whether the KYC is required to join or not):
            </div>
            <img
              className="page-img"
              src="/images/pools_mode1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">Pool's fee:</div>
            <img
              className="page-img"
              src="/images/pool_fee1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Pool stats. The pool report is containing the number of shares
              recieved from each miner over the last 10 blocks:
            </div>
            <img
              className="page-img"
              src="/images/pools_stats1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle" id="mining-pool-mining">
              Mining pool list
            </div>
            <div className="page-content-text">
              This is the list of some well known mining pools available. <Link to="/mainnet#mining-pool-joining">How to join</Link>
            </div>
            <div className="page-content-text">1. reb0rn-3dpool</div>
            <div className="page-content-text">
              Pool id:{" "}
              <Link to="https://3dpscan.io/account/d1DrnnYYFwynxpnZJork1TB8spm26AWaLPo7u9NukFQNSkoiK">
                d1DrnnYYFwynxpnZJork1TB8spm26AWaLPo7u9NukFQNSkoiK
              </Link>
            </div>
            <div className="page-content-text">
              pass3d-pool running command:
            </div>
            <pre className="main-pre">
              {`
  cd ~/pass3d-pool 
  ./target/release/pass3d-pool run 
  --pool-id d1DrnnYYFwynxpnZJork1TB8spm26AWaLPo7u9NukFQNSkoiK --url
  http://3dpool.cryptohood.org:9933/ --threads 32 --member-id
  YOUR_P3D_ADDRESS --key YOUR_PRIVATE_KEY
            `}
            </pre>
            <div className="page-content-text">2. Pool_3dpassmining (<Link to="https://www.3dpassmining.info/">3dpassmining.info</Link> )</div>
            <div className="page-content-text">
              Pool id:{" "}
              <Link to="https://3dpscan.io/account/d1G2JYmaLeoyDbqAQRD3bfdbNosjAC2bDM6Qkvtjx6iZ3u88Z">
              d1G2JYmaLeoyDbqAQRD3bfdbNosjAC2bDM6Qkvtjx6iZ3u88Z
              </Link>
            </div>
            <div className="page-content-text">
              pass3d-pool running command:
            </div>
            <pre className="main-pre">
              {`
  cd ~/pass3d-pool
  ./pass3d-pool run 
  --pool-id d1G2JYmaLeoyDbqAQRD3bfdbNosjAC2bDM6Qkvtjx6iZ3u88Z 
  --url http://pool.3dpassmining.info:9933/ --threads 32 
  --member-id YOUR_P3D_ADDRESS --key YOUR_PRIVATE_KEY
            `}
            </pre>
            <div className="page-content-text">3. Pool Frank (<Link to="http://162.62.55.86:16000">http://162.62.55.86:16000</Link> )</div>
            <div className="page-content-text">
              Pool id:{" "}
              <Link to="https://3dpscan.io/account/d1GnDxkQfbZZzwhEVS3SrW3sfzxQjoRmwyBLFG8C1JTs12Vyh">
              d1GnDxkQfbZZzwhEVS3SrW3sfzxQjoRmwyBLFG8C1JTs12Vyh
              </Link>
            </div>
            <div className="page-content-text">
              pass3d-pool running command:
            </div>
            <pre className="main-pre">
              {`
  cd ~/pass3d-pool
  ./pass3d-pool run 
  --pool-id d1GnDxkQfbZZzwhEVS3SrW3sfzxQjoRmwyBLFG8C1JTs12Vyh 
  --url http://162.62.55.86:16000/ --threads 32 
  --member-id YOUR_P3D_ADDRESS --key YOUR_PRIVATE_KEY
            `}
            </pre>
          </div>
        </div>*/}
        <div className="page-content-block" id="docker">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to start mining with Docker (Windows; Linux; Mac OS; Android, any
              system)
            </div>
            <div className="page-content-text">
              Run both Node and Miner in one command on <i>Windows,
              Linux, Mac OS, Android</i> and all the systems supported by Docker.
            </div>
            <div className="page-content-text">
              1. Install{" "}
              <Link to="https://docs.docker.com/get-docker/">Docker</Link> and{" "}
              <Link to="https://docs.docker.com/compose/install/">Docker Compose</Link>.
            </div>
            <div className="page-content-text">
              2. Open Terminal and clone 3DPass Node. Copy and paste this command into your Terminal window:
            </div>
            <pre className="main-pre">
               {`
git clone https://github.com/3Dpass/3DP.git
              `}
            </pre>
            <div className="page-content-text">
              3. List the project directory `3DP`:
            </div>
            <pre className="main-pre">
               {`
cd 3DP
              `}
            </pre>
            <div className="page-content-text">
              4. Run both Node and Miner with the following command:
            </div>
            <pre className="main-pre">
              {`
cp docker-compose.override.yml.example docker-compose.override.yml
docker compose build
docker compose up
                    `}
            </pre>
            <div className="page-content-text">
              Once the node is built, it will stop with this error:
            </div>
            <img
              className="page-img"
              src="/images/docker_invalid_author_address.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              5. Create your mining account:
            </div>
            <ul className="page-content-text">
              <li>
              <i>Option 1:</i> Genetate via the <Link to="https://wallet.3dpass.org/">Web wallet</Link>. How to: <Link to="/mainnet#wallet">guidelines</Link>.
              </li>
              <li>
               <i>Option 2:</i> Run the script with Docker:
              </li>
            </ul>
            <div className="page-content-text">
              The easiest way to proceed with the <i>Option 2</i> would be to replace the content of the <i>~/3DP/docker/node.sh</i> file with this script and restart the node:
            </div>
            <pre className="main-pre">
               {`
#!/bin/bash
./p3d generate-mining-key --base-path /var/chain --chain mainnetSpecRaw.json
              `}
            </pre>
            <div className="page-content-text">
              The output would be like this:
            </div>
            <pre className="main-pre">
               {`
Public key: 0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e 
Secret seed: fog olympic thrive recall allow page hood damage october curtain degrwe bubble 
Address: d1GtBxnPwRZVez7VsQ9H7MskPn34H59RddrR9yXqhgDYsqC3t
              `}
            </pre>
            <div className="page-content-text">
              Once your account is generated, don't forget to replace the content of the <i>~/3DP/docker/node.sh</i> back with the original one!
            </div>
            <div className="page-content-text">
              6. Put your `MEMO_SEED` phrase and miner's `ADDRESS` into the
              <i> ~/3DP/docker-compose.override.yml.example</i> like this:
            </div>
            <pre className="main-pre">
              {`
version: "3.9"

services: 
node:
environment:
- MEMO_SEED=PLACE MEMO SEED HERE
- ADDRESS=PLACE MINER ADDRESS HERE
                    `}
            </pre>
            <div className="page-content-text">
              If you are an admin of multiple nodes, make sure to set 
              up a unique account for each one (1 Node = 1 Account).
            </div>
            <div className="page-content-text">
              7. Run the Node and Miner.{" "}
              Check your node on the telemetry <Link to="https://telemetry.3dpscan.io/#/0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66">list</Link>.{" "}
              
              </div>
              <div className="page-content-text">
              <i>Info!</i> Both of your keys Mining key and GRANDPA key will be generated automatically out of the `MEMO SEED` phrase{" "}
              and stored in the keystore: <i>./3DP/data/chain/chains/3dpass/keystore</i>.
              </div>
            <pre className="main-pre">
              {`
docker compose up
                    `}
            </pre>
            <img
              className="page-img"
              src="/images/docker_syncing.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              8. Wait until the node gets synced. Make sure it is up to date with the network. {" "}
              It must be <i>"on idle"</i> for the mining process to get going.
            </div>
            <img
              className="page-img"
              src="/images/docker_node_on_idle.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
             8.1. There is an option to speed up syncing process by starting the Node with the 
             latest blockchian `db`snapshots provided by the community members for newcomers:
            </div>
            <ul className="page-content-text">
              <li>The blockchain db location: <i>./3DP/data/chain/chains/3dpass/db</i></li>
              <li>Download and unpack the latest `db` from either {" "}
                <Link to="https://github.com/Snezhnaya-Fatui/p3d-mainnet-db">repo 1</Link> or {" "}
                <Link to="https://github.com/xchainw/p3d-db/releases">repo 2</Link>
              </li>
              <li>Replace the existing `db` folder with the one you just downloaded</li>
              <li>Restart the node and miner</li>
            </ul>
            <div className="page-content-subtitle">
              Additional castomization (optional)
            </div>
            <div className="page-content-text">
              You might as well, customize the Node running command parameters in the
               the <i>~/3DP/docker/node.sh</i> script:
            </div>
            <pre className="main-pre">
              {`
#!/bin/bash
# importing mining key
./p3d import-mining-key "$MEMO_SEED" --base-path /var/chain --chain mainnetSpecRaw.json

# deriving GRANDPA key 
GRANDPA_KEY="$(./p3d key inspect --scheme Ed25519 "$MEMO_SEED" | sed -n 's/.*Secret seed://p')"

# inserting GRANDPA key
./p3d key insert --base-path /var/chain --chain mainnetSpecRaw.json --scheme Ed25519 --key-type gran --suri $GRANDPA_KEY

# inserting ImOnline key
./p3d key insert --scheme Sr25519 --base-path /var/chain --chain mainnetSpecRaw.json --key-type imon --suri $GRANDPA_KEY

# running the Node
./p3d --chain mainnetSpecRaw.json --unsafe-ws-external --unsafe-rpc-external --rpc-cors=all --no-mdns \
--validator --base-path /var/chain --author "$ADDRESS" --telemetry-url "wss://submit.telemetry.3dpscan.io/submit 0" --name MY_NODE_NAME
                    `}
            </pre>
            <div className="page-content-text">
              Running command parameters:
            </div>
            <ul className="page-content-text">
              <li>
              <strong><i>`--base-path`</i></strong>  - is the path to where the blockchain db 
              and keystore are located.
              </li>
              <li>
              <strong><i>`--author`</i></strong> - is the Address from your mining account
              </li>
             <li>
             <strong><i>`--chain mainnetSpecRaw.json`</i></strong> - is the Ledger of Things mainnet chain specificaion 
              file mandatory for the Node to identify itself as part of the network and 
              get a list of bootnodes (initial peers).
             </li>
             <li>
             <strong><i>`--name`</i></strong> - is the Node name (you can name your Node as you wish)
             </li>
             <li>
             <strong><i>`--validator`</i></strong> - enables the block finality verification (PoA), mandatory for every Node
             </li>
             <li>
             <strong><i>`--telemetry-url`</i></strong> - is the telemetry server URL (<i>"wss://submit.telemetry.3dpscan.io/submit 1"</i> will 
              share expanded data to the server)
             </li>
             <li>
             <strong><i>`--threads`</i></strong> - is a number of threads allocated for mining
             </li>
             <li>
             <strong><i>`--no-mdns`</i></strong> - disables the local DNS mode useful for Ethernet connections only 
              (If not include, a local DNS server will be created for Nodes to sync with each other over the Ethernet. 
              Do not use this flag, if you need to arrange a local subnet under your NAT. In the case, make sure a unique 
              account is set for each of the Nodes on the subnet. Do not use the same account for multiple nodes. 1 Node = 1 Account)
             </li>
            </ul>
            <div className="page-content-text">
              In order to purge the blockchain DB and your keys on the keystore use this
              command:
            </div>
            <pre className="main-pre">
              {`
cd 3DP
docker compose rm -f
                    `}
            </pre>
            <div className="page-content-text">
              Track your performance on the Mining Leaders dash board <Link to="https://3dpassmining.info">https://3dpassmining.info</Link>
            </div>
            <div className="page-content-text">
              Compare your machine configuraton to the other ones presented on the network <Link to="https://telemetry.3dpscan.io/#stats/0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66">https://telemetry.3dpscan.io</Link>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="linux-mac">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to start mining on Linux or MAC OS
            </div>
            <div className="page-content-subtitle" id="linux-mac-simple_node">
              Set up full Node
            </div>
            <div className="page-content-text">
              1. Open Terminal and clone the Node from the GitHub to your computer:
            </div>
            <pre className="main-pre">
              {`
git clone https://github.com/3Dpass/3DP.git
cd 3DP
                    `}
            </pre>
            <div className="page-content-text">
              2. Follow <Link to="https://github.com/3Dpass/3DP#getting-started-with-3dpass-node">these guidelines</Link> to{" "}
              <Link to="https://github.com/3Dpass/3DP/releases">download</Link> the <i>`poscan-consensus`</i>{" "}
               pre-built binaries or build the Node yourself out of the source codes.
               </div>
            <div className="page-content-text">
              <i>Notice!</i> If downloading the pre-built <i>`poscan-consensus`</i> was of your choice, put the binary 
              into the <i>`~/3DP/target/release/poscan-consensus`</i> and make it executable with the `<code>cmod a+x poscan-consensus</code>` command.
            </div>
            <div className="page-content-subtitle" id="linux-mac-keys">
              Set up your keys
            </div>
            <div className="page-content-text">
              3. Generate a bunch of keys for your account and import them into 
              keystore (<i>`~/3dp-chain/chains/3dpass/keystore`</i>). Create new account, 
              if needed. If you are an admin of multiple nodes, make sure to set 
              up a unique account for each one (1 Node = 1 Account).
              </div>
            <div className="page-content-text">
              There is a <Link to="#linux-mac-script">script</Link> in place 
              to set up your keys automatically. An alternative option is to 
              proceed with the <Link to="#linux-mac-manual">manual set up</Link>. {" "}
              Once your keyset is ready, <Link to="#linux-mac-run">start your Node</Link>. 
            </div>
            <div className="page-content-text" id="linux-mac-script">
              USING THE SCRIPT
            </div>
            <div className="page-content-text" id="linux-mac-new-account">
              <strong>New account</strong>
            </div>
            <div className="page-content-text">
              3.1. Generate new account and import all of your keys <i>(Mining key, GRANDPA key and ImOnline key)</i> at once with the <i>keygen.sh</i> script. 
              Save your Secret Seed phrase in a safe place: 
            </div>
            <pre className="main-pre">
              {`
sh keygen.sh
                    `}
            </pre>
            <div className="page-content-text">
            <strong>Existing account</strong>
            </div>
            <div className="page-content-text">
              3.2. Have you already had an account, use the <i>keygen_seed.sh</i> script
              to generate the keys out of your Secret Seed phrase and import them all at once.
            </div>
            <div className="page-content-text">
              Put your Secret Seed phrase into the <i>~/3DP/keygen_seed.sh</i> file like this:
            </div>      
            <pre className="main-pre">
              {`
#! /bin/bash
# A keyset will be generated out of the seed phrase below
MEMO_SEED="PUT YOUR MEMO SEED HERE"
                    `}
            </pre>
            <div className="page-content-text">
              Save the the <i>keygen_seed.sh</i> and execute the script:
            </div>
            <pre className="main-pre">
              {`
sh keygen_seed.sh
                    `}
            </pre>
            <div className="page-content-text" id="linux-mac-manual">
              MANUAL KEYS SET UP 
            </div>
            <div className="page-content-text">
              3.3. If leveraging the script doesn't fit, the manual procedure will be as follows: 
            </div>
            <div className="page-content-text" id="linux-mac-mining-account">
              3.3.1. Generate your mining account (standard account, 'sr25519' type):
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus generate-mining-key --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json
                    `}
            </pre>
            <div className="page-content-text">
              The output would be like this:
            </div>
            <pre className="main-pre">
              {`
Public key: 0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e Secret seed: fog olympic thrive recall allow page hood damage october curtain degrwe bubble Address: d1GtBxnPwRZVez7VsQ9H7MskPn34H59RddrR9yXqhgDYsqC3t
                    `}
            </pre>
            <div className="page-content-text">
              3.3.2. Register your mining key in the keystore:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus import-mining-key 'your secret seed phrase' --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json
                    `}
            </pre>
            <div className="page-content-text" id="linux-mac-grandpa_key">
              3.3.3. Derive the key ('ed25519' type) for GRANDPA finalizaton from your seed phrase (THE SEED PHRASE FROM YOUR MINING ACCOUNT MUST BE USED):
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect --scheme Ed25519 "your secret seed phrase from mining account previously generated"
                    `}
            </pre>
            <div className="page-content-text">
              The output would be like this:
            </div>
            <pre className="main-pre">
              {`
Secret phrase fog olympic thrive recall allow page hood damage october curtain degrwe bubble is account:
Network ID/Version: 71
Secret seed: 0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3 Public key (hex): 0x23dad301fa6165b70bf538ca3be304ad418232c76814b38223c57d69bf2b28d1
Account ID: 0x23dad301fa6165b70bf538ca3be304ad418232c76814b38223c57d69bf2b28d1 SS58 Address: d1HqrBYq9qsTbBb4tQtnt9sLgh9UsS7XJbgQgr5Cb4CxH2xAd
                    `}
            </pre>
            <div className="page-content-text" id="linux-mac-inserting-grandpa-key">
              3.3.4. Insert the GRANDPA key into the keystore:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key insert --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --scheme Ed25519 --suri 0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3 --key-type gran
                    `}
            </pre>
            <div className="page-content-text">
              `--suri` is your Secret seed `hex`` from GRANDPA key (in the example above:
              0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3)
            </div>
            <div className="page-content-text" id="linux-mac-inserting-imonline-key">
              3.3.5. Insert the ImOnline key into the keystore:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key insert --scheme Sr25519 --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --key-type imon --suri 0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3
                    `}
            </pre>
            <div className="page-content-text">
              <code>--suri</code> is the Secret seed (hex) from your GRANDPA key (in the example above:
                0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3)
            </div>
            <div className="page-content-text" id="linux-mac-keystore-check">
              3.3.6. Make sure you have the whole bunch of keys <i>(Mining key, GRANDPA key and ImOnline key)</i> in the keystore:
            </div>
            <pre className="main-pre">
              {`
ls ~/3dp-chain/chains/3dpass/keystore
                    `}
            </pre>
            <img
              className="page-img"
              src="/images/keystore1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text" id="linux-mac-run">
              4. Start the Node with the following:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --name MyNodeName --validator --telemetry-url "wss://submit.telemetry.3dpscan.io/submit 0" --author 0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e --threads 2 --no-mdns
                    `}
            </pre>
            <ul className="page-content-text">
              <li>
              <strong><i>`--base-path ~/3dp-chain/`</i></strong>  - is the path to where the blockchain db 
              and keystore are located (you can modify it, if needed).
              </li>
              <li>
              <strong><i>`--author`</i></strong> - is your Public key (hex) or Address from the mining account
              (In the example above:
              0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e or 
              d1GtBxnPwRZVez7VsQ9H7MskPn34H59RddrR9yXqhgDYsqC3t)
              </li>
             <li>
             <strong><i>`--chain mainnetSpecRaw.json`</i></strong> - is the Ledger of Things mainnet chain specificaion 
              file mandatory for the Node to identify itself as part of the network and 
              get a list of bootnodes (initial peers).
             </li>
             <li>
             <strong><i>`--name MyNodeName`</i></strong> - is the Node name (you can name your Node as you wish)
             </li>
             <li>
             <strong><i>`--validator`</i></strong> - enables the block finality verification (PoA), mandatory for every node
             </li>
             <li>
             <strong><i>`--telemetry-url`</i></strong> - is the telemetry server URL (<i>"wss://submit.telemetry.3dpscan.io/submit 1"</i> will 
              share expanded data to the server)
             </li>
             <li>
             <strong><i>`--threads`</i></strong> - is a number of threads allocated for mining
             </li>
             <li>
             <strong><i>`--no-mdns`</i></strong> - disables the local DNS mode useful for Ethernet connections only 
              (If not include, a local DNS server will be created for Nodes to sync with each other over the Ethernet. 
              Do not use this flag, if you need to arrange a local subnet under your NAT. In the case, make sure a unique 
              account is set for each of the Nodes on the subnet. Do not use the same account for several nodes. 1 Node = 1 account)
             </li>
            </ul>
            <div className="page-content-text">
              Make sure you have the external port <i>`30333`</i> open for incoming
              connections and forwarded to your server's local LAN IP. Check your Node 
              on the telemetry server <Link to="https://telemetry.3dpscan.io/">list</Link>
            </div>
            <div className="page-content-text" id="linux-mac-sync">
              5. Wait until the Node gets synced. Make sure it is up to date with the network. {" "}
              It must be <i>"on idle"</i> for the mining process to start.
            </div>
            <img
              className="page-img"
              src="/images/node_on_idle.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
             5.1. There is an option to speed up syncing process by starting the node from the latest blockchian {" "}
             `db` snapshot provided by the community members for newcomers:
            </div>
            <ul className="page-content-text">
              <li>The blockchain db location: <i>~/3dp-chain/chains/3dpass/db</i></li>
              <li>Download and unpack the latest `db` from either {" "}
                <Link to="https://github.com/Snezhnaya-Fatui/p3d-mainnet-db">repo 1</Link> or {" "}
                <Link to="https://github.com/xchainw/p3d-db/releases">repo 2</Link>
              </li>
              <li>Replace the existing `db` folder with the one you just downloaded</li>
              <li>Restart the Node</li>
            </ul>
            <div className="page-content-text">
              In order to purge your blockchain DB use this command:
            </div>
            <pre className="main-pre">
              {`
rm -rf ~/3dp-chain/chains/3dpass/db
                    `}
            </pre>
            <div className="page-content-subtitle" id="linux-mac-mining_solo">
              Start mining
            </div>
            <div className="page-content-text">
             Make sure you have <Link to="#linux-mac-simple_node">full Node</Link> set up and proceed with the following steps:
              </div>
            <div className="page-content-text">1. Install <Link to="https://bun.sh/">Bun</Link></div>
            <div className="page-content-text">2. Install miner:</div>
            <pre className="main-pre">
              {`
cd 3DP
bun install
                    `}
            </pre>
            <div className="page-content-text">3. Run the miner (the Node must be running <i>"on idle"</i> ):</div>
            <pre className="main-pre">
              {`
bun miner.js --host 127.0.0.1 --port 9933
                    `}
            </pre>
            <div className="page-content-text">
              `--interval 1000` is the amount of time in miliseconds defining the frequency, at which
              random 3D models will be generated and sent towards the Node. Dependidng
              on the number of threads in use and its capacity, reduce the interval until
              you reach desired proc load. Otherwise, it's going to be adjusted automatically to the node responce:
            </div>
            <img
              className="page-img"
              src="/images/miner_adjustments.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              There is an <Link to="https://github.com/3Dpass/miner">alternatinve miner</Link>, which might be leveraged as an option, either.
            </div>
            <div className="page-content-text">
              Track your performance on the Mining Leaders dash board <Link to="https://3dpassmining.info">https://3dpassmining.info</Link>
            </div>
            <div className="page-content-text">
              Compare your machine configuraton to the other ones presented on the network <Link to="https://telemetry.3dpscan.io/#stats/0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66">https://telemetry.3dpscan.io</Link>
            </div>
          </div>
        </div>
        <div className="page-content-block" id="wallet">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to use 3Dpass web wallet
            </div>
            <div className="page-content-text">
              <Link to="https://wallet.3dpass.org/">3DPass browser wallet</Link> is a Java Script page interacting with the
              blockchain network directly from your browser. Once being
              downloaded it might be connected either to the remote API endpoint
              available or to the local node running on your computer. By means
              of changing endpoints you can easily switch among different
              networks. Go to Settings to switch the endpoint:
            </div>
            <img
              className="page-img"
              src="/images/wallet_settings1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">Mainnet API Endpoints</div>
            <ul className="page-content-text">
              <li>wss://rpc.3dpscan.io</li>
              <li>ws://127.0.0.1:9944 - local Node</li>
            </ul>
            <img
              className="page-img"
              src="/images/endpoint_switch1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">
              How to create new address:
            </div>
            <div className="page-content-text">
              1. Install the polkadot.js <Link to="https://polkadot.js.org/extension/">web browser extension</Link>.
            </div>
            <div className="page-content-text">
              2. Generate new address for 3dpass - The Ledger of Things network. Keep your seed phrase in a safe
              place. There is no any possible ways to recover if it's lost. You
              can also import your address from the seed phrase if you already have one. 
            </div>
            <img
              className="page-img"
              src="/images/new_account_extension.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              3. Open <Link to="https://wallet.3dpass.org/">3DPass wallet</Link> in your web browser and provide polkadot extension with the access for the account to be injected into the wallet.  
            </div>
          </div>
        </div>
        <div className="page-content-block" id="unlock">
          <div className="page-content-inner">
            <div className="page-content-title">How to unlock funds mined</div>
            <div className="page-content-text">
              Funds mined are getting unlocked partially by 10% each 10 days. In
              order to unlock funds available sign unlock transaction:
            </div>
            <ul className="page-content-text">
              <li>Open the <Link to="https://wallet.3dpass.org/">web wallet</Link></li>
              <li>Choose "Unlock funds mined":</li>
            </ul>
            <img
              className="page-img"
              src="/images/unlock_mined1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              If you still have some issues, despite the fact that the lock
              period has expired, check <Link to="/mainnet#cant-unlock">this case</Link> for troubleshooting
            </div>
          </div>
        </div>
        <div className="page-content-block" id="validator">
          <div className="page-content-inner">
            <div className="page-content-title">Validator (PoA) Set up</div>
            <div className="page-content-subtitle" id="validator-general">
              General
            </div>
            <div className="page-content-text">
              <i>PoA (Proof of Authority)</i> Validators are the most reliable authorities eligible to vote for the 
              Best chain finalization as well as to participate in the user object verification process specified in  {" "}
              <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link>  {" "}
              tokenization standard. In opose to nPoS concept the Validators in The Ledger of Things
               obtain equal voting power, irrespective to the amount of stake they locked for collateral.  
               And, therefore, rewards are getting distributed in equal among the current validator set members.
            </div>
            <div className="page-content-text">Rewards:</div>
            <ul className="page-content-text">
              <li>Block finalizaton: 50% of total block rewards (the rest 50% goes to the block author)</li>
              <li>The user objects processing: 50% of the object verification fee (paid by user)</li>
            </ul>
            <div className="page-content-text">
              GRANDPA (PoA) protocol is implemented in 3DPass as a number of
              traits, such as: <Link to="https://github.com/3Dpass/3DP/tree/main/pallets/validator-set">Validator set pallet</Link> - to control the set of
              authorities, <Link to="https://github.com/paritytech/substrate/tree/master/frame/session">Session pallet</Link> - to ensure the rotation in the set,
              {" "} <Link to="https://github.com/paritytech/substrate/tree/master/frame/im-online">imOnline pallet</Link> - to check is everyone online in the set, <Link to="https://github.com/paritytech/substrate/tree/master/frame/grandpa">Grandpa
              pallet</Link> - GRANDPA PoA consesnsus protocol.
            </div>
            <div className="page-content-text">
              Once a new member headed in the validator set, the Session pallet
              takes over its keys. The Session pallet is going to wait until the
              next session begins (session length = 120 blocks) to put the
              validator in the queue, which is going to last one more session to
              add it into the actual GRANDPA Authority list. This cycle is
              designed to ensure secure rotation in the set, and it always takes
              ~ 2 sessions.
            </div>
            <div className="page-content-subtitle" id="validator-requirements">
              Requirements
            </div>
            <div className="page-content-text">
             That is important for newcomers to familiarize thermselves with the <Link to="/mainnet#requirements">standard hardware</Link>{" "}
             requirements, however, there is a strong recommendation for Validators to use a dedicated server to run the Node on.{" "}
             Not only will it require to be capable of handling blocks on time (<i>target time: 60 sec</i>), but also to get the {" "}
             user objects processed in accordance to <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> {" "}
             tokenization  standard operating within The Ledger of Things. Unlike many other projects, it is REQUIRED for Validators in 3DPass {" "} 
             to provide additional computing power leveraged for the user object processing in accordance to{" "} 
              <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> tokenization standard.
             
            </div>
            <div className="page-content-subtitle">SLA</div>
            <ul className="page-content-text">
              <li>Online: 24/7, ping 333 ms from all over the globe to participatte in GRANDPA voting rounds</li>
              <li>
                Firewall: No restrictions
              </li>
              <li>Internet trafic: No limits</li>
              <li>Performance imporing new blocks: up to 10 sec per block</li>
              <li>Performance handling the user objects: up to 20 sec per object</li>
              <li>On-chain identity level of confidence: <Link to="#chain-general">Reasonable</Link></li>
            </ul>
            <div className="page-content-subtitle" id="validator-threshold">
              Selection Threshold
            </div>
            <div className="page-content-text">
              There is a threshold for new validator to pass, which includes some 
              certain amount of P3D locked up for the collateral as well as to
              prove the set up fee transaction paid to Treasury.
              The set up fee is required to pay just once. Hovewer, the
              collateral needs to remain locked up all the way through the node
              operating period. If the lock out period expires, the node is
              being moved out the validator set. In order to get back the
              threshold is required to pass again.
            </div>
            <div className="page-content-subtitle">Collateral</div>
            <ul className="page-content-text">
              <li>
                400 000 P3D locked up on the owner's address
              </li>
              <li>
                Minimum lock period is 43200 blocks (~ 1 month)
              </li>
            </ul>
            <div className="page-content-subtitle" id="validator-setup-fee">Set up fee</div>
            <ul className="page-content-text">
              <li>
                10 000 P3D one-time payment to Treasury account <Link to="https://3dpscan.io/account/d1EjCsWUVnKTG3dysQC2MWDfZKngtiwV2ZLegWRfFMbUR5d6c">d1EjCsWUVnKTG3dysQC2MWDfZKngtiwV2ZLegWRfFMbUR5d6c</Link>
              </li>
            </ul>
            <div className="page-content-subtitle" id="validator-punishments">
              Punishments
            </div>
            <ul className="page-content-text">
              <li>
                Equivocation attack (Voting for two different chains
                simultaneously. It mostly occurs to the validators using the same keyset on different servers and thus causing a threat for the network to get split): 40 000 P3D and getting out of the validator set as well as from the session
              </li>
              <li>
                Not being online/available: 20 000 P3D and getting out of the validator
                set
              </li>
              <li>
                Not being able to participate in GRANDPA voting rounds for any reason (Firewall, incorrect keys
                set up, etc.): 20 000 P3D and getting out of the validator set
              </li>
              <li>
                Not being able to get the user object processed in 20 sec: 100% of the  user object validation serivce fee and getting out of the validator set
              </li>
              <li>
                Losing <Link to="#chain-general">Reasonable</Link> level of confidence: getting out of the validator set
               </li>
            </ul>
            <div className="page-content-subtitle" id="validator-setting">
              Setting up procedure:
            </div>
            <div className="page-content-text">
              1. Set up full Node in accordance with this <Link to="#linux-mac-simple_node">tutorial</Link>. {" "} 
              Make sure to have <Link to="#linux-mac-keys">set up keys</Link> and then list to the project directory:
            </div>
            <pre className="main-pre">
              {`
cd 3DP
                    `}
            </pre>
            <div className="page-content-text">
              2. Check on the <i>keystore</i> and verify the whole bunch of keys required:
              </div>
            <pre className="main-pre">
              {`
ls ~/3dp-chain/chains/3dpass/keystore
                    `}
            </pre>
            <div className="page-content-text">
              There supposed to be three keys in the folder (the <i>Mining key, 
              GRANDPA key and ImOnline key</i>). Check the if all of the keys meet
              the required format: 
            </div>
            <img
              className="page-img"
              src="/images/keystore1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              In case of any missformat or absence or some spare keys found, it is recommnded 
              you wipe out the entire content from the <i>keystore</i> and set up keys 
              properly from scratch. Having incorrect keyset in the folder might lead up to 
              severe punishments when Node comes into operation.
            </div>
            <div className="page-content-text">
              3. Run the Node with <Link to="#linux-mac-run">this</Link> command and get it <Link to="#linux-mac-sync">synced</Link> with the network.
            </div>
            <div className="page-content-text" id="validator-lock-check">
              4. Open the <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/extrinsics">Polka js wallet</Link> {" "}
              and lock up your funds to a certain block number in the future.
              There is no way to unlock until it's expired.
            </div>
            <ul className="page-content-text">
              <li>
                Amount <i>u128</i> (in min units): +12 zeros at the tail e.x. 400 000
                P3D becomes 400 000 000 000 000 000
              </li>
              <li>
                Minimum lock time: 1 month (+ 43200 blocks ahead the current
                best block)
              </li>
              <li>
                Auto <i>re-lock</i> option (period): a period in blocks your
                funds are going to be re-locked over and over automatically. For example, if
                chosen 45000 blocks, when expired the funds are going to be re-locked for
                the next 45000 blocks over and over again, until you <Link to="#validator-exit">exit</Link> {" "}
                the loop manually. Skip this option if you want to control your locks manually.
              </li>
            </ul>
            <img
              className="page-img"
              src="/images/auto_relock1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              5. Join the <Link to="https://discord.gg/u24WkXcwug">Discord</Link>.
              Set up On-chain Identity and get <i>"Reasonable"</i> level of confidence in accordance 
              with <Link to="#chain-kyc">this procedure</Link> to prove you are the actual
              owner of the Validator's account.
            </div>
            <div className="page-content-text">
              6. Make your application for Validator and join the validator set:
            </div>
            <ul className="page-content-text">
               <li>
               Apply for Validator over the {" "}
               <Link to="https://discord.com/channels/932377852521881659/1259112470795124867">OPENGOVERNANCE</Link> {" "}
               discord channel.
               </li>
               <li>
               Pay off the <Link to="#validator-setup-fee">Set up fee</Link> to Treasury 
               and attach the transaction link to the application.
               </li>
               <li>
               The application goes through the <Link to="/governance#council"></Link> Council vote. 
               One of the actual councilors will pick up your application and submit the motion to the Council.
               Track the motion via the Polka js wallet - {" "}
              <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/council/motions">#council/motions</Link>. 
               </li>
            </ul>
            {/*<div className="page-content-text">
              5. Add your mining address into the Validator set:
            </div>
            <img
              className="page-img"
              src="/images/add_to_validator1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />*/}
            <div className="page-content-text">
              Once passed, verify your mining address in the
              validatorSet → Validators() list:
            </div>
            <img
              className="page-img"
              src="/images/set_validators1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              7. Generate the session key by calling out the Node via the 
              RPC API with the <i>"author_rotateKeys"</i> method and get a `proof` of your keys:
            </div>
            <pre className="main-pre">
              {`
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys"}' http://localhost:9933/
              `}
            </pre>
            <div className="page-content-text">
             This command returns a JSON-formatted result containting the `proof` of 
             your keys for the `session` module in the hex fromat (<strong><i>"0x..."</i></strong>):
            </div>
            <pre className="main-pre">
              {`
{
"jsonrpc":"2.0",
"result":"0x3dd251b3b713793d39da31efbf2013766fd47730f69bcc18949dffac04d2b9076a907e83c40a0d0af459bc7a49354ff16f9b88edc66eb46cabed4a7f27efv30f",
"id":1
}
              `}
              </pre>
              <ul className="page-content-text">
                <li>
                 In the example above the `proof` is <i>0x3dd251b3b713793d39da31efbf2013766fd47730f69bcc18949dffac04d2b9076a907e83c40a0d0af459bc7a49354ff16f9b88edc66eb46cabed4a7f27efv30f</i>
                </li>
                <li>
                <i>Note!</i> New session key will be added into the keystore (<i>~/3dp-chain/chains/3dpass/keystore</i>) {" "}
                every time the <i>"author_rotateKeys"</i> method is executed.
                </li>
              </ul>
            <div className="page-content-text">
              8. Use your <i>GRANDPA Public key</i> (hex), <i>Mining public key</i> (hex) and
              the <i>`proof`</i> of your keys (hex) to set up the session keys for your Validator:
            </div>
            <img
              className="page-img"
              src="/images/set_keys_proof1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              GRANDPA Public key (hex) is:
            </div>
            <img
              className="page-img"
              src="/images/grandpa_pub1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              9. Wait for ~240 blocks (2 sessions) to pass
            </div>
            <div className="page-content-text">
              10. Make sure, that you can see your GRANDPA SS58 Address in the
              Grandpa Authorities:
            </div>
            <img
              className="page-img"
              src="/images/grandpa_auth1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              11. Would you like to highlight your Node with the "dot" on the <Link to="https://telemetry.3dpscan.io/">telemetry list</Link>, use this flag with the running comand:
            </div>
            <pre className="main-pre">
              {`
--telemetry-url "wss://submit.telemetry.3dpscan.io/submit 1"
                    `}
            </pre>
            <div className="page-content-text">like this:</div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --name MyNodeName --validator --telemetry-url "wss://submit.telemetry.3dpscan.io/submit 1" --author 0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e --threads 2 --no-mdns
                    `}
            </pre>
            <div className="page-content-text">
              12. Check if your Node is not being exposed on the missing list.
              In case the Validator is unable to vofe for some reason its GRANDPA addreess
              is going to be showed up as missing, like this:
            </div>
            <img
              className="page-img"
              src="/images/missing1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              The most common reasons for the Validator to permanently show up missng are: 
            </div>
            <ul className="page-content-text">
              <li>
                Incorrect key setup (check your keys and session set up)
              </li>
              <li>
                Firewall restrictions (check your NAT rules and make sure there's no global 
                firewall restriction taking place on the Internet provider's side)
              </li>
              <li>
                It takes longer than 333 ms to get through to the server 
                (Make sure your Node is accessible from anywhere in the world. 
                Ping on the Node IP and make sure it gets back in 333 ms or faster) 
              </li>
              <li>
                The Node is out of sinc (Make sure the Node is up to date with the Best block)
              </li>
            </ul>
            <div className="page-content-subtitle" id="validator-rejoin">
              Rejoining the validator set
            </div>
            <div className="page-content-text">
              There is a "comeback window" validator can rejoin
              after getting ruled out witout a necessity to pay the set up fee.
            </div>
            <ul className="page-content-text">
              <li>Ban period: 3 hours, since heading off the validator set</li>
              <li>Comeback window: 1 week, since the ban period got expired</li>
            </ul>
            <div className="page-content-text">
              Use rejoinValidator method to get the validator back on track:
            </div>
            <img
              className="page-img"
              src="/images/rejoin1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle" id="validator-locks">
              How to check my locks
            </div>
            <div className="page-content-text">
              If a Validator was rulled out the validator set and the punishment
              took place, it's likely that its account was slashed for
              penalties. In order to rejoin the new actual lock must be
              submitted. Use the standard guidelines <Link to="/mainnet#lock-check">above</Link> to set up new lock.
              Refill you account if it's needed.
            </div>
            <div className="page-content-text">
              Check the actual lock state with validatorSet - validatorLock:
            </div>
            <img
              className="page-img"
              src="/images/locks-check1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Check the state at wich the lock was submitted initially with
              ValidatorSet - enterDeposit:
            </div>
            <img
              className="page-img"
              src="/images/lock_history1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle" id="validator-exit">
              Legitimate exit
            </div>
            <div className="page-content-text">
              There is a legitimate way for Validators to exit without getting
              penalties, which is to wait until the lock period has expired
              and call out the <i>"unlock funds"</i>.
            </div>
            <div className="page-content-text">
              In case the auto <i>re-lock</i> option is being used,
              placing new lock is required to exit the loop. Just set up a
              new lock without auto <i>re-lock</i> option <i>(min lock period is + 43200 
              blocks ahead the current best block)</i> and wait, till it has expired.
              And then call out the <i>"unlock funds"</i>.
            </div>
            <div className="page-content-text">
              Unlock funds with validatorSet - unlock:
            </div>
            <img
              className="page-img"
              src="/images/validator_unlock1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>
        <div className="page-content-block" id="chain">
          <div className="page-content-inner">
            <div className="page-content-title">On-chain Identity</div>
            <div className="page-content-text">
              3DPass has implemented Substrate <Link to="https://github.com/paritytech/substrate/tree/master/frame/identity">Identity pallet</Link>, which allows to
              assign a certain level of confidence to any account (network
              address) verified by a registrar. It is assumed, that the
              registrar is trusted enough to verify some contact information
              assocoated with the user's address (Twitter, Google, Discord,
              Telegram, etc) and provide their on-chain judgement. Registrar's
              can not only promote in level but also demote the account that
              were found malicious. The registrar judgement can only be changed
              by <Link to="/governance#democracy">Referenda</Link>. Registrars can either be elected by <Link to="/governance#democracy">Referenda</Link> or
              assigned by means of <Link to="/governance#council">Council</Link> voting.
            </div>
            <div className="page-content-subtitle" id="chain-general">
              Judgements
            </div>
            <ul className="page-content-text">
              <li>Unknown: The default value, no judgement made yet.</li>
              <li>
                Reasonable: The data appears to be reasonable, but no in-depth
                checks. Both P3D account private key and additional account
                (Discord, Telegram, Google, etc) ownership must be proved.
              </li>
              <li>
                Known Good: The registrar has certified that the information is
                correct (this step involves verification of state issued
                identity documents, and at the moment no account has known good
                identity, with the exception of registrars).
              </li>
              <li>
                Out of Date: The information used to be good, but is now out of
                date.
              </li>
              <li>
                Low Quality: The information is low quality or imprecise, but
                can be fixed with an update.
              </li>
              <li>
                Erroneous: The information is erroneous and may indicate
                malicious intent.
              </li>
            </ul>
            <div className="page-content-subtitle" id="chain-registrars">
              Registrars
            </div>
            <ul className="page-content-text">
              <li>
                3DPASS REGISTRAR:{" "}
                <Link to="https://3dpscan.io/account/d1CJYEbtNDtKWR3gdEABQRynTbcVi1u9AFTF9J6yCSazgYW1h">d1CJYEbtNDtKWR3gdEABQRynTbcVi1u9AFTF9J6yCSazgYW1h</Link> | fee: 20 P3D
                | regIndex: 0
              </li>
              <li>
                CALDERATRADE: <Link to="https://3dpscan.io/account/d1J1WymQy1aVqstxWdY7wE6V1RNFtHkK68g3KKW1Sc3rUmBVF">d1J1WymQy1aVqstxWdY7wE6V1RNFtHkK68g3KKW1Sc3rUmBVF</Link>
                | fee: 20 P3D | regIndex: 1
              </li>
              <li>
                REB0RN-DEDI-1: <Link to="https://3dpscan.io/account/d1Feb4mTdnp3snZUmuBGPjmK9p8vJ6DmqJFt4ScxVe4oUWNJz">d1Feb4mTdnp3snZUmuBGPjmK9p8vJ6DmqJFt4ScxVe4oUWNJz</Link>
                | fee: 20 P3D | regIndex: 2
              </li>
              <li>
                WLINK-NETWORK: <Link to="https://3dpscan.io/account/d1H1j9SGoMcJge45CNS81ey4GhMN8jqjte1fbNMgUSBW6Zv4f">d1H1j9SGoMcJge45CNS81ey4GhMN8jqjte1fbNMgUSBW6Zv4f</Link>
                | fee: 20 P3D | regIndex: 3
              </li>
            </ul>
            <div className="page-content-subtitle" id="chain-kyc">
              KYC procedure: Reasonable
            </div>
            <div className="page-content-text">
              1. Open <Link to="https://wallet.3dpass.org">3Dpass web wallet</Link> and pick up the "Identity: Claim" option.
            </div>
            <img
              className="page-img"
              src="/images/identity_claim.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
            <div className="page-content-text">
              2. Choose a registrar from the list:
            </div>
            <img
              className="page-img"
              src="/images/picking_up_registrar.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
              3. Fill out your contact information to verify (ex. your Discord
              account) and request the registrar for judgement:
            </div>
            <img
              className="page-img"
              src="/images/Identity_form.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              5. Pick up "Sign&Verify" option:
            </div>
            <img
              className="page-img"
              src="/images/sign_verify1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              6. Sign the additional contact with your P3D account signature:
            </div>
            <img
              className="page-img"
              src="/images/signed_message1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">Copy signed message:</div>
            <img
              className="page-img"
              src="/images/copy_signed_message1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              7. Publish the signed message with your account (Twitter, Google,
              Discord, Telegram) for verification. Ex. if you want to get your
              Discord account verified, will then you have to post the message
              in 3DPass <Link to="https://discord.com/invite/u24WkXcwug">Discord group</Link> (use #on-chain-identity channel). <Link to="/mainnet#check-signature">Check</Link> if
              the message is valid before you post!
            </div>
            <div className="page-content-text">
              Your post would look like this:
            </div>
            <pre className="main-pre">
              {`
-- Start message --
3DPass#8286
-- End message --

-- Start P3D wallet signature --
0x529e22453fc266a596c92156fcdfdf53dca77aa0cb11d7ac3e6663a59d3e215304bb8aaf5fb539a2087e5c37559f9ee8f3d8966640b44f81f6a47d50b9e2d980
-- End P3D wallet signature --

-- Start public key --
d1Df6WwY7S9XDbdsAaT2t6daFMJRcCm5nnUNKC2U7iQQWYDzA
-- End public key --
                    `}
            </pre>
            <div className="page-content-text">
              Notice! Any tiny little change in the message will affect the
              signature (any dot, space, coma, special symbol, format,
              anything...), which will be treated as invalid.
            </div>
            <div className="page-content-subtitle" id="chain-verify">
              How to verify Reasonable account
            </div>
            <div className="page-content-text">
              It's easy to verify any reasonable account by asking its owner to
              sign an arbitrary message and provide the signature for the
              verification. Verify the message and the signature by means of the
              <Link to="https://wallet.3dpass.org/">wallet</Link>.
            </div>
            <div className="page-content-text">
              For example, let's verify the Identity of 3DPASS REGISTRAR's
              account <Link to="https://3dpscan.io/account/d1CJYEbtNDtKWR3gdEABQRynTbcVi1u9AFTF9J6yCSazgYW1h">d1CJYEbtNDtKWR3gdEABQRynTbcVi1u9AFTF9J6yCSazgYW1h</Link>. Assume,
              you have received this "Hello" message from @3dpass1 over Twitter:
            </div>
            <div className="page-content-text" id="check-signature">Valid signature (verified):</div>
            <img
              className="page-img"
              src="/images/reasonable_valid1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Invalid signature would look like this:
            </div>
            <img
              className="page-img"
              src="/images/invalid_signature1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>
        <div className="page-content-block" id="addresses">
          <div className="page-content-inner">
            <div className="page-content-title">Addresses and Keys</div>
            <div className="page-content-text">
              Master account in 3DPass is defined by a mnemonic seed phrase
              which can be utilized for the construction of various types of
              keys. Whatever the key type was used, there is always a
              possibility to validate the standard account by its public key.
              Standard account ID is a public key in hex format like this
              0x23dad301fa6165b70bf538ca3be304ad418232c76814b38223c57d69bf2b28d1.
            </div>
            <div className="page-content-text">
              For example, you have got your Master account defined by the
              mnemonic seed phrase like this one debris minor crater swear crane
              whale clever into now tone grid proud), and at least two different
              types of keys can be generated from out out of, such as:
            </div>
            <ul className="page-content-text">
              <li>
                sr25519 (Schnorrkel) - standard accounts designed to control
                funds with
              </li>
              <li>ed25519 (Edwards) - used for GRANDPA finalization</li>
            </ul>
            <div className="page-content-subtitle">Generating keys</div>
            <div className="page-content-text">
              Use key generate command to generate a random regular account and
              the key pair:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key generate --scheme Sr25519
                    `}
            </pre>
            <div className="page-content-text">
              The output would be like this:
            </div>
            <pre className="main-pre">
              {`
Secret phrase: debris minor crater swear crane whale clever into now tone grid proud
Network ID: 71
Secret seed: 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a Public key (hex): 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10
Account ID: 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10 Public key (SS58): d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek
SS58 Address: d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek
                    `}
            </pre>
            <div className="page-content-subtitle">
              Inspecting addresses and keys
            </div>
            <div className="page-content-text">
              Use key inspect command to display the the account details. Seed
              phrase, private key (hex), address or public key (hex) can be
              inspected.
            </div>
            <div className="page-content-text">
              Inspecting public key by the network address
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek
                    `}
            </pre>
            <div className="page-content-text">
              The output would be like this if given address is valid:
            </div>
            <pre className="main-pre">
              {`
Public Key URI d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek is account: Network ID/Version: 71 Public key (hex): 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10 Account ID: 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10 Public key (SS58): d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek SS58 Address: d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek
                    `}
            </pre>
            <div className="page-content-text">
              Invalid address format would cause the error:
            </div>
            <pre className="main-pre">
              {`
Invalid phrase/URI given
                    `}
            </pre>
            <div className="page-content-text">
              Inspecting a network address by its public key
            </div>
            <div className="page-content-text">
              In this case --public flag has to be used
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect --public 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10
                    `}
            </pre>
            <div className="page-content-text">This output is expected:</div>
            <pre className="main-pre">
              {`
Network ID/Version: 71 Public key (hex): 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10 Account ID: 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10 Public key (SS58): d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek SS58 Address: d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek
                    `}
            </pre>
            <div className="page-content-subtitle">
              Inspecting a seed phrase
            </div>
            <div className="page-content-text">
              By means of inspecting a seed phrase you can derive both types of
              keys sr25519 and ed25519 from out of it. Ex. in order to create a
              ed25519 type of key pair, this command is required:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect --scheme Ed25519 "debris minor crater swear crane whale clever into now tone grid proud"
                    `}
            </pre>
            <div className="page-content-text">
              The output would as follows:
            </div>
            <pre className="main-pre">
              {`
Secret phrase: debris minor crater swear crane whale clever into now tone grid proud Network ID: 71 Secret seed: 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a Public key (hex): 0x6bfcaf1780f0c9f11ee93366c7cf0f24b0a77675966589c82398236da32024d3 Account ID: 0x6bfcaf1780f0c9f11ee93366c7cf0f24b0a77675966589c82398236da32024d3 Public key (SS58): d1EhJkMSTJQDgnkyet8kaB4QppPzYBX1XJWETKF8C2fv1ruxS SS58 Address: d1EhJkMSTJQDgnkyet8kaB4QppPzYBX1XJWETKF8C2fv1ruxS
                    `}
            </pre>
            <div className="page-content-subtitle">
              Inspecting a private key
            </div>
            <div className="page-content-text">
              while inspectin a private key(hex) the sr25519 is set up by
              default. For example, let's inspect the private key from the
              account above, which was generated with ed25519
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a
                    `}
            </pre>
            <div className="page-content-text">
              The output will be like this:
            </div>
            <pre className="main-pre">
              {`
Secret Key URI 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a is account: Network ID: 71 Secret seed: 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a Public key (hex): 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10 Account ID: 0x0ed64e59d2d9c1c828a41a0f3cac53d92f99bc99df795e11b804c5ebb2c96b10 Public key (SS58): d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek SS58 Address: d1CbAtpwbLAtLA6FXnDdR8FzwjqU9kKMYVWUzucaRvWzShEek
                    `}
            </pre>
            <div className="page-content-text">
              If the type ed25519 is specified, like this:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect --scheme Ed25519 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a
                    `}
            </pre>
            <div className="page-content-text">
              We are going to get the result:
            </div>
            <pre className="main-pre">
              {`
Secret Key URI 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a is account: Network ID: 71 Secret seed: 0x3026a7ee1b5014b72287681c68e55b7eca44d11fcfb86254f1efec21845abf9a Public key (hex): 0x6bfcaf1780f0c9f11ee93366c7cf0f24b0a77675966589c82398236da32024d3 Account ID: 0x6bfcaf1780f0c9f11ee93366c7cf0f24b0a77675966589c82398236da32024d3 Public key (SS58): d1EhJkMSTJQDgnkyet8kaB4QppPzYBX1XJWETKF8C2fv1ruxS SS58 Address: d1EhJkMSTJQDgnkyet8kaB4QppPzYBX1XJWETKF8C2fv1ruxS
                    `}
            </pre>
          </div>
        </div>
        <div className="page-content-block" id="troubleshooting">
          <div className="page-content-inner">
            <div className="page-content-title">Troubleshooting</div>
            <div className="page-content-subtitle">
              The Node has no peers
            </div>
            <img
              className="page-img"
              src="/images/zero_peers1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              The most probable reasons are: 
            </div>
            <ul className="page-content-text">
              <li>
                The Internet connection issues: settings/firewall, etc.
              </li>
              <li>
                The lack of bootnodes (or low capacity of the bootnodes) on the Network at the moment.{" "}
                The bootnodes are the nodes with `ipv4` providing the introduction list of peers for newcomers. 
              </li>
            </ul>
            <div className="page-content-text">
              Solution:
            </div>
            <ul className="page-content-text">
              <li>Check your Internet connection</li>
              <li>
                Make sure the external port 30333 is open for incoming connections.{" "}
                Check your router settings, firewall rules, DDos protection, etc. 
              </li>
              <li>Check if the port 30334 is open on your computer/server</li>
              <li>
                Check your Internet speed. It should be at least 1 Mb/s.
              </li>
              <li>
                Make sure the bootnodes in the {" "}
                <Link to="https://github.com/3Dpass/3DP/blob/main/mainnetSpecRaw.json">./3DP/mainnetSpecRaw.json</Link> file{" "} 
                the node is starting with are available. In any case, feel free to ask for new fresh bootnodes in the community (over the Discord or Telegram) and add then into the list{" "}
                Learn more about the bootnodes on the project <Link to="https://github.com/3Dpass/3DP/wiki/Setting-up-bootnode">Wiki</Link>.
              </li>
            </ul>
            <div className="page-content-subtitle">
              Node got stuck at the certain heght or it won't start syncing
            </div>
            <div className="page-content-text">
              It looks like you have some peers connected, however the Node got
              stuck indicating sync velocity 0 blocks per second and not
              receiving any blocks.
            </div>
            <img
              className="page-img"
              src="/images/not_syncing1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">Solution</div>
            <ul className="page-content-text">
              <li>
                Make sure incoming connections are allowed and external port
                30333 is open for your node.
              </li>
              <li>
                If you are behind the NAT or router, it's recomended that you
                set up a static internal IP and forward external port 30333 to
                your machine
              </li>
              <li>
                Sometimes, it might get tricky to establish the first p2p
                connection between nodes behind NAT. Try leveraging some
                different Internet provider or direct connection from data
                center, etc. That might really help. If you have your computer
                connected via router, then turn it off for 10-15 min and then
                try again.
              </li>
            </ul>
            <div className="page-content-subtitle">
              The node is always falling behind and wouldn't catch
              up with the chain
            </div>
            <div className="page-content-text">
              That kind of issue might be caused by either you have some
              troubles with the Internet connection or your hardware doesn't
              satisfy or lower than standard requirements.
            </div>
            <ul className="page-content-text">
              <li>
                It's recommended that you upgrade the hardware and the Internet
                connection speed.
              </li>
              <li>
                You can also download the actual blockchain db and start syncing
                from that point. Ask the db on Discord chat and replace your
                folder <i>~/3dp-chain/chains/3dpass/db</i> with the new one.
              </li>
            </ul>
            <div className="page-content-subtitle">
              Error: Service(Other("Unable to mine: fetch pair from author
              failed"))
            </div>
            <div className="page-content-text">
              Set up your keys for mining and for Grandpa as it's described in
              the guidelines. If you are running the Node manually, make sure if
              there are two keys in the keystore:
              ~/3dp-chain/chains/3dp/keystore
            </div>
            <div className="page-content-subtitle">
              "Expected prunning mode: constrained"
            </div>
            <div className="page-content-text">
              Remove your blockchain db as it's described <Link to="/testnet">above</Link> and start the
              node again.
            </div>
            <div className="page-content-subtitle">
              Cannot unlock my old mining rewards
            </div>
            <div className="page-content-text">
              The <Link to="https://polkadot.js.org/apps/#/chainstate">chain state</Link> on the blockchain storage for the Rewards pallet
              provides there is no locks for the address you have requested,
              despite the fact that a certain amount of P3D is still locked in.
              Ex. you can see some funds locked, while observing your account
              over the <Link to="https://3dpscan.io">block explorer</Link>. The chain state output would look like
              this:
            </div>
            <pre className="main-pre">
              {`
[
[ d1EssjuwKKqe4HRFejUTtT5BXAQVnUEMw2ddKkxC1fsxvt9Sn
]
{}
]
                    `}
            </pre>
            <div className="page-content-text">Solution</div>
            <div className="page-content-text">
              1. Check the chain storage for the Rewards pallet to figure it out
              whether or not the output looks like in the example above.
            </div>
            <img
              className="page-img"
              src="/images/chainstorage_rewards1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text" id="cant-unlock">
              2. If so, proceed the following steps:
            </div>
            <ul className="page-content-text">
              <li>Execute Unlock funds mined via the <Link to="https://wallet.3dpass.org/">web wallet</Link></li>
              <li>
                Lock 1 Cramb (0.000000000001 P3D) with the Rewards pallet like
                this
              </li>
            </ul>
            <img
              className="page-img"
              src="/images/lock1cramb1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Make sure you have your funds unlocked.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mainnet;
