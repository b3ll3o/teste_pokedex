import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  width: 100%;
  flex-direction: column;

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
      text-indent: .5rem;
    }

    button{
      display: flex;
      background-color: white;
      border: none;
      width: 10%;
      color: #333;
    }
  }

  
`;