import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import React from 'react'

type Item = {
    label: string;
    href: string;
}
export default function Root_navbar() {
    const items: Item[] = [
        { label: 'Home', href: '#' },
        { label: 'Sign Up', href: '#' },
        { label: 'Setting', href: '#' },
        { label: 'Pricing', href: '#' },]

    return (
        <><NavigationMenu className='pb-4'>
            <NavigationMenuList className=''>
                <NavigationMenuItem className='flex gap-6   '>
                    {items.map((item, index) => <NavigationMenuTrigger key={index}>{item.label}</NavigationMenuTrigger>)}

                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu></>
    )
}
