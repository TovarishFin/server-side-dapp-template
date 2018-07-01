const reducer = (state = name, action = {}) => {
  switch (action.type) {
    case 'HOME':
      return name
    default:
      return state
  }
}

const name = 'Default DApp Name'

export default reducer
