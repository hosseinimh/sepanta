import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ChallengeRule as Entity } from "../../../../http/entities";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editChallengeRuleSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { editChallengeRulePage: strings } = useLocale();
    super("ChallengeRules", strings, form);
    this.entity = new Entity();
    this.callbackUrl = `${BASE_PATH}/challenge_rules`;
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-id"));
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
    return await this.entity.get();
  }

  handleFetchResult(result) {
    this.useForm.setValue("duration1", result.item.duration1);
    this.useForm.setValue("duration2", result.item.duration2);
    this.useForm.setValue("durationReal", result.item.durationReal);
    this.useForm.setValue("durationFree", result.item.durationFree);
    this.useForm.setValue("dailySl1", result.item.dailySl1);
    this.useForm.setValue("dailySl2", result.item.dailySl2);
    this.useForm.setValue("dailySlReal", result.item.dailySlReal);
    this.useForm.setValue("dailySlFree", result.item.dailySlFree);
    this.useForm.setValue("totalSl1", result.item.totalSl1);
    this.useForm.setValue("totalSl2", result.item.totalSl2);
    this.useForm.setValue("totalSlReal", result.item.totalSlReal);
    this.useForm.setValue("totalSlFree", result.item.totalSlFree);
    this.useForm.setValue("target1", result.item.target1);
    this.useForm.setValue("target2", result.item.target2);
    this.useForm.setValue("targetReal", result.item.targetReal);
    this.useForm.setValue("targetFree", result.item.targetFree);
    this.useForm.setValue("tradeDays1", result.item.tradeDays1);
    this.useForm.setValue("tradeDays2", result.item.tradeDays2);
    this.useForm.setValue("tradeDaysReal", result.item.tradeDaysReal);
    this.useForm.setValue("tradeDaysFree", result.item.tradeDaysFree);
  }

  async onSubmit(data) {
    const promise = this.entity.update(
      data.duration1,
      data.duration2,
      data.durationReal,
      data.durationFree,
      data.dailySl1,
      data.dailySl2,
      data.dailySlReal,
      data.dailySlFree,
      data.totalSl1,
      data.totalSl2,
      data.totalSlReal,
      data.totalSlFree,
      data.target1,
      data.target2,
      data.targetReal,
      data.targetFree,
      data.tradeDays1,
      data.tradeDays2,
      data.tradeDaysReal,
      data.tradeDaysFree
    );
    super.onModifySubmit(promise);
  }
}
