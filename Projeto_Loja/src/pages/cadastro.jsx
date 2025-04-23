import React, { useState } from 'react';
import './cadastro.css'; // Adicione seu CSS aqui
import Header from '../components/Header';

function SignIn() {
  const [fullName, setFullName] = useState(''); // Estado para o nome completo
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErros] = useState({ fullName: "", email: "", password: "" });

  function validarfullName(nome) {
    const regex = /^[a-zA-Z0-9]*$/; // Apenas letras e números
    return regex.test(nome);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const novosErros = { fullName: "", email: "", password: "" };

    // Validação do nome completo
    if (fullName.length <= 3) {
      novosErros.fullName = "O nome de usuário deve ter mais de 3 caracteres.";
    } else if (!validarfullName(fullName)) {
      novosErros.fullName = "Nome de usuário inválido! Use apenas letras e números.";
    }

    // Validação do email
    if (!email.includes("@")) {
      novosErros.email = "Email inválido! O email deve conter '@'.";
    }

    // Validação da senha
    if (password.length < 5) {
      novosErros.password = "A senha deve ter pelo menos 5 caracteres.";
    }

    setErros(novosErros);

    // Se não houver erros, prossegue
    if (!novosErros.fullName && !novosErros.email && !novosErros.password) {
      // Armazenar as informações no localStorage
      const userData = {
        fullName, // Armazenando o nome completo
        email,
        password,
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      alert("Cadastro realizado com sucesso!");
      // Navegar para a página principal após armazenar os dados
      history.push('/'); // Redirecionar para a página principal
      console.log('Dados do usuário salvos no localStorage:', userData);
      alert(`Cadastro realizado! Usuário: ${fullName}, Email: ${email}`);
    }
  };

  return (
    <>
      <Header />
      <center>
        <form className="form" onSubmit={handleSubmit}>
          <p id="heading">Cadastro</p>
          <div className="field">
            <input
              required
              autoComplete="off"
              placeholder="Full Name" // Campo para o nome completo
              className="input-field"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)} // Atualiza o estado do nome completo
            />
          </div>
          {erros.fullName && <p style={{ color: "red" }}>{erros.fullName}</p>}

          <div className="field">
            <input
              required
              autoComplete="off"
              placeholder="Email" // Campo para email
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
            />
          </div>
          {erros.email && <p style={{ color: "red" }}>{erros.email}</p>}

          <div className="field">
            <input
              required
              autoComplete="off"
              placeholder="Password" // Campo para senha
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
            />
          </div>
          {erros.password && <p style={{ color: "red" }}>{erros.password}</p>}

          <div className="btn">
            <button className="button1" type="submit">Cadastrar</button>
          </div>
        </form>
      </center>
    </>
  );
}

export default SignIn;