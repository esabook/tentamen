import React from "react";

/**
 * Fullscreen loading overlay, transparan, menutupi seluruh halaman.
 * @param {Object} props
 * @param {boolean} props.show - apakah loading tampil
 * @param {function} [props.onDismiss] - fungsi untuk dismiss overlay (opsional)
 */
export default function FullscreenLoading({ show }) {
  const instance = document.getElementById("dialog_loading");
  if (show) {
    instance?.showModal();
  } else {
    instance?.close();
  }

  return (
    <dialog
      id="dialog_loading"
      className="modal sm:modal-middle"
      style={{
        width: "auto",
        height: "auto",
        backgroundColor: "rgba(0,0,0,0.15)",
      }}
    >
      <div
        className="modal-box flex items-center justify-center p-0"
        style={{
          width: "fit-content",
          height: "fit-content",
          padding: "16px",
          minWidth: 0,
          minHeight: 0,
        }}
      >
        <span className="loading loading-spinner loading-xl" />
      </div>
    </dialog>
  );
}
