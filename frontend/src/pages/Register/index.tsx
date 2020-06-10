import React, { useState } from 'react';

import { Conteiner, LogoContent } from './styles';
import logoImg from '../../assets/logo.svg';
import personalDataImg from '../../assets/personalData.svg';
import addressDataImg from '../../assets/addressData.svg';
import professionalDataImg from '../../assets/professionalData.svg';

const Register: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');
  // const [email, setEmail] = useState('');
  // const [email, setEmail] = useState('');
  // const [email, setEmail] = useState('');

  function handleCreate(data: Object): void {
    console.log(data);
  }

  return (
    <>
      <LogoContent>
        <img className="logo" src={logoImg} alt="Salvus" />
      </LogoContent>
      <Conteiner>
        <button type="submit" className="btn-secundary">
          Voltar
        </button>
        <h1>Registro</h1>
        <form onSubmit={handleCreate}>
          <hr />
          <div className="content">
            <div>
              <h5>Dados Pessoais</h5>
              <input placeholder="Nome completo *" />
              <input placeholder="E-mail *" />
              <input placeholder="Senha *" />
              <input placeholder="Repetir senha *" />
              <input placeholder="CPF *" />
              <input placeholder="Data de nascimento *" />
              <input placeholder="Telefone celular *" />
              <input placeholder="Telefone residencial" />
            </div>
            <img src={personalDataImg} alt="Personal Data" />
          </div>
          <hr />
          <div className="content">
            <div>
              <h5>Endereço Residencial</h5>
              <input placeholder="CEP *" />
              <input placeholder="Endereço *" />
              <input placeholder="Cidade *" />
              <input placeholder="Estado *" />
            </div>
            <img src={addressDataImg} alt="Personal Data" />
          </div>
          <hr />
          <div className="content">
            <div>
              <h5>Dados Pessoais</h5>
              <select>
                <option value="" selected disabled hidden>
                  Categoria
                </option>
                <option value="medico">Médico</option>
                <option value="enfermeiro">Enfermeiro</option>
                <option value="fonoaudiologo">Fonoaudiologo</option>
                <option value="TecEnfermagem">Técnico de enfermagem</option>
              </select>
              <input placeholder="CRM *" />
              <input placeholder="Especialidade primária *" />
              <input placeholder="Especialidade secundária" />
            </div>
            <img src={professionalDataImg} alt="Personal Data" />
          </div>
        </form>
        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </Conteiner>
      <footer>
        <hr />
        <div>
          <span>Make by: Álefe Cruz</span>
          <span>© 2020</span>
        </div>
      </footer>
    </>
  );
};

export default Register;
