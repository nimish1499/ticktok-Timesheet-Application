"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  maxWidth?: string; // e.g., 'max-w-2xl'
}

export const Modal = ({ isOpen, onOpenChange, title, children, trigger, maxWidth = "max-w-content" }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 transition-opacity" />
        
        <Dialog.Content className={`fixed left-1/2 top-1/2 z-50 w-full ${maxWidth} -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white focus:outline-none`}>
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-300 p-5">
            {title && (
              <Dialog.Title className="text-lg font-semibold text-gray-900 leading-normal tracking-normal">
                {title}
              </Dialog.Title>
            )}
            <Dialog.Close asChild>
              <button className="text-gray-400 transition-colors outline-0 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </Dialog.Close>
          </div>

        {/* Body */}
          <div className="overflow-y-auto max-h-[85vh]">
            {children}
          </div>
          
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};