import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

import { BlankPage } from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";
import { CHALLENGE_LEVELS } from "../../../../constants";

const AnalyzeChallenge = () => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const [item, setItem] = useState(null);
  const [accountData, setAccountData] = useState(null);
  const [profits, setProfits] = useState(null);
  const [totalProfit, setTotalProfit] = useState(0);
  const [dailyLoss, setDailyLoss] = useState(0);
  const [totalLoss, setTotalLoss] = useState(0);
  const [mainChartOptions, setMainChartOptions] = useState(null);
  const [mainSeries, setMainSeries] = useState(null);
  const [dailyLossChartOptions, setDailyLossChartOptions] = useState(null);
  const [dailyLossSeries, setDailyLossSeries] = useState(null);
  const [totalLossChartOptions, setTotalLossChartOptions] = useState(null);
  const [totalLossSeries, setTotalLossSeries] = useState(null);
  const { analyzeChallengePage: strings } = useLocale();
  const pageUtils = new PageUtils();

  useEffect(() => {
    if (pageState?.props?.item) {
      setItem(pageState?.props?.item);
    }
  }, [pageState?.props?.item]);

  useEffect(() => {
    if (pageState?.props?.accountData) {
      setAccountData(pageState?.props?.accountData);
    }
  }, [pageState?.props?.accountData]);

  useEffect(() => {
    if (accountData) {
      getProfits();
      setTimeout(async () => {
        await pageUtils?.fetchData();
      }, 10000);
    }
  }, [accountData]);

  useEffect(() => {
    if (profits) {
      setMainChart();
      setDailyLossChart();
      setTotalLossChart();
    }
  }, [profits]);

  const getProfits = () => {
    const deals = accountData?.deals;
    const dealItems = deals.filter(
      (deal) =>
        deal.type === "DEAL_TYPE_BALANCE" ||
        deal?.entryType === "DEAL_ENTRY_OUT"
    );
    const today = new Date();
    let balance = 0;
    let totalProfitSum = 0;
    let dailyLossSum = 0;
    let totalLossSum = 0;
    let profitItems = [];
    dealItems?.forEach((dealItem) => {
      balance += dealItem.profit;
      profitItems.push(balance);
      if (dealItem.type !== "DEAL_TYPE_BALANCE") {
        totalProfitSum += dealItem.profit > 0 ? dealItem.profit : 0;
        totalLossSum += dealItem.profit < 0 ? dealItem.profit : 0;
        const date = new Date(dealItem.brokerTime);
        if (
          dealItem?.entryType === "DEAL_ENTRY_OUT" &&
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate()
        ) {
          dailyLossSum += dealItem.profit < 0 ? dealItem.profit : 0;
        }
      }
    });
    setProfits(profitItems);
    setTotalProfit(totalProfitSum);
    setDailyLoss(dailyLossSum);
    setTotalLoss(totalLossSum);
  };

  const setMainChart = () => {
    setMainChartOptions({
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ["#298957"],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "numeric",
        labels: {
          formatter: function (value) {
            return value.toFixed(0);
          },
          style: {
            colors: getComputedStyle(document.documentElement).getPropertyValue(
              "--placeholder"
            ),
          },
        },
        axisBorder: {
          show: true,
          color: getComputedStyle(document.documentElement).getPropertyValue(
            "--placeholder"
          ),
          height: 1,
          width: "100%",
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        min: 0,
        max: Math.max(item.balance * 1.2, item.equity * 1.2),
        labels: {
          formatter: (value) => value.toFixed(0),
          style: {
            colors: [
              getComputedStyle(document.documentElement).getPropertyValue(
                "--placeholder"
              ),
            ],
          },
        },
        tickAmount: 4,
      },
      tooltip: {
        x: {
          formatter: (value) => value.toFixed(0),
        },
        y: {
          formatter: (value) => value.toFixed(2),
        },
      },
      grid: {
        show: true,
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue("--border"),
        padding: {
          top: 0,
          right: 50,
          bottom: 0,
          left: 50,
        },
      },
    });
    let data = [];
    let index = 1;
    profits.forEach((profit) => {
      data.push([index++, profit]);
    });
    setMainSeries([
      {
        name: "P&L",
        data: data,
      },
    ]);
  };

  const setDailyLossChart = () => {
    setDailyLossChartOptions({
      colors: [
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-warning"
        ),
      ],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
          },
          track: {
            background: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--placeholder"),
            startAngle: 0,
            endAngle: 360,
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: 0,
              show: true,
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue("--success"),
              fontSize: "0.9rem",
              fontFamily: getComputedStyle(
                document.documentElement
              ).getPropertyValue("--font"),
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: [strings.stable],
    });
    setDailyLossSeries([dailyLoss]);
  };

  const setTotalLossChart = () => {
    setTotalLossChartOptions({
      colors: [
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-warning"
        ),
      ],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
          },
          track: {
            background: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--placeholder"),
            startAngle: 0,
            endAngle: 360,
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: 0,
              show: true,
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue("--success"),
              fontSize: "0.9rem",
              fontFamily: getComputedStyle(
                document.documentElement
              ).getPropertyValue("--font"),
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: [strings.stable],
    });
    setTotalLossSeries([totalLoss]);
  };

  const renderAccountInfo = () => (
    <div className="section-hd d-flex-wrap">
      <div className="section-items d-flex scrollhide align-center just-between grow-1">
        <div className="item pd-10">
          <span>{item?.accountNo}</span>
          <div className="title">{strings.accountNo}</div>
        </div>
        <div className="item pd-10">
          <span>{item?.platform}</span>
          <div className="title">{strings.platform}</div>
        </div>
        <div className="item pd-10">
          <span>{item?.statusText}</span>
          <div className="title">{strings.status}</div>
        </div>
        <div className="item pd-10">
          <span>{item?.balance}</span>
          <div className="title">{strings.accountType}</div>
        </div>
      </div>
    </div>
  );

  const renderMainChart = () => {
    if (mainChartOptions && mainSeries) {
      return (
        <Chart
          options={mainChartOptions}
          series={mainSeries}
          width="100%"
          height={450}
        />
      );
    }
    return <></>;
  };

  const renderProfit = () => (
    <div className="d-flex align-center">
      <div className="pd-rdir-10">
        <h4 className="text">{strings.totalProfit}</h4>
        <div className="text-center text" style={{ direction: "ltr" }}>
          <span
            className={`${
              totalProfit < 0
                ? "danger"
                : totalProfit === 0
                ? "text"
                : "success"
            }`}
          >
            {totalProfit.toFixed(2)}
          </span>
          <span> / </span>
          <span>{800} </span>
        </div>
      </div>
      <div className="progress grow-1" style={{ direction: "ltr" }}>
        <div
          className="progress-bar bg-success"
          style={{
            width: `${
              totalProfit < 0 ? "0px" : `${(totalProfit / 800).toFixed(0)}px`
            }`,
          }}
        ></div>
      </div>
    </div>
  );

  const renderRules = () => (
    <div className="bg-dark pd-10 mt-20" style={{ borderRadius: "0.625rem" }}>
      <div className="d-flex just-between align-center pxdir-10">
        {(() => {
          const challengeRule = pageUtils?.pageState?.props?.challengeRule;
          if (item && challengeRule) {
            let title = "";
            let body = "";
            switch (item.level) {
              case CHALLENGE_LEVELS.LEVEL1:
                title = strings.tradeDaysTitle.replace(
                  ":field",
                  challengeRule.tradeDays1
                );
                body = strings.tradeDaysBody.replace(
                  ":field",
                  challengeRule.tradeDays1
                );
                break;
              case CHALLENGE_LEVELS.LEVEL2:
                title = strings.tradeDaysTitle.replace(
                  ":field",
                  challengeRule.tradeDays2
                );
                body = strings.tradeDaysBody.replace(
                  ":field",
                  challengeRule.tradeDays2
                );
                break;
              case CHALLENGE_LEVELS.REAL:
                title = strings.tradeDaysTitle.replace(
                  ":field",
                  challengeRule.tradeDaysReal
                );
                body = strings.tradeDaysBody.replace(
                  ":field",
                  challengeRule.tradeDaysReal
                );
                break;
              case CHALLENGE_LEVELS.FREE:
                title = strings.tradeDaysTitle.replace(
                  ":field",
                  challengeRule.tradeDaysFree
                );
                body = strings.tradeDaysBody.replace(
                  ":field",
                  challengeRule.tradeDaysFree
                );
                break;
              default:
                return <></>;
            }
            return (
              <div className="pd-td-10">
                <h4 className="pd-d-10 text">{title}</h4>
                <span style={{ fontSize: "0.75rem" }}>{body}</span>
              </div>
            );
          }
          return <></>;
        })()}
        <i className="icon-calendar-1" style={{ fontSize: "3rem" }}></i>
      </div>
    </div>
  );

  const renderDailyLossChart = () => {
    if (dailyLossChartOptions && dailyLossSeries) {
      return (
        <div
          className="bg-dark grow-1 pd-10 d-flex-column align-center"
          style={{ borderRadius: "0.625rem" }}
        >
          <h4 className="text pd-d-10">{strings.maxDailyLoss}</h4>
          <Chart
            type="radialBar"
            options={dailyLossChartOptions}
            series={dailyLossSeries}
            width={100}
            height={155}
          />
          <div className="text-center" style={{ direction: "ltr" }}>
            <span className={`${dailyLoss < 0 ? "danger" : "text"}`}>
              {dailyLoss.toFixed(2)}
            </span>
            <span className="text"> / </span>
            <span className="text">{800}</span>
          </div>
        </div>
      );
    }
    return <></>;
  };

  const renderTotalLossChart = () => {
    if (totalLossChartOptions && totalLossSeries) {
      return (
        <div
          className="bg-dark grow-1 pd-10 d-flex-column align-center"
          style={{ borderRadius: "0.625rem" }}
        >
          <h4 className="text pd-d-10">{strings.maxTotalLoss}</h4>
          <Chart
            type="radialBar"
            options={totalLossChartOptions}
            series={totalLossSeries}
            width={100}
            height={155}
          />
          <div className="text-center" style={{ direction: "ltr" }}>
            <span className={`${totalLoss < 0 ? "danger" : "text"}`}>
              {totalLoss.toFixed(2)}
            </span>
            <span className="text"> / </span>
            <span className="text">{800}</span>
          </div>
        </div>
      );
    }
    return <></>;
  };

  const renderAccountDetails = () => (
    <div className="section-main" style={{ padding: "0" }}>
      <div className="block pd-20">
        <h3 className="field-title pd-d-20">{strings.accountDetails}</h3>
        <div className="d-flex-wrap align-top just-around">
          <div className="grow-1 pd-lr-10">
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem1}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem3}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem5}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem7}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem9}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem11}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem13}</div>
              <span>-</span>
            </div>
          </div>
          <div className="grow-1 side pd-lr-10">
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem2}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem4}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem6}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem8}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem10}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem12}</div>
              <span>-</span>
            </div>
            <div className="item-horizontal">
              <div>{strings.accountDetailsItem14}</div>
              <span>-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderParameters = () => {
    const style =
      layoutState?.direction === "rtl"
        ? { marginRight: "0.4rem" }
        : { marginLeft: "0.4rem" };
    return (
      <div className="section-side grow-1 d-flex" style={{ border: "none" }}>
        <div className="block pd-20" style={style}>
          <h3 className="field-title pd-d-20">{strings.parameteresTitle}</h3>
          <div className="d-flex-wrap align-top just-around">
            <div className="grow-1 pd-lr-10">
              <div className="item-horizontal">
                <div>{strings.profitFactor}</div>
                <span>-</span>
              </div>
              <div className="item-horizontal">
                <div>{strings.sharpeRatio}</div>
                <span>-</span>
              </div>
              <div className="item-horizontal">
                <div>{strings.sortinoRatio}</div>
                <span>-</span>
              </div>
              <div className="item-horizontal">
                <div>{strings.zScore}</div>
                <span>-</span>
              </div>
              <div className="item-horizontal">
                <div>{strings.expectedProfit}</div>
                <span>-</span>
              </div>
              <div className="item-horizontal">
                <div>{strings.expectedPipProfit}</div>
                <span>-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <BlankPage pageUtils={pageUtils}>
      <div className="section fix-mr15">
        <div className="block">
          <div>
            {renderAccountInfo()}
            <div className="d-flex-wrap align-top">
              <div className="section-main">{renderMainChart()}</div>
              <div className="section-side grow-1 pd-20">
                <h3 className="text pd-d-20">{item?.levelText}</h3>
                {renderProfit()}
                {renderRules()}
                <div
                  className="d-flex just-between align-top mt-20"
                  style={{ gap: "1rem" }}
                >
                  {renderDailyLossChart()}
                  {renderTotalLossChart()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section fix-mr15">
        <div>
          <div className="d-flex-wrap align-top">
            {item && renderAccountDetails()}
            {item && renderParameters()}
          </div>
        </div>
      </div>
    </BlankPage>
  );
};

export default AnalyzeChallenge;
