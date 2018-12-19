import React from "react";
import PropTypes from "prop-types";

const UndrawMailSent = props => (
  <svg preserveAspectRatio="xMinYMin meet"     
    className={props.class}
    id="4306f7a5-0830-4d34-917a-62986225c636"

    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 737.61 734.73"
  >
    <defs>
      <linearGradient
        id="530ae87c-3bb5-497b-99f4-8a54bdcef0e4"
        x1={600}
        y1={817.36}
        x2={600}
        y2={82.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="98b0bd8b-d6e5-44e5-8134-4b720e26d691"
        x1={640.68}
        y1={541.38}
        x2={640.68}
        y2={111.38}
        gradientTransform="translate(-230.18 -83.96) rotate(0.13)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopOpacity={0.12} />
        <stop offset={0.55} stopOpacity={0.09} />
        <stop offset={1} stopOpacity={0.02} />
      </linearGradient>
    </defs>
    <title>mail</title>
    <path
      d="M968.8,384.4c.06-27.46-5.63-34.67-18-45.11L617.08,88.13A27.22,27.22,0,0,0,584.4,88L256.58,332.11c-12.44,10.38-24.09,22.48-24.15,49.94h-.36l-.84,376h0l0,16.74a41,41,0,0,0,40.92,41.1l16.16,0h0l310.85.69,327,.73a41,41,0,0,0,41.1-40.92l.87-392.05Z"
      transform="translate(-231.2 -82.64)"
      fill="url(#530ae87c-3bb5-497b-99f4-8a54bdcef0e4)"
    />
    <path
      d="M237.76,384.59h723a0,0,0,0,1,0,0v350A71.78,71.78,0,0,1,889,806.36H308.23a70.47,70.47,0,0,1-70.47-70.47V384.59a0,0,0,0,1,0,0Z"
      transform="translate(-229.87 -83.97) rotate(0.13)"
      fill={props.primaryColor}
    />
    <path
      d="M238.23,383.78l-.81,365.62a56.16,56.16,0,0,0,56,56.28L904.18,807"
      transform="translate(-231.2 -82.64)"
      fill="#f5f5f5"
    />
    <path
      d="M961.27,385.39,960.46,751a56.16,56.16,0,0,1-56.28,56l-610.73-1.36"
      transform="translate(-231.2 -82.64)"
      fill="#fff"
    />
    <path
      d="M584.33,97.91l-322,237.32c-12.22,10.09-23.66,21.86-23.72,48.56L962,386.08c.06-26.7-5.53-33.71-17.7-43.86L616.43,98A27,27,0,0,0,584.33,97.91Z"
      transform="translate(-231.2 -82.64)"
      fill={props.primaryColor}
    />
    <path
      d="M584.33,97.91l-322,237.32c-12.22,10.09-23.66,21.86-23.72,48.56L962,386.08c.06-26.7-5.53-33.71-17.7-43.86L616.43,98A27,27,0,0,0,584.33,97.91Z"
      transform="translate(-231.2 -82.64)"
      opacity={0.3}
    />
    <polygon
      points="651.79 97.86 564.3 29.19 352.78 297.12 239.11 208.99 167.94 299.45 333.36 425.81 333.36 425.81 374.37 458.76 651.79 97.86"
      fill="url(#98b0bd8b-d6e5-44e5-8134-4b720e26d691)"
    />
    <polygon
      points="645.39 96.18 566.06 35.35 355.92 309.4 239.21 219.91 178.38 299.24 334.74 418.96 334.74 418.96 374.84 449.01 645.39 96.18"
      fill="#fff"
    />
  </svg>
);

UndrawMailSent.propTypes = {
  /**
   * Hex color
   */
  primaryColor: PropTypes.string,
  /**
   * percentage
   */
  height: PropTypes.string,
  /**
   * custom class for svg
   */
  class: PropTypes.string
};

UndrawMailSent.defaultProps = {
  primaryColor: "#6c68fb",
  height: "250px",
  class: ""
};

export default UndrawMailSent;
