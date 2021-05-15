import ChannelButtons from "./components/ChannelButtons";
import DirectionalButtons from "./components/DirectionalButtons";
import OptionButtons from "./components/OptionButtons";
import PowerButton from "./components/PowerButton";
import SourceButtons from "./components/SourceButtons";
import VideoControls from "./components/VideoControls";
import VolumeButtons from "./components/VolumeButtons";
import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
        <PowerButton />
        <OptionButtons />
        <DirectionalButtons />
        <ChannelButtons />
        <VolumeButtons />
        <VideoControls />
        <SourceButtons />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default App;