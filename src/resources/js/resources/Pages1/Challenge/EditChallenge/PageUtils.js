import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Challenge as Entity } from "../../../../http/entities";
import {
  setPageIconAction,
  setPagePropsAction,
  setPageTitleAction,
} from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editChallengeSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { editChallengePage: strings } = useLocale();
    super("EditChallenge", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/challenges`;
  }

  onLoad() {
    this.validateIfNotValidateParams();
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-id"));
    this.fillForm(this.pageState.params);
  }

  validateIfNotValidateParams() {
    this.navigateIfNotValidId(this.pageState.params.challengeId);
  }

  async fillForm(data) {
    try {
      this.dispatch(setLoadingAction(true));
      const result = await this.fetchItem(data.challengeId);
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
    this.useForm.setValue("accountNo", result.item.accountNo);
    this.useForm.setValue("password", result.item.password);
    this.useForm.setValue("investorPassword", result.item.investorPassword);
    this.useForm.setValue("metaApiToken", result.item.metaApiToken);
    this.useForm.setValue("metaApiAccountId", result.item.metaApiAccountId);
    this.dispatch(setPagePropsAction({ challengeId: result.item.id }));
    this.dispatch(
      setPageTitleAction(
        `${this.strings._title} [ ${result.item.levelText} ]`,
        this.strings._subTitle
      )
    );
  }

  async onSubmit(data) {
    const promise = this.entity.update(
      this.pageState.params.challengeId,
      data.accountNo,
      data.password,
      data.investorPassword,
      data.metaApiToken,
      data.metaApiAccountId
    );
    super.onModifySubmit(promise);
  }
}
