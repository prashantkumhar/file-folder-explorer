interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

export const fileExplorerData: FileNode[] = [
  {
    id: '1',
    name: 'lib',
    type: 'folder',
    children: [
      {
        id: '2',
        name: 'data',
        type: 'folder',
        children: [
          {
            id: '3',
            name: 'fileExplorer.ts',
            type: 'file'
          }
        ]
      },
      {
        id: '4',
        name: 'utils',
        type: 'folder',
        children: [
          {
            id: '5',
            name: 'helpers.ts',
            type: 'file'
          }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: '7',
        name: 'components',
        type: 'folder',
        children: [
          {
            id: '8',
            name: 'Button.tsx',
            type: 'file'
          },
          {
            id: '9',
            name: 'Sidebar.tsx',
            type: 'file'
          }
        ]
      },
      {
        id: '10',
        name: 'pages',
        type: 'folder',
        children: [
          {
            id: '11',
            name: 'index.tsx',
            type: 'file'
          },
          {
            id: '12',
            name: 'about.tsx',
            type: 'file'
          }
        ]
      }
    ]
  },
  {
    id: '13',
    name: 'public',
    type: 'folder',
    children: [
      {
        id: '14',
        name: 'images',
        type: 'folder',
        children: [
          {
            id: '15',
            name: 'logo.png',
            type: 'file'
          }
        ]
      }
    ]
  },
  {
    id: '16',
    name: 'package.json',
    type: 'file'
  },
  {
    id: '17',
    name: 'README.md',
    type: 'file'
  }
]; 