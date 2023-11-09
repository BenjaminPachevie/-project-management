import logo from "../assets/no-projects.png";
import { Button } from "./button";

export default function Content() {
  return (
    <div>
      <img src={logo}/>
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <Button>Create new project</Button>
    </div>
  );
}
