import { useAppDispatch } from '@/hooks/redux_rtk'
import { SaveDraft, SetSessionDraft, UpdateDraft } from '@/lib/redux/features/forms/formSlice'
import {  MainForm } from '@/types/forms/createForms'
import { IconArrowBackUp, IconArrowForwardUp, IconLink, IconUserPlus } from '@tabler/icons-react'
import React from 'react'

export default function Heading({ data, isSessionForm }: { data: MainForm, isSessionForm: boolean }) {

    const [formContent, setFormContent] = React.useState<MainForm>(data);
    const [isEditTitle, setIsEditTitle] = React.useState(false);
    const [editTitle, setEditTitle] = React.useState<string>(data.title || "Untitled Form");

    const dispatch = useAppDispatch();

    const makeDraft = (): void => {
        dispatch(SaveDraft(null));
    };

    const setTitle = (): void => {
        console.log(isSessionForm)
        if (editTitle.trim() !== data.title.trim()) {
            const updated = { ...formContent, title: editTitle || "Untitled Form" };
            setFormContent(updated);
            if (isSessionForm) {
                dispatch(SetSessionDraft({ ...updated, updatedAt: new Date().toISOString() }));
            } else {
                dispatch(UpdateDraft({ ...updated, updatedAt: new Date().toISOString() }));
            }
            setIsEditTitle(false);
        }
    };

    return (
        <div className="my-6 lg:my-12 container px-6 mx-auto gap-x-12 flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
            <div className="w-full">
                <div className="flex">
                    {isEditTitle ? (
                        <input
                            value={editTitle}
                            autoFocus
                            onChange={(e) => setEditTitle(e.target.value)}
                            onBlur={setTitle}
                            className="text-2xl font-bold leading-tight text-gray-800 w-full 
                         focus:outline-none border-b border-gray-300"
                            type="text"
                            placeholder="Title"
                        />
                    ) : (
                        <h4
                            onDoubleClick={() => setIsEditTitle(true)}
                            className="text-2xl font-bold leading-tight text-gray-800"
                        >
                            {formContent.title}
                        </h4>
                    )}
                </div>

                <span className="flex items-center text-gray-600 mt-3 gap-2">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <IconArrowBackUp className="w-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <IconArrowForwardUp className="w-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <IconLink className="w-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <IconUserPlus className="w-6 h-6" />
                    </button>
                </span>
            </div>

            <div className="mt-6 lg:mt-0">
                {isSessionForm && (
                    <button
                        onClick={makeDraft}
                        className="mx-2 my-2 bg-white hover:bg-gray-100 rounded text-indigo-700 
                       px-6 py-2 text-sm transition duration-150 ease-in-out 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-offset-indigo-700 focus:ring-white"
                    >
                        Draft
                    </button>
                )}
                <button
                    className="bg-indigo-700 text-white px-8 py-2 text-sm rounded 
                     hover:bg-indigo-600 transition duration-150 ease-in-out 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-indigo-700"
                >
                    Publish
                </button>
            </div>
        </div>
    );
}
