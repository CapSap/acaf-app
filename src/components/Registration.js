import '../App.css';

function Registration() {
  return (
      <div className="registration-container">
        <h2 className="registration-heading">Register Here</h2>

        <form className="registration-forms-content">
          <input className="input-box" type="text" placeholder="Your first name" required="true"></input>
          <input className="input-box" type="text" placeholder="Your last name" required="true" ></input>          
          <input className="input-box" type="email" placeholder="Your email addres" required="true"></input>
          <input className="input-box"  type="submit" value="Submit"></input>
        </form>
      </div>
  );
}

export default Registration;
