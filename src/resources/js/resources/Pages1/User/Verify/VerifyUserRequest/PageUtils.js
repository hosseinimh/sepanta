import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { User as Entity } from "../../../../../http/entities";
import { BasePageUtils } from "../../../../../utils/BasePageUtils";
import { USER_ROLES } from "../../../../../constants";
import { setLoadingAction } from "../../../../../state/layout/layoutActions";
import { editUserSchema as schema } from "../../../../validations";
import { useLocale } from "../../../../../hooks";
import { setPagePropsAction } from "../../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { verifyUserPage: strings } = useLocale();
    super("UserVerify", strings, form);
    this.entity = new Entity();
  }

  onLoad() {
    super.onLoad();
    this.fillForm();
  }

  async fillForm() {
    try {
      this.dispatch(setLoadingAction(true));
      const result = await this.fetchItem();
      this.navigateIfItemNotFound(result);
      this.handleFetchResult(result);
    } catch {
    } finally {
      this.dispatch(setLoadingAction(false));
    }
  }

  async fetchItem() {
    return await this.entity.getFromUser();
  }

  handleFetchResult(result) {
    this.useForm.setValue("name", result.item.name);
    this.useForm.setValue("family", result.item.family);
    this.useForm.setValue("email", result.item.email);
  }

  onSetSelfieFile(file) {
    this.dispatch(
      setPagePropsAction({
        action: "SET_SELFIE_FILE",
        file,
      })
    );
  }

  onSetIdentityFile(file) {
    this.dispatch(
      setPagePropsAction({
        action: "SET_IDENTITY_FILE",
        file,
      })
    );
  }

  async onSubmit(data) {
    const promise =
      this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? this.handleSubmit(data)
        : this.handleSubmitFromUser(data);
    this.onModifySubmit(promise);
  }

  async handleSubmit(data) {
    const role = data.administrator
      ? USER_ROLES.ADMINISTRATOR
      : USER_ROLES.USER;
    return this.entity.update(
      this.pageState?.props?.userId,
      data.name,
      data.family,
      data.email,
      role,
      data.isActive ? 1 : 0
    );
  }

  async handleSubmitFromUser(data) {
    return this.entity.updateFromUser(data.name, data.family);
  }
}
