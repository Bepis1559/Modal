import { ReactElement, forwardRef, Ref } from "react";
import { createPortal } from "react-dom";
import { CloseDialogBtn } from "./CloseDialogBtn";

type Props = {
  close: () => void | undefined;
};

export const Digalog = forwardRef(
  (props: Props, ref: Ref<HTMLDialogElement>): ReactElement => {
    const { close } = props;
    return createPortal(
      <dialog ref={ref}>
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <CloseDialogBtn close={close} />
      </dialog>,
      document.getElementById("alert-messages")!,
    );
  },
);
