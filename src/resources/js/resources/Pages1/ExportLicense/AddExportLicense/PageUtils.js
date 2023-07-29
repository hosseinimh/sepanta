import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ChallengeBalance as Entity } from "../../../../http/entities";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addChallengeBalanceSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { addExportLicensesPage: strings } = useLocale();
    super("AddExportLicensesPage", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/export_License/add`;
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-id"));
  }

  async onSubmit(data) {
    const promise = this.entity.store(
      data.value,
      data.free ? 1 : 0,
      data.real ? 1 : 0
    );
    super.onModifySubmit(promise);
  }
}
