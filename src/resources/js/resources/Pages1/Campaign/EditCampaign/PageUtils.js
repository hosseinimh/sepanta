import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Campaign as Entity } from "../../../../http/entities";
import {
    setPageIconAction,
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editCampaignSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        const { editCampaignPage: strings } = useLocale();
        super("Campaigns", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/campaigns`;
    }

    onLoad() {
        this.validateIfNotValidateParams();
        super.onLoad();
        this.dispatch(setPageIconAction("pe-7s-id"));
        this.fillForm(this.pageState.params);
    }

    validateIfNotValidateParams() {
        this.navigateIfNotValidId(this.pageState.params.campaignId);
    }

    async fillForm(data) {
        try {
            this.dispatch(setLoadingAction(true));
            const result = await this.fetchItem(data.campaignId);
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
        this.useForm.setValue("isActive", result.item.isActive);
        this.dispatch(setPagePropsAction({ campaignId: result.item.id }));
        this.dispatch(
            setPageTitleAction(
                `${this.strings._title} [ ${result.item.title} ]`,
                this.strings._subTitle
            )
        );
    }

    async onSubmit(data) {
        const promise = this.entity.update(
            this.pageState.params.campaignId,
            data.title,
            data.isActive ? 1 : 0
        );
        super.onModifySubmit(promise);
    }
}
