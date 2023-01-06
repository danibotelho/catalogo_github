import React from 'react';
import { Title, Form } from './styles';
import logo from '../../assets/logo.svg';

export const Dashboard = () => {
  return (
    <>
      <img src={logo} alt="gitCollection" />
      <Title>Catálogo de repositórios do Github</Title>
      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
};
