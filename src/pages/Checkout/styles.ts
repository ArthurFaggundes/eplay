import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end; //* para sempre alinhar com o final, nesse caso, embaixo
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto; //* para distribuir igualmente a largura dos elementos

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white}; //? para não ter mudança na largura ou altura caso der erro
    height: 32px;
    padding: 0 8px;
    width: 100%; //* junto do flex: auto

    &.error {
      border: 2px solid ${colors.green};
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? colors.black : colors.white)};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  heigth: 32px;
  border: none;
  margin-right: 16px;
  padding: 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
