"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CarInfoModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default CarInfoModal;
