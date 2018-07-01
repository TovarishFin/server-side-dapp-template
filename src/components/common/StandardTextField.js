import React from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: 'calc(100% - 2vh)',
    margin: '1vh',
    [theme.breakpoints.up('md')]: {
      width: props => (props.fullWidth ? '(calc(100% - 2vh))' : '200px')
    }
  }
})

const StandardTextField = props => (
  <TextField className={props.classes.standardTextField} {...props} />
)

export default withStyles(styles)(StandardTextField)
