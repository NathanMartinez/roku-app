import DirectionalButtons from "./components/DirectionalButtons";
import OptionButtons from "./components/OptionButtons";
import SourceButtons from "./components/SourceButtons";
import VideoControls from "./components/VideoControls";
import VolumeButtons from "./components/VolumeButtons";
import { Paper } from '@material-ui/core'
import { PowerSettingsNew } from '@material-ui/icons'
import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
      <StyledPaper variant="elevation">
        <PowerButton>
          <PowerSettingsNew />
        </PowerButton>
        <OptionButtons />
        <DirectionalButtons />
        <VolumeButtons />
        <VideoControls />
        {/* <SourceButtons /> */}
      </StyledPaper>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center
`
const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

const PowerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: red;
  margin-bottom: 1rem;
`

export default App;