"use client";

import Canvas from "@/components/page_components/form_gallery/canvas/Canvas";
import Heading from "@/components/page_components/form_gallery/canvas/Heading";
import { useAppSelector } from "@/hooks/redux_rtk";
import { getFormById, getSessiontForm } from "@/lib/redux/state_function/formState";
import { MainForm } from "@/types/forms/createForms";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [formData, setFormData] = useState<MainForm | null>(null);

    const params = useParams<{ form_id: string }>();
    const searchParams = useSearchParams();
    const router = useRouter();

    const isNew = Boolean(searchParams.get("create"));
    const workingForm = useAppSelector(state => getFormById(state, params.form_id));
    const sessionForm = useAppSelector(getSessiontForm);



    useEffect(() => {
        if (isNew && workingForm) {
            router.replace(`/canvas/${workingForm.formId}/edit`);
        }
    }, [isNew, workingForm, router]);

    useEffect(() => {

        if (isNew) {
            if (sessionForm) {
                setFormData(sessionForm);
            } else if (workingForm) {
                setFormData(workingForm);
            } else {
                router.replace("/");
            }
        } else {
            if (workingForm) {
                setFormData(workingForm);
            } else {
                router.replace("/");
            }
        }
    }, [isNew, workingForm, sessionForm, router]);

    if (!formData) {
        return <div className="text-center text-gray-500">Form not found</div>;
    }

    return (
        <>
            <Heading data={formData} isSessionForm={isNew} />
            <Canvas data={formData} />
        </>
    );
}
