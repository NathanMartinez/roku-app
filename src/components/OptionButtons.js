import React from 'react'
import PrimaryButton from './PrimaryButton'
import { KeyboardBackspace, Info, Search } from '@material-ui/icons';

export default function OptionButtons() {
  const directionalButtons = [
    { name: 'Back', icon: <KeyboardBackspace /> },
    { name: 'Info', icon: <Info /> },
    { name: 'Search', icon: <Search /> }
  ]

  let buttons = directionalButtons.map((option, i) => (
  <PrimaryButton key={ i } option={ option } />
  ))

  return (
    <div>
      { buttons }
    </div>
  )
}
