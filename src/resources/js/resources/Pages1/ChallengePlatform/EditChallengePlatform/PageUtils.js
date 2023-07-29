import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ChallengePlatform as Entity } from "../../../../http/entities";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editChallengePlatformSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { editChallengePlatformPage: strings } = useLocale();
    super("ChallengePlatforms", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/challenge_platforms`;
  }

  onLoad() {
    this.validateIfNotValidateParams();
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-id"));
    this.fillForm(this.pageState.params);
  }

  validateIfNotValidateParams() {
    this.navigateIfNotValidId(this.pageState.params.platformId);
  }

  async fillForm(data) {
    try {
      this.dispatch(setLoadingAction(true));
      const result = await this.fetchItem(data.platformId);
      this.navigateIfItemNotFound(result);
      this.handleFetchResult(result);
    } catch {
    } finally {
      this.dispatch(setLoadingAction(false));
    }
  }

  async fetchItem(id) {
    return await this.entity.get(id);
  }

  handleFetchResult(result) {
    this.useForm.setValue("value", result.item.value);
    this.useForm.setValue("free", result.item.free);
    this.useForm.setValue("real", result.item.real);
  }

  async onSubmit(data) {
    const promise = this.entity.update(
      this.pageState.params.platformId,
      data.value,
      data.free ? 1 : 0,
      data.real ? 1 : 0
    );
    super.onModifySubmit(promise);
  }
}
