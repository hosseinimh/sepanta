import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { User as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { forgotPasswordSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";
import { BASE_PATH } from "../../../../constants";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { forgotPasswordPage: strings } = useLocale();
    super("Users", strings, form);
    this.entity = new Entity();
    this.onSubmit = this.onSubmit.bind(this);
    this.callbackUrl = `${BASE_PATH}/users/login`;
  }

  async onSubmit(data) {
    const promise = this.entity.forgotPassword(data.email);
    this.onModifySubmit(promise);
  }
}
