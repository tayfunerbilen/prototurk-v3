import { Form, Formik } from "formik";
import Button from "~/components/button";
import Input from "~/components/input";
import ModalTitle from "~/components/modal/header";
import Or from "~/components/or";
import { modal } from "~/stores/modal/actions";
import { registerSchema } from "~/validations";
import PropTypes from "prop-types";
import languages from "~/utils/languages/index.js";
export default function RegisterModal({ destroyAll }) {
  return (
    <div className="w-[500px] max-w-full">
      <ModalTitle
        title={languages("register","header_text")}
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
          <Input name="username" label={languages("register","label_kadi_text")} />
          <Input name="email" type="email" label={languages("register","label_email_text")} />
          <Input name="password" type="password" label={languages("register","label_pass_text")} />
          <Button>{languages("register","register_text")}</Button>
          <Or label={languages("register","or_text")} />
          <Button variant="primary-outline" onClick={() => {
            destroyAll()
            modal.append('auth.login')
          }}>{languages("register","login_button_text")}</Button>
        </Form>
      </Formik>
    </div>
  )
}

RegisterModal.propTypes = {
  destroyAll: PropTypes.func
}
