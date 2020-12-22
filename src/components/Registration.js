function Registration() {
  return (
    <div>
      <div>
        <form>
          <input type="text" placeholder="Your first name" required="true"></input>
          <input type="text" placeholder="Your last name" required="true" ></input>          
          <input type="email" placeholder="Your email addres" required="true"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Registration;
