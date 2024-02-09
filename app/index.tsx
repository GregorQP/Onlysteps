import { MantineProvider } from '@mantine/core'
import React from 'react'
import { theme } from '..'
import App from './App'

export const index = () => {
  return (
    <MantineProvider  theme={theme}>
        <App/>
    </MantineProvider>
  )
}
