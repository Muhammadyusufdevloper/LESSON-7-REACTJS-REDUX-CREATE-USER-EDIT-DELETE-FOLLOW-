import "./EditModal.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../../context/action";

const EditModal = ({ data, setEditUser }) => {
    const [name, setName] = useState(data.name);
    const [username, setUsername] = useState(data.username);
    const [profession, setProfession] = useState(data.profession);
    const [age, setAge] = useState(data.age);
    const [gender, setGender] = useState(data.gender);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newObj = {
            id: data.id,  // Ensure the ID is included
            name,
            username,
            profession,
            age,
            gender
        };
        dispatch(editUser(newObj));
        setEditUser(null)
    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        if (value.length <= 3) {
            setAge(value);
        }
    };

    const handleClose = () => {
        setEditUser(null)
    };

    return (
        <div className="modal">
            <div className="modal__overlay" onClick={handleClose}></div>
            <form onSubmit={handleSubmit} className="modal__user-form">
                <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
                <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
                <input required value={profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder="profession" />
                <input required maxLength={3} value={age} onChange={handleAgeChange} type="number" placeholder="age" />
                <select required value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
                    <option value="" hidden disabled>gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button type="submit">Save</button>
                <button type="button" onClick={handleClose}>Close</button>
            </form>
        </div>
    );
};

EditModal.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,  // Make sure the ID is required
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        age: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        gender: PropTypes.oneOf(['male', 'female']).isRequired
    }).isRequired
};

export default EditModal;
