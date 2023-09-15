import {useTranslation} from "react-i18next";
import {authLang} from "~/utils/languages/auth.js";
import {getAppearanceName} from "~/utils/languages/appearance.jsx";
import PropTypes from "prop-types";
import {sideLang} from "~/utils/languages/sidebar.js";

const languagesLn = (action, input, appearance = false) => {
    /*
     appearance = false <== bunu böyle kullanmak istememiştim son parametreleri ..options olarak alacaktım
     const {appearance}=options <== bu şekil de kullanamadığım için görmediği için bu kullanımı böyle direkt atribute olarak yaptım..
     */

    const {t} = useTranslation();

    switch (action) {
        case "login":
            return t(authLang(action, input))
        case "register":
            return t(authLang(action, input))
        case "appearance":
            if (appearance) {
                return t(input)

            }
            return t(getAppearanceName(input))
        case "modal_menu":
            return t(authLang(action, input))
        case "SIDEBAR_MENU":
        case "QA_SIDEBAR_MENU":
        case "PROFILE_SIDEBAR_MENU":
            return t(sideLang(action,input))

        default:
            return "";


    }
}

languagesLn.PropTypes = {
    action: PropTypes.oneOf(["login", "register"]),
    input: PropTypes.string.isRequired,
    apBool: PropTypes.bool
}

export default languagesLn;