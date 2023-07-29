import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import { BASE_PATH, LOCALES, IMAGES_PATH, THEMES } from "../../../constants";
import { fetchLogoutAction } from "../../../state/user/userActions";
import utils from "../../../utils/Utils";
import CustomLink from "../Link/CustomLink";
import {
  setLocaleAction,
  setLoadingAction,
  toggleSidebarAction,
  setDropDownElementAction,
  setThemeAction,
} from "../../../state/layout/layoutActions";
import { useLocale } from "../../../hooks";
import { User } from "../../../http/entities";

const Header = () => {
  const dispatch = useDispatch();
  const { header: strings } = useLocale();
  const layoutState = useSelector((state) => state.layoutReducer);
  const authUser = utils.getLSUser();

  const toggleSidebar = () => {
    dispatch(toggleSidebarAction());
  };

  const setLocale = (locale) => handleSetLocale(locale);

  const handleSetLocale = async (locale) => {
    const prevLocale = utils.getLSVariable("locale");
    slideUp(layoutState.dropDownElement);
    const element = document.querySelector("#locales-menu").lastChild;
    if (layoutState?.dropDownElement === element) {
      dispatch(setDropDownElementAction(null));
    }
    if (prevLocale === locale) {
      return;
    }
    dispatch(setLoadingAction(true));
    dispatch(setLocaleAction(locale));
    const user = new User();
    await user.setLocale(locale);
    window.location.reload();
  };

  const onLogout = () => {
    dispatch(fetchLogoutAction());
  };

  const toggleUserMenu = (e) => {
    e.stopPropagation();
    const element = document.querySelector("#user-menu").lastChild;
    if (layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);
      if (layoutState?.dropDownElement === element) {
        dispatch(setDropDownElementAction(null));
        return;
      }
    }
    dispatch(setDropDownElementAction(element));
    slideDown(element, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const toggleNotificationsDropdown = (e) => {
    e.stopPropagation();
    const element = document.querySelector("#notifications-menu").lastChild;
    if (layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);
      if (layoutState?.dropDownElement === element) {
        dispatch(setDropDownElementAction(null));
        return;
      }
    }
    dispatch(setDropDownElementAction(element));
    slideDown(element, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const toggleLocalesDropdown = (e) => {
    e.stopPropagation();
    const element = document.querySelector("#locales-menu").lastChild;
    if (layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);
      if (layoutState?.dropDownElement === element) {
        dispatch(setDropDownElementAction(null));
        return;
      }
    }
    dispatch(setDropDownElementAction(element));
    slideDown(element, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const toggleColorsDropdown = (e) => {
    e.stopPropagation();
    const element = document.querySelector("#colors-menu").lastChild;
    if (layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);
      if (layoutState?.dropDownElement === element) {
        dispatch(setDropDownElementAction(null));
        return;
      }
    }
    dispatch(setDropDownElementAction(element));
    slideDown(element, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const renderUserDropdown = () => (
    <div className="userinfo sub dropdown-link" id="user-menu">
      <div className="d-flex align-center" onClick={(e) => toggleUserMenu(e)}>
        <div className="img">
          <img src={`${IMAGES_PATH}/avatar-user.png`} alt="" />
        </div>
        <div className="info">
          <div className="name">{`${authUser?.name ?? ""} ${
            authUser?.family ?? ""
          }`}</div>
          <div className="userid">{`${authUser?.username ?? ""}`}</div>
        </div>
      </div>
      <div className="submenu dropdown-list">
        <ul>
          <li>
            <Link to={`${BASE_PATH}/users/edit`}>
              <i className="icon-personalcard"></i> {strings.profile}
            </Link>
          </li>
          <li>
            <CustomLink onClick={onLogout} className="danger">
              <i className="icon-logout"></i> {strings.logout}
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderNotificationsDropdown = () => (
    <div
      className="item sub dropdown-link d-flex align-center"
      id="notifications-menu"
      onClick={(e) => toggleNotificationsDropdown(e)}
    >
      <i className="icon-notification-bing">
        <div className="notification-new"></div>
      </i>
      <span>{strings.notifications}</span>
      <div className="sub-box tab-container submenu submenu-mid">
        <div>
          <div className="checked-list scrollhide d-flex">
            <div className="checked-item tab-item active" data-tab-box="">
              {strings.userNotifications}
            </div>
            <div className="checked-item tab-item" data-tab-box="">
              {strings.systemNotifications}
            </div>
          </div>
          <div className="tab-content active">
            <div className="notification-list scrollhide">
              {layoutState?.notifications?.userNotifications?.map(
                (item, index) => (
                  <div className="notification-item" key={index}>
                    <div className="notification-item-hd d-flex align-center">
                      <div className="icon">
                        <i className="icon-notification-bing"></i>
                      </div>
                      <div className="info">
                        <div className="date">41 ثانیه پیش</div>
                        <h3>ورود موفق به حساب</h3>
                      </div>
                    </div>
                    <div className="notification-text drop-slide">
                      ورود موفق به حساب کاربری در تاریخ ۲۵ خرداد ۱۴۰۲ ساعت ۱۴:۰۸
                      با دستگاه desktop
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="d-flex align-center just-between pd-t-10">
            <button className="btn btn-border">خواندن همه</button>
            <a
              href="https://kifpool.me/member_v2/notifications"
              className="btn btn-primary"
            >
              همه اعلان ها
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLocalesDropdown = () => {
    let flag;
    let locale = utils.getLSVariable("locale");
    switch (locale) {
      case "fa":
        flag = "IR";
        break;
      case "en":
        flag = "US";
        break;
      default:
        flag = "IR";
        break;
    }
    return (
      <div className="item sub dropdown-link" id="locales-menu">
        <div
          className="d-flex align-center"
          onClick={(e) => toggleLocalesDropdown(e)}
        >
          <div className="img">
            <img src={`${IMAGES_PATH}/${flag}.svg`} alt="" />
          </div>
        </div>
        <div className="submenu submenu-mid dropdown-list locales-menu">
          <ul>
            <li>
              <CustomLink onClick={() => setLocale(LOCALES.FA)}>
                <img src={`${IMAGES_PATH}/IR.svg`} alt="" />
                {strings.fa}
              </CustomLink>
            </li>
            <li>
              <CustomLink onClick={() => setLocale(LOCALES.EN)}>
                <img src={`${IMAGES_PATH}/US.svg`} alt="" />
                {strings.us}
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const renderToggleTheme = () => (
    <div
      className={`item dark-toggle ${
        layoutState?.theme?.name === THEMES.LIGHT ? "active" : ""
      }`}
      onClick={toggleTheme}
    >
      <i className="icon-sun-1"></i>
    </div>
  );

  const renderColorsDropdown = () => (
    <div className="item sub dropdown-link" id="colors-menu">
      <div
        className="color-btn d-flex align-center"
        onClick={(e) => toggleColorsDropdown(e)}
      >
        <img src={`${IMAGES_PATH}/color.svg`} alt="" />
      </div>
      <div
        className="submenu submenu-end dropdown-list colors-list"
        id="colors"
      >
        <ul className="d-flex">
          <li>
            <div className="color purple-btn"></div>
          </li>
          <li>
            <div className="color green-btn"></div>
          </li>
        </ul>
      </div>
    </div>
  );

  const toggleTheme = () => {
    if (layoutState?.theme?.name === THEMES.LIGHT) {
      dispatch(setThemeAction(THEMES.DARK));
    } else {
      dispatch(setThemeAction(THEMES.LIGHT));
    }
  };

  return (
    <div className="navbar d-flex align-center">
      <div className="menu-toggle" onClick={toggleSidebar}>
        <i className="icon-category4"></i>
      </div>
      {renderUserDropdown()}
      <div className="navbar-actions">
        {renderNotificationsDropdown()}
        {renderLocalesDropdown()}
        {renderToggleTheme()}
        {renderColorsDropdown()}
      </div>
    </div>
  );
};

export default Header;
