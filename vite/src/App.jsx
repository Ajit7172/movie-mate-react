// syntax 1
import {Pest} from "./Pest";
import {Test} from "./Test";

// syntax 2
// import Test from "./Test";

function App() {
  const data = {
    name: "ajit kumar chaudhary",
    dob:1991,
    age: () => new Date().getFullYear() -data.dob,
  };

  const arr = [];
return (
<>
  Hello World
  <Test num1={2} num2={2} data={data} />
  <Pest data={arr} />
</>
);
  }

export default App;
