import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Relationship as Entity } from "../../../../http/entities/Relationship";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addRelationshipSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { addRelationshipsPage: strings } = useLocale();
    super("AddRelationshipsPage", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/relationships`;
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-id"));
  }

  async onSubmit(data) {
    const promise = this.entity.store(
      data.relationship,
    );
    super.onModifySubmit(promise);
  }
}
