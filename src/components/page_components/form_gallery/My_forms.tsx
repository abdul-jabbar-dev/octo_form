'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/hooks/redux_rtk'
import { SetSessionDraft } from '@/lib/redux/features/forms/formSlice'
import { getForms } from '@/lib/redux/state_function/formState'
import { MainForm } from '@/types/forms/createForms'
import { GenerateFormId } from '@/utils/form/id_generate/form_id_generate'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import {
    IconEdit,
    IconTrash,
    IconEyeCheck,
    IconDotsVertical,
    IconPlus,
} from '@tabler/icons-react'

export default function MyForms() {
    const dispatch = useAppDispatch()
    const allForms = useAppSelector(getForms)

    const formIdRef = useRef<string>(GenerateFormId('user'))
    const [newFormLink, setNewFormLink] = useState<string | null>(null)

    useEffect(() => {
        if (!formIdRef.current) {
            formIdRef.current = GenerateFormId('user')
        }
        setNewFormLink(`/canvas/${formIdRef.current}/edit?create=true`)
    }, [])

    const initialForm: MainForm = {
        authorId: 'user',
        formId: formIdRef.current,
        blocks: [],
        title: 'New Form',
        status: 'DRAFT',
        version: 0,
        img: null
    }

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* New Form Card */}
                {newFormLink && (
                    <Link
                        href={newFormLink}
                        onClick={() => dispatch(SetSessionDraft(initialForm))}
                        className="shadow cursor-pointer hover:bg-gray-100 active:bg-gray-50 w-full bg-gray-50 rounded-lg overflow-hidden flex flex-col justify-center items-center"
                        style={{ height: 'calc(var(--spacing) * 98)' }}
                    >
                        <IconPlus className="w-16 h-16 text-gray-600" />
                        <span className="text-gray-600 text-lg font-semibold mt-2">
                            Create New Form
                        </span>
                    </Link>
                )}

                {/* Existing Forms */}
                {allForms.map((form, index) => (
                    <div
                        key={index}
                        className="shadow w-full bg-white rounded-lg overflow-hidden flex flex-col"
                    >
                        {/* Image */}
                        {form.img && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                className="object-cover object-center w-full h-48"
                                src={form.img}
                                alt={form.title}
                            />
                        )}

                        {/* Title */}
                        <div className="text-center py-6">
                            <p className="text-xl text-gray-700 font-bold">{form.title}</p>
                        </div>

                        {/* Actions */}
                        <div className="w-full flex justify-between px-4 pb-4">
                            <Button variant="outline" size="sm" className="flex-1 mr-3">
                                <IconEdit /> Edit
                            </Button>

                            <ReturnDropdown>
                                <Button variant="ghost" size="sm">
                                    <IconDotsVertical />
                                </Button>
                            </ReturnDropdown>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const ReturnDropdown = ({ children }: { children: React.ReactNode }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white shadow-xl border rounded-md w-48 p-2 space-y-1">
                <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:bg-gray-100 active:bg-gray-200">
                    <IconEyeCheck className="w-4 h-4" />
                    Preview
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 active:bg-red-800">
                    <IconTrash className="w-4 h-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
