import React from "react";
import "./marquee.css";

// const Marquee = () => {

//   return (
//     <div className="marquee__container">
//     <div className='marquee'>
//       <ul className='marquee__content'>
//         <li>BE</li>
//         <li>FEARLESS  </li>
//         <li>IN</li>
//         <li>THE</li>
//         <li>PURSUIT</li>
//         <li>OF</li>
//         <li>WHAT</li>
//         <li>SETS</li>
//         <li>YOUR</li>
//         <li>SOUL</li>
//         <li>ON</li>
//         <li>FIRE</li>

//         <li>BE</li>
//         <li>FEARLESS</li>
//         <li>IN</li>
//         <li>THE</li>

//       </ul>
//     </div>
//     </div>
//   )
// }

// export default Marquee

const Marquee = () => {
  return (
    <div class="marquee marquee--hover-pause">
      <ul class="marquee__content">
        <li>All</li>
        <li>Code</li>
        <li>Everything</li>
      </ul>

      <ul class="marquee__content" aria-hidden="true">
        <li>All</li>
        <li>Code</li>
        <li>Everything</li>
      </ul>
    </div>
  );
};

export default Marquee;
