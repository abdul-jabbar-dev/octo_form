
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";


export default function Form_gallery() {
  return (<>

    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border min-w-full"
    >
      <ResizablePanel defaultSize={10}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={50}>
        home
      </ResizablePanel>
    </ResizablePanelGroup>
  </>
  );
}
