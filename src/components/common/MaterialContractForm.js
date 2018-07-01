import { drizzleConnect } from 'drizzle-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    margin: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
})

class MaterialContractForm extends Component {
  constructor(props, context) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.contracts = context.drizzle.contracts

    // Get the contract ABI
    const abi = this.contracts[this.props.contract].abi

    this.inputs = []
    const initialState = {}

    // Iterate over abi for correct function.
    for (let i = 0; i < abi.length; i++) {
      if (abi[i].name === this.props.method) {
        this.inputs = abi[i].inputs

        for (let j = 0; j < this.inputs.length; j++) {
          initialState[this.inputs[j].name] = ''
        }

        break
      }
    }

    this.state = initialState
  }

  handleSubmit() {
    this.contracts[this.props.contract].methods[this.props.method].cacheSend(
      ...Object.values(this.state)
    )
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  translateType(type) {
    switch (true) {
      case /^uint/.test(type):
        return 'number'

      case /^string/.test(type) || /^bytes/.test(type):
        return 'text'

      case /^bool/.test(type):
        return 'checkbox'

      default:
        return 'text'
    }
  }

  render() {
    const { classes, labels } = this.props
    return (
      <form className={classes.container}>
        {this.inputs.map((input, index) => {
          const inputType = this.translateType(input.type)
          const inputLabel = labels ? labels[index] : input.name
          // check if input type is struct and if so loop out struct fields as well
          return (
            <TextField
              id="margin-normal"
              className={classes.textField}
              key={input.name}
              type={inputType}
              name={input.name}
              value={this.state[input.name]}
              label={inputLabel}
              onChange={this.handleInputChange}
            />
          )
        })}
        <Button
          className={classes.button}
          variant="raised"
          color="primary"
          key="submit"
          type="button"
          onClick={this.handleSubmit}
        >
          {'Submit'}
        </Button>
      </form>
    )
  }
}

MaterialContractForm.contextTypes = {
  drizzle: PropTypes.object
}

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    contracts: state.contracts
  }
}

export default withStyles(styles)(
  drizzleConnect(MaterialContractForm, mapStateToProps)
)
