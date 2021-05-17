import DirectionalButtons from "./components/DirectionalButtons";
import OptionButtons from "./components/OptionButtons";
import VideoControls from "./components/VideoControls";
import VolumeButtons from "./components/VolumeButtons";
import { Paper } from '@material-ui/core'
import { PowerSettingsNew } from '@material-ui/icons'
import styled from 'styled-components'

function App() {
  return (
      <StyledPaper variant="elevation">
        <PowerButton>
          <PowerSettingsNew />
        </PowerButton>
        <OptionButtons />
        <DirectionalButtons />
        <VolumeButtons />
        <VideoControls />
      </StyledPaper>
  )
}
const StyledPaper = styled(Paper)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 100;
`

const PowerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: red;
  margin-bottom: 1rem;
`

export default App;