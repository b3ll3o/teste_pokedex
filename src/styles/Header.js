import styled from 'styled-components';

export default styled.div`

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

      a{
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
        text-decoration: none;
      }
    }

    .fundo{
      display: flex;
      width: 20%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
  
`;