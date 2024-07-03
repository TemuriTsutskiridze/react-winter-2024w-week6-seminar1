import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  return (
    <>
      <Form setIsSuccess={setIsSuccess} />
      {isSuccess && <Success />}
    </>
  );
}

export default App;
