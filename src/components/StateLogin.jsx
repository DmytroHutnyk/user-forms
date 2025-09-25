import {useState} from "react";

export default function StateLogin() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const emailIsInvalid = form.email !== '' && !form.email.includes('@');

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({
                ...prev,
                [name]: value
            }
        ));
        console.log(name, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted", form);
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
                        value={form.email}
                        onChange={handleChange} />
                </div>
                <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
