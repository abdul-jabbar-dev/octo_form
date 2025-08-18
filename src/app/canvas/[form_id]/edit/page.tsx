"use client";

import Canvas from "@/components/page_components/form_gallery/canvas/Canvas"
import Heading from "@/components/page_components/form_gallery/canvas/Heading"
import { useAppSelector } from "@/hooks/redux_rtk"
import { getDraftById } from "@/lib/redux/state_function/formState";
import { useParams } from "next/navigation";



export default function Page() {
    const params = useParams<{ form_id: string }>();

    const someState = useAppSelector(state => getDraftById(state, params.form_id));
    if (!someState) {
        return <div className="text-center text-gray-500">Form not found</div>;
    }
   

    return (
        < >
            <Heading data={someState} />
            {/* <!-- Page title ends --> */}
            <Canvas />
        </>)
}