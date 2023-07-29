import { useForm } from "react-hook-form";

import { Village as Entity } from "../../../../http/entities/Village";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import utils from "../../../../utils/Utils";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
  constructor() {
    const form = useForm();
    const { villagesPage: strings } = useLocale();
    super("Villages", strings, form);
    this.entity = new Entity();
    this.initialPageProps = {
      item: null,
      items: null,
      action: null,
    };
  }

  onLoad() {
    super.onLoad();
    this.dispatch(setPageIconAction("pe-7s-users"));
    this.fillForm();
  }

  addAction() {
    this.navigate(`${BASE_PATH}/villages/add`);
  }

  editAction({ id }) {
    if (utils.isId(id)) {
      this.navigate(`${BASE_PATH}/villages/edit/${id}`);
    }
  }

  async fillForm() {
    const promise = this.entity.getAll();
    super.fillForm(promise);
  }

  propsIfOK(result) {
    try {
      return {
        items: result.items,
        items: result.items,
        itemsCount: result.count,
      };
    } catch {}
  }
}
