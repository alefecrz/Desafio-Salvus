import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import FooterBar from '../../components/Footerbar';
import BTNuser from '../../assets/BTNuser.svg';
import { Main, Card, Graph } from './styles';
import Pie from '../../components/Pie';

const Dashboard: React.FC = () => {
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  useEffect(() => {});

  return (
    <>
      <Navbar />
      <Main>
        <Topbar />
        <Card>
          <h4>Total de profissionais cadastrados</h4>
          <div>
            <img src={BTNuser} alt="users" />
            <h1>10 234</h1>
          </div>
        </Card>
        <Card>
          <h4>Médicos</h4>
          <div>
            <h1>10 234</h1>
          </div>
        </Card>
        <Card>
          <h4>Enfermeiros</h4>
          <div>
            <h1>10 234</h1>
          </div>
        </Card>
        <Card>
          <h4>Fonoaudiologia</h4>
          <div>
            <h1>10 234</h1>
          </div>
        </Card>
        <Card>
          <h4>Técnicos de Enfermagem</h4>
          <div>
            <h1>10 234</h1>
          </div>
        </Card>
      </Main>
      <Graph>
        <div>
          <h4>Profissionais x Categoria</h4>
          <div className="conteiner">
            <ul>
              <li>
                <h3>value</h3>
                <span>231</span>
              </li>
              <hr />
              <li>
                <h3>value</h3>
                <span>231</span>
              </li>
              <hr />
              <li>
                <h3>value</h3>
                <span>231</span>
              </li>
              <hr />
              <li>
                <h3>value</h3>
                <span>231</span>
              </li>
              <hr />
            </ul>
            <div className="grafh">
              <Pie />
            </div>
          </div>
        </div>
      </Graph>
      <FooterBar />
    </>
  );
};

export default Dashboard;
