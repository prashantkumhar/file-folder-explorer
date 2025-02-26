"use client";
import React, { useState } from "react";
import { FileNode } from "@/lib/types/FileNode";
import { AddFolderIcon } from "@/lib/icons/AddFolderIcon";
import { DeleteIcon } from "@/lib/icons/DeleteIcon";

export const FileExplorer = ({
  FileExplorerList = [],
}: {
  FileExplorerList: FileNode[];
}) => {
  const [expandedNodes, setExpandedNodes] = useState<{
    [val: string]: boolean;
  }>({});

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {FileExplorerList.map((node) => {
        return (
          <div key={node.id} className="my-1 ml-5 ">
            {node.isFolder ? (
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center gap-1 bg-background/95"
                  onClick={() => toggleNode(node.id)}
                >
                  {expandedNodes[node.id] ? (
                    <span>&#8722;</span>
                  ) : (
                    <span>&gt;</span>
                  )}
                  <div>{node.name}</div>
                </button>
                <button className="hover:scale-110">
                  <AddFolderIcon height={16} width={16} />
                </button>
                <button className="hover:scale-110">
                  <DeleteIcon height={16} width={16} />
                </button>
              </div>
            ) : (
              <span>{node.name}</span>
            )}

            {expandedNodes[node.id] && node?.children && (
              <FileExplorer FileExplorerList={node?.children} />
            )}
          </div>
        );
      })}
    </>
  );
};
