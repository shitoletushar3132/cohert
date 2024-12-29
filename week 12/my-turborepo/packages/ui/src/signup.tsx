"use client";

export const Sigup = () => {
  return (
    <div
      style={{
        width: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ width: 400, border: "1px solid black" }}>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>SUbmit</button>
      </div>
    </div>
  );
};
