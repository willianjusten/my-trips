import styled from 'styled-components'

export const StickyNote = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background-color: #0a0c21;
  color: var(--white);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;

  a,
  p {
    font-size: 1.6rem;
    line-height: 1.3;
  }
`
