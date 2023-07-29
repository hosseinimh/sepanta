import { useForm } from "react-hook-form";

import { Challenge as Entity } from "../../../../http/entities";
import {
  setPageIconAction,
  setPagePropsAction,
} from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import {
  BASE_PATH,
  MESSAGE_CODES,
  MESSAGE_TYPES,
  USER_ROLES,
} from "../../../../constants";
import utils from "../../../../utils/Utils";
import { useLocale } from "../../../../hooks";
import {
  setLoadingAction,
  setNotificationsAction,
  setShownModalAction,
} from "../../../../state/layout/layoutActions";
import { setMessageAction } from "../../../../state/message/messageActions";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm();
    const { challengesPage: strings } = useLocale();
    super("Challenges", strings, form);
    this.entity = new Entity();
    this.initialPageProps = {
      pageNumber: 1,
      itemsCount: 0,
      item: null,
      items: null,
      field: null,
      modal: null,
      action: null,
    };
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-users"));
    this.fillForm();
  }

  onAnalyze(item) {
    this.dispatch(
      setPagePropsAction({
        action: "ANALYZE",
        item,
      })
    );
  }

  onAccount(item) {
    this.dispatch(
      setPagePropsAction({
        action: "ACCOUNT",
        item,
      })
    );
  }

  onCopy(field) {
    this.dispatch(
      setPagePropsAction({
        action: "COPY",
        field,
      })
    );
  }

  onShowModal(e, modal, item) {
    e.stopPropagation();
    this.dispatch(
      setPagePropsAction({
        modal,
        item,
      })
    );
    this.dispatch(setShownModalAction(modal));
  }

  onAction(props) {
    switch (props.action) {
      case "ANALYZE":
        this.analyzeAction(props.item);

        break;
      case "COPY":
        this.copyAction(props.field);

        break;
    }

    super.onAction(props);
  }

  editAction({ id }) {
    if (utils.isId(id)) {
      this.navigate(`${BASE_PATH}/challenges/edit/${id}`);
    }
  }

  analyzeAction({ id }) {
    if (utils.isId(id)) {
      this.navigate(`${BASE_PATH}/challenges/analyze/${id}`);
    }
  }

  copyAction(field) {
    var element = document.querySelector(`#${field}`);
    if (!element) {
      return;
    }
    element.select();
    element.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(element.value);
  }

  async fillForm() {
    const promise =
      this?.userState?.user?.role === USER_ROLES.ADMINISTRATOR
        ? this.entity.getPaginate(this.pageState.props?.pageNumber ?? 1)
        : this.entity.getPaginateFromUser(
            this.pageState.props?.pageNumber ?? 1
          );
    await super.fillForm(promise);
  }

  async changeStatus(id, challengeStatus) {
    this.dispatch(setLoadingAction(true));
    const result = await this.entity.changeStatus(id, challengeStatus);
    if (result) {
      this.dispatch(
        setNotificationsAction({
          ...this.layoutState?.notifications,
          waitingChallengesCount: result?.waitingChallengesCount,
        })
      );
      this.dispatch(
        setMessageAction(
          this.strings.submitted,
          MESSAGE_TYPES.SUCCESS,
          MESSAGE_CODES.OK
        )
      );
    }
    await this.fillForm();
  }
}
