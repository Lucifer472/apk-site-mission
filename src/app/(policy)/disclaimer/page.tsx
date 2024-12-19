import { SITE_TITLE } from "@/config";

const DisclaimerPage = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-8 sm:px-4 md:px-2 lg:px-0">
      <div className="prose" style={{ maxWidth: "100%" }}>
        <h4>
          <strong>Disclaimer</strong>
        </h4>
        <p>
          The content provided on our platform is carefully curated to ensure it
          is free from malicious content, including but not limited to hacking
          tools, viruses, or any form of cyber threats. We take the security of
          our users and the integrity of our platform very seriously.
        </p>
        <ul>
          <li>
            <strong>Content Originality and Copyright:</strong> All app reviews,
            descriptions, and images on our platform are original works of our
            editorial team. We hold the copyright to this content, and
            unauthorized copying or reproduction is strictly prohibited.
          </li>
          <li>
            <strong>Our Commitment to User Safety:</strong> We are dedicated to
            providing a safe environment for our users. Our mission is to offer
            a secure, efficient, and high-quality software download experience.
            We guarantee that all apps and games available for download are free
            from any additional extensions or modifications that could
            compromise user safety.
          </li>
          <li>
            <strong>Unaffiliated with Third Parties:</strong> {SITE_TITLE} is an
            independent entity and is not associated or affiliated with Google,
            Google Play, or Android in any manner. We make it clear that all
            apps and games are the property and trademark of their respective
            developers or publishers and are intended for home or personal use
            only.
          </li>
          <li>
            <strong>Original APK Files:</strong> We only share the original APK
            files for free apps, which are identical to those found on Google
            Play, without any cheats, unlimited gold patches, or other
            modifications.
          </li>
          <li>
            <strong>Trademarks and Logos:</strong> The trademarks, logos, and
            brands displayed on our website are the property of their respective
            owners. We are not affiliated or associated with any of the
            merchants or brands featured.
          </li>
          <li>
            <strong>Contact for Queries:</strong> For any questions or concerns
            regarding security or any other matter, please reach out to us at
            cosnewsletters1@gmail.com. We are committed to responding to all
            inquiries in a timely and efficient manner.
          </li>
          <li>
            <strong>No Endorsement of Hacking Activities:</strong> We do not
            endorse, support, or promote any form of hacking or illegal
            activities. Our platform is a hub for legitimate app reviews and
            downloads, and we strictly prohibit the use of our services for any
            illicit purposes.
          </li>
        </ul>
        <p>
          Please note that while we strive to maintain a secure platform, we
          advise users to also take personal precautions when downloading and
          installing apps, as the internet can pose inherent risks.
        </p>
        <h4>
          <strong>Contact US</strong>
        </h4>
        <p>
          Our email is truepubmedia@gmail.com. If you have any question or
          suggestion about the website, please feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
