import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { User as Entity } from "../../../../http/entities";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH, USER_ROLES } from "../../../../constants";
import { addUserSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { addUserPage: strings } = useLocale();
    super("Users", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/users`;
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-id"));
  }

  async onSubmit(data) {
    const role = data.administrator
      ? USER_ROLES.ADMINISTRATOR
      : USER_ROLES.USER;
    const promise = this.entity.store(
      data.username,
      data.password,
      data.confirmPassword,
      data.name,
      data.family,
      data.email,
      role,
      data.isActive ? 1 : 0
    );
    this.onModifySubmit(promise);
  }
}
