import React from 'react'
import { VisibilityFilters } from '../../actions/visibilityFilterActions'
import FilterLink from '../../containers/todos/FilterLink'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

const drawerWidth = 240

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
})

const FilterNav = ({ classes }) => (
  <Drawer variant="permanent" anchor="right"
                 className={classes.drawer} classes={{ paper: classes.drawerPaper, }}>
    <div className={classes.toolbar} />
    <List subheader={<ListSubheader component="div">表示</ListSubheader>}>  {/* #1 */}
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </List>
  </Drawer>
)

FilterNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterNav)
