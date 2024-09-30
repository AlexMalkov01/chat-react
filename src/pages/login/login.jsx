import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../../store/store"
import { userSlice } from "../../store/slice/user"
import cn from "classnames"
import styles from "./login.module.css"

const Login = () => {
    
    const user = useSelector((store)=> store.user.user);
    const [userName , setUserName] = useState(localStorage.getItem("user") ?? "");
    const [inputValue , setInputValue] = useState("");
    const disputch = useDispatch();

    const setUser = (value) => {
        disputch(userSlice.actions.initUser(value));
        setUserName(value)
    }

    return (
        <>
        {!userName 
        &&
        <>
        <h1 className={cn(styles.h1)}>Введите имя пользователя</h1>
        <input className={cn(styles.input)} value={inputValue} onChange={(e)=> setInputValue(e.target.value.trim())} type="text" />
        <button className={cn(styles.btn)} onClick={()=>setUser(inputValue)} >ОК</button>
        </>
        }
        {
            !!userName &&
            <h1 className={cn(styles.IUSER)}>
            {userName}
            <div className={cn(styles.dicarationUser)}/>
            </h1>
        }
        </>
    )
}

export default Login