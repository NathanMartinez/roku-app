import React from 'react'
import PrimaryButton from './PrimaryButton'
import { VolumeOff, VolumeDown, VolumeUp } from '@material-ui/icons';
import { ButtonGroup } from '@material-ui/core';

export default function VolumeButtons() {
  const directionalButtons = [
    { name: 'VolumeMute', icon: <VolumeOff /> },
    { name: 'VolumeDown', icon: <VolumeDown/> },
    { name: 'VolumeUp', icon: <VolumeUp/> }
  ]

  let buttons = directionalButtons.map((option, i) => (
  <PrimaryButton key={ i } option={ option } />
  ))

  return (
    <div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        { buttons }
      </ButtonGroup>   
    </div>

  )
}
