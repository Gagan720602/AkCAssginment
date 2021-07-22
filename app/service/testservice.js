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


export const selectservice = async()=>{
    let response = await selectLoginUser()
    console.log(response);
    return response;
}

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
