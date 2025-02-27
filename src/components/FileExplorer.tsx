"use client";
import React, { useState } from "react";
import { FileNode } from "@/lib/types/FileNode";
import { DeleteIcon } from "@/lib/icons/deleteIcon";
import { Button } from "./ui/button";
import { AddFolderModal } from "./addFolderModal";

export const FileExplorer = ({
  fileExplorerList = [],
  handleAddFolder,
}: {
  fileExplorerList: FileNode[];
  handleAddFolder: (
    parentId: string,
    state: { name: string; isFolder: boolean }
  ) => void;
}) => {
  const [expandedNodes, setExpandedNodes] = useState<{
    [val: string]: boolean;
  }>({});

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openNode = (id: string) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {fileExplorerList
        .sort((a, b) => {
          if (a.isFolder && !b.isFolder) return -1;
          if (!a.isFolder && b.isFolder) return 1;
          return a.name.localeCompare(b.name);
        })
        .map((node) => {
          return (
            <div key={node.id} className="my-1 ml-5 ">
              {node.isFolder ? (
                <div className="flex items-center gap-2">
                  <Button
                    className="flex items-center gap-1 bg-background/95"
                    onClick={() => toggleNode(node.id)}
                  >
                    {expandedNodes[node.id] ? (
                      <span>&#8722;</span>
                    ) : (
                      <span>&gt;</span>
                    )}
                    <div>{node.name}</div>
                  </Button>
                  <AddFolderModal
                    folder={node}
                    handleAddFolder={handleAddFolder}
                    openNode={openNode}
                  />
                  <Button className="hover:scale-110">
                    <DeleteIcon height={16} width={16} />
                  </Button>
                </div>
              ) : (
                <span>{node.name}</span>
              )}

              {expandedNodes[node.id] && node?.children && (
                <FileExplorer
                  fileExplorerList={node?.children}
                  handleAddFolder={handleAddFolder}
                />
              )}
            </div>
          );
        })}
    </>
  );
};
