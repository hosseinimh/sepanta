import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slideUp, slideDown } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import { BASE_PATH, IMAGES_PATH, THEMES, USER_ROLES } from "../../../constants";
import { fetchLogoutAction } from "../../../state/user/userActions";
import { CustomLink } from "../";
import { useLocale } from "../../../hooks";
import { toggleSidebarAction } from "../../../state/layout/layoutActions";

function Sidebar() {
    const dispatch = useDispatch();
    const { sidebar: strings } = useLocale();
    const layoutState = useSelector((state) => state.layoutReducer);
    const pageState = useSelector((state) => state.pageReducer);
    const userState = useSelector((state) => state.userReducer);
    const [challengesCollapsed, setChallengesCollapsed] = useState(false);

    const toggleSidebar = () => {
        dispatch(toggleSidebarAction());
    };
    useEffect(() => {
        if (userState?.user?.role === USER_ROLES.USER) {
            return;
        }
        const element = document.querySelector(
            "#challenges-management"
        ).lastChild;
        if (challengesCollapsed) {
            slideDown(element, {
                duration: 1000,
                easing: easeOutQuint,
            });
        } else {
            slideUp(element);
        }
    }, [challengesCollapsed]);

    useEffect(() => {
        if (
            [
                "ChallengeBalances",
                "ChallengeLeverages",
                "ChallengeServers",
                "ChallengeRuls",
                "ChallengePlatforms",
            ].includes(pageState?.page)
        ) {
            setChallengesCollapsed(true);
        }
    }, [pageState]);

    useEffect(() => {
        initSidebarMenus();
    }, []);

    const toggleChallenges = () => {
        setChallengesCollapsed(!challengesCollapsed);
    };

    const initSidebarMenus = () => {
        const links = [...document.querySelectorAll(".menu-container")];
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const parent = link.parentNode;
                closeOtherMenus(links, link);
                if (parent.classList.contains("mm-active")) {
                    parent.classList.remove("mm-active");
                    slideUp(link.nextElementSibling);
                } else {
                    parent.classList.add("mm-active");
                    slideDown(link.nextElementSibling, {
                        duration: 400,
                        easing: easeOutQuint,
                    });
                }
            });
        });
    };

    const closeOtherMenus = (links, exceptLink) => {
        const otherLinks = links.filter((l) => l !== exceptLink);
        otherLinks.forEach((link) => {
            link.parentNode.classList.remove("mm-active");
            slideUp(link.nextElementSibling);
        });
    };

    const onLogout = () => {
        dispatch(fetchLogoutAction());
    };

    const renderMenuItem = (url, string, icon, page, badge = 0) => {
        const active = Array.isArray(page)
            ? page.filter((p) => p === pageState?.page)?.length > 0
            : pageState?.page === page;
        return (
            <li className={`${active ? "active" : ""}`}>
                <Link to={url}>
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
        <div
            className={`sidebar ${
                layoutState?.sidebarCollapsed ? "active" : ""
            }`}
        >
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
                    <img
                        className="logo-sm"
                        src={`${IMAGES_PATH}/logo-sm.svg`}
                        alt=""
                    />
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
                        "Dashboard"
                    )}
                    {/* {userState?.user?.role === USER_ROLES.USER &&
            !userState?.user?.freeChallengeRegistered &&
            renderMenuItem(
              `${BASE_PATH}/challenges/take/free`,
              strings.takeFreeChallenge,
              "icon-money-recive4",
              "TakeFreeChallenge"
            )}
          {userState?.user?.role === USER_ROLES.USER &&
            renderMenuItem(
              `${BASE_PATH}/challenges`,
              strings.challenges,
              "icon-medal4",
              ["Challenges", "AnalyzeChallenge"]
            )}
          {userState?.user?.role === USER_ROLES.ADMINISTRATOR &&
            renderMenuItem(
              `${BASE_PATH}/challenges`,
              strings.challengesAdmin,
              "icon-medal-star4",
              ["Challenges", "EditChallenge", "AnalyzeChallenge"],
              layoutState?.notifications?.waitingChallengesCount
            )} */}
                    <div className="menu-title">{strings.services}</div>
                    {userState?.user?.role === USER_ROLES.USER &&
                        renderMenuItem(
                            `${BASE_PATH}/tickets`,
                            strings.tickets,
                            "icon-support",
                            "Tickets"
                        )}
                    {/* {renderMenuItem(
            userState?.user?.role === USER_ROLES.ADMINISTRATOR
              ? `${BASE_PATH}/app_rules/admin`
              : `${BASE_PATH}/app_rules`,
            strings.appRules,
            "icon-courthouse4",
            "AppRules"
          )} */}
                    {userState?.user?.role === USER_ROLES.ADMINISTRATOR && (
                        <>
                            {renderMenuItem(
                                `${BASE_PATH}/export_License`,
                                strings.exportLicense,
                                "icon-chart-14",
                                [
                                    "ExportLicenses",
                                    "AddExportLicensesPage",
                                    "EditExportLicensesPage",
                                ]
                            )}
                            {renderMenuItem(
                                `${BASE_PATH}/import_License`,
                                strings.importLicense,
                                "icon-chart-14",
                                [
                                    "ImportLicenses",
                                    "AddImportLicensesPage",
                                    "EditImportLicensesPage",
                                ]
                            )}
                            {renderMenuItem(
                                `${BASE_PATH}/shareholders`,
                                strings.shareholders,
                                "icon-chart-14",
                                [
                                    "Shareholders",
                                    "AddShareholdersPage",
                                    "EditShareholdersPage",
                                ]
                            )}
                            <li className="sub" id="challenges-management">
                                <CustomLink onClick={toggleChallenges}>
                                    <i className="icon-medal-star4"></i>
                                    <span>
                                        {strings.basicInformation}{" "}
                                        <i className="icon-arrow-down-14"></i>
                                    </span>
                                </CustomLink>
                                <ul
                                    className="submenu"
                                    style={{ display: "none", border: "none" }}
                                >
                                    {renderMenuItem(
                                        `${BASE_PATH}/villages`,
                                        strings.villages,
                                        "icon-dollar-square4",
                                        [
                                            "Villages",
                                            "AddvillagesPage",
                                            "editvillagesPage",
                                        ]
                                    )}
                                    {renderMenuItem(
                                        `${BASE_PATH}/banks`,
                                        strings.banks,
                                        "icon-data4",
                                        [
                                            "Banks",
                                            "AddBanksPage",
                                            "EditBanksPage",
                                        ]
                                    )}
                                    {renderMenuItem(
                                        `${BASE_PATH}/relationships`,
                                        strings.relationships,
                                        "icon-monitor4",
                                        [
                                            "Relationships",
                                            "AddRelationshipsPage",
                                            "EditRelationshipsPage",
                                        ]
                                    )}
                                    {renderMenuItem(
                                        `${BASE_PATH}/countries`,
                                        strings.countries,
                                        "icon-courthouse4",
                                        [
                                            "Countries",
                                            "AddCountriesPage",
                                            "EditCountriesPage",
                                        ]
                                    )}
                                    {/* {renderMenuItem(
                    `${BASE_PATH}/challenge_platforms`,
                    strings.challengePlatforms,
                    "icon-monitor-mobbile4",
                    "ChallengePlatforms"
                  )} */}
                                </ul>
                            </li>
                            {renderMenuItem(
                                `${BASE_PATH}/users`,
                                strings.users,
                                "icon-personalcard",
                                "Users"
                            )}
                        </>
                    )}
                    {userState?.user?.role === USER_ROLES.USER &&
                        renderMenuItem(
                            `${BASE_PATH}/users/verify_request`,
                            strings.verifyUserRequest,
                            "icon-profile-tick4",
                            "UserVerify"
                        )}

                    {renderMenuItem(
                        `${BASE_PATH}/users/edit`,
                        strings.editProfile,
                        "icon-user-edit4",
                        "EditProfile"
                    )}
                    {renderMenuItem(
                        `${BASE_PATH}/users/change_password`,
                        strings.changePassword,
                        "icon-key4",
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
