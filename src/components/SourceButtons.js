import React from 'react'
import sendCommand from '../hooks/sendCommand'

export default function SourceButtons() {
  const directionalButtons = [
    'InputTuner',
    'InputHDMI1',
    'InputHDMI2',
    'InputHDMI3',
    'InputHDMI4',
    'InputAV1'
  ]

  const handleSubmit = (e) => {
    const { name } = e.target
    sendCommand('keypress', name);
  }

  let buttons = directionalButtons.map((option, i) => <button key={ i } name={ option } onClick={handleSubmit}>{ option }</button>)

  return (
    <div>
      { buttons }
    </div>
  )
}
