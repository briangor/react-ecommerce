import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    //const [isPending, setIsPending] = useState(true);
    //const [error, setError] = useState(null);

    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
          //setLoading(false);
          //const response = await fetch("https://fakestoreapi.com/products");
          const response = await axios.get(url);
    
          if (componentMounted) {
            //setData(await response.clone().json());
            //setFilter(await response.json());
            setData(await response.data);
            //setFilter(await response.data);
            //setLoading(false);
            // console.log(filter);
          }
    
          return () => {
            componentMounted = false;
          };
        };
    
        getProducts();
      }, []);

    /* useEffect(() => {
        const abortCont = new AbortController();

        axios.get(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok) {
                throw Error("Could not fetch the data for that resource")
            }
            return res
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {

            } else {
                setIsPending(false);
                setError(err.message);
            }
        })

        return () => abortCont.abort();
    }, [url]); */


    return {data}
}
 
export default useFetch;