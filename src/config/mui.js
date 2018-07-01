import red from 'material-ui/colors/red'
import indigo from 'material-ui/colors/indigo'
import purple from 'material-ui/colors/purple'

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = {
  palette: {
    primary: indigo,
    secondary: purple,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
}

export default theme
