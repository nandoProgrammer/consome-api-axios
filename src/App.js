import React, { useEffect, useState } from "react";
import api from "./services/api";

const App = () => {
  const [data, setData] = useState();
  const [requestComplete, setRequestComplete] = useState(false);


  useEffect(() => {
    api
      .get("")
      .then((response) => {
        setData(response.data);
        setRequestComplete(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if(requestComplete){
    console.log(data);
  }
  
  console.log('AQUI' + process.env.REACT_APP_SECRET_API);

  return(
   <>
   {
     requestComplete ? data.map((item) => (
       <span>{ item.nome }</span>
     )):(
       <h1>carregando...</h1>
     )
   }
   </>
  )
}

export default App;