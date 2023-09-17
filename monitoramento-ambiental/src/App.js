import React, { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Dados dos usuários permitidos
  const allowedUsers = [
    { username: 'User', rm: 'RM99209', password: '123456' },
    { username: 'User', rm: 'RM550154', password: '123456' },
    { username: 'User', rm: 'RM98919', password: '123456' },
  ];

  // Verifique se o usuário está autenticado no LocalStorage ao carregar o aplicativo
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Função para fazer login
  const handleLogin = (username, rm, password) => {
    // Verifique se as credenciais correspondem a um dos usuários permitidos
    const validUser = allowedUsers.find(
      (user) => user.username === username && user.rm === rm && user.password === password
    );

    if (validUser) {
      // Se as credenciais forem válidas, defina o estado de autenticação como true
      setIsLoggedIn(true);
      setErrorMessage(''); // Limpe a mensagem de erro
      // Salve o estado de autenticação no LocalStorage
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      // Se as credenciais forem inválidas, mostre uma mensagem de erro
      setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  // Função para fazer logout
  const handleLogout = () => {
    // Defina o estado de autenticação como false
    setIsLoggedIn(false);

    // Remova o estado de autenticação do LocalStorage
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Body isLoggedIn={isLoggedIn} onLogin={handleLogin} errorMessage={errorMessage} />
      <Footer />
    </div>
  );
}

export default App;