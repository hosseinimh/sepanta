import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { PageLayout, Table } from "../";
import { useLocale } from "../../../hooks";

const ListPage = ({
  pageUtils,
  children,
  table,
  hasAdd = true,
  backUrl = null,
  renderTopList = null,
}) => {
  const navigate = useNavigate();
  const { general } = useLocale();
  const layoutState = useSelector((state) => state.layoutReducer);

  return (
    <PageLayout pageUtils={pageUtils}>
      <div className="section fix-mr15">
        {renderTopList && renderTopList()}
        <div className="block">
          <div className="table-header">
            {hasAdd && (
              <button
                className="btn btn-primary mx-rdir-10"
                type="button"
                title={pageUtils.strings.add}
                onClick={pageUtils.onAdd}
                disabled={layoutState?.loading}
              >
                {pageUtils.strings.add}
              </button>
            )}
            {backUrl && (
              <button
                className="btn btn-border mx-rdir-10"
                type="button"
                title={general.back}
                onClick={() => navigate(backUrl)}
                disabled={layoutState?.loading}
              >
                {general.back}
              </button>
            )}
            {children}
          </div>
          <Table
            renderHeader={table.renderHeader}
            renderItems={table.renderItems}
            renderFooter={table?.renderFooter}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default ListPage;
