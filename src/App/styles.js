import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;

  .header{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    svg{
      display: flex;
      width: 3rem;
      height: 3rem;
    }
  }

  .listagem {

    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    .lista {
      display: flex;
      width: 90%;
      margin-left: 5%;
      height: 4rem;
      background-color: white;
      margin-top: 1rem;
      border-radius: .5rem;
      padding: .5rem;
      
      span{
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
      }

      &:last-child{
        margin-bottom: 1rem;
      }
    }
  }

  .more{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

      
    .pokemon{
      display: flex;
      width: 100%;
      flex-direction: column;

      .pokemonImage{
        display: flex;
        margin-top: 1rem;
        margin-left: 10%;
        width: 80%;
        height: 50%;
        background-color: white;
        border-radius: 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  .header{
    display: flex;
    width: 100%;
    height: 7%;

    background-color: white;

    .icon{
      display: flex;
      height: 100%;
      width: 15%;
      justify-content: center;
      align-items: center;

      svg{
        display:flex;
        width: 2rem;
        height: 2rem;
      }
    }

    span{
        display: flex;
        width: 85%;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
      }
    }

    .menuGaveta{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    width: 100%;
    height: 100%;

    .menu{
      display: flex;
      width: 80%;
      height: 100%;
      background-color: white;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      button{
        display: flex;
        width: 80%;
        font-size: 2rem;
        color: black;
        background-color: rgb(103, 141, 228);
        justify-content: center;
        align-items: center;
        border-radius: .5rem;
        margin-bottom: 1rem;
        padding: .75rem;
        border: none;
      }
    }

    .fundo{
      display: flex;
      width: 20%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
  }
 
`;