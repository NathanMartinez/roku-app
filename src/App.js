import DirectionalButtons from "./components/DirectionalButtons";
import OptionButtons from "./components/OptionButtons";
import VideoControls from "./components/VideoControls";
import VolumeButtons from "./components/VolumeButtons";
import { Paper } from '@material-ui/core'
import { PowerSettingsNew } from '@material-ui/icons'
import styled from 'styled-components'
import PrimaryButton from "./components/PrimaryButton";

function App() {
  return (
      <StyledPaper variant="elevation">
        <PowerButton>
          <PrimaryButton option={{ name: 'PowerOff', icon: <PowerSettingsNew style={{color: "red"}} /> }}/>
        </PowerButton>
        <OptionButtons />
        <DirectionalButtons />
        <VolumeButtons />
        <VideoControls />
      </StyledPaper>
  )
}
const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 200px;
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