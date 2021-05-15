import queries from '../hooks/sendKeypress'
import styled from 'styled-components'

export default function PowerButton() {
  const powerButton = 'PowerOff'

  const handleSubmit = (e) => {
    const { name } = e.target
    queries.sendKeypress(name);
  }

  return (
    <PowerButtonContainer>
      <PowerBtn onClick={ handleSubmit }>{ powerButton }</PowerBtn>
    </PowerButtonContainer>
  )
}
const PowerButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const PowerBtn = styled.button`
  padding: 0.5rem;
    &:hover {
      cursor: pointer;
    }
`