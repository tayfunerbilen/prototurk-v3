import { Formik, Form } from "formik";
import Button from "~/components/button";
import Input from "~/components/input";
import ModalTitle from "~/components/modal/header";
import Or from "~/components/or";
import { modal } from "~/stores/modal/actions";
import { loginSchema } from "~/validations";
import {setUser} from "~/stores/auth/actions";
import PropTypes from "prop-types";
import languagesLn from "~/utils/languages/index.js"
export default function LoginModal({ destroy }) {
  return (
    <>
      <ModalTitle
        title={languagesLn("login","header_text")}
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
          <Input label={languagesLn("login","label_kadi_text")} name="username" />
          <Input label={languagesLn("login","label_pass_text")} name="password" type="password" />
          <Button type="submit">
              {languagesLn("login","login_button_text")}
          </Button>
          <Or label={languagesLn("login","or_text")} />
          <Button
            variant="primary-outline"
            type="button"
            onClick={() => modal.append('auth.register')}
          >
              {languagesLn("login","register_text")}
          </Button>
        </Form>
      </Formik>
    </>
  )
}

LoginModal.propTypes = {
  destroy: PropTypes.func
}
