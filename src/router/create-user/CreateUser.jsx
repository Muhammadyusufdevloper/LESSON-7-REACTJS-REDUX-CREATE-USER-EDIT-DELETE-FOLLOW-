import { useState } from "react"
import "./CreateUser.css"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../../context/action"

function CreateUser() {
  const [name, setName] = useState("John Doe")
  const [username, setUsername] = useState("john-doe")
  const [profession, setProfession] = useState("Web Programmer")
  const [age, setAge] = useState("17")
  const [gender, setGender] = useState("male")
  const dispatch = useDispatch()
  const users = useSelector(state => state.user)
  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id: new Date().getTime(),
      name,
      username,
      profession,
      age: +age,
      gender,
    }
    if (users.some((user) => user.username.toLowerCase().trim() === username.toLowerCase().trim())) {
      return alert("Iltimos, boshqa username kiriting");
    }
    dispatch(addUser(newUser))
  }
  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value.length <= 3) {
      setAge(value);
    }
  };
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
        <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
        <input required value={profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder='profession' />
        <input required maxLength={3} value={age} onChange={handleAgeChange} type="number" placeholder='age' />
        <select required value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
          <option value="" hidden disabled>gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser
