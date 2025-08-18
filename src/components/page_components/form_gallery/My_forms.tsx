
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { IconEdit, IconTrash, IconEyeCheck, IconDotsVertical, IconPlus } from '@tabler/icons-react'
import React from 'react'

export default function My_forms() {


    const formsSet = [
        {
            img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: " We have the best equipment in the market", link: "/form1"

        }, {
            img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: " We have the best equipment in the market", link: "/form1"

        }, {
            img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: " We have the best equipment in the market", link: "/form1"

        }, {
            img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: " We have the best equipment in the market", link: "/form1"

        }, {
            img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: " We have the best equipment in the market", link: "/form1"

        }, {
            img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: " We have the best equipment in the market", link: "/form1"

        }, {
            img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            title: " We have the best equipment in the market", link: "/form1"

        },
    ]


    return (

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div style={{ height: 'calc(var(--spacing) * 98)' }} className="   shadow cursor-pointer hover:bg-gray-100 active:bg-gray-50 w-full bg-gray-50 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">

                    <IconPlus className='w-16 h-16 text-gray-600' />
                    <span className='text-gray-600 text-lg font-semibold mt-2'>
                        Create New Form
                    </span>
                </div>
                {
                    formsSet.map((form, index) => <div key={index} className=" shadow w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img className="object-center object-cover h-auto w-full" src={form.img} alt="photo" />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">{form.title}</p>

                        </div>
                        <div className='w-full flex justify-between px-4 pb-4'>
                            <Button variant="outline" size="sm" className=' mr-3 flex-1 '>
                                <IconEdit /> Edit
                            </Button>
                            <ReturnDropdown>
                                <Button variant="ghost" size="sm">
                                    <IconDotsVertical />
                                </Button>
                            </ReturnDropdown>

                        </div>
                    </div>)
                }

            </div>
        </section>

    )
}





const ReturnDropdown = ({ children }: { children: React.ReactNode }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white shadow-xl border rounded-md w-48 p-2 space-y-1">
                <DropdownMenuItem className="flex items-center justify-start gap-2 px-3 py-2 text-sm font-medium text-primary   hover:bg-gray-100 active:bg-gray-200  ">
                    <IconEyeCheck className="w-4 h-4" />
                    Preview
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-start gap-2 px-3 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 
                active:bg-red-800  ">
                    <IconTrash className="w-4 h-4" />
                    Delete

                </DropdownMenuItem>


            </DropdownMenuContent>
        </DropdownMenu>
    )
}
