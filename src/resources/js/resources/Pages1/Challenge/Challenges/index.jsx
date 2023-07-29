import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CustomLink,
  InputTextColumn,
  ListPage,
  Modal,
  TableFooter,
  TableItems,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";
import { CHALLENGE_STATUSES, USER_ROLES } from "../../../../constants";
import { setDropDownElementAction } from "../../../../state/layout/layoutActions";

const Challenges = () => {
  const dispatch = useDispatch();
  const layoutState = useSelector((state) => state.layoutReducer);
  const userState = useSelector((state) => state.userReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const columnsCount =
    userState?.user?.role === USER_ROLES.ADMINISTRATOR ? 7 : 6;
  const { challengesPage: strings, challengeStatuses, general } = useLocale();
  const pageUtils = new PageUtils();

  const toggleChallengeStatus = (e) => {
    e.stopPropagation();
    const element = document.querySelector("#change-status").lastChild;
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

  const onCopy = (field) => {
    pageUtils?.onCopy(field);
    const message = general.copiedToClipboard.replace(":item", strings[field]);
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const renderModal = () => (
    <Modal id="accountModal" title={strings.accountDetails}>
      <InputTextColumn
        field="accountNo"
        readonly={true}
        showLabel
        icon="icon-size4 icon-clickable"
        iconClick={() => onCopy("accountNo")}
        value={pageState?.props?.item?.accountNo}
      />
      <InputTextColumn
        field="server"
        readonly={true}
        showLabel
        icon="icon-size4 icon-clickable"
        iconClick={() => onCopy("server")}
        value={pageState?.props?.item?.server}
      />
      <InputTextColumn
        field="password"
        readonly={true}
        showLabel
        icon="icon-size4 icon-clickable"
        iconClick={() => onCopy("password")}
        value={pageState?.props?.item?.password}
      />
      <InputTextColumn
        field="investorPassword"
        readonly={true}
        showLabel
        icon="icon-size4 icon-clickable"
        iconClick={() => onCopy("investorPassword")}
        value={pageState?.props?.item?.investorPassword}
      />
      {userState?.user?.role === USER_ROLES.ADMINISTRATOR && (
        <>
          <InputTextColumn
            field="metaApiToken"
            readonly={true}
            showLabel
            icon="icon-size4 icon-clickable"
            iconClick={() => onCopy("metaApiToken")}
            value={pageState?.props?.item?.metaApiToken}
          />
          <InputTextColumn
            field="metaApiAccountId"
            readonly={true}
            showLabel
            icon="icon-size4 icon-clickable"
            iconClick={() => onCopy("metaApiAccountId")}
            value={pageState?.props?.item?.metaApiAccountId}
          />
        </>
      )}
    </Modal>
  );

  const renderHeader = () => (
    <tr>
      {userState?.user?.role === USER_ROLES.ADMINISTRATOR && (
        <th style={{ width: "150px" }}>{strings.user}</th>
      )}
      <th style={{ width: "150px" }}>{strings.accountNo}</th>
      <th style={{ width: "150px" }}>{strings.status}</th>
      <th>{strings.equity}</th>
      <th style={{ width: "150px" }}>{strings.server}</th>
      <th style={{ width: "150px" }}>{strings.level}</th>
      <th style={{ width: "150px" }}>{general.actions}</th>
    </tr>
  );

  const renderItems = () => {
    const children = pageState?.props?.items?.map((item) => {
      const statuses = [
        {
          challengeStatus: CHALLENGE_STATUSES.WAITING_VERIFICATION,
          string: challengeStatuses.waitingVerification,
        },
        {
          challengeStatus: CHALLENGE_STATUSES.WAITING_TRADE,
          string: challengeStatuses.waitingTrade,
        },
        {
          challengeStatus: CHALLENGE_STATUSES.TRADING,
          string: challengeStatuses.trading,
        },
        {
          challengeStatus: CHALLENGE_STATUSES.END_CHALLENGE,
          string: challengeStatuses.endChallenge,
        },
      ].filter(({ challengeStatus }) => item.status != challengeStatus);
      return (
        <tr key={item.id}>
          {userState?.user?.role === USER_ROLES.ADMINISTRATOR && (
            <td>{item.username}</td>
          )}
          <td>{item.accountNo === 0 ? "-" : item.accountNo}</td>
          <td>{item.statusText}</td>
          <td>
            {item.status === CHALLENGE_STATUSES.WAITING_VERIFICATION
              ? "-"
              : item.equity}
          </td>
          <td>{item.server}</td>
          <td>{item.levelText}</td>
          <td>
            {item.status === CHALLENGE_STATUSES.WAITING_VERIFICATION &&
              userState?.user?.role === USER_ROLES.ADMINISTRATOR && (
                <>
                  <button
                    type="button"
                    className="btn btn-primary mx-rdir-10"
                    onClick={() => pageUtils.onEdit(item)}
                    title={general.edit}
                    disabled={layoutState?.loading}
                  >
                    {general.edit}
                  </button>
                </>
              )}
            {item.status === CHALLENGE_STATUSES.WAITING_TRADE && (
              <>
                <button
                  type="button"
                  className="btn btn-success mx-rdir-10"
                  disabled={layoutState?.loading}
                  onClick={() => pageUtils?.onAnalyze(item)}
                  title={strings.analyze}
                >
                  {strings.analyze}
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-rdir-10"
                  disabled={layoutState?.loading}
                  onClick={(e) =>
                    pageUtils?.onShowModal(e, "accountModal", item)
                  }
                  title={strings.accountDetails}
                >
                  {strings.accountDetails}
                </button>
              </>
            )}
            {userState?.user?.role === USER_ROLES.ADMINISTRATOR && (
              <button
                id="change-status"
                type="button"
                className="btn btn-primary btn-dropdown mx-rdir-10"
                onClick={(e) => toggleChallengeStatus(e)}
              >
                <div className="d-flex">
                  <span className="grow-1 mx-rdir-10">
                    {strings.changeStatus}
                  </span>
                  <div className="icon">
                    <i className="icon-arrow-down5"></i>
                  </div>
                </div>
                <div className="dropdown-menu dropdown-menu-end">
                  <ul>
                    {statuses.map(({ challengeStatus, string }) => (
                      <li key={challengeStatus}>
                        <CustomLink
                          onClick={() =>
                            pageUtils?.changeStatus(item.id, challengeStatus)
                          }
                        >
                          {string}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            )}
          </td>
        </tr>
      );
    });

    return <TableItems columnsCount={columnsCount}>{children}</TableItems>;
  };

  const renderFooter = () => (
    <TableFooter columnsCount={columnsCount} pageUtils={pageUtils} />
  );

  return (
    <ListPage
      pageUtils={pageUtils}
      table={{ renderHeader, renderItems, renderFooter }}
      hasAdd={false}
    >
      {pageState?.props?.item && renderModal()}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={layoutState?.direction === "rtl" ? true : false}
        pauseOnHover
        transition={Zoom}
        theme="dark"
      />
    </ListPage>
  );
};

export default Challenges;
