/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";
import Header from "@pages/Header";

export default function Layout() {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
}
