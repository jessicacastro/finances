import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: var(--purple);

  
`
export const ContentContainer = styled.div`
  max-width: 1120px;
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #FFF;
    background-color: var(--purple-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`