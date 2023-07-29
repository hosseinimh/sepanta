import { useForm } from "react-hook-form";

import { Ticket as Entity } from "../../../../../http/entities";
import {
  setPageAction,
  setPageIconAction,
  setPagePropsAction,
  setPageTitleAction,
} from "../../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../../utils/BasePageUtils";
import { BASE_PATH, USER_ROLES } from "../../../../../constants";
import { useLocale } from "../../../../../hooks";
import { setLoadingAction } from "../../../../../state/layout/layoutActions";

export class PageUtils extends BasePageUtils {
  constructor(userId) {
    const form = useForm();
    const { ticketsPage: strings } = useLocale();
    super("Tickets", strings, form);
    this.entity = new Entity();
    this.initialPageProps = {
      userId,
      pageNumber: 1,
      itemsCount: 0,
      items: null,
    };
    this.callbackUrl =
      this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? `${BASE_PATH}/users`
        : BASE_PATH;
  }

  onLoad() {
    this.validateIfNotValidateParams();
    super.onLoad();
    const name =
      this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? "Users"
        : "Tickets";
    this.dispatch(setPageAction(name));
    this.dispatch(setPageIconAction("pe-7s-id"));
    this.dispatch(setPagePropsAction(this.initialPageProps));
    this.fillForm(this.initialPageProps);
  }

  validateIfNotValidateParams() {
    this.navigateIfNotValidId(this.initialPageProps.userId);
  }

  async fillForm(data) {
    this.dispatch(setLoadingAction(true));
    const result =
      this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? await this.entity.getPaginate(data?.userId)
        : await this.entity.getPaginateFromUser();
    this.handleCustomFetchResult(result, this.onFetchResultOK(result));
  }

  onFetchResultOK(result) {
    try {
      this.navigateIfAdministrator(result);
      if (this.userState?.user?.role === USER_ROLES.ADMINISTRATOR) {
        this.dispatch(
          setPageTitleAction(
            `${this.strings._title} [ ${result.user.name} ${result.user.family} - ${result.user.username} ]`,
            this.strings._subTitle
          )
        );
      }
      super.handleFetchResultIfOK(this.propsIfOK(result));
    } catch {}
  }

  navigateIfAdministrator(result) {
    if (result.user.role === USER_ROLES.ADMINISTRATOR) {
      this.showErrorAndNavigate(this.strings.administratorTicketsError);
    }
  }

  addAction() {
    if (this.userState?.user?.role === USER_ROLES.ADMINISTRATOR) {
      this.navigate(
        `${BASE_PATH}/tickets/add/${this.pageState?.props?.userId}`
      );
    } else {
      this.navigate(`${BASE_PATH}/tickets/add`);
    }
  }
}
