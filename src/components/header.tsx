import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from './mode-toggle'

export function Header() {
    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-5">
                <img src={nlwUniteIcon} alt="NLW Unite" />

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href="#events">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Eventos
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#attendee">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    active
                                >
                                    Participantes
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    )
}
