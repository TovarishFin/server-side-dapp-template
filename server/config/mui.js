import red from 'material-ui/colors/red'

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = {
  palette: {
    primary: {
      main: '#e1f5fe'
    },
    secondary: {
      main: '#ffebee'
    },
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

/*
palette: {
  primary1Color: '#e1f5fe',
  primary2Color: '#ffffff',
  primary3Color: '#afc2cb',
  accent1Color: '#ffebee',
  accent2Color: '#ffffff',
  accent3Color: '#ccb9bc',
  primaryTextColor: '#000000',
  alternateTextColor: '#000000'
},
snackbar: {
  backgroundColor: '#ffebee',
  actionColor: '#000000',
  textColor: '#000000'
}
*/
