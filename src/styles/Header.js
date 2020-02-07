import styled from 'styled-components';
import media from 'styled-media-query';

export default styled.div`

  display: flex;
  width: 100%;
  height: 7%;

  background-color: white;

  ${media.greaterThan('medium')`
    height: 10%;
  `}

  .btnVoltar{
    display: none;

    ${media.greaterThan('large')`
      display: flex;
      width: 25%;
      border: none;
      color: black;
      background-color: white;
      font-size: 1.5rem;
      justify-content: space-around;
      align-items: center;
    `}
  }

  .icon{
    display: flex;
    height: 100%;
    width: 15%;
    justify-content: center;
    align-items: center;

    ${media.greaterThan('large')`
      display: none;
    `}

    svg{
      display:flex;
      width: 2rem;
      height: 2rem;

      ${media.greaterThan('medium')`
        width: 4rem;
        height: 4rem;
      `}
    }
  }

    span{
      display: flex;
      width: 85%;
      justify-content: center;
      align-items: center;
      font-size: 2rem;

      ${media.greaterThan('medium')`
        font-size: 3.5rem;
      `}

      ${media.greaterThan('large')`
        font-size: 3rem;
        width: 50%;
      `}
    }

  .nav{
    display: none;

    ${media.greaterThan('large')`
      display:flex;
      width: 50%;
      height: 100%;
      justify-content: space-around;

      a{
        display: flex;
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
        align-items: center;
      }
    `}
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

        ${media.greaterThan('medium')`
          font-size: 3.5rem;
        `}
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