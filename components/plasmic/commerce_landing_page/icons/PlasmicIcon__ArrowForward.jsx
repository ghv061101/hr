// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowForwardIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M35.698 19.5H8.828v-3h26.87l-12.36-8.4L26.485 6 44.14 18 26.485 30l-3.145-2.1 12.359-8.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowForwardIcon;
/* prettier-ignore-end */
