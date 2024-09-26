import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import cn from "classnames"
import styles from "./chat.module.css"
import Massage from '../../components/massage/massage';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { useEffect, useState,useRef } from 'react';

const ChatPage = () => {
    
    const websocketRef = useRef(null); 
    const hisoriMassage = JSON.parse(sessionStorage.getItem("massage"));
    const userName = useSelector((store)=> store.user.user);
    const [state , setState] = useState(hisoriMassage ?? []);
    const [valueInput, setInputValue] = useState("");

    const setMassage = (value) => {
        if (value.length) {
            websocketRef.current.send(JSON.stringify({ massage:value,userName:userName})) 
            setInputValue("")
        }};

    useEffect(() => {
        websocketRef.current = new WebSocket('ws://localhost:8080');

        websocketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setState((prev) => {
                const update = [...prev, data];
                sessionStorage.setItem("massage", JSON.stringify(update));
                return update;
            });
        };
      }, []);

    return (
        <>  
        <h1 className={cn(styles.IUSER)}>
        {userName}
        <div className={cn(styles.dicarationUser)}/>
        </h1>
         <div className={cn(styles.wrapperMassage)}>
        {
            state.map((item,idx)=><Massage key={idx} userName={item.userName}>{item.massage}</Massage>)
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