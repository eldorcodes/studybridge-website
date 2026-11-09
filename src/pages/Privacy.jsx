import React from "react";
import "./Privacy.css";

export default function Privacy() {
  return (
    <div className="privacy-page">
      <h1 className="privacy-title">Tank Frontier Privacy Policy</h1>
      <p className="privacy-updated">Last updated: November 9, 2026</p>

      <div className="privacy-content">
        <section>
          <h2>1. About this policy</h2>
          <p>
            StudyBridge LLC (“we,” “us,” or “our”) publishes Tank Frontier, a
            single-player mobile game. This policy explains how information is
            handled when you use Tank Frontier. It applies to the game and its
            related features, including advertising and in-app purchases.
          </p>
        </section>

        <section>
          <h2>2. Information handled by the game</h2>
          <p>
            Tank Frontier does not require you to create an account. Campaign
            progress, mission completion, and related game data are stored on
            your device so you can continue playing later. We do not operate a
            Tank Frontier account or campaign-progress server.
          </p>
          <p>
            The game uses Google Mobile Ads to provide ads and Google’s consent
            tools to request and store advertising privacy choices where
            required. Google and its advertising partners may process information
            such as your device or advertising identifiers, IP address,
            approximate location derived from IP address, ad views and
            interactions, consent choices, and diagnostic information. The
            information processed and whether ads are personalized can depend
            on your device settings, location, and consent choices.
          </p>
          <p>
            If you make an in-app purchase, Apple or Google processes the
            transaction. We do not receive your full payment card details. The
            store may provide purchase or entitlement information needed to
            enable or restore the purchase.
          </p>
        </section>

        <section>
          <h2>3. How information is used</h2>
          <p>Information handled through the game and its providers may be used to:</p>
          <ul>
            <li>Save and restore game progress on your device.</li>
            <li>Show and measure ads, subject to applicable consent and settings.</li>
            <li>Process, verify, or restore in-app purchases.</li>
            <li>Maintain service security, diagnose errors, and comply with law.</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing with service providers</h2>
          <p>
            We do not sell your personal information. Google Mobile Ads and
            related advertising providers may process information to provide
            advertising and related measurement. Apple or Google may process
            purchase information when you buy through their app store. Those
            providers handle information under their own policies and terms.
          </p>
        </section>

        <section>
          <h2>5. Your choices</h2>
          <p>
            You can manage available advertising privacy choices through the
            consent form shown in the game, your device’s advertising settings,
            and applicable platform controls. The options available depend on
            your location and device.
          </p>
          <p>
            You can remove locally stored game progress by deleting the app or
            clearing its storage, where your device allows it. Deleting local
            progress does not delete purchase records held by Apple or Google.
            Eligible purchases may be restored through the same store account.
          </p>
        </section>

        <section>
          <h2>6. Data retention and security</h2>
          <p>
            Game progress remains on your device until you delete it or remove
            the app. Advertising and purchase providers retain information
            according to their own policies. We use reasonable measures to
            protect information within our control, but no method of storage or
            transmission is completely secure.
          </p>
        </section>

        <section>
          <h2>7. Children’s privacy</h2>
          <p>
            Tank Frontier is not designed to collect information directly from
            children. Advertising behavior and available consent options may
            vary based on applicable laws, platform settings, and the
            information provided to the app stores. Please contact us if you
            believe a child has provided personal information to us.
          </p>
        </section>

        <section>
          <h2>8. Changes to this policy</h2>
          <p>
            We may update this policy when the game or its data practices
            change. We will post the updated policy at this URL and revise the
            “Last updated” date above.
          </p>
        </section>

        <section>
  <h2>9. Contact us</h2>
  <p>
    StudyBridge LLC is responsible for this policy. Visit{" "}
    <a
      href="https://www.studybridgeapps.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      studybridgeapps.com
    </a>{" "}
    or contact us at{" "}
    <a href="mailto:support@studybridgeapps.com">
      support@studybridgeapps.com
    </a>{" "}
    with privacy questions.
  </p>
</section>
      </div>
    </div>
  );
}