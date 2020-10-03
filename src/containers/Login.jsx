import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {loginRequest} from '../actions'
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/logIn.scss';

const login = () => {
  const [form, setValues] = useState({
    email: '',
  });
  const HandleInput = event =>{
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const HandleSubmit = event =>{
    event.preventDefault();
    console.log(form);

  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={HandleSubmit}>
          <input
            name='correo'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={HandleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={HandleInput}
          />
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} />
            {' '}
Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} />
            {' '}
Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
No tienes ninguna cuenta
          <Link to='/registrer'>
            <p href=''>Regístrate</p>
          </Link>
        </p>
      </section>
    </section>

  );
};
const mapDispatchToProps = {
  loginRequest,

};

export default connect(null, mapDispatchToProps)(login);
