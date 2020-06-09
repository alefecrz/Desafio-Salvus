import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Text, Conteiner, Form } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <img className="logo" src={logoImg} alt="Salvus" />
      <Conteiner>
        <Text>
          <h1>Bem vindo</h1>
          <h3>
            Conectando a <u>Saúde</u> para melhorar a <u>Vida</u> das pessoas.
          </h3>
          <p>
            Faça parte dessa rede de profissionais para que juntos possamos
            melhorar o cuidado, satisfação e qualidade de vida de quem mais
            precisa.
          </p>
          <p>
            Através do sistema Salvus podemos direcionar profissionais em
            diferentes localidades do país, de forma rápida e segura.
          </p>
        </Text>
        <Form>
          <h1>Faça seu login</h1>
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
          <button className="btn-primary" type="submit">
            Login
          </button>
          <a href="/">Esquece a senha?</a>
          <span>Crie sua conta já</span>
          <button className="btn-secundary" type="submit">
            Criar Conta
          </button>
        </Form>
      </Conteiner>
      <footer>
        <hr />
        <div>
          <span>Powered by: Álefe Cruz</span>
          <span>© 2020</span>
        </div>
      </footer>
    </>
  );
};

export default Login;
