import React, { useState } from "react";
import UserList from "../../components/userList/UserList";
import "./manageusers.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "react-select";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skillsets: [],
    hobbies: "",
  });
  const [selectedSkillsets, setSelectedSkillsets] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const skillsetOptions = [
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "UI Design", label: "UI Design" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
  ];

  const hobbiesOptions = [
    { value: "Volunteering", label: "Volunteering" },
    { value: "Rock Climbing", label: "Rock Climbing" },
    { value: "Swimming", label: "Swimming" },
    { value: "Basketball", label: "Basketball" },
    { value: "Reading", label: "Reading" },
  ];

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
    } else {
    }
    setSelectedUser(null);
    closeAddModal();
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "skillsets") {
      return;
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="manage-users-container">
      <h2>Complete Developer Network </h2>
      <div className="search-and-add">
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search Users"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="add-button-container">
          <Button className="add-button" onClick={openAddModal}>
            Add User
          </Button>
        </div>
      </div>
      <div className="manage-users-content">
        <UserList data={users} />
      </div>

      {isAddModalOpen && (
        <div className="add-user-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>User Information</h3>
              <button className="close-button" onClick={closeAddModal}>
                x
              </button>
            </div>
            <hr></hr>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  className="text-field"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </div>
              <div className="form-multiple-group">
                <TextField
                  className="text-field"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  className="text-field"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </div>
              <div className="form-group">
                <h3>Skillsets</h3>
                <Select
                  className="custom-select-control"
                  isMulti
                  options={skillsetOptions}
                  value={selectedSkillsets}
                  onChange={setSelectedSkillsets}
                />
              </div>
              <div className="form-group">
                <h3>Hobbies</h3>
                <Select
                  className="custom-select-control"
                  isMulti
                  options={hobbiesOptions}
                  value={selectedHobbies}
                  onChange={setSelectedHobbies}
                />
              </div>
              <div className="submit-button-container">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUsers;
