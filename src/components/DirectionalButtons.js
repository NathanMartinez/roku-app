import React from 'react'
import queries from '../hooks/sendKeypress'

export default function DirectionalButtons() {
  const directionalButtons = [
    'Select',
    'Left',
    'Right',
    'Down',
    'Up',
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
