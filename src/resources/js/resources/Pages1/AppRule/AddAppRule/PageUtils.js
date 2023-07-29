import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AppRule as Entity } from "../../../../http/entities";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addAppRuleSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        const { addAppRulePage: strings } = useLocale();
        super("AppRules", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/app_rules/admin`;
    }

    onLoad() {
        super.onLoad();
        this.dispatch(setPageIconAction("pe-7s-id"));
    }

    async onSubmit(data) {
        const promise = this.entity.store(data.title, data.body);
        super.onModifySubmit(promise);
    }
}
