import styled from 'styled-components';

export const HeaderUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #3333;

  p {
    font-size: 20px;
    padding: 15px;
    font-weight: bold;
  }
`;

export const GitImage = styled.img`
  background: #fff;
  width: 90px;
  height: 90px;
`;
export const Users = styled.div`
  padding-top: 10px;
  margin-top: 30px;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    span {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }

    strong {
      font-size: 14px;
      color: #333333;
      text-decoration: none;
    }
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    flex: 1;
    margin-left: 15px;

    p {
      margin-top: 5px;
      font-size: 18px;
      color: #333333;
      font-weight: bold;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;

  button {
    cursor: pointer;
    background: #3333;
    padding: 0 15px;
    margin-left: 10px;
    border: 0;
    height: 30px;
    opacity: 0.9;
    border-radius: 2px;
  }
`;
