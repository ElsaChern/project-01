import axios from "axios";
import React from "react";
import UserStyl from "./Users.module.css";
import usersPhoto from "../../img/user.png";

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

class Users extends React.Component {

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

    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let totalPages = [];
    for (let i=1; i <= pagesCount; i++) {
      totalPages.push(i);
    }
    
    return (
            <div>
              <div className={UserStyl.pages}>
                {totalPages.map(p => {
                  return <span className={this.props.currentPage === p && UserStyl.selectedPage}
                  onClick={ (e) => {this.onPageChanged(p)}}>{p}</span>
                })}
              </div>
            {this.props.users.map((u) => (
              <div key={u.id}>
                <span>
                  <div>
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={UserStyl.photo} />
                  </div>
                  <div>
                    {u.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(u.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(u.id);
                        }}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </span>
                <span>
                  <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                  </span>
                  <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                  </span>
                </span>
              </div>
            ))}
          </div>
        );
      };
  }


export default Users;
