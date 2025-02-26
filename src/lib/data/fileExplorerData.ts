import { FileNode } from "../types/FileNode";

export const fileExplorerData: FileNode[] = [
  {
    id: "1",
    name: "src",
    isFolder: true,
    children: [
      {
        id: "2",
        name: "lib",
        isFolder: true,
        children: [
          {
            id: "3",
            name: "components",
            isFolder: true,
            children: [
              {
                id: "4",
                name: "Button.tsx",
                isFolder: false,
              },
              {
                id: "5",
                name: "Input.tsx",
                isFolder: false,
              },
            ],
          },
          {
            id: "6",
            name: "utils",
            isFolder: true,
            children: [
              {
                id: "7",
                name: "helpers.ts",
                isFolder: false,
              },
              {
                id: "8",
                name: "constants.ts",
                isFolder: false,
              },
            ],
          },
          {
            id: "9",
            name: "types",
            isFolder: true,
            children: [
              {
                id: "10",
                name: "FileNode.ts",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        id: "11",
        name: "pages",
        isFolder: true,
        children: [
          {
            id: "12",
            name: "index.tsx",
            isFolder: false,
          },
          {
            id: "13",
            name: "about.tsx",
            isFolder: false,
          },
        ],
      },
      {
        id: "14",
        name: "styles",
        isFolder: true,
        children: [
          {
            id: "15",
            name: "globals.css",
            isFolder: false,
          },
        ],
      },
    ],
  },
  {
    id: "11",
    name: "public",
    isFolder: true,
    children: [
      {
        id: "12",
        name: "images",
        isFolder: true,
        children: [
          {
            id: "13",
            name: "logo.png",
            isFolder: false,
          },
        ],
      },
    ],
  },
  {
    id: "14",
    name: "package.json",
    isFolder: false,
  },
  {
    id: "15",
    name: "tsconfig.json",
    isFolder: false,
  },
  {
    id: "16",
    name: ".gitignore",
    isFolder: false,
  },
  {
    id: "17",
    name: "README.md",
    isFolder: false,
  },
];
