import db from "../../Firebase";
import Signout from "../Authentication/Signout";
import Content from "../Content";
import Nav from "./Nav";

export default function Cms() {
  return (
    <div>
      <Nav />
      <Content />
    </div>
  );
}
