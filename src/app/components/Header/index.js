import React from "react";
import "./index.scss";

function Header() {
  return (
    <header className="Header">
      <h1>John Snow</h1>
      <hr />
      <p className="Header--contact">Phone: +37063339991</p>
      <p className="Header--contact">
        Email:{" "}
        <a
          href="mailto:John@Snow.hbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          John@Snow.hbo
        </a>
      </p>
      <p className="Header--summary">
        Wafer apple pie cheesecake tootsie roll sweet roll jelly-o liquorice
        jujubes. Dessert carrot cake danish lollipop. Oat cake tart chupa chups
        pie toffee donut. Liquorice brownie lollipop bonbon carrot cake candy
        canes.
      </p>
      <img
        className="Header--profile-picture"
        alt="This is me"
        src="https://images-na.ssl-images-amazon.com/images/I/61IavHElJOL._SY741_.jpg"
      />
    </header>
  );
}

export default Header;
