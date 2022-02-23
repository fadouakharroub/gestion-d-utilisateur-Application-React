import React from 'react'
import './App.css';

export default function Popup({togglePopup,handleSubmit}) {
  return (
   <form className="popup" onSubmit={handleSubmit}>
       <div className="popup_box">
       <button onClick={togglePopup} className="close" >X</button> 
       <h1>Ajouter d'utilisateurs</h1> 
    <div className="grid"> 
        <input
                required
                type="text"
                placeholder="First Name"
                name="firstName"
            
            />

            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                
            />

          
             <select 
                name="status"  required>
             <option value="En validation">En validation</option>
                <option value="Validé">Validé</option>
                <option value="Rejeté">Rejeté</option>
                </select>
            <input

                type="text"
                placeholder="User Name"
                name="userName"
                required
            
            />

            <input
                type="date"
                placeholder="Created Date"
                name="createdDate"
                required
            />
          <span></span>
            <input
                type="number"
                placeholder="Registration Number"
                name="registrationNumber"
                required
            />
     </div>
     <div>
     <button type='submit' className="add-button Enregestrer" >Enregestrer</button>
     </div>
    </div>
   </form>
  )
}