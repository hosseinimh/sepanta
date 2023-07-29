import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Bank as Entity } from "../../../../http/entities/Bank";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addBankSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { addBanksPage: strings } = useLocale();
    super("AddBanksPage", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/banks`;
  }

  onLoad() {
    super.onLoad();
    // this.dispatch(setPageIconAction("pe-7s-id"));
  }

  async onSubmit(data) {
    const promise = this.entity.store(
      data.bank,
    );
    super.onModifySubmit(promise);
  }
}
