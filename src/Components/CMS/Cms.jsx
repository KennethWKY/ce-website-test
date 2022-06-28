import Form from "./Form";
import db from "../../Firebase";
import Signout from "../Authentication/Signout";
import Content from "../Content";

export default function Cms() {
  return (
    <div>
      <Signout />
      <Form />
      <Content />
    </div>
  );
}
