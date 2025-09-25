import {useRef, useState} from "react";

export default function Login() {
    const email = useRef();
    const password = useRef();

    const [emailIsInvalid, setEmailIsInvalid] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        const emailInvalid = !enteredEmail.includes('@');
        if(emailInvalid){
            setEmailIsInvalid(true);
            return;
        }

        console.log("Sending HTTP request ....");
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
              id="email"
              name="email"
              type="email"
              ref={email} />
            <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
              id="password"
              name="password"
              type="password"
              ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
