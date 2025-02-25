## About This App

This is a file explorer application built with Next.js and React. It allows users to browse through a hierarchical file structure with the following features:

### Features

- Interactive folder tree structure
- Expandable/collapsible folders
- Visual indicators for files vs folders
- Clean and intuitive UI

## For Developers 💻

### Tech Stack

- React
- TypeScript
- Tailwind CSS
- Husky (Pre-commit hooks)
- ESLint

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

### Pre-commit Hooks

The project uses Husky to run the following checks before each commit:
- ESLint for code style and error checking
- TypeScript compilation check
- Prettier for code formatting

To skip pre-commit hooks (not recommended), use:
```bash
git commit -m "message" --no-verify
```

### Project Structure

```
src/
  ├── components/
  │   └── FileExplorer.tsx    # Main component
  ├── lib/
  │   ├── data/
  │   │   └── fileExplorer.ts # Data structure
  │   └── types/
  │       └── FileExplorer.types.ts
  └── app/
      └── page.tsx
```

### Usage in Code

```typescript
import { FileExplorer } from "@/components/FileExplorer";

function App() {
  return <FileExplorer />;
}
```

## Contributing

Feel free to submit issues and pull requests.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

