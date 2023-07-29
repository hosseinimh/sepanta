import { useForm } from "react-hook-form";

import { ChallengeRule as Entity } from "../../../../http/entities";
import {
  setPageIconAction,
  setPagePropsAction,
} from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { useLocale } from "../../../../hooks";
import { setLoadingAction } from "../../../../state/layout/layoutActions";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm();
    const { challengeRulesPage: strings } = useLocale();
    super("ChallengeRules", strings, form);
    this.entity = new Entity();
    this.initialPageProps = {
      item: null,
      action: null,
    };
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-users"));
    this.fillForm();
  }

  editAction() {
    this.navigate(`${BASE_PATH}/challenge_rules/edit`);
  }

  async fillForm() {
    try {
      this.dispatch(setLoadingAction(true));
      const result = await this.fetchItem();
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
    this.dispatch(setPagePropsAction({ item: result.item }));
  }
}
