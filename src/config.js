import {config} from 'dotenv'

config()

//PORT 

export const PORT = process.env.PORT || 3000

//DB

export const HOST_DB = process.env.HOST_DB || 'localhost'
export const USER_DB = process.env.USER_DB || 'root'
export const PASSWORD_DB = process.env.PASSWORD_DB || '1005369500Jm.'
export const PORT_DB = process.env.PORT_DB || 3306
export const DATABASE_DB = process.env.DATABASE_DB || 'node.js'