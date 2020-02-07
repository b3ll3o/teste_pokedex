import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;

  .lista {
    display: flex;
    width: 90%;
    margin-left: 5%;
    height: 4rem;
    background-color: white;
    margin-top: 1rem;
    border-radius: .5rem;
    padding: .5rem;
    
    &:last-child{
      margin-bottom: 1rem;
    }

    span{
      display: flex;
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      justify-content: center;
      align-items: center;
    }
  }

  .carregaMais{
    display: flex;
    width: 90%;
    margin-left: 5%;
    padding: .75rem;
    font-size: 1.25rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: green;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: .5rem;
  }

`;