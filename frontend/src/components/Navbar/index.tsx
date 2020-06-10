import React from 'react';

import BTNexit from '../../assets/BTNexit.svg';
import BTNlogo from '../../assets/BTNlogo.svg';
import BTNuser from '../../assets/BTNuser.svg';
import BTNdashboard from '../../assets/BTNdashboard.svg';
import profile from '../../assets/profile.png';

import { Bar } from './styles';

const NavBar = () => {
  return (
    <>
      <Bar>
        <ul>
          <li>
            <div>
              <img className="shortLogo" src={BTNlogo} alt="logo" />
              <div className="profile">
                <img src={profile} alt="logo" />
                <h5>Nome user</h5>
                <h6>Funtion</h6>
              </div>
            </div>
          </li>
          <li>
            <a href="/">
              <img src={BTNdashboard} alt="logo" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={BTNuser} alt="logo" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={BTNexit} alt="logo" />
              <span>Exit</span>
            </a>
          </li>
        </ul>
      </Bar>
    </>
  );
};

export default NavBar;
