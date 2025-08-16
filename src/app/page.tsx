import Root_navbar from "@/components/layouts/RootNavbar/Root_navbar";
import Form_gallery from "../attached_pages/Form_gallery/page";

export default function Home() {
  return <>
    <div className="container mx-auto my-4">
      <Root_navbar /> 
      <Form_gallery />
    </div>
  </>;
}
