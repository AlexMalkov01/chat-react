import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../../store/store"
import { userSlice } from "../../store/slice/user"
import cn from "classnames"
import styles from "./login.module.css"

const Login = () => {
    const getUser = () =>{
        return  localStorage.getItem("user") ?? ""
    }
    const setUser = () => {
        disputch(userSlice.actions.initUser(inputValue))
    }

    const user = useSelector((store)=> store.user.user)
    const [userName , setUserName] = useState(getUser())
    const [inputValue , setInputValue] = useState("")
    const disputch = useDispatch()
    
    console.log(user);
    useEffect(()=>{
        setUserName(getUser())
    },[user]) 
    

    return (
        <>
        {!userName 
        &&
        <>
        <h1 className={cn(styles.h1)}>Введите имя пользователя</h1>
        <input className={cn(styles.input)} value={inputValue} onChange={(e)=> setInputValue(e.target.value.trim())} type="text" />
        <button className={cn(styles.btn)} onClick={setUser} >ОК</button>
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