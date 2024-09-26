import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import cn from "classnames"
import styles from "./chat.module.css"
import Massage from '../../components/massage/massage';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { useState } from 'react';

const ChatPage = () => {
    
    const hisoriMassage = JSON.parse(sessionStorage.getItem("massage")) 
    const userName = useSelector((store)=> store.user.user)
    const [state , setState] = useState(hisoriMassage ?? [])
    const [valueInput, setInputValue] = useState("")

    const setMassage = (value) => {
        if (value.length) {
            setState((prev)=> {
             const update =   [...prev , {
                massage:value,
                userName:userName
            }]
            
            sessionStorage.setItem("massage", JSON.stringify(update))
            return update
        })
            setInputValue("")
            
        }

    }
    return (
        <>  
        <h1 className={cn(styles.IUSER)}>
        {userName}
        <div className={cn(styles.dicarationUser)}>

        </div>
        </h1>

         <div className={cn(styles.wrapperMassage)}>

        {
            state.map((item,props)=><Massage userName={item.userName}>{item.massage}</Massage>)
        }

         </div>
            <Box sx={{display:"flex" ,gap:"25px" , width: 800, maxWidth: '100%' }}>
                <TextField value={valueInput} onChange={(e)=>setInputValue(e.target.value)} fullWidth label="Введите сообщение" id="Введите сообщение" />
                <button onClick={()=> setMassage(valueInput)} className={cn(styles.btn)}>Отпавить</button>
            </Box>
        </>
    )
}

export default ChatPage