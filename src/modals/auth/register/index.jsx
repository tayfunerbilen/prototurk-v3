import { Form, Formik } from "formik";
import Button from "~/components/button";
import Input from "~/components/input";
import ModalTitle from "~/components/modal/header";
import Or from "~/components/or";
import { modal } from "~/stores/modal/actions";
import { registerSchema } from "~/validations";
import PropTypes from "prop-types";
import {authLang} from "~/utils/languages/auth.js";
import {useTranslation} from "react-i18next";

export default function RegisterModal({ destroyAll }) {
    const {t,i18n}=useTranslation();
  return (
    <div className="w-[500px] max-w-full">
      <ModalTitle
        title={t(authLang("header_text"))}
      />
      <Formik
        validationSchema={registerSchema}
        initialValues={{
          username: '',
          password: '',
          email: '',
          rules: false
        }}
        onSubmit={values => console.log('values', values)}
      >
        <Form className="grid gap-y-4 p-4">
          <Input name="username" label={t(authLang("label_kadi_text"))} />
          <Input name="email" type="email" label={t(authLang("label_email_text"))} />
          <Input name="password" type="password" label={t(authLang("label_pass_text"))} />
          <Button>{t(authLang("register_text"))}</Button>
          <Or label={t(authLang("or_text"))} />
          <Button variant="primary-outline" onClick={() => {
            destroyAll()
            modal.append('auth.login')
          }}>{t(authLang("login_button_text"))}</Button>
        </Form>
      </Formik>
    </div>
  )
}

RegisterModal.propTypes = {
  destroyAll: PropTypes.func
}
