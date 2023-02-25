import "./style.css";
import { machine, state, connect } from "./select";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section>
    <h1>@hikui-ui/select</h1>
    <pre>
    </pre>
    <div id="select-container">
      
    </div>
  </section>
`;
const container = document.querySelector("#select-container");

console.log("machine", machine);
console.log("state", state);
const connected = connect();
console.log("connected", connected.triggerProps);
