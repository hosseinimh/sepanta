import { en, fa } from "../constants/strings";
import { LOCALES } from "../constants";
import utils from "../utils/Utils";

const useLSLocale = () => {
    const locale = utils.getLSVariable("locale");
    switch (locale) {
        case LOCALES.EN:
            return en;
        case LOCALES.FA:
            return fa;
        default:
            return fa;
    }
};

export default useLSLocale;
