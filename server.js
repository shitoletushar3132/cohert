const http = require("http");

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers

  // Handle preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  // Function to generate a random number
  const number = () => {
    return Math.round(Math.random() * 100);
  };

  let l;

  for (let i = 0; i < 1234; i++) {
    l += i;
  }

  // Set response headers and send JSON response
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      jobs: number(),
      networks: number(),
      messagings: number(),
      nofifications: number(),
    })
  );
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
