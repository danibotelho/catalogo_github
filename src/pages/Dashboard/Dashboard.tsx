import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  useRef,
} from 'react';
import { Title, Form, Repos, Error } from './styles';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const formEl = useRef<HTMLFormElement | null>(null);

  const [repos, setRepos] = useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem('@GitCollection:repositories');
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos));
  }, [repos]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Informe o username/repositório');
    }
    try {
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);

      const repository = response.data;
      setRepos([...repos, repository]);
      formEl.current?.reset();
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Repositório não encontrado no Github');
    }
  }
  return (
    <>
      <img src={logo} alt="gitCollection" />
      <Title>Catálogo de repositórios do Github</Title>

      <Form
        ref={formEl}
        onSubmit={handleAddRepo}
        hasErros={Boolean(inputError)}
      >
        <input
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repos>
        {repos.map((repository, index) => (
          <Link
            to={`/repositories/${repository.full_name}`}
            key={repository.full_name + index}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repos>
    </>
  );
};

export default Dashboard;
