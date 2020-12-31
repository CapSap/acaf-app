import '../App.css';

function Registration() {
  return (
      <div className="registration-container">
         
        <form className="registration-forms-content">
        <h2>Register Here</h2>
          <input className="input-box" type="text" placeholder="Your first name" required="true"></input>
          <input className="input-box" type="text" placeholder="Your last name" required="true" ></input>          
          <input className="input-box" type="email" placeholder="Your email addres" required="true"></input>
          <input className="input-box" type="submit" value="Submit"></input>
        </form>
      </div>
  );
}

export default Registration;
