import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

async function createUsersTable() {
  try {
    await client.connect();
    console.log("Connected to the database.");

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users ( 
        id SERIAL PRIMARY KEY,
        username VARCHAR(20) UNIQUE NOT NULL,
        email VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(19) NOT NULL,
        created DATE DEFAULT CURRENT_DATE
      );
    `;

    await client.query(createTableQuery);
    console.log("Table 'users' created successfully.");
  } catch (error) {
    console.error("Error creating the table:", error);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

async function addUser(username: string, password: string, email: string) {
  try {
    await client.connect();
    console.log("Connected to the database.");

    // Use parameterized query to prevent SQL injection
    const query = `
      INSERT INTO users (username, password, email) 
      VALUES ($1, $2, $3)
    `;
    const values = [username, password, email];

    await client.query(query, values);

    console.log("Insertion successful");
  } catch (error) {
    console.error("Error inserting user:", error);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

// Call the function
addUser("vicky", "12345", "vicky@gmail.com");
 