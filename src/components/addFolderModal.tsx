import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { AddFolderIcon } from "@/lib/icons/addFolderIcon";
import { FileNode } from "@/lib/types/FileNode";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AddFolderModal = ({
  folder,
  handleAddFolder,
  openNode,
}: {
  folder: FileNode;
  handleAddFolder: (
    parentId: string,
    state: { name: string; isFolder: boolean }
  ) => void;
  openNode: (id: string) => void;
}) => {
  const initialFormData = { name: "", isFolder: false };
  const [formData, setFormData] = useState(initialFormData);
  const [open, setOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddFolder(folder.id, {
      ...formData,
    });
    openNode(folder.id);
    setOpen(false);
    setFormData(initialFormData);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <AddFolderIcon height={16} width={16} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new item to {folder.name}</DialogTitle>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-3">
            <Label htmlFor="name">File/Folder Name</Label>
            <Input
              required
              id="name"
              value={formData.name}
              onChange={handleNameChange}
            />
            <div className="flex items-center gap-2">
              <Input
                className="size-auto"
                type="checkbox"
                id="isFolder"
                checked={formData.isFolder}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isFolder: e.target.checked,
                  }))
                }
              />
              <Label htmlFor="isFolder">Create as folder</Label>
            </div>
            <Button className="p-2 shadow" type="submit">
              Create {formData.isFolder ? "Folder" : "File"}
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
