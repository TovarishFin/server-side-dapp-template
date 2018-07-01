import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { openDrawer } from '../../actions/layout'
import { pageSelector } from '../../selectors/location'
import { withStyles } from 'material-ui/styles'

const styles = {
  appBarHome: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'background-color 0.1s, box-shadow 0.5s'
  },
  appBar: {
    transition: 'background-color 0.1s, box-shadow 0.5s'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const isHome = page => page === 'Home'

const Top = ({ dispatchOpenDrawer, page, classes }) => (
  <AppBar
    className={isHome(page) ? classes.appBarHome : classes.appBar}
    position={isHome(page) ? 'fixed' : 'sticky'}
  >
    <Toolbar>
      <IconButton className={classes.menuButton} onClick={dispatchOpenDrawer}>
        <MenuIcon />
      </IconButton>
      {isHome(page) ? null : (
        <Typography color="inherit" variant="title">
          {page
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())}
        </Typography>
      )}
    </Toolbar>
  </AppBar>
)

const mapStateToProps = state => ({
  page: pageSelector(state)
})

const mapDispatchToProps = {
  dispatchOpenDrawer: openDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Top)
)
