import React from 'react'
import PrimaryButton from './PrimaryButton'
import { FastRewind, PlayArrow, FastForward } from '@material-ui/icons';
import { ButtonGroup } from '@material-ui/core';

export default function VideoControls() {
  const directionalButtons = [
    {name: 'Rev', icon: <FastRewind />},
    {name: 'Play', icon: <PlayArrow />},
    {name: 'Fwd', icon: <FastForward />}
  ]

  let buttons = directionalButtons.map((option, i) => <PrimaryButton key={ i } option={ option } />)

  return (
    <div>
      <ButtonGroup>
        { buttons }
      </ButtonGroup>   
    </div>

  )
}
