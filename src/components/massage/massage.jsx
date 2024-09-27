import { useSelector } from "react-redux";
import styles from "./massage.module.css"
import cn from "classnames"

const Massage = ({userName,children}) => {

    const IUser = useSelector((store)=> store.user.user)
    
    return (
        <>
                <div className={cn( {
                    [styles.msgUser]: userName == IUser,
                    [styles.msgSoccet]: userName !== IUser,
                })}>
                   {children}
                   <div className={styles.userName}>
                    {userName}
                   </div>
                </div>
        </>
    )
}

export default Massage