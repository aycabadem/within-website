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
          <span className="problem-line">We open our apps without noticing.</span>
          <span className="problem-line">We scroll without choosing.</span>
          <span className="problem-line">We react without pausing.</span>
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

export default Home;
