// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bVumzfkpaXXcvNmP8r5aNd
// Component: NB8kRS4-EAc3

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bVumzfkpaXXcvNmP8r5aNd/projectcss
import sty from "./PlasmicSecondworkflow.module.css"; // plasmic-import: NB8kRS4-EAc3/css

createPlasmicElementProxy;

export type PlasmicSecondworkflow__VariantMembers = {};
export type PlasmicSecondworkflow__VariantsArgs = {};
type VariantPropType = keyof PlasmicSecondworkflow__VariantsArgs;
export const PlasmicSecondworkflow__VariantProps = new Array<VariantPropType>();

export type PlasmicSecondworkflow__ArgsType = {};
type ArgPropType = keyof PlasmicSecondworkflow__ArgsType;
export const PlasmicSecondworkflow__ArgProps = new Array<ArgPropType>();

export type PlasmicSecondworkflow__OverridesType = {
  root?: Flex__<"div">;
  wireframe20?: Flex__<"div">;
  table3?: Flex__<"div">;
  row?: Flex__<"div">;
  frame?: Flex__<"div">;
  tag?: Flex__<"div">;
  frame2?: Flex__<"div">;
  _98?: Flex__<"div">;
  frame3?: Flex__<"div">;
  frame4?: Flex__<"div">;
  _9800?: Flex__<"div">;
  frame5?: Flex__<"div">;
  _10000?: Flex__<"div">;
  frame6?: Flex__<"div">;
  salesDatabase?: Flex__<"div">;
  row2?: Flex__<"div">;
  frame7?: Flex__<"div">;
  tag2?: Flex__<"div">;
  frame8?: Flex__<"div">;
  _78?: Flex__<"div">;
  frame9?: Flex__<"div">;
  financeSystem?: Flex__<"div">;
  frame10?: Flex__<"div">;
  frame11?: Flex__<"div">;
  _14500?: Flex__<"div">;
  frame12?: Flex__<"div">;
  _7000?: Flex__<"div">;
  row3?: Flex__<"div">;
  frame13?: Flex__<"div">;
  _5000?: Flex__<"div">;
  frame14?: Flex__<"div">;
  _2908?: Flex__<"div">;
  frame15?: Flex__<"div">;
  marketingTool?: Flex__<"div">;
  frame16?: Flex__<"div">;
  frame17?: Flex__<"div">;
  tag3?: Flex__<"div">;
  frame18?: Flex__<"div">;
  _97?: Flex__<"div">;
  row4?: Flex__<"div">;
  frame19?: Flex__<"div">;
  frame20?: Flex__<"div">;
  operationsApp?: Flex__<"div">;
  frame21?: Flex__<"div">;
  tag4?: Flex__<"div">;
  frame22?: Flex__<"div">;
  _26?: Flex__<"div">;
  frame23?: Flex__<"div">;
  _1000?: Flex__<"div">;
  frame24?: Flex__<"div">;
  _2034?: Flex__<"div">;
  header?: Flex__<"div">;
  frame25?: Flex__<"div">;
  dataSource?: Flex__<"div">;
  frame26?: Flex__<"div">;
  dataCompleteness?: Flex__<"div">;
  frame27?: Flex__<"div">;
  recordsCleaned?: Flex__<"div">;
  frame28?: Flex__<"div">;
  recordsProcessed?: Flex__<"div">;
  frame29?: Flex__<"div">;
  dataAccuracy?: Flex__<"div">;
  _972?: Flex__<"div">;
  _973?: Flex__<"div">;
  _974?: Flex__<"div">;
  _975?: Flex__<"div">;
};

export interface DefaultSecondworkflowProps {
  className?: string;
}

const $$ = {};

