import React from "react";
import "./index.scss";

function App() {
  return (
    <div className="App">
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
          jujubes. Dessert carrot cake danish lollipop. Oat cake tart chupa
          chups pie toffee donut. Liquorice brownie lollipop bonbon carrot cake
          candy canes.
        </p>
        <img
          className="Header--profile-picture"
          alt="This is me"
          src="https://images-na.ssl-images-amazon.com/images/I/61IavHElJOL._SY741_.jpg"
        />
      </header>
    </div>
  );
}

export default App;

// import React from "react";
// import "./index.scss";
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Solid Snake</h1>
//         <hr />
//         <p className="Header--contact">
//           <span>Phone.</span> +3707876868{" "}
//         </p>
//         <p className="Header--contact">
//           <span>Email.</span> Solid@Snake.com
//         </p>
//         <p>
//           Sweet roll lollipop jujubes marzipan sweet roll sugar plum gummi bears
//           chocolate bar bonbon. Topping tiramisu dessert. Jujubes sweet cookie
//           cookie croissant cake oat cake.
//         </p>
//         <img
//           alt="this is me"
//           src="https://images-na.ssl-images-amazon.com/images/I/61IavHElJOL._SY741_.jpg"
//         />
//       </header>
//     </div>
//   );
// }
//
// export default App;
