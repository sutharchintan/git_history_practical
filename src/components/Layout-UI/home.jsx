import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { MainContent } from "./main-content";
import { LoaderComponent } from "./loader-component";

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent />
      <LoaderComponent />
    </div>
  );
};

export default Home;
