import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function SimplePage({ title }) {
  return (
    <main className="page simple-page">
      <div className="simple-inner">
        <Link className="back-link" to="/">
          Back to Home
        </Link>
        <h1>{title}</h1>
      </div>
    </main>
  );
}

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-inner">
          <h1>Before the noise, there is a moment.</h1>
          <p>Within is a mindful app blocker that creates that moment.</p>
        </div>
      </section>

      <section className="section problem">
        <h2>
          We open our apps without noticing.
          <br />
          We scroll without choosing.
          <br />
          We react without pausing.
        </h2>
        <p>
          Within interrupts the automatic loop with a short, intentional pause.
          It gives you a breath before you enter the feed.
        </p>
      </section>

      <section className="section threshold">
        <h2>Unlock begins within.</h2>
        <p>
          Choose a duration.
          <br />
          Read a short contemplative text.
          <br />
          Enter with clarity.
        </p>
        <button className="cta cta-ghost" type="button">
          Download on the App Store
        </button>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-use">Terms of Use</Link>
        <Link to="/support">Support</Link>
        <a href="mailto:hello@within.app">hello@within.app</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="site-header">
          <Link className="brand-link" to="/">
            WITHIN
          </Link>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<SimplePage title="Privacy Policy" />} />
            <Route path="/terms-of-use" element={<SimplePage title="Terms of Use" />} />
            <Route path="/support" element={<SimplePage title="Support" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
