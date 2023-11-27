import {createPool} from 'mysql2/promise'  
import { HOST_DB,USER_DB,PASSWORD_DB,PORT_DB,DATABASE_DB } from '../config.js';

const pool = createPool({

  host: HOST_DB,
  user: USER_DB,
  password: PASSWORD_DB,
  port: PORT_DB,
  database: DATABASE_DB,
  
})

export default pool;