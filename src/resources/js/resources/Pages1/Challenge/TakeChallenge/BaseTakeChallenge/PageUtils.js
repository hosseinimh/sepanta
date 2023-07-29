import { useForm } from "react-hook-form";

import { Challenge as Entity } from "../../../../../http/entities";
import { setPageIconAction } from "../../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../../utils/BasePageUtils";
import { useLocale } from "../../../../../hooks";
import { BASE_PATH, CHALLENGE_LEVELS } from "../../../../../constants";
import utils from "../../../../../utils/Utils";
import { fetchAuthAction } from "../../../../../state/user/userActions";
import { setLoadingAction } from "../../../../../state/layout/layoutActions";

export class PageUtils extends BasePageUtils {
  constructor(level) {
    const form = useForm();
    const { takeRealChallengePage, takeFreeChallengePage } = useLocale();
    const name =
      level === CHALLENGE_LEVELS.FREE ? "TakeFreeChallenge" : "TakeChallenge";
    const strings =
      level === CHALLENGE_LEVELS.FREE
        ? takeFreeChallengePage
        : takeRealChallengePage;
    super(name, strings, form);
    this.entity = new Entity();
    this.initialPageProps = {
      level,
      balances: null,
      servers: null,
      platforms: null,
      leverages: null,
      rules: null,
      action: null,
    };
    this.callbackUrl = `${BASE_PATH}/challenges`;
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-users"));
    this.fillForm();
  }

  async fillForm() {
    const promise = this.entity.take(this.initialPageProps.level);
    super.fillForm(promise);
  }

  propsIfOK(result) {
    try {
      return {
        balances: this.renderBalances(result.balances),
        servers: this.renderServers(result.servers),
        platforms: this.renderPlatforms(result.platforms),
        leverages: this.renderLeverages(result.leverages),
        rules: result.rules,
      };
    } catch {
      return null;
    }
  }

  renderBalances(balances) {
    return this.checkFirstItem(
      balances.map((balance) => ({
        id: balance.id,
        value: balance.id,
        label: utils.addCommas(balance.value),
        checked: false,
      }))
    );
  }

  renderServers(servers) {
    return this.checkFirstItem(
      servers.map((server) => ({
        id: server.id,
        value: server.id,
        label: server.title,
        checked: false,
      }))
    );
  }

  renderPlatforms(platforms) {
    return this.checkFirstItem(
      platforms.map((platform) => ({
        id: platform.id,
        value: platform.id,
        label: platform.value,
        checked: false,
      }))
    );
  }

  renderLeverages(leverages) {
    return this.checkFirstItem(
      leverages.map((leverage) => ({
        id: leverage.id,
        value: leverage.id,
        label: utils.addCommas(leverage.value),
        checked: false,
      }))
    );
  }

  checkFirstItem(items) {
    if (items?.length > 0) {
      items[0].checked = true;
    }
    return items;
  }

  async onSubmit(data) {
    this.onSendRequest();
    const result = await this.entity.store(
      data.balance_hidden,
      data.server_hidden,
      data.platform_hidden,
      data.leverage_hidden,
      this.initialPageProps.level
    );
    this.dispatch(setLoadingAction(false));
    if (result === null) {
      this.handleModifyResultIfNull();
      return false;
    } else {
      this.dispatch(fetchAuthAction());
      this.handleModifyResultAndNavigateIfOK();
      return true;
    }
  }
}
