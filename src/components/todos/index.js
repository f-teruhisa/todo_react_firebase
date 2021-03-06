import React from 'react'
import {　connect　} from 'react-redux'
import PropTypes from 'prop-types'
import { locationChangeOnTodos } from '../../actions/todoActions'
import AddTodo from '../../containers/todos/AddTodo'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'
import Title from './Title'
import Paper from '@material-ui/core/Paper'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import FilterNav from './FilterNav'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  todoListRoot: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  todoListContent: {
    maxWidth: 950,
    padding: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

class TodoComponent extends React.Component {
    componentWillMount() {
      this.props.locationChange()
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        this.props.locationChange()
      }
  }
  render() {
    const {isOwnTodos, match: { params: {uid}}, classes} = this.props;
    return (
      <div className={classes.root}>
        <div className = {classes.todoListRoot}>
          <Paper className = {classes.todoListContent}>
            <Title isOwnTodos = {isOwnTodos}uid = {uid}/>
            {isOwnTodos && < AddTodo uid={uid} />}
            <VisibleTodoList uid={uid} isOwnTodos={isOwnTodos} />
          </Paper>
        </div>
        <FilterNav />
      </div>
    )
  }
}

TodoComponent.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      uid: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  locationChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({ firebase: { auth } }, { match }) => ({
  isOwnTodos: auth.uid === match.params.uid,
})

const mapDispatchToProps = (dispatch) => ({
  locationChange: () => dispatch(locationChangeOnTodos())
})

TodoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent)

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(TodoComponent)
