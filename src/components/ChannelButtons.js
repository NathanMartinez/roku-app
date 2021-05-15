import React from 'react'
import queries from '../hooks/sendKeypress'

export default function ChannelButtons() {

  const channelButtons = [
    'ChannelUp',
    'ChannelDown'
  ]

  const handleSubmit = (e) => {
    const { name } = e.target
    queries.sendKeypress(name);
  }

  let buttons = channelButtons.map((option, i) => <button key={ i } name={ option } onClick={handleSubmit}>{ option }</button>)

  return (
    <div>
      { buttons }
    </div>
  )
}