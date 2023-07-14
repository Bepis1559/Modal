import { RefObject, useCallback, useEffect } from "react";

export function useModal(modalRef: RefObject<HTMLDialogElement>) {
  const close = useCallback(() => modalRef.current?.close(), [modalRef]);
  const open = useCallback(() => modalRef.current?.showModal(), [modalRef]);
  useEffect(() => {
    function handleEscKey(e: KeyboardEvent) {
      if (e.key == "Escape") {
        close();
      }
    }
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [close]);
  return [open, close];
}
