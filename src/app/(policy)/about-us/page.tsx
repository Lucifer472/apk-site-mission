import { SITE_TITLE } from "@/config";

const AboutUs = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-8 sm:px-4 md:px-2 lg:px-0">
      <div className="prose" style={{ maxWidth: "100%" }}>
        <h4>
          <strong>About Us</strong>
        </h4>
        <p>
          Our platform（Affiliated to TRUE PUB MEDIA., LIMITED） is dedicated to
          delivering an unparalleled level of professionalism and security in
          the realm of app reviews and information services.
        </p>
        <p>
          We pride ourselves on our commitment to providing our users with a
          safe and reliable source for discovering a wide array of free
          applications across various categories such as Social,
          Personalization, Communication, Gaming, Music, and more.
        </p>
        <p>
          We are a team of experts who meticulously curate and review each app,
          ensuring that our content is original and of the highest quality. The
          copyright of all app reviews and associated media lies solely with our
          editorial team, and we strictly prohibit unauthorized reproduction or
          distribution of our work.
        </p>

        <h4>
          <strong>Our Mission</strong>
        </h4>

        <p>
          At the core of our mission is the pursuit of excellence in delivering
          a secure, efficient, and seamless software download experience for our
          global audience.
        </p>

        <p>
          We offer an extensive and meticulously maintained collection of Apps,
          Games, and their historical versions, ensuring that every download is
          100% free from any additional or unauthorized extensions.
        </p>

        <p>
          We are steadfast in our belief that our users deserve nothing but the
          best in their mobile experience. Our team at [{SITE_TITLE}] is always
          ready to assist with any issues related to app installation, updates,
          or any other smartphone app-related inquiries.
        </p>

        <h4>
          <strong>Important Notice</strong>
        </h4>

        <p>
          It is crucial to clarify that [{SITE_TITLE}] is not affiliated or
          associated with Google, Google Play, or Android in any capacity.
          Android is a registered trademark of Google Inc.
        </p>

        <p>
          We respect the intellectual property and trademarks of all app
          developers and publishers, and we ensure that all apps and games we
          share are intended for home or personal use only.
        </p>

        <p>
          We strictly adhere to sharing only the original APK files for free
          apps, which are identical to those available on Google Play, without
          any modifications, cheats, unlimited gold patches, or any other
          alterations that could compromise the integrity of the apps.
        </p>

        <h4>
          <strong>Disclaimer</strong>
        </h4>

        <p>
          We respect the trademarks and logos of all merchants and entities
          featured on our website, which remain the property of their respective
          owners. We maintain no affiliation or association with any of the
          third parties showcased.
        </p>

        <p>
          For any inquiries or feedback, we encourage you to reach out to us via
          our email address
          [truepubmedia@gmail.com](mailto:truepubmedia@gmail.com). We are
          committed to responding to all communications promptly and
          effectively.
        </p>

        <h4>
          <strong>Contact Us</strong>
        </h4>

        <p>
          Should you have any questions, suggestions, or require assistance
          regarding our website or services, please do not hesitate to contact
          us at [truepubmedia@gmail.com](mailto:truepubmedia@gmail.com). We
          value your feedback and are dedicated to maintaining an open line of
          communication with our users.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
