import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Village as Entity } from "../../../../http/entities/Village";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addVillageSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { addvillagesPage: strings } = useLocale();
    super("AddvillagesPage", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/villages`;
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-id"));
  }

  async onSubmit(data) {
    const promise = this.entity.store(
      data.section,
      data.village,
    );
    super.onModifySubmit(promise);
  }
}
