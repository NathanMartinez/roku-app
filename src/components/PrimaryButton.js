import { IconButton } from '@material-ui/core'
import sendCommand from '../hook/sendCommand'

export default function PrimaryButton({ option }) {

  const handleClick = async () => {
    await sendCommand('keypress', option.name);
  }

  return (
    <IconButton
        name={ option.name } 
        onClick={handleClick}>
      { option.icon }
    </IconButton>
  )
}