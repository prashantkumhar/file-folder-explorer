"use client";
import { FileExplorer } from "@/components/fileExplorer";
import { fileExplorerData } from "@/lib/data/fileExplorerData";
import { Header } from "@/components/header";
import { useState } from "react";
import { FileNode } from "@/lib/types/FileNode";

export default function Home() {
  const [filesFolder, setFilesFolder] = useState(fileExplorerData);

  const handleAddFolder = (
    parentId: string,
    state: { name: string; isFolder: boolean }
  ) => {
    const updateFilesData = (files: FileNode[]): FileNode[] => {
      return files.map((node) => {
        if (parentId === node.id) {
          return {
            ...node,
            children: [
              {
                id: Date.now().toString(),
                name: state.name,
                isFolder: state.isFolder,
              },
              ...(node?.children || []),
            ],
          };
        }
        if (node?.children) {
          return { ...node, children: updateFilesData(node.children) };
        }
        return node;
      });
    };
    setFilesFolder((prev) => updateFilesData(prev));
  };

  const handleDeleteFileFolder = (id: string) => {
    const updateFilesData = (files: FileNode[]): FileNode[] => {
      return files
        .filter((node) => node.id !== id)
        .map((node) => {
          if (node?.children) {
            return { ...node, children: updateFilesData(node.children) };
          }
          return node;
        });
    };
    setFilesFolder((prev) => updateFilesData(prev));
  };
  return (
    <main>
      <Header />
      <FileExplorer
        fileExplorerList={filesFolder}
        handleAddFolder={handleAddFolder}
        handleDeleteFileFolder={handleDeleteFileFolder}
      />
    </main>
  );
}
