import React , {useState} from "react"


const useApp = () => {
    const[millisec , setMillisec] = useState("00")
    const[sec , setSec] = useState("00")
    const[min , setMin] = useState("00")
    const[hr , setHr] = useState("00")
                    
    return {millisec , setMillisec , sec , setSec , min , setMin , hr , setHr}
    
}



export default useApp;