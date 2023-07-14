import { ReactElement } from "react";

type props = {
  close: () => void | undefined;
};

export function CloseDialogBtn({ close }: props): ReactElement {
  return (
    <button onClick={close} type="button">
      Close
    </button>
  );
}
