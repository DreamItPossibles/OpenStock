'use client'

import React, { createContext, useContext } from 'react'
import {NAV_ITEMS} from "@/lib/constants";
import {usePathname} from "next/navigation";
import SearchCommand from "@/components/SearchCommand";
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

// Create context for popup state
const DonatePopupContext = createContext<{
    openDonatePopup: () => void;
}>({
    openDonatePopup: () => {}
});

export const useDonatePopup = () => useContext(DonatePopupContext);

const NavItems = ({initialStocks}: { initialStocks: StockWithWatchlistStatus[]}) => {
    const t = useTranslations('Navigation');
    const pathname = usePathname()

    const isActive = (path: string) => {
        // Handle locale prefix in pathname
        const pathWithoutLocale = pathname.replace(/^\/(en|zh)/, '') || '/';
        if (path ==='/') return pathWithoutLocale === '/'

        return pathWithoutLocale.startsWith(path);
    }

    const openDonatePopup = () => {
        // Trigger the popup by dispatching a custom event
        window.dispatchEvent(new CustomEvent('open-donate-popup'));
    }

    return (
        <DonatePopupContext.Provider value={{ openDonatePopup }}>
            <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({href, label, key}) => {
                if (href === '/search') return (
                    <li key="search-trigger">
                        <SearchCommand
                            renderAs="text"
                            label={t(key as any)}
                            initialStocks={initialStocks}
                        />
                    </li>
                )
                return <li key={href}>
                    <Link href={href as any} className={`hover:text-teal-500 transition-colors ${isActive(href) ? 'text-gray-100' : ''}`}>
                        {t(key as any)}
                    </Link>
                </li>
            })}
            <li key="donate">
                <Button
                    onClick={openDonatePopup}
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center gap-2 animate-pulse"
                    size="sm"
                >
                    <Heart className="h-4 w-4 fill-current" />
                    {t('donate')}
                </Button>
            </li>
        </ul>
        </DonatePopupContext.Provider>
    )
}
export default NavItems
