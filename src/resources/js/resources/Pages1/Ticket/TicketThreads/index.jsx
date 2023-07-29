import React from "react";
import { useSelector } from "react-redux";

import {
  BlankPage,
  FormCard,
  InputFileColumn,
  InputTextAreaColumn,
} from "../../../components";
import { STORAGE_PATH, TICKET_STATUSES } from "../../../../constants";
import { BsPaperclip } from "react-icons/bs";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";

const TicketThreads = () => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const { ticketThreadsPage: strings, general } = useLocale();
  const pageUtils = new PageUtils();
  const userDirection = general.locale === "english" ? "left" : "right";
  const adminDirection = general.locale === "english" ? "right" : "left";

  const onChangeFile = (e) => {
    const file = e?.target?.files[0];

    if (file) {
      pageUtils.onSetFile(file);
    }
  };

  return (
    <BlankPage pageUtils={pageUtils}>
      <div className="btns d-flex mt-30">
        {pageState?.props?.item?.status === TICKET_STATUSES.OPEN && (
          <button
            className="btn btn-primary mx-rdir-10"
            type="button"
            title={strings.closeTicket}
            disabled={layoutState?.loading}
          >
            {strings.closeTicket}
          </button>
        )}
        <button
          className="btn btn-border mx-rdir-10"
          type="button"
          title={general.back}
          onClick={pageUtils.onCancel}
          disabled={layoutState?.loading}
        >
          {general.back}
        </button>
      </div>
      {pageState?.props?.item && (
        <div className="dot pd-td-20">
          <span
            className={`${
              pageState.props.item.status === TICKET_STATUSES.OPEN
                ? "bg-green"
                : "bg-orange"
            }`}
          ></span>
          <span>{pageState.props.item.statusText}</span>
        </div>
      )}
      {pageState?.props?.threads?.map((item) => (
        <div
          key={item.id}
          className="block pd-20 pd-d-10"
          style={{
            backgroundColor:
              item.adminCreated === 0 ? "" : "rgba(20,26,32,0.2)",
          }}
        >
          <div>
            <p
              style={{
                marginBottom: "0",
                fontSize: "0.8rem",
                textAlign:
                  item?.adminCreated === 0 ? userDirection : adminDirection,
              }}
            >
              {`${item?.creatorName} ${item?.creatorFamily} - ${
                item?.adminCreated ? general.administrator : general.user
              }`}
            </p>
            <p
              className="mb-20"
              style={{
                fontSize: "0.8rem",
                textAlign:
                  item?.adminCreated === 0 ? userDirection : adminDirection,
              }}
            >
              {item?.faCreatedAt}
            </p>
            <p
              style={{
                whiteSpace: "pre-line",
                textAlign:
                  item?.adminCreated === 0 ? userDirection : adminDirection,
              }}
            >
              {item?.content}
            </p>
          </div>
          {item?.file && (
            <div className="mt-20">
              <a
                href={`${STORAGE_PATH}/ticket_threads/${item.file}`}
                target={"_blank"}
                rel="noreferrer"
              >
                <BsPaperclip className="orange" />
                <span className="orange">{general.file}</span>
              </a>
            </div>
          )}
        </div>
      ))}
      {pageState?.props?.item?.status === TICKET_STATUSES.OPEN && (
        <FormCard pageUtils={pageUtils}>
          <div className="block-title mb-30">
            <h3>{strings.sendTicket}</h3>
          </div>
          <InputTextAreaColumn field="content" />
          <InputFileColumn field="file" onChangeFile={(e) => onChangeFile(e)} />
        </FormCard>
      )}
    </BlankPage>
  );
};

export default TicketThreads;
