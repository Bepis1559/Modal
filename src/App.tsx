import { ReactElement, useRef } from "react";
import "./App.css";
import { OpenDialogBtn } from "./components/OpenDialogBtn";
import { Digalog } from "./components/Dialog";
import { useModal } from "./Hooks/useModal";

function App(): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, close] = useModal(dialogRef);
  return (
    <main className="container">
      <Digalog close={close} ref={dialogRef} />
      <OpenDialogBtn open={open} />
    </main>
  );
}

export default App;
