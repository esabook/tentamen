import { Dialog, DialogContent, DialogOverlay } from "./ui/dialog";
import { DialogTitle } from "./ui/dialog";
import { DynamicIcon } from "lucide-react/dynamic";

/**
 * Fullscreen loading overlay, transparan, menutupi seluruh halaman.
 * @param {Object} props
 * @param {boolean} props.show - apakah loading tampil
 */
export default function FullscreenLoading({ show }) {
  return (
    <Dialog open={show}>
      <DialogOverlay className="flex items-center justify-center">
        <div
          className="flex items-center justify-center border-none shadow-none top-[50%]"
          style={{
            boxShadow: "none",
            width: "fit-content",
            height: "fit-content",
            minWidth: 0,
            minHeight: 0,
            padding: 0,
          }}
        >
          <DynamicIcon
            name="bolt"
            className="motion-safe:animate-spin w-12 h-12 text-primary"
          />
        </div>
      </DialogOverlay>
    </Dialog>
  );
}
