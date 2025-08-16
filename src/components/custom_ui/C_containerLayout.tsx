import React from 'react'

export default function C_containerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='container mx-auto '> {children}</div>
    )
}
