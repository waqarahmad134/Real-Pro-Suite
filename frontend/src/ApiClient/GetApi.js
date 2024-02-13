import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/urls";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loadings, setloadings] = useState(false);
  useEffect(() => {
    var header_config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    setloadings(true);
    const fetchData = () => {
      axios.get(BASE_URL + url, header_config,{ timeout: 10000 }).then((dat) => {
        setData(dat.data);
      }).catch((error)=>{
        
        setData([]);
        setloadings(false);
      });
    };
    fetchData();
    setloadings(false);
  }, [url]);

  const reFetch = async () => {
    var header_config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    setloadings(true);
    try {
      axios.get(BASE_URL + url, header_config).then((dat) => {
        setData(dat.data);
      });
    } catch (err) {}
    setloadings(false);
  };

  return { data, loadings, reFetch };
};

export default useFetch;
