import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import cn from "classnames"
import styles from "./chat.module.css"
import Massage from '../../components/massage/massage';
import { useSelector } from 'react-redux';
import { useEffect, useState,useRef, useMemo } from 'react';
import ListMessage from '../../components/list-message/listMessage';

const ChatPage = () => {
    const scrolling = useRef(null)
    const websocketRef = useRef(null); 
    const hisoriMassage = JSON.parse(sessionStorage.getItem("message"));
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
                sessionStorage.setItem("message", JSON.stringify(update)); 
                return update;
            });
        };
        websocketRef.current.onclose = () => {
            console.log('Соединение закрыто');
        };
        websocketRef.current.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
            websocketRef.current.close(); 
        };
    }, []);

    useEffect(()=>{
        scrolling.current.scroll(0,scrolling.current.scrollHeight);
    },[state.length]);

    return (
        <>  
        <h1 className={cn(styles.IUSER)}>
        {userName}
        <div className={cn(styles.dicarationUser)}/>
        </h1>
         <div ref={scrolling} className={cn(styles.wrapperMassage)}>
           <ListMessage state={state}/>
         </div>
            <Box sx={{display:"flex" ,gap:"25px" , width: 800, maxWidth: '100%' }}>
                <TextField value={valueInput} onChange={(e)=>setInputValue(e.target.value)} fullWidth label="Введите сообщение" id="Введите сообщение" />
                <button onClick={()=> setMassage(valueInput)} className={cn(styles.btn)}>Отпавить</button>
            </Box>
        </>
    )
}

export default ChatPage