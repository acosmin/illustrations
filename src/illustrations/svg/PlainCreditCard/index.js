import React from "react";
import PropTypes from "prop-types";

const UndrawPlainCreditCard = props => (
  <svg preserveAspectRatio="xMinYMin meet"     
    className={props.class}
    id="8bff179c-1faf-47a9-9e8a-5b508d385747"

    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 910 574.86"
  >
    <defs>
      <linearGradient
        id="94384564-366c-4d85-8a1d-9e0c25ad5384"
        x1={455}
        y1={574.86}
        x2={455}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="55ddaad6-e9a0-468f-b733-86575c08a5df"
        x1={187}
        y1={491.9}
        x2={187}
        y2={398}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
        <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
      </linearGradient>
    </defs>
    <title>plain credit card</title>
    <rect
      width={910}
      height={574.86}
      rx={16.5}
      ry={16.5}
      fill="url(#94384564-366c-4d85-8a1d-9e0c25ad5384)"
    />
    <rect
      x={12.41}
      y={8.56}
      width={877.18}
      height={543.02}
      rx={16.5}
      ry={16.5}
      fill="#fff"
    />
    <rect x={12.41} y={121.93} width={877.18} height={119.34} fill={props.primaryColor} />
    <rect x={134.74} y={293.49} width={641.48} height={53.7} fill="#e0e0e0" />
    <rect x={315.25} y={403.89} width={356.54} height={26.85} fill={props.primaryColor} />
    <rect x={315.25} y={445.66} width={140.23} height={26.85} fill={props.primaryColor} />
    <rect x={531.56} y={445.66} width={140.23} height={26.85} fill={props.primaryColor} />
    <rect
      x={127}
      y={398}
      width={120}
      height={93.9}
      rx={18.5}
      ry={18.5}
      fill="url(#55ddaad6-e9a0-468f-b733-86575c08a5df)"
    />
    <rect
      x={134.74}
      y={403.89}
      width={104.43}
      height={82.05}
      rx={18.5}
      ry={18.5}
      fill="#64ffda"
    />
  </svg>
);

UndrawPlainCreditCard.propTypes = {
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

UndrawPlainCreditCard.defaultProps = {
  primaryColor: "#6c68fb",
  height: "250px",
  class: ""
};

export default UndrawPlainCreditCard;
