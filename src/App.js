import React , {useState} from "react"


const useApp = () => {
    const[millisec , setMillisec] = useState(0)
    const[sec , setSec] = useState(0)
    const[min , setMin] = useState(0)
    const[hr , setHr] = useState(0)
                    
    return {millisec , setMillisec , sec , setSec , min , setMin , hr , setHr}
    
}



export default useApp;