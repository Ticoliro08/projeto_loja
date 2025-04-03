import React, { useState } from 'react';
import './cadastro.css'; // Adicione seu CSS aqui
import Header from '../components/Header';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Armazenar as informações no localStorage
    const userData = {
      username,
      email,
      password,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('User  data saved to localStorage:', userData);
  };

  return (
    <>
  <Header/>
  <center>
    <div className="container">
      <div className="heading">Cadastre-se</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            required
            autoComplete="off"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={(e) => e.target.classList.add('valid')}
            onBlur={(e) => {
              e.target.classList.remove('valid');
              if (!e.target.value) {
                setUsername(''); // Limpa o valor se o campo estiver vazio
              }
            }}
          />
          <label htmlFor="username">Full Name</label>
        </div>
        <div className="input-field">
          <input
            required
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => e.target.classList.add('valid')}
            onBlur={(e) => {
              e.target.classList.remove('valid');
              if (!e.target.value) {
                setEmail(''); // Limpa o valor se o campo estiver vazio
              }
            }}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            required
            autoComplete="off"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => e.target.classList.add('valid')}
            onBlur={(e) => {
              e.target.classList.remove('valid');
              if (!e.target.value) {
                setPassword(''); // Limpa o valor se o campo estiver vazio
              }
            }}
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="btn-container">
          <button className="btn" type="submit">Submit</button>
         
        </div>
      </form>
    </div>
    </center>
    </>
  );
}

export default SignIn;