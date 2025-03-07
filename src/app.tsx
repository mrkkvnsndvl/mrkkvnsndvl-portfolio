import { useEffect } from "react";
import RootLayout from "./layouts/root-layout";
import Home from "./pages/home";

const App = () => {
  useEffect(() => {
    const handleSelectStart = (e: any) => {
      // Optionally add conditions to allow selection on certain elements, like inputs.
      e.preventDefault(); // Prevents the text selection starting
    };

    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  return (
    <RootLayout>
      <Home />
    </RootLayout>
  );
};

export default App;
