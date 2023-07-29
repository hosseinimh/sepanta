import React from "react";
import { useSelector } from "react-redux";

import { ListPage, TableItems } from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";

const ChallengePlatforms = () => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const columnsCount = 2;
  const { challengePlatformsPage: strings, general } = useLocale();
  const pageUtils = new PageUtils();

  const renderHeader = () => (
    <tr>
      <th>{strings.value}</th>
      <th style={{ width: "150px" }}>{general.actions}</th>
    </tr>
  );

  const renderItems = () => {
    const children = pageState?.props?.items?.map((item) => (
      <tr key={item.id}>
        <td>{item.value}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary mx-rdir-10"
            onClick={() => pageUtils.onEdit(item)}
            title={general.edit}
            disabled={layoutState?.loading}
          >
            {general.edit}
          </button>
        </td>
      </tr>
    ));

    return <TableItems columnsCount={columnsCount}>{children}</TableItems>;
  };

  return (
    <ListPage
      pageUtils={pageUtils}
      table={{ renderHeader, renderItems }}
    ></ListPage>
  );
};

export default ChallengePlatforms;
