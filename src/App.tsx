/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import TradeChannels from './pages/TradeChannels';
import MarketSourcing from './pages/MarketSourcing';
import TrackQuote from './pages/TrackQuote';
import Learn from './pages/Learn';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ShippingPolicy from './pages/ShippingPolicy';
import Sitemap from './pages/Sitemap';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="trade-channels" element={<TradeChannels />} />
          <Route path="market-sourcing" element={<MarketSourcing />} />
          <Route path="track-quote" element={<TrackQuote />} />
          <Route path="learn" element={<Learn />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
