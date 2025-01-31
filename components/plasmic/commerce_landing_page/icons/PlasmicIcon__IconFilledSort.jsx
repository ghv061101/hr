// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconFilledSortIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.236 13.764l3.195-3.195a.333.333 0 00-.236-.569h-6.39a.333.333 0 00-.236.569l3.195 3.195c.13.13.342.13.472 0zm0-11.528L11.43 5.43c.21.21.061.569-.236.569h-6.39a.333.333 0 01-.236-.569l3.195-3.195c.13-.13.342-.13.472 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFilledSortIcon;
/* prettier-ignore-end */
