import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { User as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { signupSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";
import { fetchSignupAction } from "../../../../state/user/userActions";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { clearMessageAction } from "../../../../state/message/messageActions";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { signupPage: strings } = useLocale();
    super("Users", strings, form);
    this.entity = new Entity();
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(data) {
    this.dispatch(setLoadingAction(true));
    this.dispatch(clearMessageAction());
    this.dispatch(
      fetchSignupAction(
        data.username,
        data.password,
        data.confirmPassword,
        data.name,
        data.family,
        data.email
      )
    );
  }
}
