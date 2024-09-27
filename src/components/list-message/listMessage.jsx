import { memo, useMemo } from "react"
import Massage from "../massage/massage"

const ListMessage = ({ state }) => {

    const memoMassage = useMemo(()=>{
        return state.map((item,idx)=><Massage key={idx} userName={item.userName}>{item.massage}</Massage>)
     },[state.length])
 
    return (
        <>
        {memoMassage}
        </>
    )
}

export default memo(ListMessage) 