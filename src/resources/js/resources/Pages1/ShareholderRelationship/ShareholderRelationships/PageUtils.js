import { useForm } from "react-hook-form";

import { ShareholderRelationship as Entity } from "../../../../http/entities/ShareholderRelationship";
// import { ChallengeBalance as Entity } from "../../../../http/entities";
import { setPageIconAction, setPagePropsAction } from "../../../../state/page/pageActions";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import utils from "../../../../utils/Utils";
import { useLocale } from "../../../../hooks";
import { setShownModalAction } from "../../../../state/layout/layoutActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm();
        const { shareholderRelationshipsPage: strings } = useLocale();
        super("ShareholderRelationshipsPage", strings, form);
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
        this.navigate(`${BASE_PATH}/shareholders/relationship-shareholder/add`);
    }

    editAction({ id }) {
        if (utils.isId(id)) {
            this.navigate(
                `${BASE_PATH}/shareholders/relationship-shareholder/edit/${id}`
            );
        }
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

    async fillForm() {
        const promise = this.entity.getAll();
        super.fillForm(promise);
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
            data.villageTwo,
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
