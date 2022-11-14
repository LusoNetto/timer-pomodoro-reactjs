import { ThemeProvider } from 'styled-components'

import { Button } from './components/Button'
import { defaultTheme } from './themes/default'
import { GlobalStyle } from './themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="danger" />
      <Button variant="sucess" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
