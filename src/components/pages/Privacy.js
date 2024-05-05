import React from "react";
import Navbar from "../Navbar";

const Privacy = () => {
  return (
    <>
      <Navbar />

      <div className="main-about-container">
        <h1 style={{ color: "black" }}>Privacy Policy</h1>
        <div
          style={{
            borderBottom: "2px solid red",
            margin: "auto",
            width: "8%",
            marginTop: "1rem",
          }}
        ></div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            margin: "auto",
            marginTop: "6rem",
            marginBottom:'3rem',
            width: "90%",
          }}
        >
          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>
              WHAT DO WE DO WITH YOUR INFORMATION
            </h2>
            At GURURAJ SPARES, we understand the importance of your personal
            information and are dedicated to handling it with the utmost care
            and confidentiality. When you visit our website or make a purchase,
            we may collect certain information from you. This information is
            used to provide you with a seamless shopping experience and improve
            our services. Rest assured, we do not sell, trade, or disclose your
            information to third parties, except as outlined in this Privacy
            Policy or when required by law.
          </div>

          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "4rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>CONSENT</h2>
            By using our website, you consent to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
            When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, or arrange for
            a delivery, we assume that you consent to our collecting it and
            using it for that specific purpose only. If we ask for your personal
            information for a secondary reason, such as marketing, we will
            either ask you directly for your express consent or provide you with
            an opportunity to decline.
          </div>

          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "4rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>DISCLOSURE</h2>
            We may disclose your personal information if required by law or if
            you violate our Terms of Service. However, we assure you that your
            information will not be shared, sold, or disclosed to third parties
            for marketing purposes without your explicit consent.
          </div>

          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "4rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>PAYMENT</h2>
            We use secure payment gateways to process your transactions and
            ensure the safety of your financial information. We do not store or
            have access to your credit card details or other sensitive payment
            information. All payment information is encrypted and handled by
            trusted third-party payment processors that adhere to strict
            industry standards.
          </div>

          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "4rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>THIRD PARTY SERVICES</h2>
            In certain cases, we may use trusted third-party services to help us
            operate our website, provide services to you, or improve our
            business. These third-party providers have limited access to your
            personal information and are obligated to use it solely for the
            purpose of assisting us. We carefully select these providers based
            on their reputation and commitment to maintaining the privacy and
            security of your information.
          </div>

          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "4rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>SECURITY</h2>
            We take the security of your personal information seriously. We
            implement industry-standard security measures to protect your data
            from unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
            Please remember that sharing information online is done at your own
            risk.
          </div>

          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "4rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>
              CHANGES TO THIS PRIVACY POLICY
            </h2>
            We reserve the right to modify this Privacy Policy at any time, so
            please review it periodically. Any changes made will be effective
            immediately upon posting on our website. Your continued use of the
            website after any modifications to the Privacy Policy constitutes
            acceptance of those changes.
          </div>

          <div
            style={{
              textAlign: "left",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "4rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>CONTACT US</h2>
            If you have any questions or concerns about our Privacy Policy or
            how we handle your personal information, please contact us through
            the provided contact information on our website. We are here to
            address your concerns and provide you with the necessary assistance
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
