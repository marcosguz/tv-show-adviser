import { Search as SearchIcon } from "react-bootstrap-icons";

import s from "./style.module.css";
import { useState } from "react";

export function SearchBar({onSubmit}) {
    const [ value, setValue ] = useState("");
    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            onSubmit(e.target.value);
            setValue("");
        }
    }

    function handleChange(ev) {
        setValue(ev.target.value);
    }

    return (
        <>
            <SearchIcon size={20} className={s.icon} />
            <input onKeyUp={submit} onChange={handleChange} type="text" className={s.input} placeholder={"Search a tv show you may like"} value={value} />
        </>
    )
}