"use client";

import Canvas from "@/components/page_components/form_gallery/canvas/Canvas"
import Heading from "@/components/page_components/form_gallery/canvas/Heading"
import { useAppSelector } from "@/hooks/redux_rtk"
import { getDraftById, getSessiontForm } from "@/lib/redux/state_function/formState";
import { MainForm, MainFormCreate } from "@/types/forms/createForms";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [formData, setFormData] = useState<MainFormCreate | MainForm | null>(null);
    const params = useParams<{ form_id: string }>();
    const searchParams = useSearchParams();
    const isNew = Boolean(searchParams.get("create"));
 
    const draftForm = useAppSelector(state => getDraftById(state, params.form_id));
    const sessionForm = useAppSelector(getSessiontForm);

    useEffect(() => {
        if (isNew) {
            setFormData(sessionForm);
        } else {
            setFormData(draftForm);
        }
    }, [isNew, draftForm, sessionForm]);

    if (!formData) {
        return <div className="text-center text-gray-500">Form not found</div>;
    }

    return (
        <>
            <Heading data={formData} />
            <Canvas  data={formData}/>
        </>
    );
}
