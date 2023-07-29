import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Ticket as Entity } from "../../../../http/entities";
import {
  setPageAction,
  setPageIconAction,
  setPageTitleAction,
} from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH, USER_ROLES } from "../../../../constants";
import { addTicketThreadSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";
import { setLoadingAction } from "../../../../state/layout/layoutActions";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const { ticketThreadsPage: strings } = useLocale();
    super("Tickets", strings, form);
    this.entity = new Entity();
    this.initialPageProps = {
      item: null,
      threads: null,
    };
    this.callbackUrl =
      this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? `${BASE_PATH}/tickets/${this.pageState?.params?.ticketId}`
        : `${BASE_PATH}/tickets`;
  }

  onLoad() {
    this.validateIfNotValidateParams();
    super.onLoad();
    const name =
      this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? "Users"
        : "Tickets";
    this.dispatch(setPageAction(name));
    this.dispatch(setPageIconAction("pe-7s-users"));
    this.fillForm(this.pageState.params);
  }

  validateIfNotValidateParams() {
    this.navigateIfNotValidId(this.pageState.params.ticketId);
  }

  async fillForm(data) {
    try {
      this.dispatch(setLoadingAction(true));
      const result = await this.fetchItem(data.ticketId);
      this.navigateIfItemNotFound(result);
      this.handleCustomFetchResult(result, this.onFetchResultOK(result));
    } catch {
    } finally {
      this.dispatch(setLoadingAction(false));
    }
  }

  async fetchItem(id) {
    return this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
      ? await this.entity.getAndSeen(id)
      : await this.entity.getFromUserAndSeen(id);
  }

  onFetchResultOK(result) {
    this.dispatch(
      setPageTitleAction(
        `${this.strings._title} [ ${result.item.typeText} - ${result.item.subject} ]`,
        this.strings._subTitle
      )
    );
    super.handleFetchResultIfOK(this.propsIfOK(result));
  }

  propsIfOK(result) {
    try {
      return {
        item: result.item,
        threads: result.threads,
      };
    } catch {}
  }

  async onSubmit(data) {
    const promise =
      this.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? this.entity.storeThread(
            this.pageState.props?.item?.id,
            data.content,
            this.pageState?.props?.file
          )
        : this.entity.storeThreadFromUser(
            this.pageState.props?.item?.id,
            data.content,
            this.pageState?.props?.file
          );
    super.onModifySubmit(promise);
  }

  onCancel() {
    if (this.userState?.user?.role === USER_ROLES.ADMINISTRATOR) {
      this.navigate(
        `${BASE_PATH}/tickets/${this.pageState?.props?.item?.userId}`
      );
    } else {
      this.navigate(`${BASE_PATH}/tickets`);
    }
  }
}
