import React from 'react'
import PrimaryButton from './PrimaryButton'
import { ArrowDropUp, ArrowLeft, ArrowRight, ArrowDropDown } from '@material-ui/icons'
import styled from 'styled-components'

export default function DirectionalButtons() {
  const directionalButtons = [
    { name: 'Up', icon: <ArrowDropUp />},
    { name: 'Left', icon: <ArrowLeft />},
    { name: 'Select', icon: "OK"},
    { name: 'Right', icon: <ArrowRight />},
    { name: 'Down', icon: <ArrowDropDown />}
  ]

  return (
    <DirectionalButtonWrapper>
      <PrimaryButton option={ directionalButtons[0] }/>
      <div>
        <PrimaryButton option={ directionalButtons[1] }/>
        <PrimaryButton option={ directionalButtons[2] }/>
        <PrimaryButton option={ directionalButtons[3] }/>
      </div>
      <PrimaryButton option={ directionalButtons[4] }/>
    </DirectionalButtonWrapper>
  )
}
const DirectionalButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`