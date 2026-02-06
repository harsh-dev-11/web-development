import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}
// rendering markup to root
root.render(<Page />);
