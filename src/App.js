import { BrowserRouter, Route, Routes } from "react-router-dom";

import Coin from "./pages/Coin";
import Community from "./pages/Community";
import Features from "./pages/Features";
import Footer from "./components/Footer";
import ForklessUpgrade from "./pages/ForklessUpgrade";
import Assets from "./pages/Assets";
import Governance from "./pages/Governance";
import Grid2D from "./pages/Grid2D";
import Header from "./components/Header";
import Home from "./pages/Home";
import Mainnet from "./pages/Mainnet";
import MobileWallet from "./pages/MobileWallet";
import Pass3D from "./pages/Pass3D";
import ProofOfScan from "./pages/ProofOfScan";
import ScrollToTop from "./components/ScrollToTop";
import Testnet from "./pages/Testnet";
import TestnetRewards from "./pages/TestnetRewards";
import Grants from "./pages/Grants";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-holder">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/community" element={<Community />} />
            <Route path="/coin" element={<Coin />} />
            <Route path="/mainnet" element={<Mainnet />} />
            <Route path="/mobile-wallet" element={<MobileWallet />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/testnet-rewards" element={<TestnetRewards />} />
            <Route path="/forkless-upgrade" element={<ForklessUpgrade />} />
            <Route path="/testnet" element={<Testnet />} />
            <Route path="/pass3d" element={<Pass3D />} />
            <Route path="/grid2d" element={<Grid2D />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/proof-of-scan" element={<ProofOfScan />} />
            <Route path="/grants" element={<Grants />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
