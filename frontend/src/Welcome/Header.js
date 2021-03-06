import  React  from 'react';
import "../Welcome.css";

function Header(){
    return <div className="row nomargin header">
        <div className="column">
          <img src="images\logo.png" className="logo" alt="logo" />
        </div>
        <div className="column" />
        <div className="column" />

        <div className="column info">
          <h3>Call us:</h3>
          <p>+0 123-456-789</p>
        </div>
        <div href="mailto: medico@example.com" className="column info">
          <h3>Send us a Mail:</h3>
          <a href="mailto: medico@example.com"> medico@example.com </a>
        </div>
      </div>;
}

export default Header;