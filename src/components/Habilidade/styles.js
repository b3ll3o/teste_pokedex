import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  form{
    display: flex;
    width: 90%;
    margin-left: 5%;
    margin-top: 1rem;

    input{
      display: flex;
      width: 90%;
      padding: .5rem;
      font-size: 1.25rem;
      border: none;
    }

    button{
      display: flex;
      width: 10%;
      border: none;
      color: white;
      background-color: white;
    }
  }

  .lista{
    display: flex;
    width: 90%;
    margin-left: 5%;
    padding: .75rem;
    background-color: white;
    border-radius: .5rem;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;

    &:last-child{
      margin-bottom: 1rem;
    }

    span{
      display: flex;
      font-size: 1.25rem;
    }
  }
`;