import React from "react";
import { connect } from "react-redux";
import Users from './Users';
import { followAC, unfollowActionC, setUsersAC } from '../../Redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users 
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;