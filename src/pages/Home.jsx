import "../styles/home.css";

import React, { useState } from "react";

import Button from "../components/Button";
import Faq from "../components/Faq";
import HomeItem from "../components/HomeItem";
import HomeObjectItem from "../components/HomeObjectItem";
import { Link } from "react-router-dom";
import News from "../components/News";

const Home = () => {
  const [faqs] = useState([
    {
      title: "Real World Assets (RWA), Insurance, Banking, E-commerce",
      description:
        "3DPass opens the gateway for the cryptocurrency market to potental trillions in deals all over the globe. Now you can <a href='/features#tokenization'>transform real and virtual objects into recognizable digital assets</a> and leverage them within useful smart contracts and dApps, having full control over its copies. The <a href='/features#recognition'>recognition</a> of object shape <a href='/features#multiobject'>combined with its additional properties</a> (size, weight, density, clarity, owner's biometric data, etc.), allows to produce this unique sustainable identity called <a href='/features#recognition-hash-id'>Hash ID</a>, which makes 3DPass <a href='/features#difference'>revolutionary different</a> to any existential blockchain. Because of the <a href='/proof-of-scan'>Proof of Scan</a> decentralized protocol providing the object authentication, you can use your object as NFT or mint some private backed currency the unit of which would be a quantum (1 token = gramm, kilogramm, square meter, etc.). <a href='/community#use-cases'>Learn about use cases >></a>",
    },
    {
      title: "Digital identity, recoverable crypto wallets, 2FA",
      description:
        "3DPass enables anyone to utilize a 3D object as seed data for creating passwords or keys. When combined with the owner's biometric data or other additional properties, this <a href='/features#multiobject'>multi-object Hash ID</a> offers a zero-knowledge proof of the object's authenticity. This unique identifier can be subsequently retrieved through scanning. For further details, <a href='/features#passwords'>explore more >></a> about this innovative capability.",
    },
    {
      title: "Metaverse, Gaminig, AI, IoT",
      description:
        "3DPass unfolds this capability of tracing the objects in dynamic (in the state of change), which is an essential component for `play-to-earn` , VR/AR and IoT projects providing the asset ownership to its users. Check out a  <a href='/community#use-cases-ideas'>play-to-eran case</a>.",
    },
  ]);

  const [news] = useState([
    {
      title: "New telemetry server came into operation!",
      description:
        "The telemetry server is now available via https://3dpass.network",
      date: "Apr 11, 2025",
      link: "https://3dpass.network"
    },
    {
      title: "New blockchain explorer came into operation!",
      description:
        "Brand new open source blockchain explorer came into operation and is available via https://3dpscan.xyz",
      date: "Apr 08, 2025",
      link: "https://3dpscan.xyz"
    },
    {
      title: "Counterstake bridge smart contracts are being tested on testnet!",
      description:
        "The assetss-erc20 interface and precompile have been deployed on testnet, which allows for wrapped local assets to be accessible through the EVM.",
      date: "Mar 29, 2025",
      link: "https://github.com/3Dpass/3DP/tree/test"
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
            <Link to="/features#3dprc-2">
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
            <Link to="https://3dpswap.online">
              <Button type="button" label="3dpswap DEX" />
            </Link>
            <Link to="https://3dpscan.xyz">
              <Button type="button" label="Block Explorer" />
            </Link>
            <Link to="/mainnet#linux-mac">
              <Button type="button" label="Miners" />
            </Link>
            <Link to="/mainnet#validator">
              <Button type="button" label="Validators" />
            </Link>
            <Link to="/mainnet#chain">
              <Button type="button" label="On-chain Identity" />
            </Link>
          </div>
        </div>
      </div>
      <div className="home-one-content home-first-content inner-content">
        <div className="home-left-title">The Ledger Of Things</div>
        <div className="home-left-description">
          Layer 1 blockchain, <Link to="/features#scanproof" className="message-text">Proof of Scan</Link> is a revolutionary protocol preventing digital assets
          from being copied (<i> PoW ASIC-resistant and CPU oriented, object recognition-based + PoS</i>), <Link to="/grid2d" className="message-text">Grid2d</Link> recognition algorithm, <Link to="/features#scanproof-deterministic" className="message-text">deterministic</Link>  blockchain finality,
          3Dpass Coin: <Link to="/mainnet" className="message-text">mineable</Link>,  <Link to="/proof-of-scan#3dprc-2" className="message-text">3DPRC-2</Link> tokenization standard, Decentralized <Link to="/governance#general" className="message-text">Open Governance</Link>,{" "}
          <Link to="/proof-of-scan#forkless-upgrade" className="message-text">Forkless upgrade</Link>, On-chain Identity, <Link to="/features#smartcontracts" className="message-text">Smart Contracts</Link>.
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
          <a href="/features#recognition-hash-id">
            <HomeObjectItem
              icon={"diamond"}
              title={"Create the <span>Hash ID</span> out of any object"}
            />
          </a>
          <div className="object-item-divider">
            <div className="divider-circle"></div>
          </div>
          <a href="/features#recognition">
            <HomeObjectItem
              icon={"object"}
              title={"<span>Recognize</span> your object wherever you are"}
            />
          </a>
          <div className="object-item-divider">
            <div className="divider-circle"></div>
          </div>
          <a href="/features#3dprc-2">
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
            {faqs.map((item, i) => (
              <Faq
                key={i}
                title={item.title}
                description={item.description}
                isOpen={i === activeIndex}
                onToggle={() => handleToggle(i)}
              />
            ))}
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
        <div className="home-partners-title">MarketCap</div>
        <div className="partners-icons-holder">
          <div className="partners-icons-holder">
            <a href="https://coinmarketcap.com/currencies/3dpass/">
              <div className="partners-icon coinmarketcap"></div>
            </a>
            <a href="https://www.coingecko.com/en/coins/3dpass">
              <div className="partners-icon coingecko"></div>
            </a>
            {/*<a href="https://coinpaprika.com/coin/p3d-3dpass-coin/">
              <div className="partners-icon coin-paprika"></div>
            </a>
            <a href="https://www.livecoinwatch.com/price/3DPassCoin-P3D">
              <div className="partners-icon live-coin"></div>
            </a>
            <a href="https://coincodex.com/crypto/3dpass/">
              <div className="partners-icon coin-codex"></div>
            </a>*/}
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
