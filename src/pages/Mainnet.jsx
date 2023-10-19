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
          <a href="#mining-pool">
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
          </a>
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
              Mining SOLO On Linux or Mac OS
              <div className="page-nav-circle"></div>
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
              How To Set Up a Validator
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
              <div className="page-nav-line tokenization-line"></div>
            </div>
          </a>
          <a href="#put-object">
            <div className="page-nav-inside">
              Put new object on chain 
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#get-object-info">
            <div className="page-nav-inside">
              Get object info
              <div className="inside-nav-circle"></div>
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
            <div className="one-subheader">Mining leaders</div>
          </a>
          <a href="/fungible-tokens-minting#assets">
            <div className="one-subheader">Fungible tokens (Assets)</div>
          </a>
          <a href="fungible-tokens-minting#smart">
            <div className="one-subheader">Smart Contracts</div>
          </a>
        </div>
        <div className="page-content-block first-page-block" id="requirements">
          <div className="page-content-inner">
            <div className="page-content-title">Requirements</div>
            <div className="page-content-text">
              The most common way for a beginner to run a miner and validator is
              to leverage a cloud server running Linux. You may choose whatever
              VPS provider that your prefer, and whatever operating system you
              are comfortable with. The transactions weights in PoScan were
              benchmarked on standard hardware. It is recommended that miners
              and validators run at least the standard hardware in order to
              ensure they are able to process all blocks in time. The following
              are not minimum requirements but if you decide to run with less
              than this beware that you might have performance issue.
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
              The specs posted above are by no means the minimum specs that you
              could use when running a validator, however you should be aware
              that if you are using less you may ne​ed to toggle some extra
              optimizations in order to be equal to other validators that are
              running the standard.
            </div>
          </div>
        </div>

        <div className="page-content-block" id="mining-pool">
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
              create 10 mining pools at minimum. Each pool should not exceed the
              limit = 10% of luck calculated statistically from the blockchain
              history. History depth for the pool_rate to calculate: 100 blocks
              back.
            </div>
            <div className="page-content-text">
              There is no technical restrictions, but the economic penalties
              being applied to the minng block rewards, once having the limit
              rule broken up. The maximum penalties share possible to get is
              100% mining block rewards, which is being slashed as the pool_rate
              has exceded the threshold of 2*limit (20% of luck). All the
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
        </div>
        <div className="page-content-block" id="docker">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to start mining with Docker (Windows; Linux; Mac OS; any
              system)
            </div>
            <div className="page-content-text">
              This way you can run both Node and Miner in one command. Windows,
              Linux, Mac OS are supported.
            </div>
            <div className="page-content-text">
              First, install{" "}
              <Link to="https://docs.docker.com/get-docker/">Docker</Link> and{" "}
              <Link to="https://docs.docker.com/compose/install/">
                Docker Compose
              </Link>
              .
            </div>
            <div className="page-content-text">
              Open Terminal and clone 3DPass Node. Use this command:
            </div>
            <pre className="main-pre">
              git clone https://github.com/3Dpass/3DP
            </pre>
            <div className="page-content-text">
              Create your mining address via <Link to="https://wallet.3dpass.org/">Web wallet</Link>. Use <Link to="/mainnet#wallet">these</Link> guidelines if
              you need help. Keep your seed phrase in a safe place. There is no
              way to recover if it's lost.
            </div>
            <div className="page-content-text">
              Run both Node and Miner with the following command:
            </div>
            <pre className="main-pre">
              {`
cp docker-compose.override.yml.example docker-compose.override.yml
// TODO: put your MEMO_SEED and ADDRESS in docker-compose.override.yml
docker compose build
docker compose up
                    `}
            </pre>
            <div className="page-content-text">
              Put your `MEMO_SEED` phrase and miner's `ADDRESS` into
              `~/3DP/docker-compose.override.yml` like this:
            </div>
            <pre className="main-pre">
              {`
version: "3.9"

services: 
node:
environment:
- MEMO_SEED=[PLACE MEMO SEED HERE]
- ADDRESS=[PLACE MINER ADDRESS HERE]
- THREADS=2
- INTERVAL=6
                    `}
            </pre>
            <div className="page-content-text">
              - THREADS=2 is the amount of threads you are about to use
            </div>
            <div className="page-content-text">
              - INTERVAL=6 is the amount of time in miliseconds between the last
              and the next one objects being sent towards the Node. Dependidng
              on how much threads are you mining with, reduce the interval until
              you reach desired proc load.
            </div>
            <div className="page-content-text">
              Run the Node again and make sure you can see it in the list.
            </div>
            <div className="page-content-text">
              In order to assign a custom name to your Node you need to modify
              node.sh file located ~/3DP/docker/node.sh. All you have to do is
              to add the flag --name YourNodeName \ like this:
            </div>
            <pre className="main-pre">
              {`
./p3d import-mining-key "$MEMO_SEED" --base-path /var/chain --chain mainnetSpecRaw.json
./p3d --unsafe-ws-external --unsafe-rpc-external --rpc-cors=all \
--chain mainnetSpecRaw.json --validator \
--base-path /var/chain \
--name YourNodeName \
--name YourNodeName \
                    `}
            </pre>
            <div className="page-content-text">
              In order to remove your blockchain DB and keystore use this
              command:
            </div>
            <pre className="main-pre">
              {`
cd 3DP
docker compose rm -f
                    `}
            </pre>
          </div>
        </div>
        <div className="page-content-block" id="linux-mac">
          <div className="page-content-inner">
            <div className="page-content-title">
              How to start mining on Linux or MAC OS
            </div>
            <div className="page-content-text">
              Open your Terminal. Follow <Link to="https://github.com/3Dpass/3DP#getting-started-with-3dpass-node">these guidelines</Link> to download the latest release or build the Node yourself out of the sourcecodes.
            </div>
            <div className="page-content-text">Generate your mining key:</div>
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
              Register your mining key in the keystore:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus import-mining-key 'your secret seed phrase' --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json
                    `}
            </pre>
            <div className="page-content-text">
              Generate the key for GRANDPA:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key inspect --scheme Ed25519 "your secret seed phrase"
                    `}
            </pre>
            <div className="page-content-text">
              The seed phrase must be the same as the one used for your mining key.
            </div>
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
            <div className="page-content-text">
              Insert Grandpa key into the keystore:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key insert --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --scheme Ed25519 --suri 0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3 --key-type gran
                    `}
            </pre>
            <div className="page-content-text">
              --suri is your Secret seed for Grandpa (not a Secret phrase, but
              this one
              0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3
              in the example above)
            </div>
            <div className="page-content-text">
              Check if there are 2 keys in the keystore:
            </div>
            <pre className="main-pre">
              {`
