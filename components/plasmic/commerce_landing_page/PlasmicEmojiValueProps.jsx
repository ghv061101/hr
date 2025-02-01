// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ayMB79M2Zha2oXCHU8VvVd
// Component: dXg-mZqo9Hy8
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Value from "../../Value"; // plasmic-import: 7jbjniCIVRxc/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ayMB79M2Zha2oXCHU8VvVd/projectcss
import sty from "./PlasmicEmojiValueProps.module.css"; // plasmic-import: dXg-mZqo9Hy8/css
import PlaneIcon from "./icons/PlasmicIcon__Plane"; // plasmic-import: wEpYwTO88w1P/icon
import DocumentIcon from "./icons/PlasmicIcon__Document"; // plasmic-import: Fqz5sIOWK00m/icon
import LockIcon from "./icons/PlasmicIcon__Lock"; // plasmic-import: -JxLkbBuBOd1/icon

createPlasmicElementProxy;

export const PlasmicEmojiValueProps__VariantProps = new Array();

export const PlasmicEmojiValueProps__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEmojiValueProps__RenderFunc(props) {
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
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Value
          className={classNames("__wab_instance", sty.value__j9CUa)}
          icon={
            <PlaneIcon
              className={classNames(projectcss.all, sty.svg___2Zdyi)}
              role={"img"}
            />
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bN0U
            )}
          >
            {"Worldwide shipping"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cGjRk
            )}
          >
            {"Special financing and earn rewards."}
          </div>
        </Value>
        <Value
          className={classNames("__wab_instance", sty.value___0Mccy)}
          icon={
            <DocumentIcon
              className={classNames(projectcss.all, sty.svg__vkDql)}
              role={"img"}
            />
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__n8Kaq
            )}
          >
            {"30-day guarantee"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vSm4H
            )}
          >
            {"Free return policy."}
          </div>
        </Value>
        <Value
          className={classNames("__wab_instance", sty.value__fjNz0)}
          icon={
            <LockIcon
              className={classNames(projectcss.all, sty.svg__ds2Da)}
              role={"img"}
            />
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bawT3
            )}
          >
            {"Secured payments"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__iqTya
            )}
          >
            {"We accept major credit cards."}
          </div>
        </Value>
      </Stack__>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicEmojiValueProps__ArgProps,
          internalVariantPropNames: PlasmicEmojiValueProps__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEmojiValueProps__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmojiValueProps";
  } else {
    func.displayName = `PlasmicEmojiValueProps.${nodeName}`;
  }
  return func;
}

export const PlasmicEmojiValueProps = Object.assign(
  // Top-level PlasmicEmojiValueProps renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicEmojiValueProps
    internalVariantProps: PlasmicEmojiValueProps__VariantProps,
    internalArgProps: PlasmicEmojiValueProps__ArgProps
  }
);

export default PlasmicEmojiValueProps;
/* prettier-ignore-end */
