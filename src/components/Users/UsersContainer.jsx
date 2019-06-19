import React from 'react';
import { connect } from 'react-redux';
import {
  follow, unfollow, setCurrentPage, 
  toogleFollowingInProgress,getUsers
}
  from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {Redirect} from 'react-router-dom';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize);
    
  }
  render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
}
//mapDispatchToProps skoro4enuj
export default connect(mapStateToProps,
  {
    follow, unfollow, setCurrentPage, 
    toogleFollowingInProgress, getUsers
  })(UsersContainer);