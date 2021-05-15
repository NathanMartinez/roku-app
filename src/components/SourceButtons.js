import React from 'react'
import queries from '../hooks/sendKeypress'

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
    queries.sendKeypress(name);
  }

  let buttons = directionalButtons.map((option, i) => <button key={ i } name={ option } onClick={handleSubmit}>{ option }</button>)

  return (
    <div>
      { buttons }
    </div>
  )
}
