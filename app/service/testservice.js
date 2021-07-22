import { selectLoginUser, insertLoginUser } from '../Models/test.js';

import pkg from 'pg';
const {Pool} = pkg;
import {psqlConfig} from '../config/postgresConfig.js';

const pool = new Pool({
    connectionString: psqlConfig,
  });
pool.on('error', (error)=>{
    console.info("Unexpected error on idle client",error);
    process.exit(-1);
})

//==================================================================select api service========================================//
export const selectservice = async()=>{
    let response = await selectLoginUser()
    console.log(response);
    return response;
}
//==================================================================create api service========================================//
export const insertservice  = async(bus_no, source, desti, bus_name, departure, duration, rating, seats, fare) => {
   try{
    let response = await insertLoginUser(bus_no, source, desti, bus_name, departure, duration, rating, seats, fare)
    

    console.log(response);
    return response;
   }
   catch(e)
   {
       console.log(e.message)
   }
}
//==================================================================update  api service========================================//
export  const bookService =async (bus,seat) =>{
    const client = await pool.connect();
    
    let query=`UPDATE bus_info SET seats='${seat}' where bus_no='${bus}'`;
     

    try{
        let resp =  await client.query(query)
       console.log(resp);
        return resp; 
      }
      catch(e)
      {
          console.log(e.message)
      }

}

//==================================================================delete api service========================================//
export  const deleteService =async (num) =>{
    const client = await pool.connect();
    
    let query=`DELETE from bus_info where bus_no='${num}'`;
     

    try{
        let resp =  await client.query(query)
       console.log(resp);
        return resp; 
      }
      catch(e)
      {
          console.log(e.message)
      }

}