import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      {/* Determines where the children components will be injected */}
      <Outlet />
    </>
  );
}

export default RootLayout;
