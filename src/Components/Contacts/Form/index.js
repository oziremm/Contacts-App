import { useState } from 'react'

function Form({ addContact, contacts }) {

    const [form, setForm] = useState({ fullname: "", phone_number: "" });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "") { return false; }
        addContact([...contacts, form]);
        setForm({ fullname: "", phone_number: "" })
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullname"
                    placeholder='fullname'
                    onChange={onChangeInput}
                    value={form.fullname}></input>
            </div>
            <div>
                <input name="phone_number"
                    placeholder='phone number'
                    onChange={onChangeInput}
                    value={form.phone_number}>
                </input>
            </div>
            <div className='btn'>
                <button>Add</button></div>
        </form>
    )
}

export default Form
