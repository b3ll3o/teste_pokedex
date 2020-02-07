import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;

  form{
    display: flex;
    width: 90%;
    height: 3rem;
    margin-left: 5%;
    margin-top: 1rem;

    ${media.greaterThan('medium')`
      height: 6rem;
    `}

    input{
      display: flex;
      width: 90%;
      padding: .5rem;
      font-size: 1.25rem;
      border: none;
      text-indent: .5rem;

      ${media.greaterThan('medium')`
        font-size: 2.5rem;
      `}
    }

    button{
      display: flex;
      width: 10%;
      border: none;
      color: white;
      background-color: white;
      height: 100%;

      svg{
        display: flex;
        width: 1.5rem;
        height: 1.5rem;

        ${media.greaterThan('medium')`
          width: 3rem;
          height: 3rem;
        `}
      }
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

    ${media.greaterThan('medium')`
        padding: 1rem;
    `}

    span{
      display: flex;
      font-size: 1.25rem;

      ${media.greaterThan('medium')`
        font-size: 2.5rem;
      `}
    }
  }
`;