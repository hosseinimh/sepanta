import { useForm } from "react-hook-form";

import { AppRule as Entity } from "../../../../http/entities";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import utils from "../../../../utils/Utils";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm();
        const { appRulesPage: strings } = useLocale();
        super("AppRules", strings, form);
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
        this.navigate(`${BASE_PATH}/app_rules/add`);
    }

    editAction({ id }) {
        if (utils.isId(id)) {
            this.navigate(`${BASE_PATH}/app_rules/edit/${id}`);
        }
    }

    async fillForm() {
        const promise = this.entity.getAll();
        super.fillForm(promise);
    }
}
