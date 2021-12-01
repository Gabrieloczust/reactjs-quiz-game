import { SelectQuestions } from 'components'
import * as Styles from './Home.styles'

export const Home = () => {
  return (
    <Styles.Container>
      <Styles.Title variant="h1" component="div" align="center">
        Quiz Game
      </Styles.Title>

      <SelectQuestions />
    </Styles.Container>
  )
}