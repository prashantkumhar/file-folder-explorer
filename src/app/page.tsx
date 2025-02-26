import { FileExplorer } from "@/components/FileExplorer";
import { fileExplorerData } from "@/lib/data/fileExplorerData";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <FileExplorer FileExplorerList={fileExplorerData} />
    </main>
  );
}

