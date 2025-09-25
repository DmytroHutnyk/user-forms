import {useState} from "react";
import Input from "@/components/Input.jsx";

export default function StateLogin() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const emailIsInvalid = didEdit.email && !form.email.includes('@');

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

    function handleInputBlur(e){
        const {name} = e.target;
        setDidEdit(prev => ({
            ...prev,
            [name]: true
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    onBlur={handleInputBlur}
                    value={form.email}
                    onChange={handleChange}
                    error={emailIsInvalid && 'Please enter a valid email'}
                />

                <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
