import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Grants = () => {
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
        <div className="page-title">
          Grant program
        </div>
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
            </div>
          </a>
          <a href="#bug-bounty">
            <div
              className={
                locationHash.includes("bug")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Bug Bounty
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#dev-bounty">
            <div
              className={
                locationHash.includes("dev")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Dev bounty
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#marketing-bounty">
            <div
              className={
                locationHash.includes("marketing")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Marketing bounty
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#integrations-bounty">
            <div
              className={
                locationHash.includes("integrations")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Integration bounty
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#eco-system-support-bounty">
            <div
              className={
                locationHash.includes("eco-system-support")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Ecosystem support
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="general">
          <div className="page-content-inner">
            <div className="page-content-title">General</div>
            <div className="page-content-text">
              -- The Contribution Formula to adhere is:  
            </div>
            <div className="page-content-text">
            <i>1. Come up with some useful agenda to The Ledger of Things → 2. Head in and 
              implement your plan to add to its value → 3. Capitalize on the project value.</i>
            </div>
            <div className="page-content-text">
              -- The contribution aspect should never be skipped in the formula! 
            </div>
            <div className="page-content-text">
              There is a Grant contribution program operating around The Ledger of Things, 
              which is established and managed by 3DPass {" "}
              <Link to="/community#governance">Open Governance</Link>{" "}
              to encourage community efforts in the development of the ecosystem. 
            </div>
            <div className="page-content-text">
              The program offers a variety of bounty options for contributors, as long 
              as they meet the following conditions:
            </div>
            <ul className="page-content-text">
              <li>
                Contribution always comes first. In order to apply for bounty, 
                it is required to declare the contribution results to the <Link to="/governance#council">Council</Link>. 
              </li>
              <li>
                P3D is the only currency for the Budget available.
              </li>
              <li>
                The contribution results must be provable in relation to the contributor applied for bounty.
                Having on-chain identity level of confidence at <Link to="/mainnet#chain-kyc">"Reasonable"</Link> is a must to get rewarded. 
              </li>
              <li>
                The contribution must be useful in terms of project development and aligned with its goals,
                categorized into the bounty programs, such as: <Link to="#bug-bounty">Bug bounty</Link>, {" "}
                <Link to="#dev-bounty">Dev bounty</Link>,{" "} <Link to="#marketing-bounty">Marketing bounty</Link>, {" "}
                <Link to="#integrations-bounty">Integration bounty</Link>.  
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="bug-bounty">
          <div className="page-content-inner">
            <div className="page-content-title">Bug bounty program</div>
            <div className="page-content-subtitle">
              Rewards:
            </div>
            <ul className="page-content-text">
              <li>
                Finding and fixing a serious security issue - from 1 000 000 P3D
              </li>
              <li>
                Finding and fixing a minor security issue - from 1 000 P3D
              </li>
            </ul>
            <div className="page-content-text">
              Having <i>Pull Request</i> submitted into <Link to="https://github.com/3dpass">3Dpass GitHub</Link>{" "}
              repository is required to be considered for the application. Sensitive issues can be discussed privately with the 
              Councilors over <Link to="https://discord.gg/u24WkXcwug">Discord</Link>, before disclosure.  
            </div>
            <div className="page-content-subtitle">
              How to apply:
            </div>
            <ul className="page-content-text">
              <li>
                Submit your Pull Request into the <Link to="https://github.com/3dpass">GitHub</Link>
              </li>
              <li>
                Set up on-chain identity and get your P3D account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> and discuss the issue with the Councilors. 
              </li>
              <li>
                Submit your bounty proposal over the <Link to="https://wallet.3dpass.org/governance/bounties">web3 wallet</Link> {" "}
                and specify the link to your Pull Request in the Bounty description. 
              </li>
              <li>
                Follow the Council motion outcome down the <Link to="https://wallet.3dpass.org/governance/motions">link</Link>. If approved, your application will be assigned a curator, 
                who will review the Pull Request and sign off on the payout.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="dev-bounty">
          <div className="page-content-inner">
            <div className="page-content-title">Development bounty program</div>
            <div className="page-content-text">
              Having <i>Pull Request</i> submitted into <Link to="https://github.com/3dpass">3Dpass GitHub</Link>{" "}
              repository is required to be considered for the application. Proposals may be previously discussed with the 
              Councilors and community over <Link to="https://discord.gg/u24WkXcwug">Discord</Link>.  
            </div>
            <div className="page-content-subtitle">
              Rewards:
            </div>
            <ul className="page-content-text">
              <li>
                New recognition algorithm implementation - 3 000 000 P3D
              </li>
              <li>
                Useful dApp or project based on "The Ledger of Things" (ex. marketplace of assets, game, stable coin) - from 1 000 000 P3D
              </li>
              <li>
                Solving one of the issues presented in the <Link to="https://github.com/3dpass">3Dpass GitHub</Link> - from 10 000 P3D.
              </li>
            </ul>
            <div className="page-content-subtitle">
              How to apply:
            </div>
            <ul className="page-content-text">
              <li>
                Submit your Pull Request into the <Link to="https://github.com/3dpass">GitHub</Link>
              </li>
              <li>
                Set up on-chain identity and get your P3D account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> {" "}
                and discuss the task with the Councilors. 
              </li>
              <li>
                Submit your bounty proposal over the {" "}
                 <Link to="https://wallet.3dpass.org/governance/bounties">web3 wallet</Link> {" "}
                and specify the link to your Pull Request in the Bounty description. 
              </li>
              <li>
                Follow the Council motion outcome down the <Link to="https://wallet.3dpass.org/governance/motions">link</Link>. {" "}
                If approved, your application will be assigned a curator, who will review the Pull Request and sign off on the payout.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="marketing-bounty">
          <div className="page-content-inner">
            <div className="page-content-title">
              Marketing bounty program
            </div>
            <div className="page-content-subtitle">
              Should be rewarded:
            </div>
            <div className="page-content-text">
               The only activities that could help The Ledger of Things ecosystem 
               to maintain and develop itself might have a chance to get rewarded.
            </div>
            <div className="page-content-text">
               There is a list of brand messages/directions where marketing activities might fit in, such as:
            </div>
            <ul className="page-content-text">
               <li>
                 Mining:<br />
                 - "Join distributed mining, ASIC-resistant, 
                 CPU, 50% of block rewards, <Link to="/mainnet">how to mine P3D</Link>,
                <Link to="https://3dpassmining.info">Mining dash-board</Link>"
               </li>
               <li>
                Validators:<br />
                <i>- "Join the validator set getting rewarded 50% of block rewards, {" "}
                <Link to="/mainnet#validator">How to become Validator</Link>"</i>
               </li>
               <li>Developers:<br />
               <i>- "Build your dApp on The Ledger of Things,
                use <Link to="/features#3dprc-2">3DPRC-2</Link> tokenization standard, contribute on the {" "}
                <Link to="https://github.com/3dpass">GitHub</Link> and get <Link to="/grants#dev-bounty">granted</Link>."</i>
               </li>
               <li>
                 Users:<br />
                 <i> - "Get your assets tokenized with the <Link to="/mobile-wallet">mobile wallet</Link> - 
                 mint share tokens and trade them on DEX: <Link to="https://3dpswap.online">https://3dpswap.online</Link> "</i>
               </li>
               <li>
                 Investors:<br /> 
                 <i>- "Come up with some useful agenda to The Ledger of Things, 
                 join to implement your plan and add to the project value, capitalize on the value"</i>
               </li>
                <li>
                Observers:<br />
                <i>- "Take part in "game to earn" mechanics, entertain yourself, 
                while picking up some practice using The Ledger of Things"</i>
                </li>
            </ul>
            <div className="page-content-subtitle">
              Should be avoided:
            </div>
            <div className="page-content-text">
              Trading channels, pump/dump signals, any other useless activities should never be rewarded. 
              All actions of that sort are totally out of the project strategy.
            </div>
            <div className="page-content-subtitle">
              How to apply:
            </div>
            <ul className="page-content-text">
              <li>
                Set up on-chain identity and get your P3D account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> {" "}
                and discuss the matter with the Councilors. 
              </li>
              <li>
                Submit your bounty proposal over the {" "}
                 <Link to="https://wallet.3dpass.org/governance/bounties">web3 wallet</Link> {" "}
                and specify the link to your posts in the Bounty description as proof of work. 
              </li>
              <li>
                Follow the Council motion outcome down the <Link to="https://wallet.3dpass.org/governance/motions">link</Link>. {" "}
                If approved, your application will be assigned a curator, 
                who will check on the posts and approve the payout.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="integrations-bounty">
          <div className="page-content-inner">
            <div className="page-content-title">
              Integration bounty program
            </div>
            <div className="page-content-text">
              Having <i>Pull Request</i> submitted into either the <Link to="https://github.com/3dpass">3Dpass GitHub</Link>{" "}
              or any other <strong>Open Source</strong> repository is required to be considered for the application. 
              Proposals may be previously discussed with the 
              Councilors and community over <Link to="https://discord.gg/u24WkXcwug">Discord</Link>.  
            </div>
            <div className="page-content-subtitle">
              To be rewarded:
            </div>
            <ul className="page-content-text">
              <li>
                New integrations with web3 and mobile wallets
              </li>
              <li>
                New integrations with DEXes
              </li>
              <li>
                New integrations marketplaces
              </li>
              <li>
                Issuance of third-party tokens on The Ledger of Things
              </li>
              <li>
                Cross-chain integrations
              </li>
              <li>
                dApps and games
              </li>
              <li>
                Stable coins
              </li>
            </ul>
            <div className="page-content-subtitle">
              How to apply:
            </div>
            <ul className="page-content-text">
              <li>
                Submit your Pull Request into the 3dpass <Link to="https://github.com/3dpass">GitHub</Link> repo or any other <strong>Open Source</strong> repo. 
              </li>
              <li>
                Get both of your accounts GitHub account and Discord account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> {" "}
                and discuss the matter with the Councilors. 
              </li>
              <li>
                Submit your bounty proposal over the {" "}
                 <Link to="https://wallet.3dpass.org/governance/bounties">web3 wallet</Link> {" "}
                and specify the link to your Pull Request in the Bounty description. 
              </li>
              <li>
                Follow the Council motion outcome down the <Link to="https://wallet.3dpass.org/governance/motions">link</Link>. {" "}
                If approved, your application will be assigned a curator, 
                who will check on the posts and approve the payout.
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="eco-system-support-bounty">
          <div className="page-content-inner">
            <div className="page-content-title">
              Ecosystem support bounty program
            </div>
            <div className="page-content-text">
              Having either <i>Pull Request</i> submitted into the <Link to="https://github.com/3dpass">3Dpass GitHub</Link>{" "}
              repository or some useful work done is required to be considered for the application. Proposals may be previously discussed with the 
              Councilors and other community members over <Link to="https://discord.gg/u24WkXcwug">Discord</Link>.  
            </div>
            <div className="page-content-subtitle">
              To be rewarded:
            </div>
            <ul className="page-content-text">
              <li>
                Information web sites (e.g. <Link to="https://3dpass.org">3dpass.org</Link>)
              </li>
              <li>
                Block explorers (e.g. <Link to="https://3dpscan.xyz">3dpscan.xyz</Link>)
              </li>
              <li>
                Mining leader boards (e.g. <Link to="https://miner.p3d.top">miner.p3d.top</Link>)
              </li>
              <li>
                DEX maintenance (e.g. <Link to="https://3dpswap.online">https://3dpswap.online</Link>)
              </li>
              <li>
                Open Governance apps and channels
              </li>
              <li>
                Cross-chain bridges
              </li>
              <li>
                Web3 wallets maintenance and hositng (e.g. <Link to="https://wallet.3dpass.org">https://wallet.3dpass.org</Link>)
              </li>
              <li>
                Mobile wallets maintenance (e.g. <Link to="/mobile-wallet">3dpass mobile wallet</Link>)
              </li>
              <li>
                Other dApps and scripts
              </li>
              <li>
                Useful community resources and groups
              </li>
            </ul>
            <div className="page-content-subtitle">
              How to apply:
            </div>
            <ul className="page-content-text">
              <li>
                Submit your Pull Request into the <Link to="https://github.com/3dpass">GitHub</Link>{"  "}
                or get some useful work done that would require additional resources (time, money, etc) to 
                maintain your service/app. 
              </li>
              <li>
                Get both of your accounts GitHub account and Discord account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> {" "}
                and discuss the matter with the Councilors. 
              </li>
              <li>
                Submit your bounty proposal over the {" "}
                 <Link to="https://wallet.3dpass.org/governance/bounties">web3 wallet</Link> {" "}
                and specify the link to your Pull Request/proof of work in the Bounty description. 
              </li>
              <li>
                Follow the Council motion outcome down the <Link to="https://wallet.3dpass.org/governance/motions">link</Link>. {" "}
                If approved, your application will be assigned a curator, 
                who will check on the posts and approve the payout.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Grants;