ls ~/3dp-chain/chains/3dpass/keystore
                    `}
            </pre>
            <div className="page-content-text">
              You can also check the keys manualy
              ~/3dp-chain/chains/3dpass/keystore
            </div>
            <div className="page-content-text">
              Restart the Node with the following:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --name MyNodeName --validator --telemetry-url "wss://submit.telemetry.3dpscan.io/submit 0" --author 0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e --threads 2 --no-mdns
                    `}
            </pre>
            <div className="page-content-text">
              --author is your Public key from mining account (the one you have
              generated as mining key, in the example above it is
              0xccc201f5b3e7036c5ea534096d75befbda68a9b285025csd7105bc4726f02f7e)
              --threads is the number of threads you're about to use for mining
              ("--threads 2" means, you are going to leverage 2 threads)
            </div>
            <div className="page-content-text">Install <Link to="https://bun.sh/">Bun</Link></div>
            <div className="page-content-text">Install miner:</div>
            <pre className="main-pre">
              {`
bun install
                    `}
            </pre>
            <div className="page-content-text">Run miner:</div>
            <pre className="main-pre">
              {`
bun miner.js --host 127.0.0.1 --port 9933
                    `}
            </pre>
            <div className="page-content-text">
              --interval is the amount of time in miliseconds between the last
              and the next one objects being sent towards the Node. Dependidng
              on how much threads are you mining with, reduce the interval until
              you reach desired proc load.
            </div>
            <div className="page-content-text">
              Make sure you have open External port 30333 for incoming
              connections and forwarded to your server's local LAN IP
            </div>
            <div className="page-content-text">
              Make sure you can see your Node in the <Link to="https://telemetry.3dpscan.io/">list</Link>
            </div>
            <div className="page-content-text">
              There is an <Link to="https://github.com/3Dpass/miner">alternatinve miner</Link> you can also use with your node.
            </div>
            <div className="page-content-text">
              In order ot remove your blockchain DB use this command:
            </div>
            <pre className="main-pre">
              {`
rm -rf ~/3dp-chain/chains/3dpass/db
                    `}
            </pre>
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
              <li>wss://rpc.3dpass.org</li>
              <li>wss://rpc2.3dpass.org</li>
              <li>wss://rpc.3dpscan.io</li>
              <li>wss://rpc.caldera.network</li>
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
              Open <Link to="https://wallet.3dpass.org/">3DPass wallet page</Link> in your web browser.
            </div>
            <div className="page-content-text">
              Make sure that you are connected to the correct endpoint:
              wss://rpc.3dpass.org or wss://rpc2.3dpass.org as it's shown above.
              Use "+" to generate new address. Keep your seed phrase in a safe
              place. There is no any possible ways to recover if it's lost. You
              can also import your address from the seed phrase.
            </div>
            <img
              className="page-img"
              src="/images/new_account1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">
              Remove your address after it's being used:
            </div>
            <div className="page-content-text">
              We recommend that you not to store your addresses in browser
              constantly. Store your seed phrase in a safe place. You can import
              the address again whenever you need.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="troubleshooting">
          <div className="page-content-inner">
            <div className="page-content-title">Troubleshooting</div>
            <div className="page-content-subtitle">
              Node has no peers connected
            </div>
            <img
              className="page-img"
              src="/images/zero_peers1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              That 99% might be caused by your Iternet connection or Internet
              settings.
            </div>
            <ul className="page-content-text">
              <li>Check your Internet connection</li>
              <li>
                Make sure incoming connections are allowed, external port 30333
                is open. Check your router, firewall, ddos protection, etc. For
                some countries you might need to use VPN.
              </li>
              <li>Check if port 30334 is open on your computer/server</li>
              <li>
                Check your Internet speed. It should be at least 1 Mb/s for
                download
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
              The node is always falling behind the others and wouldn't catch
              up with the chain
            </div>
            <div className="page-content-text">
              That kind of issue might be caused by either you have some
              troubles with the Internet connection or your hardware doesn't
              satisfy or lower than the standard <Link to="/mainnet">conditions reqired</Link>.
            </div>
            <ul className="page-content-text">
              <li>
                It's recommended that you upgrade the hardware and the Internet
                connection speed.
              </li>
              <li>
                You can also download the actual blockchain db and start syncing
                from that point. Ask the db on Discord chat and replace your
                folder ~/3dp-chain/chains/3dpass/db with the new one.
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
            <div className="page-content-title">Validator Set up</div>
            <div className="page-content-subtitle" id="validator-general">
              General
            </div>
            <div className="page-content-text">
              Validators are the most reliable authorities eligible to vote for
              blocks finalization. In order to become one the node must not only
              declare a block authirship, but also put some funds on a
              collateral. Validators get rewarded 30% for every block in the
              network. Rewards are to divide in equal among the current
              validator set members.
            </div>
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
              next session begins (session length = 30 blocks) to put the
              validator in the queue, which is going to last one more session to
              add it into the actual GRANDPA Authority list. This cycle is
              designed to ensure secure rotation in the set, and it always takes
              ~ 2 sessions.
            </div>
            <div className="page-content-subtitle" id="validator-requirements">
              Requirements
            </div>
            <div className="page-content-text">
              The most common way for a beginner to run a miner and validator is
              to leverage a cloud server running Linux. You may choose whatever
              VPS provider that your prefer, and whatever operating system you
              are comfortable with. The transactions weights in PoScan were
              benchmarked on standard hardware. It is recommended that miners
              and validators run at least the standard hardware in order to
              ensure they are able to process all blocks in time. The following
              are not minimum requirements but if you decide to run with less
              than this beware that you might have performance issue.
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
              The specs posted above are by no means the minimum specs that you
              could use when running a validator, however you should be aware
              that if you are using less you may ne​ed to toggle some extra
              optimizations in order to be equal to other validators that are
              running the standard.
            </div>
            <div className="page-content-subtitle">SLA</div>
            <ul className="page-content-text">
              <li>Online: 24/7</li>
              <li>
                Firewall: no Firewall (the locations such as China and Singapore
                are not allowed for validator hosting)
              </li>
              <li>Internet trafic: no limits</li>
              <li>Performance: no problem to keep up with the chain</li>
            </ul>
            <div className="page-content-subtitle" id="validator-threshold">
              Selection Threshold
            </div>
            <div className="page-content-text">
              There is a threshold for new validator to pass, which depends on
              the amount of P3D locked up for the collateral. It is required to
              prove block authirship in the time frame of N recent blocks back.
              Block authorship check is required to pass just once. Hovewer, the
              collateral needs to remain locked up all the way through the node
              operating period. If the lock out period expires, the node is
              being moved from the validator set. In order to get back the
              threshold is required to pass again.
            </div>
            <div className="page-content-subtitle">Options</div>
            <ul className="page-content-text">
              <li>
                100 000 P3D locked + 1 block authorship in 100 recent blocks
                back
              </li>
              <li>
                200 000 P3D locked + 1 block authorship in 2000 recent blocks
                back
              </li>
              <li>
                300 000 P3D locked + 1 blok authorship in 4000 recent blocks
                back
              </li>
              <li>
                400 000 P3D locked + 1 block authorship in 8000 recent blocks
                backn
              </li>
            </ul>
            <div className="page-content-subtitle" id="validator-punishments">
              Punishments
            </div>
            <ul className="page-content-text">
              <li>
                PreVote Equivocation (voting for two different chains
                simultaneously): 40 000 P3D and get off the validator set
              </li>
              <li>
                Not being online/available: 20 000 P3D and get off the validator
                set
              </li>
              <li>
                Not being able to vote for any reason (Firewall, incorrect keys
                set up, etc.): 20 000 P3D and get off the validator set
              </li>
            </ul>
            <div className="page-content-subtitle" id="validator-setting">
              Setting up procedure:
            </div>
            <div className="page-content-text">
              It is assumed that you already have <Link to="/mainnet#linux-mac">set up a regular node</Link> and
              mined a block in recent past before getting started with this
              tutorial.
            </div>
            <div className="page-content-text">1. Set up imOnline key.</div>
            <div className="page-content-text">
              Open Terminal and insert imOnline key into the keystore by means
              of using this command:
            </div>
            <pre className="main-pre">
              {`
./target/release/poscan-consensus key insert --scheme Sr25519 --base-path ~/3dp-chain/ --chain mainnetSpecRaw.json --key-type imon --suri 0x4934fa3a959af00a0caccf2be77d82f4cbf2154c3c7bebc021f2c1573f44fbb3
                    `}
            </pre>
            <div className="page-content-text">
              <code>--suri</code> is the Secret seed (hex) from your GRANDPA key. Check your
              keystore <code>~/3dp-chain/chains/3dpass/keystore</code>. There supposed to be
              3 keys now: Mining key, Grandpa and Imonline key. Imonline key
              looks almost the same to your Minig key, but with the different
              prefix "696...". Your keystore should look this way:
            </div>
            <img
              className="page-img"
              src="/images/keystore1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              2. Run the Node without mining as it's described <Link to="/mainnet#linux-mac">here</Link>
            </div>
            <div className="page-content-text">
              3. Connect <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/chainstate">Polka wallet</Link> to the Node in local (on the same server
              wss://127.0.0.1.:9944)
            </div>
            <div className="page-content-text" id="lock-check">
              4. Lock up your funds until a certain block number in the future.
              There is no way to unlock until it's expired.
            </div>
            <ul className="page-content-text">
              <li>
                Amount u128 (in min units): +12 zeros at the tail e.x. 400 000
                P3D becomes 400 000 000 000 000 000)
              </li>
              <li>
                Minimum lock time: 1 month (+ 43200 blocks ahead the current
                best block)
              </li>
              <li>
                Auto re-lock option (period): a period in blocks every which
                funds are going to be re-locked automatically. For example, if
                45000 is chosen, then the funds are going to be re-locked for
                the next 45000 blocks every 45000 blocks.
              </li>
            </ul>
            <img
              className="page-img"
              src="/images/auto_relock1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              5. Add your mining address into the Validator set:
            </div>
            <img
              className="page-img"
              src="/images/add_to_validator1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Make sure, that you can see your mining address in the
              validatorSet:
            </div>
            <img
              className="page-img"
              src="/images/set_validators1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              6. Do rotateKeys and get "proof Bytes":
            </div>
            <img
              className="page-img"
              src="/images/rotate_keys1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              7. Use your GRANDPA Public key (hex), Mining public key (hex) and
              the proof Bytes to set up session keys:
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
              8. Wait for 60 blocks to pass
            </div>
            <div className="page-content-text">
              9. Make sure, that you can see your GRANDPA SS58 Address in the
              Grandpa Authorities:
            </div>
            <img
              className="page-img"
              src="/images/grandpa_auth1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              10. Would you like to highlight your node with the "dot" on the
              <Link to="https://telemetry.3dpscan.io/">telemetry list</Link>, use this flag with the running comand:
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
              11. Check if your node is not being exposed on the missing list.
              If your node is unable to vofe for some reason (incorrect setup
              keys, firewall, server responce longer than 333 ms, etc.) it's
              going to show up as missing, like this:
            </div>
            <img
              className="page-img"
              src="/images/missing1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle" id="validator-rejoin">
              Rejoining the validator set
            </div>
            <div className="page-content-text">
              There is a "comeback window" a validator can rejoin the validator
              set after getting ruled out and witout a necessity of having yet a
              block mined.
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
              penalties, which is to wait until after the lock period expires
              and do "unlock funds". If the auto re-lock option have been used
              so far, new lock is required to cancel autolocking. Just set up a
              new lock without auto re-lock period specified and wait till it
              has expired.
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
              There is a legitimate way for Validators to exit without getting
              penalties, which is to wait until after the lock period expires
              and do "unlock funds". If the auto re-lock option have been used
              so far, new lock is required to cancel autolocking. Just set up a
              new lock without auto re-lock period specified and wait till it
              has expired.
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
        <div className="page-content-block" id="tokenization">
          <div className="page-content-inner">
            <div className="page-content-title">The object tokenization</div>
            <div className="page-content-text">
              The user objects can be tokenized in accordance to <Link to="https://github.com/3Dpass/whitepaper/blob/main/3DPRC-2.md">3DPRC-2</Link> standard rules. 
            </div>
            <div className="page-content-subtitle" id="put-object">
              Submit new object on The Ledger of Things
            </div>
            <div className="page-content-text">
              3D model in <i>.obj</i> format could be submitted. Requirements: 
            </div>
            <ul className="page-content-text">
              <li>Max file size: 150 kB</li>
              <li>Authentication fee: 1000 P3D (will be paid to miners and validators for their job)</li>
            </ul>
            <div className="page-content-text">
              Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/extrinsics">Polka wallet</Link> 
            </div>
            <div className="page-content-text">
              In order to submit the object this method should be used <i> Extrinsics - PoScan - putObject(category, obj, numApprovals, hashes)</i>: 
            </div>
            <img
              className="page-img"
              src="/images/put_object_mainnet.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#1-poscanputobject">PoScan pallet API</Link>
            </div>
            <div className="page-content-subtitle" id="get-object-info">
              Get the object data
            </div>
            <div className="page-content-text">
              Open <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/chainstate">Polka wallet</Link> 
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
          </div>
          <div className="page-content-text">
            The output returns all the data about the object from the storage. 
            Use <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#2-poscan_getposcanobject">this description</Link> for better understanding of the object parameters. 
          </div>
          <div className="page-content-text">
              This method is also available via the <Link to="https://github.com/3Dpass/3DP/wiki/3DPRC%E2%80%902-PoScan-API#2-poscan_getposcanobject">PoScan pallet API</Link>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mainnet;
