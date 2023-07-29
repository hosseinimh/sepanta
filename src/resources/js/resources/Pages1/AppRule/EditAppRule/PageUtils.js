import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AppRule as Entity } from "../../../../http/entities";
import {
    setPageIconAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editAppRuleSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        const { editAppRulePage: strings } = useLocale();
        super("AppRules", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/app_rules/admin`;
    }

    onLoad() {
        this.validateIfNotValidateParams();
        super.onLoad();
        this.dispatch(setPageIconAction("pe-7s-id"));
        this.fillForm(this.pageState.params);
    }

    validateIfNotValidateParams() {
        this.navigateIfNotValidId(this.pageState.params.appRuleId);
    }

    async fillForm(data) {
        try {
            this.dispatch(setLoadingAction(true));
            const result = await this.fetchItem(data.appRuleId);
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
        this.useForm.setValue("title", result.item.title);
        this.useForm.setValue("body", result.item.body);
        this.dispatch(
            setPageTitleAction(
                `${this.strings._title} [ ${result.item.title} ]`,
                this.strings._subTitle
            )
        );
    }

    async onSubmit(data) {
        const promise = this.entity.update(
            this.pageState.params.appRuleId,
            data.title,
            data.body
        );
        super.onModifySubmit(promise);
    }
}
