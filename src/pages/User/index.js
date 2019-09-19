import React, { Component } from 'react';
import api from '../../services/api';
import { Container } from '../../components/Container/index';
import { HeaderUser, UserAvatar, Repositories } from './styles';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { Pagination } from '../../components/Pagination/index';

export default class User extends Component {
  state = {
    user: [],
    repositories: [],
    loading: true,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { page } = this.state;
    const login = decodeURIComponent(match.params.repos);

    const [user, repositories] = await Promise.all([
      await api.get(`/users/${login}`),
      await api.get(`/users/${login}/repos`, {
        params: {
          page,
        },
      }),
    ]);

    const data = {
      name: user.data.name,
      date: format(
        parseISO(user.data.created_at),
        "'Day' dd 'of' MMMM', at ' HH:mm'h'"
      ),
      avatar: user.data.avatar_url,
    };

    this.setState({
      loading: false,
      repositories: repositories.data,
      user: data,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;
    const { match } = this.props;
    const login = decodeURIComponent(match.params.repos);
    if (prevState.page !== page) {
      const response = await api.get(`/users/${login}/repos`, {
        params: {
          page,
        },
      });
      this.setState({
        repositories: response.data,
        loading: false,
      });
    }
  }

  render() {
    const { user, repositories, page } = this.state;
    return (
      <Container>
        <HeaderUser>
          <Link to="/">Back to the Users</Link>
          <UserAvatar src={user.avatar}></UserAvatar>
          <p>{user.name}</p>
          <p>Created at: {user.date}</p>
        </HeaderUser>
        <Repositories>
          {repositories.map(repo => (
            <li key={String(repo.id)}>
              <a href={repo.html_url}>
                <p>{repo.name}</p>
              </a>
            </li>
          ))}
        </Repositories>
        <Pagination>
          <button
            type="button"
            disabled={page === 1}
            onClick={() => this.setState({ page: page - 1 })}
          >
            Pagina Anterior
          </button>
          <button
            type="button"
            onClick={() => this.setState({ page: page + 1 })}
          >
            Proxima Pagina
          </button>
        </Pagination>
      </Container>
    );
  }
}
