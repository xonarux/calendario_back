import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root", // Cambia según tu configuración
  password: "", // Cambia según tu configuración
  database: "calendario",
  port: 3306,
});

export default pool;
