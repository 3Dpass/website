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
              which is established and managed by 3Dpass {" "}
              <Link to="/community#governance">Open Governance</Link>{" "}
              to encounrage community efforts on development of the eco-system. 
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
                The contribution must be useful in terms of the project develpment and alligned with its goals
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
              repository is required to consider on the application. Sensitive issues could be discussed privatelly with the 
              Councilors over the <Link to="https://discord.gg/u24WkXcwug">Discord</Link>, before its disclosure.  
            </div>
            <div className="page-content-subtitle">
              How to apply:
            </div>
            <ul className="page-content-text">
              <li>
                Submit your Pull Request into the <Link to="https://github.com/3dpass">GitHub</Link>
              </li>
              <li>
                Get both of your accounts GitHub account and Discord account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> and discuss the issue with the Counsilors. 
              </li>
              <li>
                Submit your bounty over the <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">Pokadot.js wallet</Link> {" "}
                and specify the link to your Pull Request in the Bounty description. 
              </li>
              <li>
                Wait for the Council vote outcome. If approved, your application will be assigned a the curator, 
                who is to check on the Pull Request and approve the payout.
              </li>
            </ul>
            <a className="message-text" href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">
            <div className="page-lead-content">
               Bug Bounty
                <div className="page-lead-button">Apply</div>
            </div>
            </a>
          </div>
        </div>
        <div className="page-content-block" id="dev-bounty">
          <div className="page-content-inner">
            <div className="page-content-title">Development bounty program</div>
            <div className="page-content-text">
              Having <i>Pull Request</i> submitted into <Link to="https://github.com/3dpass">3Dpass GitHub</Link>{" "}
              repository is required to consider on the application. Proposals might be previously discussed with the 
              Councilors and community over the <Link to="https://discord.gg/u24WkXcwug">Discord</Link>.  
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
                Get both of your accounts GitHub account and Discord account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> {" "}
                and discuss the issue with the Counsilors. 
              </li>
              <li>
                Submit your bounty over the {" "}
                 <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">Pokadot.js wallet</Link> {" "}
                and specify the link to your Pull Request in the Bounty description. 
              </li>
              <li>
                Wait for the Council vote outcome. If approved, your application will be assigned a the curator, 
                who is to check on the Pull Request and approve the payout.
              </li>
            </ul>
            <a className="message-text" href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">
            <div className="page-lead-content">
               Dev Bounty
                <div className="page-lead-button">Apply</div>
            </div>
            </a>
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
               The only activities that could help The Ledger of Things eco-system 
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
                 mint share tokens and trade them on DEX: <Link to="https://swap.3dpscan.io">https://swap.3dpscan.io</Link> "</i>
               </li>
               <li>
                 Investors:<br /> 
                 <i>- "Come up with some useful agenda to The Ledger of Things, 
                 join to implement your plan and add to the project value, capitalize on the vallue"</i>
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
                Submit your Pull Request into the <Link to="https://github.com/3dpass">GitHub</Link>
              </li>
              <li>
                Get your both of your accounts SM account (the job was done with) and the Discord account
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> {" "}
                and discuss the issue with the Counsilors. 
              </li>
              <li>
                Submit your bounty over the {" "}
                 <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">Pokadot.js wallet</Link> {" "}
                and specify the link to your posts in the Bounty description as as proof of work. 
              </li>
              <li>
                Wait for the Council vote outcome. If approved, your application will be assigned a the curator, 
                who is to check on the posts and approve the payout.
              </li>
            </ul>
            <a className="message-text" href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">
            <div className="page-lead-content">
               Marketing Bounty
                <div className="page-lead-button">Apply</div>
            </div>
            </a>
          </div>
        </div>
        <div className="page-content-block" id="integrations-bounty">
          <div className="page-content-inner">
            <div className="page-content-title">
              Integration bounty program
            </div>
            <div className="page-content-text">
              Having <i>Pull Request</i> submitted into <Link to="https://github.com/3dpass">3Dpass GitHub</Link>{" "}
              repository is required to consider on the application. Proposals might be previously discussed with the 
              Councilors and community over the <Link to="https://discord.gg/u24WkXcwug">Discord</Link>.  
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
                Submit your Pull Request into the <Link to="https://github.com/3dpass">GitHub</Link>
              </li>
              <li>
                Get both of your accounts GitHub account and Discord account 
                verified as <Link to="/mainnet#chain-kyc">"Reasonable"</Link>.
              </li>
              <li>
                Join <Link to="http://localhost:3000/governance#council">Discord</Link> {" "}
                and discuss the issue with the Counsilors. 
              </li>
              <li>
                Submit your bounty over the {" "}
                 <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">Pokadot.js wallet</Link> {" "}
                and specify the link to your Pull Request in the Bounty description. 
              </li>
              <li>
                Wait for the Council vote outcome. If approved, your application will be assigned a the curator, 
                who is to check on the Pull Request and approve the payout.
              </li>
            </ul>
            <a className="message-text" href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.3dpscan.io#/bounties">
            <div className="page-lead-content">
               Integration Bounty
                <div className="page-lead-button">Apply</div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Grants;
