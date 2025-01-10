// axios fetch

const { exec } = require("child_process");

// Docker command to list running containers
const dockerCommand = "docker images";

exec(dockerCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Error output: ${stderr}`);
    return;
  }

  

  console.log(`Command Output:\n${stdout}`);
});
