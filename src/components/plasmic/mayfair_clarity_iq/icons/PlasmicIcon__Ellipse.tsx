// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EllipseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EllipseIcon(props: EllipseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"6"} cy={"6"} r={"6"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default EllipseIcon;
/* prettier-ignore-end */