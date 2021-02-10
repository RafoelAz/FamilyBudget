import React from "react";

import { Header } from "./header";
import { Nav } from "./nav";

export function Layout(props) {
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main className="col-md-9 col-lg-10">{props.children}</main>
        </div>
      </div>
    </>
  );
}
