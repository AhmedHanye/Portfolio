import Navbar from "@/components/nav/navbar";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: child;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
