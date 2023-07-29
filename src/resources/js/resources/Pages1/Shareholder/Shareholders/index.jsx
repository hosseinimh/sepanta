import React from "react";
import { useSelector } from "react-redux";

import {
    InputDatePickerColumn,
    InputSelectColumn,
    InputTextColumn,
    ListPage,
    Modal,
    TableItems,
} from "../../../components";
import utils from "../../../../utils/Utils";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";

const Shareholders = () => {
    const layoutState = useSelector((state) => state.layoutReducer);
    const pageState = useSelector((state) => state.pageReducer);
    const columnsCount = 2;
    const { shareholdersPage: strings, general } = useLocale();
    const pageUtils = new PageUtils();

    const renderHeader = () => (
        <tr>
            <th style={{ width: "50px" }}>#</th>
            <th>{strings.name}</th>
            <th style={{ width: "150px" }}>{strings.section}</th>
            <th style={{ width: "150px" }}>{general.actions}</th>
        </tr>
    );

    const renderItems = () => {
        const children = pageState?.props?.items?.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{utils.addCommas(item.value)}</td>
                <td>{utils.addCommas(item.value)}</td>
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
                    <button
                        type="button"
                        className="btn btn-primary mx-rdir-10"
                        onClick={() => pageUtils.onDelete(item)}
                        title={general.remove}
                        disabled={layoutState?.loading}
                    >
                        {general.remove}
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mx-rdir-10"
                        disabled={layoutState?.loading}
                        onClick={(e) =>
                            pageUtils?.onShowModal(e, "accountModal", item)
                        }
                        title={general.depositSlip}
                    >
                        {general.depositSlip}
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mx-rdir-10"
                        onClick={() => pageUtils.onAddRelationship(item)}
                        title={general.dependants}
                        disabled={layoutState?.loading}
                    >
                        {general.dependants}
                    </button>
                </td>
            </tr>
        ));

        return <TableItems columnsCount={columnsCount}>{children}</TableItems>;
    };

    return (
        <>
            <ListPage
                pageUtils={pageUtils}
                table={{ renderHeader, renderItems }}
            ></ListPage>
            {pageState?.props?.item && (
                <Modal id="accountModal">
                    <InputTextColumn
                        field="accountNum"
                        textAlign="right"
                        type="number"
                    />
                    <InputTextColumn
                        field="receiptNumber"
                        textAlign="right"
                        type="number"
                    />
                    <InputDatePickerColumn field="dateOfDeposit" />

                    <InputSelectColumn
                        field="bankName"
                        textAlign="right"
                        type="number"
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        title={general.submit}
                        onClick={pageUtils.onSubmit}
                        disabled={layoutState?.loading}
                    >
                        {general.submit}
                    </button>
                </Modal>
            )}
        </>
    );
};

export default Shareholders;
