import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`

  display: flex;
  width: 100%;
  flex-direction: column;
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

      svg{
        display: flex;
        

        
      }
    }

    button{
      display: flex;
      background-color: white;
      border: none;
      width: 10%;
      color: #333;

      svg{
        display: flex;
        width: 1.5rem;
        height: 1.5rem;

        ${media.greaterThan('medium')`
          width: 4rem;
          height: 4rem;
      `}
      }
    }
  }

  
`;