function PlasmicSecondworkflow__RenderFunc(props: {
  variants: PlasmicSecondworkflow__VariantsArgs;
  args: PlasmicSecondworkflow__ArgsType;
  overrides: PlasmicSecondworkflow__OverridesType;
  forNode?: string;
}) {
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

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"wireframe20"}
        data-plasmic-override={overrides.wireframe20}
        className={classNames(projectcss.all, sty.wireframe20)}
      >
        <div
          data-plasmic-name={"table3"}
          data-plasmic-override={overrides.table3}
          className={classNames(projectcss.all, sty.table3)}
        >
          <div
            data-plasmic-name={"row"}
            data-plasmic-override={overrides.row}
            className={classNames(projectcss.all, sty.row)}
          >
            <div
              data-plasmic-name={"frame"}
              data-plasmic-override={overrides.frame}
              className={classNames(projectcss.all, sty.frame)}
            >
              <div
                data-plasmic-name={"tag"}
                data-plasmic-override={overrides.tag}
                className={classNames(projectcss.all, sty.tag)}
              >
                <div
                  data-plasmic-name={"frame2"}
                  data-plasmic-override={overrides.frame2}
                  className={classNames(projectcss.all, sty.frame2)}
                >
                  <div
                    data-plasmic-name={"_98"}
                    data-plasmic-override={overrides._98}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty._98
                    )}
                  >
                    {"In Progress"}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"frame3"}
              data-plasmic-override={overrides.frame3}
              className={classNames(projectcss.all, sty.frame3)}
            />

            <div
              data-plasmic-name={"frame4"}
              data-plasmic-override={overrides.frame4}
              className={classNames(projectcss.all, sty.frame4)}
            >
              <div
                data-plasmic-name={"_9800"}
                data-plasmic-override={overrides._9800}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._9800
                )}
              >
                {"Yes"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame5"}
              data-plasmic-override={overrides.frame5}
              className={classNames(projectcss.all, sty.frame5)}
            >
              <div
                data-plasmic-name={"_10000"}
                data-plasmic-override={overrides._10000}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._10000
                )}
              >
                {"Supply Chain"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame6"}
              data-plasmic-override={overrides.frame6}
              className={classNames(projectcss.all, sty.frame6)}
            >
              <div
                data-plasmic-name={"salesDatabase"}
                data-plasmic-override={overrides.salesDatabase}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.salesDatabase
                )}
              >
                {"Order Fulfillment"}
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"row2"}
            data-plasmic-override={overrides.row2}
            className={classNames(projectcss.all, sty.row2)}
          >
            <div
              data-plasmic-name={"frame7"}
              data-plasmic-override={overrides.frame7}
              className={classNames(projectcss.all, sty.frame7)}
            >
              <div
                data-plasmic-name={"tag2"}
                data-plasmic-override={overrides.tag2}
                className={classNames(projectcss.all, sty.tag2)}
              >
                <div
                  data-plasmic-name={"frame8"}
                  data-plasmic-override={overrides.frame8}
                  className={classNames(projectcss.all, sty.frame8)}
                >
                  <div
                    data-plasmic-name={"_78"}
                    data-plasmic-override={overrides._78}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty._78
                    )}
                  >
                    {"Optimized"}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"frame9"}
              data-plasmic-override={overrides.frame9}
              className={classNames(projectcss.all, sty.frame9)}
            >
              <div
                data-plasmic-name={"financeSystem"}
                data-plasmic-override={overrides.financeSystem}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.financeSystem
                )}
              >
                {"Customer Support Ticket Resolution"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame10"}
              data-plasmic-override={overrides.frame10}
              className={classNames(projectcss.all, sty.frame10)}
            />

            <div
              data-plasmic-name={"frame11"}
              data-plasmic-override={overrides.frame11}
              className={classNames(projectcss.all, sty.frame11)}
            >
              <div
                data-plasmic-name={"_14500"}
                data-plasmic-override={overrides._14500}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._14500
                )}
              >
                {"No"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame12"}
              data-plasmic-override={overrides.frame12}
              className={classNames(projectcss.all, sty.frame12)}
            >
              <div
                data-plasmic-name={"_7000"}
                data-plasmic-override={overrides._7000}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._7000
                )}
              >
                {"Customer Service"}
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"row3"}
            data-plasmic-override={overrides.row3}
            className={classNames(projectcss.all, sty.row3)}
          >
            <div
              data-plasmic-name={"frame13"}
              data-plasmic-override={overrides.frame13}
              className={classNames(projectcss.all, sty.frame13)}
            >
              <div
                data-plasmic-name={"_5000"}
                data-plasmic-override={overrides._5000}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._5000
                )}
              >
                {"Finance"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame14"}
              data-plasmic-override={overrides.frame14}
              className={classNames(projectcss.all, sty.frame14)}
            >
              <div
                data-plasmic-name={"_2908"}
                data-plasmic-override={overrides._2908}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._2908
                )}
              >
                {"Yes"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame15"}
              data-plasmic-override={overrides.frame15}
              className={classNames(projectcss.all, sty.frame15)}
            >
              <div
                data-plasmic-name={"marketingTool"}
                data-plasmic-override={overrides.marketingTool}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.marketingTool
                )}
              >
                {"Invoice Processing"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame16"}
              data-plasmic-override={overrides.frame16}
              className={classNames(projectcss.all, sty.frame16)}
            />

            <div
              data-plasmic-name={"frame17"}
              data-plasmic-override={overrides.frame17}
              className={classNames(projectcss.all, sty.frame17)}
            >
              <div
                data-plasmic-name={"tag3"}
                data-plasmic-override={overrides.tag3}
                className={classNames(projectcss.all, sty.tag3)}
              >
                <div
                  data-plasmic-name={"frame18"}
                  data-plasmic-override={overrides.frame18}
                  className={classNames(projectcss.all, sty.frame18)}
                >
                  <div
                    data-plasmic-name={"_97"}
                    data-plasmic-override={overrides._97}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty._97
                    )}
                  >
                    {"Pending Review"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"row4"}
            data-plasmic-override={overrides.row4}
            className={classNames(projectcss.all, sty.row4)}
          >
            <div
              data-plasmic-name={"frame19"}
              data-plasmic-override={overrides.frame19}
              className={classNames(projectcss.all, sty.frame19)}
            />

            <div
              data-plasmic-name={"frame20"}
              data-plasmic-override={overrides.frame20}
              className={classNames(projectcss.all, sty.frame20)}
            >
              <div
                data-plasmic-name={"operationsApp"}
                data-plasmic-override={overrides.operationsApp}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.operationsApp
                )}
              >
                {"Product Development"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame21"}
              data-plasmic-override={overrides.frame21}
              className={classNames(projectcss.all, sty.frame21)}
            >
              <div
                data-plasmic-name={"tag4"}
                data-plasmic-override={overrides.tag4}
                className={classNames(projectcss.all, sty.tag4)}
              >
                <div
                  data-plasmic-name={"frame22"}
                  data-plasmic-override={overrides.frame22}
                  className={classNames(projectcss.all, sty.frame22)}
                >
                  <div
                    data-plasmic-name={"_26"}
                    data-plasmic-override={overrides._26}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty._26
                    )}
                  >
                    {"Automation Suggested"}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"frame23"}
              data-plasmic-override={overrides.frame23}
              className={classNames(projectcss.all, sty.frame23)}
            >
              <div
                data-plasmic-name={"_1000"}
                data-plasmic-override={overrides._1000}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._1000
                )}
              >
                {"Research & Development"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame24"}
              data-plasmic-override={overrides.frame24}
              className={classNames(projectcss.all, sty.frame24)}
            >
              <div
                data-plasmic-name={"_2034"}
                data-plasmic-override={overrides._2034}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty._2034
                )}
              >
                {"Yes"}
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div
              data-plasmic-name={"frame25"}
              data-plasmic-override={overrides.frame25}
              className={classNames(projectcss.all, sty.frame25)}
            >
              <div
                data-plasmic-name={"dataSource"}
                data-plasmic-override={overrides.dataSource}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.dataSource
                )}
              >
                {"Workflow Name"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame26"}
              data-plasmic-override={overrides.frame26}
              className={classNames(projectcss.all, sty.frame26)}
            >
              <div
                data-plasmic-name={"dataCompleteness"}
                data-plasmic-override={overrides.dataCompleteness}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.dataCompleteness
                )}
              >
                {"Optimization Status"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame27"}
              data-plasmic-override={overrides.frame27}
              className={classNames(projectcss.all, sty.frame27)}
            >
              <div
                data-plasmic-name={"recordsCleaned"}
                data-plasmic-override={overrides.recordsCleaned}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.recordsCleaned
                )}
              >
                {"Bottleneck Identified"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame28"}
              data-plasmic-override={overrides.frame28}
              className={classNames(projectcss.all, sty.frame28)}
            >
              <div
                data-plasmic-name={"recordsProcessed"}
                data-plasmic-override={overrides.recordsProcessed}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.recordsProcessed
                )}
              >
                {"Department"}
              </div>
            </div>
            <div
              data-plasmic-name={"frame29"}
              data-plasmic-override={overrides.frame29}
              className={classNames(projectcss.all, sty.frame29)}
            >
              <div
                data-plasmic-name={"dataAccuracy"}
                data-plasmic-override={overrides.dataAccuracy}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.dataAccuracy
                )}
              >
                {"Last Analyzed"}
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"_972"}
            data-plasmic-override={overrides._972}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty._972
            )}
          >
            {"2024-09-01"}
          </div>
          <div
            data-plasmic-name={"_973"}
            data-plasmic-override={overrides._973}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty._973
            )}
          >
            {"2024-08-28\n"}
          </div>
          <div
            data-plasmic-name={"_974"}
            data-plasmic-override={overrides._974}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty._974
            )}
          >
            {"2024-08-25"}
          </div>
          <div
            data-plasmic-name={"_975"}
            data-plasmic-override={overrides._975}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty._975
            )}
          >
            {"2024-09-01"}
          </div>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__hyYVz
          )}
        >
          {"Work Flows"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__fQsJy
          )}
        >
          {"X"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "wireframe20",
    "table3",
    "row",
    "frame",
    "tag",
    "frame2",
    "_98",
    "frame3",
    "frame4",
    "_9800",
    "frame5",
    "_10000",
    "frame6",
    "salesDatabase",
    "row2",
    "frame7",
    "tag2",
    "frame8",
    "_78",
    "frame9",
    "financeSystem",
    "frame10",
    "frame11",
    "_14500",
    "frame12",
    "_7000",
    "row3",
    "frame13",
    "_5000",
    "frame14",
    "_2908",
    "frame15",
    "marketingTool",
    "frame16",
    "frame17",
    "tag3",
    "frame18",
    "_97",
    "row4",
    "frame19",
    "frame20",
    "operationsApp",
    "frame21",
    "tag4",
    "frame22",
    "_26",
    "frame23",
    "_1000",
    "frame24",
    "_2034",
    "header",
    "frame25",
    "dataSource",
    "frame26",
    "dataCompleteness",
    "frame27",
    "recordsCleaned",
    "frame28",
    "recordsProcessed",
    "frame29",
    "dataAccuracy",
    "_972",
    "_973",
    "_974",
    "_975"
  ],
  wireframe20: [
    "wireframe20",
    "table3",
    "row",
    "frame",
    "tag",
    "frame2",
    "_98",
    "frame3",
    "frame4",
    "_9800",
    "frame5",
    "_10000",
    "frame6",
    "salesDatabase",
    "row2",
    "frame7",
    "tag2",
    "frame8",
    "_78",
    "frame9",
    "financeSystem",
    "frame10",
    "frame11",
    "_14500",
    "frame12",
    "_7000",
    "row3",
    "frame13",
    "_5000",
    "frame14",
    "_2908",
    "frame15",
    "marketingTool",
    "frame16",
    "frame17",
    "tag3",
    "frame18",
    "_97",
    "row4",
    "frame19",
    "frame20",
    "operationsApp",
    "frame21",
    "tag4",
    "frame22",
    "_26",
    "frame23",
    "_1000",
    "frame24",
    "_2034",
    "header",
    "frame25",
    "dataSource",
    "frame26",
    "dataCompleteness",
    "frame27",
    "recordsCleaned",
    "frame28",
    "recordsProcessed",
    "frame29",
    "dataAccuracy",
    "_972",
    "_973",
    "_974",
    "_975"
  ],
  table3: [
    "table3",
    "row",
    "frame",
    "tag",
    "frame2",
    "_98",
    "frame3",
    "frame4",
    "_9800",
    "frame5",
    "_10000",
    "frame6",
    "salesDatabase",
    "row2",
    "frame7",
    "tag2",
    "frame8",
    "_78",
    "frame9",
    "financeSystem",
    "frame10",
    "frame11",
    "_14500",
    "frame12",
    "_7000",
    "row3",
    "frame13",
    "_5000",
    "frame14",
    "_2908",
    "frame15",
    "marketingTool",
    "frame16",
    "frame17",
    "tag3",
    "frame18",
    "_97",
    "row4",
    "frame19",
    "frame20",
    "operationsApp",
    "frame21",
    "tag4",
    "frame22",
    "_26",
    "frame23",
    "_1000",
    "frame24",
    "_2034",
    "header",
    "frame25",
    "dataSource",
    "frame26",
    "dataCompleteness",
    "frame27",
    "recordsCleaned",
    "frame28",
    "recordsProcessed",
    "frame29",
    "dataAccuracy",
    "_972",
    "_973",
    "_974",
    "_975"
  ],
  row: [
    "row",
    "frame",
    "tag",
    "frame2",
    "_98",
    "frame3",
    "frame4",
    "_9800",
    "frame5",
    "_10000",
    "frame6",
    "salesDatabase"
  ],
  frame: ["frame", "tag", "frame2", "_98"],
  tag: ["tag", "frame2", "_98"],
  frame2: ["frame2", "_98"],
  _98: ["_98"],
  frame3: ["frame3"],
  frame4: ["frame4", "_9800"],
  _9800: ["_9800"],
  frame5: ["frame5", "_10000"],
  _10000: ["_10000"],
  frame6: ["frame6", "salesDatabase"],
  salesDatabase: ["salesDatabase"],
  row2: [
    "row2",
    "frame7",
    "tag2",
    "frame8",
    "_78",
    "frame9",
    "financeSystem",
    "frame10",
    "frame11",
    "_14500",
    "frame12",
    "_7000"
  ],
  frame7: ["frame7", "tag2", "frame8", "_78"],
  tag2: ["tag2", "frame8", "_78"],
  frame8: ["frame8", "_78"],
  _78: ["_78"],
  frame9: ["frame9", "financeSystem"],
  financeSystem: ["financeSystem"],
  frame10: ["frame10"],
  frame11: ["frame11", "_14500"],
  _14500: ["_14500"],
  frame12: ["frame12", "_7000"],
  _7000: ["_7000"],
  row3: [
    "row3",
    "frame13",
    "_5000",
    "frame14",
    "_2908",
    "frame15",
    "marketingTool",
    "frame16",
    "frame17",
    "tag3",
    "frame18",
    "_97"
  ],
  frame13: ["frame13", "_5000"],
  _5000: ["_5000"],
  frame14: ["frame14", "_2908"],
  _2908: ["_2908"],
  frame15: ["frame15", "marketingTool"],
  marketingTool: ["marketingTool"],
  frame16: ["frame16"],
  frame17: ["frame17", "tag3", "frame18", "_97"],
  tag3: ["tag3", "frame18", "_97"],
  frame18: ["frame18", "_97"],
  _97: ["_97"],
  row4: [
    "row4",
    "frame19",
    "frame20",
    "operationsApp",
    "frame21",
    "tag4",
    "frame22",
    "_26",
    "frame23",
    "_1000",
    "frame24",
    "_2034"
  ],
  frame19: ["frame19"],
  frame20: ["frame20", "operationsApp"],
  operationsApp: ["operationsApp"],
  frame21: ["frame21", "tag4", "frame22", "_26"],
  tag4: ["tag4", "frame22", "_26"],
  frame22: ["frame22", "_26"],
  _26: ["_26"],
  frame23: ["frame23", "_1000"],
  _1000: ["_1000"],
  frame24: ["frame24", "_2034"],
  _2034: ["_2034"],
  header: [
    "header",
    "frame25",
    "dataSource",
    "frame26",
    "dataCompleteness",
    "frame27",
    "recordsCleaned",
    "frame28",
    "recordsProcessed",
    "frame29",
    "dataAccuracy"
  ],
  frame25: ["frame25", "dataSource"],
  dataSource: ["dataSource"],
  frame26: ["frame26", "dataCompleteness"],
  dataCompleteness: ["dataCompleteness"],
  frame27: ["frame27", "recordsCleaned"],
  recordsCleaned: ["recordsCleaned"],
  frame28: ["frame28", "recordsProcessed"],
  recordsProcessed: ["recordsProcessed"],
  frame29: ["frame29", "dataAccuracy"],
  dataAccuracy: ["dataAccuracy"],
  _972: ["_972"],
  _973: ["_973"],
  _974: ["_974"],
  _975: ["_975"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  wireframe20: "div";
  table3: "div";
  row: "div";
  frame: "div";
  tag: "div";
  frame2: "div";
  _98: "div";
  frame3: "div";
  frame4: "div";
  _9800: "div";
  frame5: "div";
  _10000: "div";
  frame6: "div";
  salesDatabase: "div";
  row2: "div";
  frame7: "div";
  tag2: "div";
  frame8: "div";
  _78: "div";
  frame9: "div";
  financeSystem: "div";
  frame10: "div";
  frame11: "div";
  _14500: "div";
  frame12: "div";
  _7000: "div";
  row3: "div";
  frame13: "div";
  _5000: "div";
  frame14: "div";
  _2908: "div";
  frame15: "div";
  marketingTool: "div";
  frame16: "div";
  frame17: "div";
  tag3: "div";
  frame18: "div";
  _97: "div";
  row4: "div";
  frame19: "div";
  frame20: "div";
  operationsApp: "div";
  frame21: "div";
  tag4: "div";
  frame22: "div";
  _26: "div";
  frame23: "div";
  _1000: "div";
  frame24: "div";
  _2034: "div";
  header: "div";
  frame25: "div";
  dataSource: "div";
  frame26: "div";
  dataCompleteness: "div";
  frame27: "div";
  recordsCleaned: "div";
  frame28: "div";
  recordsProcessed: "div";
  frame29: "div";
  dataAccuracy: "div";
  _972: "div";
  _973: "div";
  _974: "div";
  _975: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSecondworkflow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSecondworkflow__VariantsArgs;
    args?: PlasmicSecondworkflow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSecondworkflow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSecondworkflow__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSecondworkflow__ArgProps,
          internalVariantPropNames: PlasmicSecondworkflow__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSecondworkflow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSecondworkflow";
  } else {
    func.displayName = `PlasmicSecondworkflow.${nodeName}`;
  }
  return func;
}

