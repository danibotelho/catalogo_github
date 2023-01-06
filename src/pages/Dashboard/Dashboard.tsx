import React from 'react';
import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

export const Dashboard = () => {
  return (
    <>
      <img src={logo} alt="gitCollection" />
      <Title>Catálogo de repositórios do Github</Title>

      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/79178227?v=4"
            alt="Repositorios"
          />
          <div>
            <strong>danibotelho/nextjs-mini-curso</strong>
            <p>Estudo sobre Next.js</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
