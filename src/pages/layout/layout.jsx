import styles from "./layout.module.css"
import cn from "classnames"
import { Link, Outlet,Navigate, useNavigate } from "react-router-dom"
import MenuList from "../../components/menu-list/menuList"
import { useEffect } from "react"


const Layout = () => {

    const redirect = useNavigate()

    useEffect(()=>{
        redirect("/login")
    },[])
        
   
    return (
        <>
        <div className={cn(styles.conteiner)}>

        <div className={cn(styles.menu)}>
            <div className={cn(styles.leftPanal)}>
                <MenuList/>
            </div>
            <div className={cn(styles.content)} >
                {<Outlet/>}
            </div>
        </div> 
        
        </div>
        </>
    )
}


export default Layout