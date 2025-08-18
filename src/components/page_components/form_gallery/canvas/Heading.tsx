import { MainFormCreate } from '@/types/forms/createForms'
import { IconArrowBackUp, IconArrowForwardUp, IconLink, IconUserPlus } from '@tabler/icons-react'
import React from 'react'

export default function Heading({ data }: { data: MainFormCreate }) {
    return (
        < >
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
                <div>
                    <h4 className="text-2xl font-bold leading-tight text-gray-800"> {data.title}</h4>
                    <span className="flex items-center text-gray-600 mt-3 ">
                        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                            <IconArrowBackUp className="w-6 h-6" />
                        </div>
                        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                            <IconArrowForwardUp className="w-6 h-6" />
                        </div>
                        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                            <IconLink className="w-6 h-6" />
                        </div>
                        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                            <IconUserPlus className="w-6 h-6" />
                        </div>
                    </span>
                </div>
                <div className="mt-6 lg:mt-0">
                    <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm">Draft</button>
                    <button className="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 border bg-indigo-700 rounded text-white px-8 py-2 text-sm">Publish</button>
                </div>
            </div>
        </>
    )
}
