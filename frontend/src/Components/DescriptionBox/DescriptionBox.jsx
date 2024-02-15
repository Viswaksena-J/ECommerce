import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An ecommerce website serves as a virtual marketplace where businesses
          showcase and sell their products or services to customers worldwide.
          These platforms feature extensive product catalogs encompassing
          diverse categories like electronics, fashion, home goods, and beyond,
          catering to a wide range of consumer needs and preferences. With
          intuitive user interfaces, customers can easily navigate through the
          website, browsing products, reading descriptions, and making purchases
          with convenience and ease.
        </p>
        <p>
          Personalized user accounts empower customers to manage their shopping
          experiences, including order tracking, saved preferences, and past
          purchases. Responsive design principles ensure seamless accessibility
          across various devices, enabling users to shop anytime, anywhere.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
