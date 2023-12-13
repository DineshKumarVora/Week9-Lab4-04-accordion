// import React, { useState } from 'react';
// import data from './data';
// import SingleQuestion from './Question';
// function App() {
//   return <h2>accordion project setup</h2>;
// }

// export default App;

import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

function App() {
  const [questions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
