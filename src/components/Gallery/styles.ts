import styled from 'styled-components'
import { colors } from '../../styles'

export const Itens = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.4s ease;
`

export const Item = styled.li`
  position: relative;
  cursor: pointer;

  > img {
    //* para ser diretamente no elemento filho
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover; //* para a imagem não se distorcer
  }

  &:hover {
    ${Action} {
      //* para aparecer o icon. de zoom só quando tiver hover
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;

  position: relative;
  z-index: 2;

  header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;
    padding: 0 16px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`

// justify-content: space-between;
