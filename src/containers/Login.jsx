import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/logIn.scss';

const login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const HandleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const dispatch = useDispatch();
  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: form,
    });
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={HandleSubmit}>
            <input
              name='email'
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
¿No tienes ninguna cuenta?
            <Link to='/registrer'>
              <p href=''> Regístrate</p>
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};

export default login;
