import React from 'react';
import CommonSection from "../../UI/CommonSection";
function Header({ setIsAdding }) {
  return (
    <header>
        
      {/* <h1>Employee Page</h1> */}
      <div  
      style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
