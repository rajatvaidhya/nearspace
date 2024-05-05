import React from "react";
import Navbar from "../Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="main-about-container">
        <h1 style={{ color: "black" }}>About Us</h1>
        <div
          style={{
            borderBottom: "2px solid red",
            margin: "auto",
            width: "8%",
            marginTop: "1rem",
          }}
        ></div>

        <div
          className="about-container"
          style={{
            width: "90%",
            padding: "20px",
            margin: "auto",
            marginTop: "6rem",
            border: "1px solid #ccc",
            borderRadius: "10px",
            fontSize: "1.5rem",
            fontWeight: "500",
            marginBottom: "3rem",
          }}
        >
          Welcome to GURURAJ SPARES, your ultimate destination for high-quality
          spare parts. We understand the importance of reliable and durable
          components to keep your machinery and equipment running smoothly. With
          years of industry experience, we have established ourselves as a
          trusted supplier in the spare parts market.
          <div style={{ marginTop: "2rem" }}>
            At GURURAJ SPARES, we take pride in offering a comprehensive range
            of spare parts for a wide variety of applications. From automotive
            parts to industrial machinery components, we strive to cater to the
            diverse needs of our valued customers. Our inventory is carefully
            curated to ensure that we only stock products from reputable
            manufacturers known for their exceptional craftsmanship and
            adherence to stringent quality standards.
          </div>
          <div style={{ marginTop: "2rem" }}>
            We believe that customer satisfaction is paramount, and we go the
            extra mile to provide an exceptional shopping experience. Our
            knowledgeable and friendly team is always ready to assist you in
            finding the right spare parts for your specific requirements.
            Whether you're a professional mechanic or a DIY enthusiast, we are
            here to help you make informed decisions and find the perfect
            solutions for your repair or maintenance needs.
          </div>
          <div style={{ marginTop: "2rem" }}>
            When you choose GURURAJ SPARES, you can rest assured that you are
            getting genuine parts at competitive prices. We understand the
            importance of timely deliveries, and our efficient logistics ensure
            that your orders reach you promptly, minimizing downtime and
            maximizing productivity. We strive for excellence in every aspect of
            our business, from product quality to customer service, to ensure
            that you receive nothing but the best.
          </div>
          <div
            style={{
              textAlign: "center",
              width: "50%",
              justifyContent: "center",
              margin: "auto",
              fontWeight: "700",
              marginTop: "4rem",
            }}
          >
            <i>
              "Where innovation finds its perfect fit, GURURAJ SPARES brings
              life back to your machinery, unravelling a world of possibilities,
              one spare part at a time.”
            </i>
          </div>
          <div style={{ marginTop: "2rem" }}>
            Thank you for choosing GURURAJ SPARES as your trusted partner for
            all your spare parts needs. We look forward to serving you and
            building a long-lasting relationship based on trust, quality, and
            exceptional service. Explore our extensive range of spare parts
            today and experience the difference for yourself.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
