function PrivacyPolicy() {
  return (
    <main className="page simple-page">
      <div className="simple-inner policy">
        <h1>Privacy Policy</h1>
        <p className="policy-meta">Effective Date: March 3, 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Within: Mindful App Blocker ("Within", "we", "our", or "us") respects your
          privacy.
        </p>
        <p>
          Within is designed to operate primarily on your device. We do not collect
          personal data and we do not maintain servers to store user activity.
        </p>
        <p>
          This Privacy Policy explains how information is handled when you use the
          Within mobile application.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>a) Personal Information</h3>
        <p>Within does not require account creation.</p>
        <p>
          We do not collect your name, email address, phone number, or any other
          personal information unless you voluntarily contact us for support.
        </p>
        <p>
          If you contact us by email, we will use your email address solely to respond
          to your inquiry.
        </p>

        <h3>b) Data Stored on Your Device</h3>
        <p>
          Within stores certain information locally on your device in order to function
          properly, including:
        </p>
        <ul className="policy-list">
          <li>App blocking preferences</li>
          <li>Selected unlock durations</li>
          <li>Unlock session history</li>
        </ul>
        <p>This information is stored only on your device and is not transmitted to us.</p>
        <p>We do not have access to this data.</p>

        <h2>3. Screen Time &amp; System Permissions</h2>
        <p>
          Within may request access to Apple's Screen Time and related system frameworks
          in order to:
        </p>
        <ul className="policy-list">
          <li>Block selected applications</li>
          <li>Manage unlock durations</li>
        </ul>
        <p>All Screen Time data is processed locally on your device.</p>
        <p>
          Within does not access or store the content of your apps, messages, photos,
          contacts, or personal files.
        </p>

        <h2>4. Data Sharing</h2>
        <p>We do not sell, rent, share, or transfer your data to third parties.</p>
        <p>Within does not use third-party analytics services.</p>

        <h2>5. Data Retention</h2>
        <p>All app-related data remains on your device.</p>
        <p>If you delete the app, locally stored data may be permanently removed.</p>
        <p>Because we do not operate external servers, we do not retain user data.</p>

        <h2>6. Children's Privacy</h2>
        <p>Within is not specifically directed to children.</p>
        <p>We do not knowingly collect personal information from minors.</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy if the app's functionality changes.</p>
        <p>
          If updates are made, the "Effective Date" at the top of this document will be
          revised accordingly.
        </p>

        <h2>8. Contact</h2>
        <p>If you have questions regarding this Privacy Policy, you may contact us at:</p>
        <p>hello@within.app</p>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
