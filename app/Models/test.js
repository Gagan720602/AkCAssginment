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

export const insertLoginUser = async(bus_no, source, desti , bus_name, departure,  duration, rating, seats, fare) => {
  const client = await pool.connect();
  
  let query = `INSERT INTO bus_info(bus_no, source, desti , bus_name, departure,  duration, rating, seats, fare) VALUES('${bus_no}', '${source}', '${desti}', '${bus_name}','${departure}', '${duration}', '${rating}','${seats}', '${fare}'  ) RETURNING *`;

  try{
    let resp =  await client.query(query)
    console.log(resp);
    return { success : true , data: resp.rows };
  }
  catch(e){
    console.log(e.message)
        let message="some error not peace";
      return { success : false , message };
  }finally {
      client.release();
  }
}






export const selectLoginUser = async() => {
  const client = await pool.connect();
  
  let query = `SELECT * FROM bus_info `;
  try{
      let resp =  await client.query(query)
     console.log(resp.rows);
      return {success : true , data: resp.rows};;
   }
  catch(e){
         let message = "Some Error occured"
         return {success : false , message};
      }
  finally {
      client.release();
  }
}


// selectLoginUser();


