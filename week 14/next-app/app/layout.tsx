import React from "react";
import "./globals.css";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body className="g">
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
