
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import My_forms from './../../components/page_components/form_gallery/My_forms';


export default function Form_gallery() {
  return (<>

    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border min-w-full"
    >
      <ResizablePanel maxSize={60} defaultSize={10}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />

      <ResizablePanel maxSize={90}   className="w-full">
        <My_forms />
      </ResizablePanel>
    </ResizablePanelGroup>
  </>
  );
}