export const PlasmicSecondworkflow = Object.assign(
  // Top-level PlasmicSecondworkflow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    wireframe20: makeNodeComponent("wireframe20"),
    table3: makeNodeComponent("table3"),
    row: makeNodeComponent("row"),
    frame: makeNodeComponent("frame"),
    tag: makeNodeComponent("tag"),
    frame2: makeNodeComponent("frame2"),
    _98: makeNodeComponent("_98"),
    frame3: makeNodeComponent("frame3"),
    frame4: makeNodeComponent("frame4"),
    _9800: makeNodeComponent("_9800"),
    frame5: makeNodeComponent("frame5"),
    _10000: makeNodeComponent("_10000"),
    frame6: makeNodeComponent("frame6"),
    salesDatabase: makeNodeComponent("salesDatabase"),
    row2: makeNodeComponent("row2"),
    frame7: makeNodeComponent("frame7"),
    tag2: makeNodeComponent("tag2"),
    frame8: makeNodeComponent("frame8"),
    _78: makeNodeComponent("_78"),
    frame9: makeNodeComponent("frame9"),
    financeSystem: makeNodeComponent("financeSystem"),
    frame10: makeNodeComponent("frame10"),
    frame11: makeNodeComponent("frame11"),
    _14500: makeNodeComponent("_14500"),
    frame12: makeNodeComponent("frame12"),
    _7000: makeNodeComponent("_7000"),
    row3: makeNodeComponent("row3"),
    frame13: makeNodeComponent("frame13"),
    _5000: makeNodeComponent("_5000"),
    frame14: makeNodeComponent("frame14"),
    _2908: makeNodeComponent("_2908"),
    frame15: makeNodeComponent("frame15"),
    marketingTool: makeNodeComponent("marketingTool"),
    frame16: makeNodeComponent("frame16"),
    frame17: makeNodeComponent("frame17"),
    tag3: makeNodeComponent("tag3"),
    frame18: makeNodeComponent("frame18"),
    _97: makeNodeComponent("_97"),
    row4: makeNodeComponent("row4"),
    frame19: makeNodeComponent("frame19"),
    frame20: makeNodeComponent("frame20"),
    operationsApp: makeNodeComponent("operationsApp"),
    frame21: makeNodeComponent("frame21"),
    tag4: makeNodeComponent("tag4"),
    frame22: makeNodeComponent("frame22"),
    _26: makeNodeComponent("_26"),
    frame23: makeNodeComponent("frame23"),
    _1000: makeNodeComponent("_1000"),
    frame24: makeNodeComponent("frame24"),
    _2034: makeNodeComponent("_2034"),
    header: makeNodeComponent("header"),
    frame25: makeNodeComponent("frame25"),
    dataSource: makeNodeComponent("dataSource"),
    frame26: makeNodeComponent("frame26"),
    dataCompleteness: makeNodeComponent("dataCompleteness"),
    frame27: makeNodeComponent("frame27"),
    recordsCleaned: makeNodeComponent("recordsCleaned"),
    frame28: makeNodeComponent("frame28"),
    recordsProcessed: makeNodeComponent("recordsProcessed"),
    frame29: makeNodeComponent("frame29"),
    dataAccuracy: makeNodeComponent("dataAccuracy"),
    _972: makeNodeComponent("_972"),
    _973: makeNodeComponent("_973"),
    _974: makeNodeComponent("_974"),
    _975: makeNodeComponent("_975"),

    // Metadata about props expected for PlasmicSecondworkflow
    internalVariantProps: PlasmicSecondworkflow__VariantProps,
    internalArgProps: PlasmicSecondworkflow__ArgProps
  }
);

export default PlasmicSecondworkflow;
/* prettier-ignore-end */
