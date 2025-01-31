// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ayMB79M2Zha2oXCHU8VvVd
// Component: YDF-BaHmIigj
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ayMB79M2Zha2oXCHU8VvVd/projectcss
import sty from "./PlasmicPrice.module.css"; // plasmic-import: YDF-BaHmIigj/css

createPlasmicElementProxy;

export const PlasmicPrice__VariantProps = new Array();

export const PlasmicPrice__ArgProps = new Array("dollars", "cents");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPrice__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___9Q6D0
        )}
      >
        {"$"}
      </div>
      {renderPlasmicSlot({
        defaultContents: "88",
        value: args.dollars,
        className: classNames(sty.slotTargetDollars)
      })}
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__wdqa5
        )}
      >
        {"."}
      </div>
      {renderPlasmicSlot({
        defaultContents: "99",
        value: args.cents,
        className: classNames(sty.slotTargetCents)
      })}
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPrice__ArgProps,
          internalVariantPropNames: PlasmicPrice__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPrice__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrice";
  } else {
    func.displayName = `PlasmicPrice.${nodeName}`;
  }
  return func;
}

export const PlasmicPrice = Object.assign(
  // Top-level PlasmicPrice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPrice
    internalVariantProps: PlasmicPrice__VariantProps,
    internalArgProps: PlasmicPrice__ArgProps
  }
);

export default PlasmicPrice;
/* prettier-ignore-end */
