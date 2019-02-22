import React from "react";
import data from "./data";

import IconLink from "./IconLink";
import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      {data.map(({ href, icon }) => (
        <IconLink href={href} target="blank" icon={icon} />
      ))}
    </footer>
  );
}

export default Footer;
