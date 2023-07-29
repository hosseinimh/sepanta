import React from 'react';
import { footer } from "../../../constants/strings/fa";

const Footer = () => {
  return (
    <div className=" h-14 mt-auto my-3 ml-5 text-center text-xs font-bold text-primaryColor ">
      <p className="mb-2">{footer.text}</p>
      <span>{footer.version}</span>
    </div>
  );
};

export default Footer;
