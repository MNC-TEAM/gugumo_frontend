import React, { useState } from 'react'
import { InputBox, InputStyle } from './style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../styles/theme'

interface InputType {
  placeholder? : string,
  errorMessage? : string
}

export default function Input({placeholder,errorMessage} : InputType) {

  return (
    <ThemeProvider 
      theme={theme}
    >
      <InputStyle>
        <InputBox>
          <input type="text" 
            placeholder={placeholder} 
          />
        </InputBox>
        {
          <p>{errorMessage}</p>
        }
      </InputStyle>
    </ThemeProvider>
  )
}
