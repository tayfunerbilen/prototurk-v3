import { Formik, Form } from "formik";
import Button from "~/components/button";
import Input from "~/components/input";
import ModalTitle from "~/components/modal/header";
import Or from "~/components/or";
import { modal } from "~/stores/modal/actions";
import { loginSchema } from "~/validations";
import {setUser} from "~/stores/auth/actions";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {authLang} from "~/utils/languages/auth.js";

export default function LoginModal({ destroy }) {
    const {t,i18n}=useTranslation();
  return (
    <>
      <ModalTitle
        title={t(authLang("header_text"))}
      />
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={values => {
          setUser(values)
          destroy()
        }}
      >
        <Form className="grid gap-y-4 p-4">
          <Input label={t(authLang("label_kadi_text"))} name="username" />
          <Input label={t(authLang("label_pass_text"))} name="password" type="password" />
          <Button type="submit">
              {t(authLang("login_button_text"))}
          </Button>
          <Or label={t(authLang("or_text"))} />
          <Button
            variant="primary-outline"
            type="button"
            onClick={() => modal.append('auth.register')}
          >
              {t(authLang("register_text"))}
          </Button>
        </Form>
      </Formik>
    </>
  )
}

LoginModal.propTypes = {
  destroy: PropTypes.func
}
