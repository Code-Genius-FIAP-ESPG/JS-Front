import './Body.css';
import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos para a primeira caixa (Contextualização do Problema)
const ProblemBox = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #09b0fd; /* Cor de fundo para o primeiro box (Contextualização do Problema) */
`;

// Estilos para a segunda caixa (Apresentação da Solução)
const SolutionBox = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #4cfd00; /* Cor de fundo para o segundo box (Apresentação da Solução) */
`;

function Body({ isLoggedIn, onLogin, errorMessage, setErrorMessage }) {
  const [rm, setRM] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Verifique as credenciais aqui
    if (
      (rm === 'RM99209' && password === '123456') ||
      (rm === 'RM550154' && password === '123456') ||
      (rm === 'RM98919' && password === '123456')
    ) {
      onLogin('User', rm, password); // Chame a função de login quando as credenciais estiverem corretas
    } else {
      setErrorMessage('Credenciais inválidas. Tente novamente.'); // Exiba uma mensagem de erro se as credenciais estiverem incorretas
    }
  };

  return (
    <main className="grid-container">
      {/* Se o usuário não estiver autenticado, exiba os campos de login */}
      {!isLoggedIn && (
        <div className="content">
          <h2>Login</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <label htmlFor="rm">RM:</label>
          <input
            type="text"
            id="rm"
            value={rm}
            onChange={(e) => setRM(e.target.value)}
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLoginClick}>Entrar</button>
        </div>
      )}
      {isLoggedIn && (
        <div className="content">
          <ProblemBox id="problem">
            <h2>Contextualização do Problema</h2>
            <p>
              A falta de controle adequado da temperatura e umidade do ar pode
              acarretar uma série de problemas ao meio ambiente. Quando os níveis
              de temperatura e umidade são muito elevados ou muito baixos,
              ocorrem consequências negativas que afetam não apenas os seres
              humanos, mas também os ecossistemas naturais.
            </p>
            <p>
              Um dos principais problemas decorrentes da temperatura descontrolada
              é o aumento do consumo de energia. Em ambientes com temperaturas
              elevadas, a demanda por sistemas de refrigeração, como ar
              condicionado, aumenta significativamente, o que resulta em um consumo
              excessivo de energia elétrica. Isso não apenas contribui para o
              esgotamento dos recursos naturais, mas também gera um maior impacto
              ambiental, especialmente quando a energia é proveniente de fontes
              não renováveis.
            </p>
            <p>
              Além disso, a temperatura e a umidade inadequadas podem afetar negativamente 
              os ecossistemas e a biodiversidade. Muitas espécies de plantas e animais possuem 
              tolerâncias específicas para a temperatura e a umidade do ambiente em que vivem. 
              Alterações bruscas ou extremas nesses parâmetros podem levar à morte de espécies 
              sensíveis, desequilíbrio nos ecossistemas e perda de biodiversidade. Isso pode 
              ter efeitos cascata, afetando também outras espécies que dependem dessas 
              interações ecológicas.
            </p>
            <p>
              Além disso, a falta de controle da temperatura e umidade do ar pode influenciar 
              negativamente a qualidade do ar. Ambientes com alta umidade podem favorecer o 
              crescimento de mofo e fungos, que podem liberar esporos e causar problemas 
              respiratórios em humanos e animais. Por outro lado, ambientes com baixa umidade
              podem resultar em ressecamento da pele, desconforto respiratório e 
              maior propagação de doenças respiratórias.
            </p>
            <p>
              Portanto, é fundamental reconhecer a importância do controle adequado da temperatura 
              e umidade do ar, tanto para a conservação do meio ambiente quanto para o bem-estar 
              das pessoas. A implementação de práticas e tecnologias que visem a eficiência energética, 
              o uso de fontes renováveis e o monitoramento contínuo dos níveis de temperatura e umidade 
              são medidas essenciais para mitigar os impactos negativos e promover um ambiente 
              mais sustentável e saudável para todos.
            </p>
          </ProblemBox>
          <SolutionBox id="solution">
            <h2>Apresentação da Solução</h2>
            <p>
              Uma solução eficaz para lidar com os desafios causados pela falta de controle da temperatura, 
              umidade do ar e luz é o monitoramento adequado desses parâmetros. Através do uso de tecnologias 
              avançadas e dispositivos de monitoramento, podemos obter dados precisos e em tempo real 
              sobre as condições ambientais, permitindo uma intervenção adequada e eficiente.
            </p>
            <p>
              O monitoramento regular da temperatura é crucial para identificar variações significativas 
              que possam indicar problemas, tais como ambientes excessivamente quentes ou frios. 
              Com essas informações em mãos, é possível adotar medidas corretivas, ajustando o sistema 
              de climatização ou implementando soluções de isolamento térmico, visando manter condições 
              adequadas tanto para o conforto das pessoas quanto para a preservação de equipamentos sensíveis.
            </p>
            <p>
              Da mesma forma, o monitoramento da umidade do ar desempenha um papel fundamental na prevenção de 
              problemas como a formação de mofo e o desenvolvimento de doenças respiratórias. Ao detectar níveis 
              excessivos de umidade, é possível tomar medidas para a ventilação adequada do ambiente e implementar 
              sistemas de desumidificação. Por outro lado, em ambientes com baixa umidade, a utilização de 
              umidificadores pode ser benéfica para melhorar a qualidade do ar e o conforto respiratório.
            </p>
            <p>
              Além disso, o monitoramento da luz é importante para garantir uma iluminação adequada nos ambientes internos. 
              A quantidade e qualidade da luz podem afetar o bem-estar das pessoas, além de influenciar o crescimento de 
              plantas e a realização de atividades específicas. Com o monitoramento, é possível ajustar a iluminação 
              artificial de forma mais eficiente, economizando energia e proporcionando um ambiente mais saudável.
            </p>
            <p>
              O uso de um aplicativo que coleta e apresenta os dados de monitoramento de forma clara e acessível é uma 
              solução conveniente e eficaz. Com ele, os usuários podem visualizar as informações em tempo real e 
              receber alertas caso ocorra alguma variação significativa. Além disso, o aplicativo pode fornecer 
              sugestões e orientações personalizadas sobre como melhorar as condições do ambiente, contribuindo 
              para um maior conforto, eficiência energética e sustentabilidade.
            </p>
            <p>
              Em resumo, o monitoramento adequado da temperatura, umidade do ar e luz é uma solução valiosa para
              enfrentar os desafios ambientais e promover um ambiente mais saudável e eficiente. Ao fornecer 
              informações precisas e em tempo real, o monitoramento nos capacita a adotar medidas corretivas 
              de forma proativa, garantindo o bem-estar das pessoas, a preservação dos recursos e 
              a redução do impacto ambiental.
            </p>
          </SolutionBox>
        </div>
      )}
    </main>
  );
}

export default Body;
