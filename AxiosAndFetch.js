// axios fetch

const { default: axios } = require("axios");

function main() {
  fetch("https://book-api-03.onrender.com/api/show-books").then(async (res) => {
    const json = await res.json();
    console.log(json);
  });
}

async function main2() {
  const response = await fetch(
    "https://book-api-03.onrender.com/api/show-books",
    {
      method: "POST",
      body: { name: "tushar" },
      headers: {
        Authoirzation: "Bearer h5vmpbrhoxkv1dgjoc8ebhmhzfxhcbml3v-Jv8G1H2H5",
      },
    },
  );
  const json = await response.json(response);
  console.log(json);
}

async function mainAxios() {
  const response = await axios.post(
    "https://book-api-03.onrender.com/api/add-book",
    {
      title: "java",
      category: "computer Language",
      rent: 1232,
    },
    // {
    //   headers: {
    //     Authorization: "Bearer h5vmpbrhoxkv1dgjoc8ebhmhzfxhcbml3v-Jv8G1H2H5",
    //   },
    // },
  );

  console.log(response.data.message);
}

async function axio() {
  const response = await axios({
    url: "https://book-api-03.onrender.com/api/add-book",
    method: "POST",
    headers: {
      Authorization: "Bearer h5vmpbrhoxkv1dgjoc8ebhmhzfxhcbml3v-Jv8G1H2H5",
    },
    data: {
      user: "fjasld",
    },
  });
}  

mainAxios();
