import express from "express";

const app = express();

app.use(express.json());

const optStore: Record<string, string> = {};

//@ts-ignore
app.post("/generate-otp", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  optStore[email] = otp;

  console.log(`OTP for ${email}: ${otp}`);

  res.status(200).json({ message: "OTP generated and logged" });
});

//@ts-ignore
app.post("/reset-password", (req, res) => {
  const { email, otp, newPassword } = req.body;
  console.log(email, otp, newPassword);
  if (!email || !otp || !newPassword) {
    return res
      .status(400)
      .json({ message: "Email , otp and new password is required" });
  }
  if (optStore[email] === otp) {
    console.log(`password for ${email} has been reset to : ${newPassword}`);
    delete optStore[email];
    res
      .status(200)
      .json({ message: "Password has been reset ", success: true });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(3000, () => {
  console.log("Start at 3000");
});
