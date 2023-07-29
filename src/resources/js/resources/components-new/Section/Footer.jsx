import React from "react";

import { useLocale } from "../../../hooks";

const Footer = () => {
  const { footer: strings } = useLocale();

  return (
    <div className="copyright text-center">
      <p>{strings.text}</p>
      <div>{strings.version}</div>
    </div>
  );
};

export default Footer;
