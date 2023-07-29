import { useForm } from "react-hook-form";

import { Shareholder as Entity } from "../../../../http/entities/Shareholder";
import {
    setPageIconAction,
    setPagePropsAction,
} from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import utils from "../../../../utils/Utils";
import { useLocale } from "../../../../hooks";
import { setShownModalAction } from "../../../../state/layout/layoutActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm();
        const { shareholdersPage: strings } = useLocale();
        super("ShareholdersPage", strings, form);
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
        this.navigate(`${BASE_PATH}/shareholders/add`);
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

    editAction({ id }) {
        if (utils.isId(id)) {
            this.navigate(`${BASE_PATH}/shareholders/edit/${id}`);
        }
    }
    addActionRelationship({ id }) {
        if (utils.isId(id)) {
            this.navigate(
                `${BASE_PATH}/shareholders/relationship-shareholder/${id}`
            );
        }
    }

    // async onDelete({ id }) {
    //     const promise = this.entity.delete(id);
    // }

    async fillForm() {
        const promise = this.entity.getAll();
        super.fillForm(promise);
    }
    async onSubmit(data) {
        const promise = this.entity.store(
            data.accountNum,
            data.receiptNumber,
            data.dateOfDeposit,
            data.bankName
        );
        super.onModifySubmit(promise);
    }
}
