import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MenuBar from "../components/MenuBar";

const LayaoutPublic = () => {
  const navigation = useNavigation();

  return (
    <div className="container">
      <MenuBar />
      <main>
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default LayaoutPublic;
