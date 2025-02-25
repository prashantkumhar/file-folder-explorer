import { FileNode } from "../types/FileExplorer.types";


export const fileExplorerData: FileNode[] = [
  {
    id: "1",
    name: "lib",
    isFolder: true,
    children: [
      {
        id: "2",
        name: "data",
        isFolder: true,
        children: [
          {
            id: "3",
            name: "fileExplorer.ts",
            isFolder: false,
          },
        ],
      },
      {
        id: "4",
        name: "utils",
        isFolder: true,
        children: [
          {
            id: "5",
            name: "helpers.ts",
            isFolder: false,
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "src",
    isFolder: true,
    children: [
      {
        id: "7",
        name: "components",
        isFolder: true,
        children: [
          {
            id: "8",
            name: "Button.tsx",
            isFolder: false,
          },
          {
            id: "9",
            name: "Sidebar.tsx",
            isFolder: false,
          },
        ],
      },
      {
        id: "10",
        name: "pages",
        isFolder: true,
        children: [
          {
            id: "11",
            name: "index.tsx",
            isFolder: false,
          },
          {
            id: "12",
            name: "about.tsx",
            isFolder: false,
          },
        ],
      },
    ],
  },
  {
    id: "13",
    name: "public",
    isFolder: true,
    children: [
      {
        id: "14",
        name: "images",
        isFolder: true,
        children: [
          {
            id: "15",
            name: "logo.png",
            isFolder: false,
          },
        ],
      },
    ],
  },
  {
    id: "16",
    name: "package.json",
    isFolder: false,
  },
  {
    id: "17",
    name: "README.md",
    isFolder: false,
  },
];
