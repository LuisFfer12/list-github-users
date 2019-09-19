import styled from 'styled-components';

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const HeaderInfo = styled.div`
  flex-direction: column;
`;
export const UserAvatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-top: 10px;
`;

export const Repositories = styled.div`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }
`;
