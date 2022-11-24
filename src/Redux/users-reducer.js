let initialState = {
    users: [
        // { id: "1", photoUrl: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png", followed: false, fullName: "Dmitry A.", status: "Hi, everyone!", location: {country: "Belarus", city: "Minsk"}},
        // { id: "2", photoUrl: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png", followed: true, fullName: "Alena A.", status: "Hi, everyone!", location: {country: "Russia", city: "Moskow"}},
        // { id: "3", photoUrl: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png", followed: false, fullName: "Kim L.", status: "Hi, everyone!", location: {country: "Russia", city: "Kazan"}}
      ], 
    }


const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case  "FOLLOW":
          return {
            ...state,
            //  users: [...state.users]
            users: state.users.map(u => {
              if (u.id === action.userId) {
                return {...u, followed: true}
              }
              return u;
            })
           }
        
        case  "UNFOLLOW":
          return {
            ...state,
            users: state.users.map(u => {
              if (u.id === action.userId) {
                return {...u, followed: false}
              }
              return u;
            })
           }
          
        case "SET_USERS":
          return {
            ...state,
            users: [...state.users, ...action.users],
          }

        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
      type: "FOLLOW", userId
    }
  }
  
  export const unfollowActionC = (userId) => {
    return {
      type: "UNFOLLOW", userId
    }
  }

  export const setUsersAC = (users) => {
    return {
      type: "SET_USERS", users 
    }
  }

export default usersReducer;