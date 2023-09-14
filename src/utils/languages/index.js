import {useTranslation} from "react-i18next";
import {authLang} from "~/utils/languages/auth.js";
import {getAppearanceName} from "~/utils/languages/appearance.jsx";
import PropTypes from "prop-types";

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