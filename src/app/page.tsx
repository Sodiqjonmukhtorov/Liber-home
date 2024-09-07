import React from "react";

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
      </div>
    </div>
  );
};

export default Page;
