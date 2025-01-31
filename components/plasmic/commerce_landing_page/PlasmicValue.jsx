// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ayMB79M2Zha2oXCHU8VvVd
// Component: 7jbjniCIVRxc
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: xBA7pTKeWgP9/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ayMB79M2Zha2oXCHU8VvVd/projectcss
import sty from "./PlasmicValue.module.css"; // plasmic-import: 7jbjniCIVRxc/css
import TakeOffIcon from "./icons/PlasmicIcon__TakeOff"; // plasmic-import: l0qfCXBXxo8S/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: OAx1tyEQNd45/icon

createPlasmicElementProxy;

export const PlasmicValue__VariantProps = new Array(
  "topBottom",
  "center",
  "withButton"
);

export const PlasmicValue__ArgProps = new Array("icon", "children");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicValue__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "topBottom",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.topBottom
      },
      {
        path: "center",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.center
      },
      {
        path: "withButton",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withButton
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
        sty.root,
        {
          [sty.rootcenter]: hasVariant($state, "center", "center"),
          [sty.roottopBottom]: hasVariant($state, "topBottom", "topBottom"),
          [sty.rootwithButton]: hasVariant($state, "withButton", "withButton")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___5F0WD, {
          [sty.freeBoxcenter___5F0WDvy5Ql]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxtopBottom___5F0WD4DnX]: hasVariant(
            $state,
            "topBottom",
            "topBottom"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__aFpPk)}>
          {renderPlasmicSlot({
            defaultContents: (
              <TakeOffIcon
                className={classNames(projectcss.all, sty.svg__xuc9B)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__bxv5Z, {
          [sty.freeBoxcenter__bxv5Zvy5Ql]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxwithButton__bxv5Zy3FCw]: hasVariant(
            $state,
            "withButton",
            "withButton"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jcpDz
                )}
              >
                {"Worldwide Shipping"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j5M7J
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </React.Fragment>
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencenter]: hasVariant(
              $state,
              "center",
              "center"
            )
          })
        })}
      </Stack__>
      {(hasVariant($state, "withButton", "withButton") ? true : false) ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ppw3L, {
            [sty.freeBoxcenter__ppw3LVy5Ql]: hasVariant(
              $state,
              "center",
              "center"
            ),
            [sty.freeBoxwithButton__ppw3LY3FCw]: hasVariant(
              $state,
              "withButton",
              "withButton"
            )
          })}
        >
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            end={
              <RightArrowIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
            iconEnd={true}
            label={
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"Read our letter"}
              </div>
            }
          />
        </Stack__>
      ) : null}
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "button", "text", "svg"],
  button: ["button", "text", "svg"],
  text: ["text"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicValue__ArgProps,
          internalVariantPropNames: PlasmicValue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValue";
  } else {
    func.displayName = `PlasmicValue.${nodeName}`;
  }
  return func;
}

export const PlasmicValue = Object.assign(
  // Top-level PlasmicValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicValue
    internalVariantProps: PlasmicValue__VariantProps,
    internalArgProps: PlasmicValue__ArgProps
  }
);

export default PlasmicValue;
/* prettier-ignore-end */
