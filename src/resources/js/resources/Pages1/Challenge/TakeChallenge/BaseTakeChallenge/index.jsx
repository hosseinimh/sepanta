import React from "react";
import { useSelector } from "react-redux";

import {
  BlankPage,
  InputButtonRadiosColumn,
  InputRow,
  InputTextAreaColumn,
  TableCard,
  TableItems,
} from "../../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../../hooks";
import { CHALLENGE_LEVELS } from "../../../../../constants";
import utils from "../../../../../utils/Utils";

const BaseTakeChallenge = ({ level }) => {
  const pageState = useSelector((state) => state.pageReducer);
  const { takeChallenge: strings } = useLocale();
  const columnsCount = level === CHALLENGE_LEVELS.FREE ? 2 : 4;
  const pageUtils = new PageUtils(level);

  const renderHeader = () => (
    <tr>
      <th
        style={{ width: level === CHALLENGE_LEVELS.FREE ? "50%" : "25%" }}
      ></th>
      {level === CHALLENGE_LEVELS.FREE && (
        <th style={{ textAlign: "center" }}>{strings.freeAccount}</th>
      )}
      {level !== CHALLENGE_LEVELS.FREE && (
        <>
          <th style={{ textAlign: "center" }}>{strings.level1}</th>
          <th style={{ textAlign: "center" }}>{strings.level2}</th>
          <th style={{ textAlign: "center" }}>{strings.realAccount}</th>
        </>
      )}
    </tr>
  );

  const renderItems = () => {
    let children;
    if (!pageState?.props?.rules) {
      children = <></>;
    } else {
      children = [
        <React.Fragment key={1}>
          <tr style={{ textAlign: "center" }}>
            <td>{strings.duration}</td>
            {level !== CHALLENGE_LEVELS.FREE && (
              <>
                <td>
                  {pageState.props.rules.duration1 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.duration1)}
                </td>
                <td>
                  {pageState.props.rules.duration2 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.duration2)}
                </td>
                <td>
                  {pageState.props.rules.durationReal === 0
                    ? "-"
                    : pageState.props.rules.durationReal === 0
                    ? strings.noLimit
                    : utils.addCommas(pageState.props.rules.durationReal)}
                </td>
              </>
            )}
            {level === CHALLENGE_LEVELS.FREE && (
              <td>
                {pageState.props.rules.durationFree === 0
                  ? "-"
                  : utils.addCommas(pageState.props.rules.durationFree)}
              </td>
            )}
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>{strings.dailySl}</td>
            {level !== CHALLENGE_LEVELS.FREE && (
              <>
                <td>
                  {pageState.props.rules.dailySl1 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.dailySl1)}
                  {pageState.props.rules.dailySl1 !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
                <td>
                  {pageState.props.rules.dailySl2 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.dailySl2)}
                  {pageState.props.rules.dailySl2 !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
                <td>
                  {pageState.props.rules.dailySlReal === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.dailySlReal)}
                  {pageState.props.rules.dailySlReal !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
              </>
            )}
            {level === CHALLENGE_LEVELS.FREE && (
              <td>
                {pageState.props.rules.dailySlFree === 0
                  ? "-"
                  : utils.addCommas(pageState.props.rules.dailySlFree)}
                {pageState.props.rules.dailySlFree !== 0 && (
                  <span className="mx-rdir-10">%</span>
                )}
              </td>
            )}
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>{strings.totalSl}</td>
            {level !== CHALLENGE_LEVELS.FREE && (
              <>
                <td>
                  {pageState.props.rules.totalSl1 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.totalSl1)}
                  {pageState.props.rules.totalSl1 !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
                <td>
                  {pageState.props.rules.totalSl2 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.totalSl2)}
                  {pageState.props.rules.totalSl2 !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
                <td>
                  {pageState.props.rules.totalSlReal === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.totalSlReal)}
                  {pageState.props.rules.totalSlReal !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
              </>
            )}
            {level === CHALLENGE_LEVELS.FREE && (
              <td>
                {pageState.props.rules.totalSlFree === 0
                  ? "-"
                  : utils.addCommas(pageState.props.rules.totalSlFree)}
                {pageState.props.rules.totalSlFree !== 0 && (
                  <span className="mx-rdir-10">%</span>
                )}
              </td>
            )}
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>{strings.target}</td>
            {level !== CHALLENGE_LEVELS.FREE && (
              <>
                <td>
                  {pageState.props.rules.target1 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.target1)}
                  {pageState.props.rules.target1 !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
                <td>
                  {pageState.props.rules.target2 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.target2)}
                  {pageState.props.rules.target2 !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
                <td>
                  {pageState.props.rules.targetReal === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.targetReal)}
                  {pageState.props.rules.targetReal !== 0 && (
                    <span className="mx-rdir-10">%</span>
                  )}
                </td>
              </>
            )}
            {level === CHALLENGE_LEVELS.FREE && (
              <td>
                {pageState.props.rules.targetFree === 0
                  ? "-"
                  : utils.addCommas(pageState.props.rules.targetFree)}
                {pageState.props.rules.targetFree !== 0 && (
                  <span className="mx-rdir-10">%</span>
                )}
              </td>
            )}
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>{strings.tradeDays}</td>
            {level !== CHALLENGE_LEVELS.FREE && (
              <>
                <td>
                  {pageState.props.rules.tradeDays1 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.tradeDays1)}
                </td>
                <td>
                  {pageState.props.rules.tradeDays2 === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.tradeDays2)}
                </td>
                <td>
                  {pageState.props.rules.tradeDaysReal === 0
                    ? "-"
                    : utils.addCommas(pageState.props.rules.tradeDaysReal)}
                </td>
              </>
            )}
            {level === CHALLENGE_LEVELS.FREE && (
              <td>
                {pageState.props.rules.tradeDaysFree === 0
                  ? "-"
                  : utils.addCommas(pageState.props.rules.tradeDaysFree)}
              </td>
            )}
          </tr>
        </React.Fragment>,
      ];
    }
    return <TableItems columnsCount={columnsCount}>{children}</TableItems>;
  };

  return (
    <BlankPage pageUtils={pageUtils}>
      <div className="section fix-mr15">
        <div className="block pd-20">
          <InputButtonRadiosColumn
            name={"balance"}
            strings={strings}
            items={pageState?.props?.balances}
          />
          <div className="pd-t-10 border-top"></div>
          <InputButtonRadiosColumn
            name={"server"}
            strings={strings}
            separate={true}
            items={pageState?.props?.servers}
          />
          <div className="pd-t-10 border-top"></div>
          <InputButtonRadiosColumn
            name={"platform"}
            strings={strings}
            separate={true}
            items={pageState?.props?.platforms}
          />
          <div className="pd-t-10 border-top"></div>
          <InputButtonRadiosColumn
            name={"leverage"}
            strings={strings}
            items={pageState?.props?.leverages}
          />
          <TableCard table={{ renderHeader, renderItems }} />
          <h3 className="mt-20 mb-10">{strings.rulesTitle}</h3>
          <InputTextAreaColumn
            field="rules"
            value={strings.rulesContent}
            readonly={true}
            inputStyle={{ textAlign: "justify" }}
          />
          <InputRow containerStyle={{ justifyContent: "center" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={pageUtils?.useForm?.handleSubmit(pageUtils.onSubmit)}
            >
              {strings.register}
            </button>
          </InputRow>
        </div>
      </div>
    </BlankPage>
  );
};

export default BaseTakeChallenge;
