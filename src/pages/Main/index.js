import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/index';
import { Pagination } from '../../components/Pagination/index';
import api from '../../services/api';
import logo from '../../assets/github.svg';
import { HeaderUsers, GitImage, Users } from './styles';

export default class Main extends Component {
  state = {
    loading: true,
    users: [],
    since: 1,
  };

  async componentDidMount() {
    const { since } = this.state;
    const users = await api.get(`/users`, {
      params: {
        since,
      },
    });
    this.setState({
      users: users.data,
      loading: false,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { since } = this.state;

    if (prevState.since !== since) {
      const response = await api.get(`users`, {
        params: {
          since,
        },
      });
      this.setState({
        users: response.data,
        loading: false,
      });
    }
  }

  render() {
    const { users, since } = this.state;
    return (
      <Container>
        <HeaderUsers>
          <GitImage src={logo} />
          <p>Users From Github</p>
        </HeaderUsers>
        <Users>
          {users.map(user => (
            <li key={String(user.id)}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <p>{user.login}</p>
                <span>UserId:{user.id}</span>
              </div>
              <Link to={`/repos/${encodeURIComponent(user.login)}`}>
                <strong>Details</strong>
              </Link>
            </li>
          ))}
        </Users>
        <Pagination>
          <button
            type="button"
            disabled={since === 1}
            onClick={() => this.setState({ since: since - 50 })}
          >
            Pagina Anterior
          </button>
          <button
            type="button"
            onClick={() => this.setState({ since: since + 50 })}
          >
            Proxima Pagina
          </button>
        </Pagination>
      </Container>
    );
  }
}
