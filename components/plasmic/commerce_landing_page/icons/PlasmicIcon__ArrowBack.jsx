// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowBackIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.155 21.667L26 31l-2.76 2.333L7.747 20 23.24 6.667 26 9l-10.846 9.333h23.58v3.334h-23.58z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBackIcon;
/* prettier-ignore-end */
