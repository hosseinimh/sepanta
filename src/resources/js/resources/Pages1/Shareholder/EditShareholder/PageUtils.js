import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Shareholder as Entity } from "../../../../http/entities/Shareholder";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editShareholderSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        const { editShareholdersPage: strings } = useLocale();
        super("EditShareholdersPage", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/shareholders`;
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
        this.useForm.setValue("name", result.item.name);
        this.useForm.setValue("family", result.item.family);
        this.useForm.setValue("fatherName", result.item.fatherName);
        this.useForm.setValue("nationalCode", result.item.nationalCode);
        this.useForm.setValue("identityNo", result.item.identityNo);
        this.useForm.setValue("postalCode", result.item.postalCode);
        this.useForm.setValue("village", result.item.village);
        this.useForm.setValue("gender", result.item.gender);
        this.useForm.setValue("birthDate", result.item.birthDate);
        this.useForm.setValue("registeryDate", result.item.registeryDate);
        this.useForm.setValue("mobile", result.item.mobile);
        this.useForm.setValue("tel", result.item.tel);
        this.useForm.setValue("address", result.item.address);
        this.useForm.setValue("description", result.item.description);
    }

    async onSubmit(data) {
        const promise = this.entity.update(
            this.pageState.params.balanceId,
            data.name,
            data.family,
            data.fatherName,
            data.nationalCode,
            data.identityNo,
            data.postalCode,
            data.village,
            data.gender ? 1 : 0,
            data.birthDate,
            data.registeryDate,
            data.mobile,
            data.tel,
            data.address,
            data.description
        );
        super.onModifySubmit(promise);
    }
}
