import { useEffect, useState } from "react";
import axios from "axios";




export function useFetch(url: string) {

    const [data, setData] = useState(null)

    useEffect(() =>{

        axios.post(url, {
            "email": "miguel@b2bit.company",
            "password": "ctLbtGWLtg"
        })
        .then(response => {
            setData(response.data)
        })
        .catch(error => setData(error.data))
    },[])
    
    return {data}
}

