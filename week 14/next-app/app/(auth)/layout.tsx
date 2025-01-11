import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="text-center">20% off for the next 3 days</div>
      {children}
    </div>
  );
};

export default layout;
