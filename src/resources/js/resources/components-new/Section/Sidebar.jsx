import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slideUp, slideDown } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import { BASE_PATH, IMAGES_PATH, THEMES, USER_ROLES } from "../../../constants";
import { fetchLogoutAction } from "../../../state/user/userActions";
import { CustomLink } from "../";
import { useLocale } from "../../../hooks";
import {
  setSidebarPropsAction,
  toggleSidebarAction,
} from "../../../state/layout/layoutActions";

function Sidebar() {
  const dispatch = useDispatch();
  const { sidebar: strings } = useLocale();
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const userState = useSelector((state) => state.userReducer);
  const [toggledChallenges, setToggledChallenges] = useState(true);

  const toggleSidebar = () => {
    dispatch(toggleSidebarAction());
  };

  useEffect(() => {
    if (
      !layoutState?.sidebarProps?.link ||
      userState?.user?.role === USER_ROLES.USER
    ) {
      dispatch(setSidebarPropsAction({ link: pageState?.page }));
      return;
    }
    if (
      ![
        "ChallengeBalances",
        "ChallengeLeverages",
        "ChallengeServers",
        "ChallengeRules",
        "ChallengePlatforms",
      ].includes(layoutState?.sidebarProps?.link) &&
      toggledChallenges
    ) {
      const element = document.querySelector(
        "#challenges-management"
      ).lastChild;
      document
        .querySelector(".icon-arrow-down-14")
        .classList.remove("arrow-up");
      slideUp(element);
      setToggledChallenges(false);
    }
  }, [layoutState?.sidebarProps?.link]);

  const toggleChallenges = () => {
    const element = document.querySelector("#challenges-management").lastChild;
    if (toggledChallenges) {
      document
        .querySelector(".icon-arrow-down-14")
        .classList.remove("arrow-up");
      slideUp(element);
    } else {
      document.querySelector(".icon-arrow-down-14").classList.add("arrow-up");
      slideDown(element, {
        duration: 1000,
        easing: easeOutQuint,
      });
    }
    setToggledChallenges((prev) => !prev);
  };

  const onLogout = () => {
    dispatch(fetchLogoutAction());
  };

  const renderMenuItem = (url, string, icon, pages, page, badge = 0) => {
    const active = Array.isArray(pages)
      ? pages.filter((p) => p === pageState?.page)?.length > 0
      : pageState?.page === pages;
    return (
      <li className={`${active ? "active" : ""}`}>
        <Link
          to={url}
          onClick={() => {
            if (userState?.user?.role === USER_ROLES.ADMINISTRATOR) {
              const element = document.querySelector(
                "#challenges-management"
              ).lastChild;
              if (
                [
                  "ChallengeBalances",
                  "ChallengeLeverages",
                  "ChallengeServers",
                  "ChallengeRules",
                  "ChallengePlatforms",
                ].includes(layoutState?.sidebarProps?.link)
              ) {
                slideUp(element);
              }
            }
            dispatch(setSidebarPropsAction({ link: page }));
          }}
        >
          <i className={icon}></i>
          <span>{string}</span>
          {badge > 0 && (
            <div
              className="dot"
              style={{
                display: "inline",
                position: "relative",
                right: "-40px",
                top: "2px",
              }}
            >
              <span className="bg-success"></span>
            </div>
          )}
        </Link>
      </li>
    );
  };

  return (
    <div className={`sidebar ${layoutState?.sidebarCollapsed ? "active" : ""}`}>
      <div className="sidebar-hd d-flex align-start just-between">
        <div className="logo">
          <img
            className="logo-large dark-logo"
            src={`${
              layoutState?.theme?.name === THEMES.DARK
                ? `${IMAGES_PATH}/logo-large.svg`
                : `${IMAGES_PATH}/logo-large-light.svg`
            }`}
            alt=""
          />
          <img
            className="logo-large light-logo"
            src={`${IMAGES_PATH}/logo-large-light.sv`}
            alt=""
          />
          <img className="logo-sm" src={`${IMAGES_PATH}/logo-sm.svg`} alt="" />
        </div>
        <div className="closemenu" onClick={toggleSidebar}>
          <i className="icon-arrow-right"></i>
        </div>
      </div>
      <div className="menu scrollhide">
        <div className="menu-title">{strings.mainMenu}</div>
        <ul>
          {renderMenuItem(
            `${BASE_PATH}`,
            strings.dashboard,
            "icon-category4",
            "Dashboard",
            "Dashboard"
          )}
          {userState?.user?.role === USER_ROLES.USER &&
            !userState?.user?.freeChallengeRegistered &&
            renderMenuItem(
              `${BASE_PATH}/challenges/take/free`,
              strings.takeFreeChallenge,
              "icon-money-recive4",
              "TakeFreeChallenge",
              "TakeFreeChallenge"
            )}
          {userState?.user?.role === USER_ROLES.USER &&
            renderMenuItem(
              `${BASE_PATH}/challenges`,
              strings.challenges,
              "icon-medal4",
              ["Challenges", "AnalyzeChallenge"],
              "Challenges"
            )}
          {userState?.user?.role === USER_ROLES.ADMINISTRATOR &&
            renderMenuItem(
              `${BASE_PATH}/challenges`,
              strings.challengesAdmin,
              "icon-medal-star4",
              ["Challenges", "EditChallenge", "AnalyzeChallenge"],
              "Challenges",
              layoutState?.notifications?.waitingChallengesCount
            )}
          {userState?.user?.role === USER_ROLES.ADMINISTRATOR &&
            renderMenuItem(
              `${BASE_PATH}/users/verify_requests`,
              strings.verifyRequests,
              "icon-medal-star4",
              "VerifyUserRequests",
              "VerifyUserRequests",
              layoutState?.notifications?.verifyUserRequestsCount
            )}
          <div className="menu-title">{strings.quickAccess}</div>
          {userState?.user?.role === USER_ROLES.USER &&
            renderMenuItem(
              `${BASE_PATH}/tickets`,
              strings.tickets,
              "icon-support",
              "Tickets",
              "Tickets"
            )}
          {renderMenuItem(
            userState?.user?.role === USER_ROLES.ADMINISTRATOR
              ? `${BASE_PATH}/app_rules/admin`
              : `${BASE_PATH}/app_rules`,
            strings.appRules,
            "icon-courthouse4",
            "AppRules",
            "AppRules"
          )}
          {userState?.user?.role === USER_ROLES.ADMINISTRATOR && (
            <>
              {renderMenuItem(
                `${BASE_PATH}/campaigns`,
                strings.campaigns,
                "icon-chart-14",
                "Campaigns",
                "Campaigns"
              )}
              <li className="sub" id="challenges-management">
                <CustomLink onClick={toggleChallenges}>
                  <i className="icon-medal-star4"></i>
                  <span>
                    {strings.challengesManagement}{" "}
                    <i
                      className={`icon-arrow-down-14 ${
                        [
                          "ChallengeBalances",
                          "ChallengeLeverages",
                          "ChallengeServers",
                          "ChallengeRules",
                          "ChallengePlatforms",
                        ].includes(layoutState?.sidebarProps?.link)
                          ? "arrow-up"
                          : ""
                      }`}
                    ></i>
                  </span>
                </CustomLink>
                <div
                  style={{
                    display: [
                      "ChallengeBalances",
                      "ChallengeLeverages",
                      "ChallengeServers",
                      "ChallengeRules",
                      "ChallengePlatforms",
                    ].includes(layoutState?.sidebarProps?.link)
                      ? "block"
                      : "none",
                  }}
                >
                  <ul
                    className="submenu"
                    style={{
                      border: "none",
                    }}
                  >
                    {renderMenuItem(
                      `${BASE_PATH}/challenge_balances`,
                      strings.challengeBalances,
                      "icon-dollar-square4",
                      "ChallengeBalances",
                      "ChallengeBalances"
                    )}
                    {renderMenuItem(
                      `${BASE_PATH}/challenge_leverages`,
                      strings.challengeLeverages,
                      "icon-data4",
                      "ChallengeLeverages",
                      "ChallengeLeverages"
                    )}
                    {renderMenuItem(
                      `${BASE_PATH}/challenge_servers`,
                      strings.challengeServers,
                      "icon-monitor4",
                      "ChallengeServers",
                      "ChallengeServers"
                    )}
                    {renderMenuItem(
                      `${BASE_PATH}/challenge_rules`,
                      strings.challengeRules,
                      "icon-courthouse4",
                      "ChallengeRules",
                      "ChallengeRules"
                    )}
                    {renderMenuItem(
                      `${BASE_PATH}/challenge_platforms`,
                      strings.challengePlatforms,
                      "icon-monitor-mobbile4",
                      "ChallengePlatforms",
                      "ChallengePlatforms"
                    )}
                  </ul>
                </div>
              </li>
              {renderMenuItem(
                `${BASE_PATH}/users`,
                strings.users,
                "icon-personalcard",
                "Users",
                "Users"
              )}
            </>
          )}
          {userState?.user?.role === USER_ROLES.USER &&
            renderMenuItem(
              `${BASE_PATH}/users/verify_request1`,
              strings.verifyUserRequest,
              "icon-profile-tick4",
              [
                "VerifyUserRequest1",
                "VerifyUserRequest2",
                "VerifyUserRequest3",
              ],
              "VerifyUserRequest1"
            )}
          <ul></ul>
          {renderMenuItem(
            `${BASE_PATH}/users/edit`,
            strings.editProfile,
            "icon-user-edit4",
            "EditProfile",
            "EditProfile"
          )}
          {renderMenuItem(
            `${BASE_PATH}/users/change_password`,
            strings.changePassword,
            "icon-key4",
            "ChangePasswordProfile",
            "ChangePasswordProfile"
          )}
          <li>
            <CustomLink onClick={onLogout} className="danger">
              <i className="icon-logout"></i>
              <span>{strings.logout}</span>
            </CustomLink>
          </li>
        </ul>
        <div className="menu-title">{strings.telSupport}</div>
        <ul>
          <li>
            <a href="tel:02191306781">
              <i className="icon-call"></i>
              <span className="tel">{strings.tel}</span>
            </a>
          </li>
          <li>
            <a>
              <span>{strings.supportHours}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
