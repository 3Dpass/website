import "../styles/footer.css";

import Button from "./Button";
import MainInput from "./MainInput";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-content">
        <div className="footer-left-content">
          <div className="footer-logo"></div>
          <div className="footer-input-title">Subscribe to our newsletter</div>
          <div className="footer-input-subtitle">
            Get latest news and updates on 3DPass
          </div>
          <div className="footer-input-holder">
            <MainInput type="email" placeholder="Enter your email address" />
          </div>
          <Button type="button" label="Subscribe" />
          <div className="icon-social-holder">
            <a href="https://twitter.com/3Dpass_official"><div className="social-icon twitter"></div></a>
            <a href="https://github.com/3dpass"><div className="social-icon github"></div></a>
            <a href="https://discord.gg/u24WkXcwug"><div className="social-icon discord"></div></a>
            <a href="https://t.me/pass3d"><div className="social-icon telegram"></div></a>
            <a href="https://instagram.com/3dpass_org"><div className="social-icon instagram"></div></a>
          </div>
        </div>
        <div className="footer-right-content">
          <div className="footer-four-parts">
            <a href="/features">
              <div className="footer-parts-title">Features</div>
            </a>
            <a href="/features#3drecognition">
              <div className="footer-item">The Object Recognition</div>
            </a>
            <a href="/features#multiobject">
              <div className="footer-item">Multi-Object Option</div>
            </a>
            <a href="/features#scanproof">
              <div className="footer-item">Proof of Scan Protocol</div>
            </a>
            <a href="/features#scanproof-3dprc-2">
              <div className="footer-item">3DPRC-2 standard</div>
            </a>
            <a href="/features#ledger">
              <div className="footer-item">The Ledger of Things</div>
            </a>
            <a href="/features#smartcontracts">
              <div className="footer-item">Smart Contracts</div>
            </a>
            <a href="/fungible-tokens-minting">
              <div className="footer-item">Fungible Tokens Minting</div>
            </a>
            <a href="/pass3d">
              <div className="footer-item">Pass3d toolkit</div>
            </a>
            <a href="/grid2d">
              <div className="footer-item">Grid2d Algo</div>
            </a>
            <a href="/forkless-upgrade">
              <div className="footer-item">Forkless Upgrade</div>
            </a>
          </div>
          <div className="footer-four-parts">
            <a href="/community">
              <div className="footer-parts-title">Community</div>
            </a>
            <a href="/community#about-us">
              <div className="footer-item">About Us</div>
            </a>
            <a href="/community#our-team">
              <div className="footer-item">Our Team</div>
            </a>
            <a href="/community#governance">
              <div className="footer-item">Governance</div>
            </a>
            <a href="/community#resources">
              <div className="footer-item">Resources</div>
            </a>
            <a href="/community#download">
              <div className="footer-item">Download</div>
            </a>
            <a href="/community#use-cases">
              <div className="footer-item">Use Cases</div>
            </a>
          </div>
          <div className="footer-four-parts">
            <a href="/coin">
              <div className="footer-parts-title">3DPass Coin</div>
            </a>
            <a href="/coin#white-papper">
              <div className="footer-item">White Paper</div>
            </a>
            <a href="/coin#3DPRC-2">
              <div className="footer-item">3DPRC-2 Paper</div>
            </a>
            <a href="/proof-of-scan">
              <div className="footer-item">Pitch Deck Slides</div>
            </a>
            <a href="/coin#road-map">
              <div className="footer-item">Road Map</div>
            </a>
            <a href="/coin#specification">
              <div className="footer-item">Specification</div>
            </a>
            <a href="/coin#distribution">
              <div className="footer-item">Distribution</div>
            </a>
          </div>
          <div className="footer-four-parts">
            <a href="/mainnet">
              <div className="footer-parts-title">Mainnet</div>
            </a>
            <a href="https://wallet.3dpass.org">
              <div className="footer-item">Web3 Wallet</div>
            </a>
            <a href="/mobile-wallet">
              <div className="footer-item">Mobile Wallet</div>
            </a>
            <a href="https://3dpscan.io">
              <div className="footer-item">Block Explorer 1</div>
            </a>
            <a href="https://explorer.3dpassmining.info">
              <div className="footer-item">Block Explorer 2</div>
            </a>
            <a href="https://telemetry.3dpscan.io">
              <div className="footer-item">Telemetry Server</div>
            </a>
            <a href="/mainnet#mining-pool">
              <div className="footer-item">Mining Guidelines</div>
            </a>
            <a href="/mainnet#validator">
              <div className="footer-item">Validator Setup</div>
            </a>
            <a href="/mainnet#tokenization">
            <div className="footer-item">The Object Tokenization</div>
            </a>   
            <a href="/mainnet#tokenization">
            <div className="footer-item">On-chain Identity</div>
            </a>
            <a href="https://github.com/3Dpass/3DP/wiki">
              <div className="footer-item">Development Docs</div>
            </a>          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
