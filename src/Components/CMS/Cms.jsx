import db from "../../Firebase";
import Signout from "../Authentication/Signout";
import Content from "./Content";
import Nav from "./Nav";
import SignUpForm from "./SignUpForm";

export default function Cms() {
  return (
    <div>
      <Nav />
      <Content />
      {/* <SignUpForm /> */}
    </div>
  );
}
