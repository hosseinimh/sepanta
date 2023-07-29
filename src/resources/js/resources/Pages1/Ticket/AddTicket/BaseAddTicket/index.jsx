import React from "react";

import {
  FormPage,
  InputFileColumn,
  InputSelectColumn,
  InputTextAreaColumn,
  InputTextColumn,
} from "../../../../components";
import { TICKET_TYPES } from "../../../../../constants";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../../hooks";

const BaseAddTicket = ({ userId }) => {
  const { ticketTypes } = useLocale();
  const pageUtils = new PageUtils(userId);
  const types = [
    { id: TICKET_TYPES.TYPE1, value: ticketTypes.type1 },
    { id: TICKET_TYPES.TYPE2, value: ticketTypes.type2 },
    { id: TICKET_TYPES.TYPE3, value: ticketTypes.type3 },
    { id: TICKET_TYPES.TYPE4, value: ticketTypes.type4 },
    { id: TICKET_TYPES.TYPE5, value: ticketTypes.type5 },
  ];

  const onChangeFile = (e) => {
    const file = e?.target?.files[0];

    if (file) {
      pageUtils.onSetFile(file);
    }
  };

  return (
    <FormPage pageUtils={pageUtils}>
      <InputSelectColumn
        field="type"
        items={types}
        selectedValue={TICKET_TYPES.TYPE1}
      />
      <InputTextColumn field="subject" />
      <InputTextAreaColumn field="content" />
      <InputFileColumn field="file" onChangeFile={(e) => onChangeFile(e)} />
    </FormPage>
  );
};

export default BaseAddTicket;
