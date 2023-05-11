import React, { useState } from "react";
import "./authPage.css"




export const AuthPage = () => {
const [form, setForm] = useState( {
  email: '', password: ''
})
// метод  обработки формы
const changeHandler = event => {
  setForm({ ...form, [event.target.name]: event.target.value})                                /*использую оператор spread */
}
return (
<div className='formContainer'>
    <div className="formCard">
      <div className="form_auth_title">
        <h4 className="form-title">Авторизация</h4>
      </div>

<div className="input_group">
  <input
   placeholder="Введите email"
  id="email"
  type="text"
  name="email" className="color_input"
  onChange={changeHandler}/>
</div>
{/* будет обнавляться форма */}
<div className="input_group">
  <input
   placeholder="Введите пароль"
  id="password"
  type="password"
  name="password" className="color_input"
   onChange={changeHandler} />
</div>

      <div className="formBtn">
       <button className="form-auth-btn">Войти</button>
       <button className="form-auth-btn">Регистрация</button>
      </div>
    </div>
  </div>

)
}

