import PropTypes from "prop-types";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteFollow, deleteUser, followUser } from "../../context/action";
import { useState } from "react";
import EditModal from "../modal/EditModal";


function Users({ data }) {
  const [editUser, setEditUser] = useState(null)
  const dispatch = useDispatch();
  const follow = useSelector(state => state.follow)
  const userElements = data?.map((user) => (
    <div key={user.id} className="users__card">
      <img src={user.gender === "male" ? male : female} alt={`${user.gender} avatar`} />
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.profession}</p>
      <div>
        <p>{user.age} years old</p>
        <p className="users__card__time"></p>
      </div>
      <div>
        <button onClick={() => {
          dispatch(deleteUser(user));
          dispatch(deleteFollow(user))
        }}>
          Remove
        </button>
        <button onClick={() => dispatch(followUser(user))}>
          {
            follow.some((follow) => follow.id === user.id) ? "Following" : "Follow"
          }
        </button>
        <button onClick={() => setEditUser(user)}>Edit</button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="users__wrapper">{userElements}</div>
      {
        editUser ? <EditModal setEditUser={setEditUser} data={editUser} /> : <></>
      }
    </>
  )
}

Users.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.oneOf(["male", "female"]).isRequired,
    })
  ).isRequired,
};

export default Users;
