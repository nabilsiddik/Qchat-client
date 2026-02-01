import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    UserIcon,
} from "lucide-react"
import { IDropDownMenuItems } from "../layouts/Navbar"
import Link from "next/link"

export function DropdownMenuComp({ children, dropdownMenuItems = [], className = '' }: {
    children: React.ReactNode
    dropdownMenuItems?: IDropDownMenuItems[],
    className?: string
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`${className}`}>
                {dropdownMenuItems.length && dropdownMenuItems.map((menuItem: IDropDownMenuItems, index: number) => {
                    return <Link className="cursor-pointer" href={menuItem?.href} key={index}>
                        <DropdownMenuItem className="cursor-pointer">
                            {menuItem?.icon}
                            {menuItem?.title}
                        </DropdownMenuItem>
                    </Link>
                })}
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
