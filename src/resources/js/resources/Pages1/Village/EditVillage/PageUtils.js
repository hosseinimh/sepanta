import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Village as Entity } from "../../../../http/entities/Village";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editVillageSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        const { editvillagesPage: strings } = useLocale();
        super("EditvillagesPage", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/villages`;
    }

    onLoad() {
        this.validateIfNotValidateParams();
        super.onLoad();
        this.dispatch(setPageIconAction("pe-7s-id"));
        this.fillForm(this.pageState.params);
    }

    validateIfNotValidateParams() {
        this.navigateIfNotValidId(this.pageState.params.balanceId);
    }

    async fillForm(data) {
        try {
            this.dispatch(setLoadingAction(true));
            const result = await this.fetchItem(data.balanceId);
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
        this.useForm.setValue("section", result.item.section);
        this.useForm.setValue("village", result.item.village);
    }

    async onSubmit(data) {
        const promise = this.entity.update(
            this.pageState.params.balanceId,
            data.section,
            data.village,
        );
        super.onModifySubmit(promise);
    }
}
