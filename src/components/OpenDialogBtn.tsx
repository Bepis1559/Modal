import { ReactElement } from "react";

type props = {
  open: () => void | undefined;
};

export function OpenDialogBtn({ open }: props): ReactElement {
  return (
    <button onClick={open} type="button">
      Open{" "}
    </button>
  );
}
