import "../styles/home.css";

import React, { useState } from "react";

import Button from "../components/Button";
import Faq from "../components/Faq";
import HomeItem from "../components/HomeItem";
import HomeObjectItem from "../components/HomeObjectItem";
import { Link } from "react-router-dom";
import News from "../components/News";

const Home = () => {
  const [faqs, setFaqs] = useState([
    {
      title: "Non-fungible tokens, Insurance, Banking, E-commerce",
      description:
        "3DPass opens the gateway for the cryptocurrency market to potental trillions in deals making all over the globe. Now you can <a href='/features#tokenization'>transform real and virtual objects into recognizable digital assets</a> and leverage them within useful smart contracts and dApps, having full control over its copies. The <a href='/features#3drecognition'>recognition</a> of object shape <a href='/features#multiobject'>combined with its additional properties</a> (size, weight, density, clarity, owner's biometric data, etc.), allows to produce this unique sustainable identity called <a href='/features#3drecognition-hash-id'>Hash ID</a>, which makes 3DPass <a href='/features#difference'>revolutionary different</a> to any existential blockchain. Because of the <a href='/proof-of-scan'>Proof of Scan</a> decentralized protocol providing the object authentication, you can use your object as NFT or mint some private backed currency the unit of which would be a quantum (1 token = gramm, kilogramm, square meter, etc.). <a href='/community#use-cases'>Learn about use cases >></a>",
    },
    {
      title: "Digital identity, recoverable crypto wallets, 2FA",
      description:
        "3DPass allows for anyone to use 3D object as a seed data for the password or keys creation. In combination with the owner's biometric data or some additional properties, this <a href='/features#multiobject'>multi-object Hash ID</a> provides zero knowledge proof of the object authenticity, and eventually can be recovered by means of its scanning. <a href='/features#passwords'>Learn more >></a>",
    },
    {
      title: "Metaverse, Gaming, Added reality, IoT, Robotics, AI",
      description:
        "3DPass provides the oportunity for machines to assign a <a href='/features#3drecognition-hash-id'>sustainable unique identity named HASH_ID</a> for each real or virtual object that we could have simultaniously used in reality, as well, as on the Internet. Not only you can <a href='/features#tokenization'>tokenize the object</a> in static, but also <a href='/features#tokenization'>follow its dynamics</a>. And that would be nothing but a sequence of the object Hash IDs captured in different state, time, place and linked together on the blockchain. <a href='/community#use-cases-gaming'>Learn about some cases >></a>",
    },
  ]);

  const [news, setNews] = useState([
    {
      title: "The mobile wallet v2.15.0 release!",
      description:
      "Now you can make mint and transfer of either 3DPRC-2 share tokens or regular fungible assets via the mobile wallet. The update is available on Github and Google Play.",
      date: "May 26, 2024",
      link: "https://github.com/3Dpass/threedpass/releases/tag/v.2.15.0"
    },
    {
      title: "The equivocation handler release v22!",
      description:
      "The equivocation handler security feature has been released on mainnet to ensure the network resilience against potential hard fork attempts in the future!",
      date: "Apr 26, 2024",
      link: "https://github.com/3Dpass/3DP/releases/tag/v22"
    },
    {
      title: "The mobile wallet v2.13.0 has been released!",
      description:
      "The mobile wallet v2.13.0 allows for users to put new objects on chain, explore the objects uploaded and follow its 3DPRC-2 verification status.",
      date: "Mar 19, 2024",
      link: "https://github.com/3Dpass/threedpass/releases/tag/v2.13.0"
    },
  ]);

  return (
    <React.Fragment>
      <div className="top-header-content">
        <div className="background-blend"></div>
        <div className="mw-content inner-top-header">
          <div className="inner-header-title">Transform The World</div>
          <div className="inner-header-subtitle">
            Layer 1 blockchain platform for the tokenization of objects
          </div>
          <div className="home-button-holder">
          <Link to="/features#scanproof-3dprc-2">
              <Button type="button" label="3DPRC-2 standard" />
            </Link>
            <Link to="/features#smartcontracts">
              <Button type="button" label="Smart Contracts" />
            </Link>
            <Link to="https://wallet.3dpass.org">
              <Button type="button" label="Web3 Wallet" />
            </Link>
            <Link to="/mobile-wallet">
              <Button type="button" label="Mobile wallet" />
            </Link>
            <Link to="https://swap.3dpscan.io">
              <Button type="button" label="3DPass Swap DEX" />
            </Link>
          </div>
        </div>
      </div>
      <div className="home-one-content home-first-content inner-content">
        <div className="home-left-title">The Ledger Of Things</div>
        <div className="home-left-description">
          Layer 1 blockchain, Proof of Scan is a revolutionary protocol preventing digital assets
          from being copied, recognition-based algorithm Grid2d, deterministic blockchain finality, 
          3Dpass Coin: mineable, 3DPRC-2 tokenization standard, Decentralized governance, Forkless upgrade, 
          On-chain Identity, Smart Contracts. 
        </div>
        <div className="home-items-content">
          <HomeItem
            title="Open Source"
            description="Follow our GitHub, make reviews and contribute, your help is always welcome"
            link="https://github.com/3Dpass/"
          />
          <HomeItem
            title="Community"
            description="Join our community, stay up to date, discuss features, add to development"
            link="/community"
          />
          <HomeItem
            title="Mobile"
            description="Manage your assets easily with Mobile wallet, control your keys and transfers"
            link="/mobile-wallet"
          />
        </div>
      </div>
      <div className="home-one-content inner-content">
        <div className="home-left-title">
          Turn your Object Into the Digital Assest
        </div>
        <div className="home-objects-content">
          <a href="/features#3drecognition-hash-id">
            <HomeObjectItem
              icon={"diamond"}
              title={"Create the <span>Hash ID</span> out of any object"}
            />
          </a>
          <div className="object-item-divider">
            <div className="divider-circle"></div>
          </div>
          <a href="/features#3drecognition">
            <HomeObjectItem
              icon={"object"}
              title={"<span>Recognize</span> your object wherever you are"}
            />
          </a>
          <div className="object-item-divider">
            <div className="divider-circle"></div>
          </div>
          <a href="/features#tokenization">
            <HomeObjectItem
              icon={"key"}
              title={
                "Use it as a <span>thing token</span> or <span>password</span>"
              }
            />
          </a>
          <div className="object-item-divider">
            <div className="divider-circle"></div>
          </div>
          <a href="/features#smartcontracts">
            <HomeObjectItem
              icon={"note"}
              title={"Leverage it with <span>smart contracts</span> and dApps"}
            />
          </a>
          <div className="object-item-divider">
            <div className="divider-circle"></div>
          </div>
          <a href="/features#multiobject">
            <HomeObjectItem
              icon={"finger-print"}
              title={"Enjoy biometrics and <span>multi-object option</span>"}
            />
          </a>
          <div className="home-centered-btn">
            <a href="/features">
              <Button type="button" label="Learn More" />
            </a>
          </div>
        </div>
      </div>
      <div className="home-third-content-back">
        <div className="home-third-abs-back"></div>
        <div className="home-one-content third-home-content inner-content">
          <div className="home-centered-title">3Dpass For Industries</div>
          <div className="home-faq-holder">
            {faqs.map((item, i) => {
              return (
                <Faq
                  key={i}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
          <div className="home-centered-title">Latest News</div>
          <div className="home-news-holder">
            {news.map((item, i) => {
              return (
                <News
                  key={i}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  link={item.link}
                />
              );
            })}
          </div>
          <div className="home-centered-btn">
            {/*<Button type="button" label="See All" />*/}
          </div>
        </div>
      </div>
      <div className="home-one-content inner-content">
        <div className="home-partners-title">Exchange</div>
        <div className="partners-icons-holder">
          <a href="https://xeggex.com/market/P3D_USDT">
            <div className="partners-icon xegex"></div>
          </a>
          <a href="https://www.mexc.com/exchange/P3D_USDT">
            <div className="partners-icon mexc"></div>
          </a>
          <a href="https://www.coinex.com/en/exchange/p3d-usdt">
            <div className="partners-icon coinex"></div>
          </a>
        </div>
      </div>
      <div className="home-one-content inner-content">
        <div className="home-partners-title">Marketcap</div>
        <div className="partners-icons-holder">
          <div className="partners-icons-holder">
          <a href="https://coinmarketcap.com/currencies/3dpass/">
              <div className="partners-icon coinmarketcap"></div>
            </a>
          <a href="https://www.coingecko.com/en/coins/3dpass">
              <div className="partners-icon coingecko"></div>
            </a>
            <a href="https://coinpaprika.com/coin/p3d-3dpass-coin/">
              <div className="partners-icon coin-paprika"></div>
            </a>
            <a href="https://www.livecoinwatch.com/price/3DPassCoin-P3D">
              <div className="partners-icon live-coin"></div>
            </a>
            <a href="https://coincodex.com/crypto/3dpass/">
              <div className="partners-icon coin-codex"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="home-one-content inner-content">
        <div className="home-partners-title">Media</div>
        <div className="partners-icons-holder last-partners">
          <a href="https://3dpass.medium.com/">
            <div className="partners-icon medium"></div>
          </a>
          <a href="https://bitcointalk.org/index.php?topic=5382009.0">
            <div className="partners-icon bitcoin"></div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
