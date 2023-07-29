import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Shareholder as Entity } from "../../../../http/entities/Shareholder";
import { setPageIconAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addShareholderSchema as schema } from "../../../validations";
import { useLocale } from "../../../../hooks";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        const { addShareholdersPage: strings } = useLocale();
        super("AddShareholdersPage", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/shareholders`;
    }

    onLoad() {
        super.onLoad();
        this.dispatch(setPageIconAction("pe-7s-id"));
    }

    async onSubmit(data) {
        const promise = this.entity.store(
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
