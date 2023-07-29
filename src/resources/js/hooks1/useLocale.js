import { useSelector } from "react-redux";

import { en, fa } from "../constants/strings";
import { LOCALES } from "../constants";

const useLocale = () => {
    const layoutState = useSelector((state) => state.layoutReducer);
    switch (layoutState?.locale) {
        case LOCALES.EN:
            return en;
        case LOCALES.FA:
            return fa;
        default:
            return fa;
    }
};

export default useLocale;
