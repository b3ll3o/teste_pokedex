import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  
  display: flex;
  width: 100%;
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

  .informacoes{
    display: flex;
    width: 90%;
    margin-left: 5%;
    background-color: white;
    border-radius: .5rem;
    flex-direction: column;

    span{
      display: flex;
      font-size: 1.25rem;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      padding: .5rem;
      text-indent: .5rem;

      ${media.greaterThan('medium')`
        font-size: 2.5rem;
        padding: 1rem;
      `}
    }
  }
  
`;