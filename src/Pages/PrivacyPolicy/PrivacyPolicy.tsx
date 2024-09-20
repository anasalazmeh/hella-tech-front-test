import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
import { useTranslation } from "react-i18next";
import { DataPolicese } from "../../typeData";
import http from "../../api/axios";
import logo from "./image/HelaLogo.png";
const PrivacyPolicy = () => {
  const [data, setData] = useState<DataPolicese>();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fatchData = async () => {
      const res = await http("/pages/privacy-policy");
      setData(res.data.data);
    };
    fatchData();
  }, []);
  const { t, i18n } = useTranslation();
  console.log(data);
  const em =` <div>         <p>
            <strong>
              <span
                style={{
                  color: "#000000",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Last updated: March 29, 2024
              </span>
            </strong>
          </p>{" "}
          <p>
            <span style={{ color: "#000000" }}>&nbsp;</span>
          </p>{" "}
          <p>
            <span
              style={{
                color: "#000000",
                fontFamily: "Roboto",
                fontSize: "16px",
              }}
            >
              This Privacy Policy describes Our policies and procedures on the
              collection, use, and disclosure of Your information when You use
              the Service, and tells You about Your privacy rights and how the
              law protects You.
            </span>
          </p>{" "}
          <p>
            <span
              style={{
                color: "#000000",
                fontFamily: "Roboto",
                fontSize: "16px",
              }}
            >
              We use Your data to provide and improve the Service. By using the
              Service, you agree to collect and use information following this
              Privacy Policy.
            </span>
          </p>{" "}
          <h1
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "24px" }}
          >
            <span style={{ textDecoration: "underline" }}>
              <strong>Interpretation and </strong>
              <strong>Definitions</strong>
            </span>
          </h1>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Interpretation
          </h2>{" "}
          <p>
            <span
              style={{
                color: "#000000",
                fontFamily: "Roboto",
                fontSize: "16px",
              }}
            >
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or plural.
              <br />
            </span>
          </p>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Definitions
          </h2>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            For the purposes of this Privacy Policy:
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Affiliate</u>
            </strong>{" "}
            means an entity that controls, is controlled by, or is under common
            control with a party, where "control" means ownership of 50% or more
            of the shares, equity interest, or other securities entitled to vote
            for the election of directors or other managing authority.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Company</u>
            </strong>{" "}
            (referred to as either "the Company", "We", "Us" or "Our" in this
            Agreement) refers to Hela Tech Ltd.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Cookies</u>
            </strong>{" "}
            are small files that are placed on Your computer, mobile device, or
            any other device by a website, containing the details of Your
            browsing history on that website among its many uses.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Country</u>
            </strong>{" "}
            refers to: United Kingdom.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Device</u>
            </strong>{" "}
            means any device that can access the Service such as a computer, a
            cellphone, or a digital tablet.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Personal Data</u>
            </strong>{" "}
            is any information that relates to an identified or identifiable
            individual.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Service</u>
            </strong>{" "}
            refers to the Website.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Service Provider</u>
            </strong>{" "}
            means any natural or legal person who processes the data on behalf
            of the Company. It refers to third-party companies or individuals
            employed by the Company to facilitate the Service, to provide the
            Service on behalf of the Company, to perform services related to the
            Service, or to assist the Company in analyzing how the Service is
            used.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>Usage Data</u>
            </strong>{" "}
            refers to data collected automatically, either generated by the use
            of the Service or from the Service infrastructure itself (for
            example, the duration of a page visit).
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              <u>The website</u>
            </strong>{" "}
            refers to Hela Tech, accessible from{" "}
            <a href="https://hela-tech.com/">https://hela-tech.com/</a>
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <span style={{ color: "#000000" }}>
              <strong>
                <u>You</u>
              </strong>{" "}
              mean the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.
            </span>
          </p>{" "}
          <h1
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "24px" }}
          >
            <span style={{ textDecoration: "underline" }}>
              <strong>Collecting and Using Your Personal Data</strong>
            </span>
          </h1>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Types of Data Collected
          </h2>{" "}
          <h3 style={{ fontFamily: "Roboto", fontSize: "18px" }}>
            Personal Data
          </h3>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            While using Our Service, we may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            &nbsp; &nbsp; &nbsp; Email address
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            &nbsp; &nbsp; &nbsp; First name and last name
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <span style={{ color: "#000000" }}>
              &nbsp; &nbsp; &nbsp; Usage Data
            </span>
          </p>{" "}
          <h3 style={{ fontFamily: "Roboto", fontSize: "18px" }}>Usage Data</h3>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Usage Data is collected automatically when using the Service.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g., IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device's
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>{" "}
          <h3 style={{ fontFamily: "Roboto", fontSize: "18px" }}>
            Tracking Technologies and Cookies
          </h3>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            We use Cookies and similar tracking technologies to track the
            activity on Our Service and store certain information. Tracking
            technologies used are beacons, tags, and scripts to collect and
            track information and to improve and analyze Our Service. The
            technologies We use may include:
          </p>{" "}
          <ul style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            {" "}
            <li>
              <strong>Cookies or Browser Cookies.</strong> A cookie is a small
              file placed on Your Device. You can instruct Your browser to
              refuse all Cookies or indicate when a Cookie is being sent.
              However, if You do not accept Cookies, You may not be able to use
              some parts of our Service. Unless you have adjusted Your browser
              setting so that it will refuse Cookies, our Service may use
              Cookies.
            </li>{" "}
            <li>
              <strong>Web Beacons.</strong> Certain sections of our Service and
              our emails may contain small electronic files known as web beacons
              (also referred to as clear gifs, pixel tags, and single-pixel
              gifs) that permit the Company, for example, to count users who
              have visited those pages or opened an email and for other related
              website statistics (for example, recording the popularity of a
              certain section and verifying system and server integrity).
            </li>{" "}
          </ul>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
            remain on Your personal computer or mobile device when You go
            offline, while Session Cookies are deleted as soon as You close Your
            web browser.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            We use both Session and Persistent Cookies for the purposes set out
            below:
          </p>{" "}
          <ul style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            {" "}
            <li>
              <strong>
                Necessary / Essential Cookies
                <br />{" "}
              </strong>
              Type: Session Cookies
              <strong>
                <br />{" "}
              </strong>
              Administered by: Us
              <strong>
                <br />{" "}
              </strong>
              Purpose: These Cookies are essential to provide You with services
              available through the Website and to enable You to use some of its
              features. They help to authenticate users and prevent fraudulent
              use of user accounts. Without these Cookies, the services that You
              have asked for cannot be provided, and We only use these Cookies
              to provide You with those services.
            </li>{" "}
            <li>
              <strong>
                Cookies Policy / Notice Acceptance Cookies
                <br />{" "}
              </strong>
              Type: Persistent Cookies
              <strong>
                <br />{" "}
              </strong>
              Administered by: Us
              <strong>
                <br />{" "}
              </strong>
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </li>{" "}
            <li>
              <strong>
                Functionality Cookies
                <br />{" "}
              </strong>
              Type: Persistent Cookies
              <strong>
                <br />{" "}
              </strong>
              Administered by: Us
              <strong>
                <br />{" "}
              </strong>
              Purpose: These Cookies allow us to remember choices You make when
              You use the Website, such as remembering your login details or
              language preference. The purpose of these Cookies is to provide
              You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </li>{" "}
          </ul>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            For more information about the cookies we use and your choices
            regarding cookies, please visit our Cookies Policy or the Cookies
            section of our Privacy Policy.
          </p>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Use of Your Personal Data
          </h2>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            The Company may use Personal Data for the following purposes:
          </p>{" "}
          <ul style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            {" "}
            <li>
              <strong>To provide and maintain our Service,</strong> including
              monitoring the usage of our Service.
            </li>{" "}
            <li>
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </li>{" "}
            <li>
              <strong>For the performance of a contract:</strong> the
              development, compliance, and undertaking of the purchase contract
              for the products, items, or services You have purchased or of any
              other contract with Us through the Service.
            </li>{" "}
            <li>
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application's push notifications
              regarding updates or informative communications related to the
              functionalities, products, or contracted services, including the
              security updates, when necessary or reasonable for their
              implementation.
            </li>{" "}
            <li>
              <strong>To provide You with news,</strong> special offers, and
              general information about other services, and events that we offer
              that are similar to those that you have already purchased or
              enquired about unless You have opted not to receive such
              information.
            </li>{" "}
            <li>
              <strong>To manage Your requests:</strong> To attend to and manage
              Your requests to Us.
            </li>{" "}
            <li>
              <strong>For business transfers:</strong> We may use Your
              information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </li>{" "}
            <li>
              <strong>For other purposes:</strong> We may use Your information
              for other purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional
              campaigns, and evaluating and improving our Service, products,
              services, marketing, and your experience.
            </li>{" "}
          </ul>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            We may share Your personal information in the following situations:
          </p>{" "}
          <ul style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            {" "}
            <li>
              <strong>With Service Providers:</strong> We may share Your
              personal information with Service Providers to monitor and analyze
              the use of our Service, and to contact You.
            </li>{" "}
            <li>
              <strong>For business transfers:</strong> We may share or transfer
              Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or
              acquisition of all or a portion of Our business to another
              company.
            </li>{" "}
            <li>
              <strong>With Affiliates:</strong> We may share Your information
              with Our affiliates, in which case we will require those
              affiliates to honor this Privacy Policy. Affiliates include Our
              parent company and any other subsidiaries, joint venture partners,
              or other companies that We control or that are under common
              control with Us.
            </li>{" "}
            <li>
              <strong>With business partners:</strong> We may share Your
              information with Our business partners to offer You certain
              products, services, or promotions.
            </li>{" "}
            <li>
              <strong>With other users:</strong> When you share personal
              information or otherwise interact in public areas with other
              users, such information may be viewed by all users and may be
              publicly distributed outside.
            </li>{" "}
            <li>
              <strong>With Your consent:</strong> We may disclose Your personal
              information for any other purpose with Your consent.
            </li>{" "}
          </ul>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Retention of Your Personal Data
          </h2>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period,
            except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer periods.
          </p>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Transfer of Your Personal Data
          </h2>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to &mdash; and maintained on &mdash;
            computers located outside of Your state, province, country, or other
            governmental jurisdiction where the data protection laws may differ
            from those from Your jurisdiction.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and by this Privacy Policy and no
            transfer of Your Personal Data will take place to an organization or
            a country unless there are adequate controls in place including the
            security of Your data and other personal information.
          </p>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Delete Your Personal Data
          </h2>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            You have the right to request that We assist in deleting the
            Personal Data that We have collected about You.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            You may also contact Us to request access to, correct, or delete any
            personal information that You have provided to Us.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Disclosure of Your Personal Data
          </h2>{" "}
          <h3 style={{ fontFamily: "Roboto", fontSize: "18px" }}>
            Business Transactions
          </h3>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            If the Company is involved in a merger, acquisition, or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>{" "}
          <h3 style={{ fontFamily: "Roboto", fontSize: "18px" }}>
            Law enforcement
          </h3>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>{" "}
          <h3 style={{ fontFamily: "Roboto", fontSize: "18px" }}>
            <strong>Other legal requirements</strong>
          </h3>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>{" "}
          <ul style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            {" "}
            <li>Comply with a legal obligation.</li>{" "}
            <li>Protect and defend the rights or property of the Company.</li>{" "}
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service.
            </li>{" "}
            <li>
              Protect the personal safety of Users of the Service or the public.
            </li>{" "}
            <li>Protect against legal liability.</li>{" "}
          </ul>{" "}
          <h2
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "20px" }}
          >
            Security of Your Personal Data
          </h2>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "18px" }}>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>{" "}
          <h1
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "24px" }}
          >
            <span style={{ textDecoration: "underline" }}>
              <strong>Children's Privacy</strong>
            </span>
          </h1>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. Suppose We become aware that We have collected Personal
            Data from anyone under the age of 13 without verification of
            parental consent. In that case, We take steps to remove that
            information from Our servers.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </p>{" "}
          <h1
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "24px" }}
          >
            <span style={{ textDecoration: "underline" }}>
              <strong>Links to Other Websites</strong>
            </span>
          </h1>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third-party link, You will be
            directed to that third-party's site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party sites or
            services.
          </p>{" "}
          <h1
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "24px" }}
          >
            <span style={{ textDecoration: "underline" }}>
              <strong>Changes to this Privacy Policy</strong>
            </span>
          </h1>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            We will let You know via email and/or a prominent notice on Our
            Service, before the change becomes effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>{" "}
          <h1
            style={{ color: "#65c583", fontFamily: "Roboto", fontSize: "24px" }}
          >
            <span style={{ textDecoration: "underline" }}>
              <strong>Contact Us</strong>
            </span>
          </h1>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>&nbsp; &nbsp; &nbsp; &nbsp; By email:</strong>{" "}
            info@hela-tech.com
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>
              &nbsp; &nbsp; &nbsp; &nbsp; By visiting this page on our website:
            </strong>{" "}
            <a href="https://hela-tech.com/contact-us">
              https://hela-tech.com/contact-us
            </a>
          </p>{" "}
          <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            <strong>&nbsp; &nbsp; &nbsp; &nbsp; By phone:</strong>+447395402016
          </p> </div>`
          
  return (
    <>
      <NavBar sectionRefs={null} isVideo />
      <div className="bg-main relative text-white text-5xl flex mb-2 justify-center items-center h-40">
        <img src={logo} alt="" className="absolute top-3 left-14 " />
        <div>{t("privacy_policy")}</div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full">
          {/* {data?.description.en} */}
          {data?.description.en ? <div dangerouslySetInnerHTML={{__html:data.description.en}} /> : ""}

        </div>
      </div>
      {/* <iframe
          height={700}
          src={
            process.env.PUBLIC_URL +
            `/pdfs/${
              localStorage.getItem("i18nextLng") === "ar"
                ? "privacy-policy-ar.pdf"
                : "privacy-policy.pdf"
            }`
          }
          className="w-full"
        /> */}
    </>
  );
};

export default PrivacyPolicy;
