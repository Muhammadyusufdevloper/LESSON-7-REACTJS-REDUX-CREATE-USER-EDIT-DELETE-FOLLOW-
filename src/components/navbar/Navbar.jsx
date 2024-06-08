import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  let users = useSelector(state => state.user)
  let follow = useSelector(state => state.follow)
  console.log(follow);
  return (
    <div className='navbar'>
      <h2>Redux</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>All users <sup>{users.length}</sup></NavLink>
      <NavLink to={"/follow-user"}>Follow user <sup>{follow.length}</sup></NavLink>
    </div>
  )
}

export default Navbar