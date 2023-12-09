
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({handleRegister}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function onRegister(e) {
    e.preventDefault();
    handleRegister(email, password);
  }

  return (
    <section className="auth">
      <h2 className="auth_title">Регистрация</h2>
      <form className="auth_form" onSubmit={onRegister}>
        <fieldset className="auth_fieldset">
          <input type="email" name="email" className="auth_input" placeholder="Email" required onChange={handleChangeEmail} />
          <input type="password" name="password" className="auth_input" placeholder="Пароль" minLength={2} maxLength={10} required onChange={handleChangePassword} />
        </fieldset>
        <button className="auth__submit">Зарегистрироваться</button>
      </form>
      <p className="auth_signin">Уже зарегистрированы?<Link className="auth_login-link" to="/sign-in">Войти</Link></p>
    </section>
  )
}