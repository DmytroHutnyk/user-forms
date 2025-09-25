import {useState} from "react";

export function UseInput(defaultValue){
    const [form, setForm] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    function handleChange(e) {
        setForm(e.target.value);
        setDidEdit(true);
    }

    function handleInputBlur(){
        setDidEdit(false);
    }

    return {
        value: form,
        handleChange,
        handleInputBlur
    }
}