import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepoInfo } from './styles';
interface RepositoryParams {
  repository: string;
}

export const Repository = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="gitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img src="" alt="repository" />
          <div>
            <strong>FullName</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2350</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>30</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>03</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>
    </>
  );
};
