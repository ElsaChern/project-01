import React from "react";
import { connect } from "react-redux";
import Users from './Users';
import { followAC, unfollowActionC, setUsersAC, setCurrentPageAC } from '../../Redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;