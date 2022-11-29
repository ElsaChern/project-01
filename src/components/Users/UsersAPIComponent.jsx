import axios from "axios";
import React from "react";
import Users from "./Users"


// let Users = (props) => {

//   let getUsers = ()=> {
//     if (props.users.length === 0) {

//       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//         props.setUsers(response.data.items);
//       });
//     }
//   } 

//   return (
//       <div>
//         <button onClick={getUsers}>Get Users</button>
//       {props.users.map((u) => (
//         <div key={u.id}>
//           <span>
//             <div>
//               <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={UserStyl.photo} />
//             </div>
//             <div>
//               {u.followed ? (
//                 <button
//                   onClick={() => {
//                     props.unfollow(u.id);
//                   }}
//                 >
//                   Unfollow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(u.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{u.name}</div>
//               <div>{u.status}</div>
//             </span>
//             <span>
//               <div>{"u.location.city"}</div>
//               <div>{"u.location.country"}</div>
//             </span>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

class UsersAPICpmponent extends React.Component {

    componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
        this.props.setUsers(response.data.items);
      });
    }

    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
        this.props.setUsers(response.data.items);
      });
    }

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage} 
                  onPageChanged={this.onPageChanged} 
                  users={this.props.users} 
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
            />
  }
}

export default UsersAPICpmponent;
