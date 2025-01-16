import { createClient } from "redis";

const client = createClient();

async function main() {
  await client.connect();
  while (1) {
    try {
      const response = await client.brPop("submission", 0);
      if (response) {
        const { key, element } = response;
        console.log("recevied", element);
        // console.log(response);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.log("error occurs in redis");
      console.log(error);
    }
  }
}

main();
