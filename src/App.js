import React, { useState, useEffect } from "react";
import "./App.css";
import Popup from "./Popup";
import Table from "./table";

let user = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
];

function App() {
  const [users, setUsers] = useState(user);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  function deleteSubmit(event) {
    setUsers((users) => {
      return [...users.filter((item) => item.id !== event)];
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 1000000000),
      createdDate: event.target.createdDate.value,
      status: event.target.status.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      userName: event.target.userName.value,
      registrationNumber: event.target.registrationNumber.value,
    };
    await setUsers((users) => {
      return [...users, newUser];
    });
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Table users={users} deleteSubmit={deleteSubmit} />
      <div className="add">
        <button className="add-button"  onClick={togglePopup}>
          Ajouter utilisateur
        </button>
      </div>
      {isOpen && <Popup togglePopup={togglePopup} handleSubmit={handleSubmit} />}
    </div>
  );
}
// return (
//   <div className="App">
//    <Table users={users} deleteSubmit={deleteSubmit}/>
//     <div className="add">
//     <button className="add-button" onClick={togglePopup}>Ajouter utilisateur</button>
//     </div>
//     {isOpen && <AddForm
//     togglePopup={togglePopup}
//     handleSubmit={handleSubmit}
//   />}
//   </div> 
// );

export default App;
