import { useState } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<MyApp />);

function MyApp() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>add ({count})</button>;
}
