export const auth = {
    login: [
        {
            key: "login_button_text",
            value: "login.login_button_text"
        },
        {
            key: "header_text",
            value: "login.header_text"
        },
        {
            key: "or_text",
            value: "login.or_text"
        },
        {
            key: "register_text",
            value: "login.register_text"
        },
        {
            key: "label_kadi_text",
            value: "login.label_kadi_text"
        },
        {
            key: "label_pass_text",
            value: "login.label_pass_text"
        }
    ],
    register: [
        {
            key: "login_button_text",
            value: "register.login_button_text"
        },
        {
            key: "header_text",
            value: "register.header_text"
        },
        {
            key: "or_text",
            value: "register.or_text"
        },
        {
            key: "register_text",
            value: "register.register_text"
        },
        {
            key: "label_kadi_text",
            value: "register.label_kadi_text"
        },
        {
            key: "label_email_text",
            value: "register.label_email_text"
        },
        {
            key: "label_pass_text",
            value: "register.label_pass_text"
        }
    ]
}

const authControl = authName => auth[authName] || [];

export const authLang = (key,input) => {
    const auth = authControl(key)
    return `auth.${auth.find(auth => auth.key === input)?.value}`
}