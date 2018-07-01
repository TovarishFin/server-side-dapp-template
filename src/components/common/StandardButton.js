import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    borderRadius: '20px'
  }
})

const chooseColor = props => {
  switch (true) {
    case !!props.primary:
      return 'primary'
    case !!props.secondary:
      return 'secondary'
    default:
      return props.color
  }
}

const StandardButton = props => (
  <Button
    className={props.classes.standardButton}
    color={chooseColor(props)}
    variant="raised"
    {...props}
  >
    {props.children}
  </Button>
)

export default withStyles(styles)(StandardButton)
