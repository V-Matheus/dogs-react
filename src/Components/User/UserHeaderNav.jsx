import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta"><MinhasFotos/></NavLink>
      <NavLink to="/conta/estatisticas"><Estatisticas /></NavLink>
      <NavLink to="/conta/postar"><AdicionarFoto/></NavLink>
      <button onClick={userLogout}><Sair/></button>
    </nav>
  );
};

export default UserHeaderNav;
