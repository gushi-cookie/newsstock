import * as Flags from 'country-flag-icons/string/1x1'
import Cookies from 'js-cookie'
import { ref } from 'vue'

export interface Locale {
    name: string,
    languageCode: string,
    countryCode: string,
    icon: string,
}

function anyIcon(): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19.5 7A9 9 0 0 0 12 3a8.991 8.991 0 0 0-7.484 4"/><path d="M11.5 3a16.989 16.989 0 0 0-1.826 4M12.5 3a16.989 16.989 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4a8.991 8.991 0 0 1-7.484-4"/><path d="M11.5 21a16.989 16.989 0 0 1-1.826-4m2.826 4a16.989 16.989 0 0 0 1.828-4M2 10l1 4l1.5-4L6 14l1-4m10 0l1 4l1.5-4l1.5 4l1-4M9.5 10l1 4l1.5-4l1.5 4l1-4"/></g></svg>`;
}
export const locales: Locale[] = [
    { languageCode: 'any', countryCode: 'any', icon: anyIcon(), name: 'Search everywhere' },
    { languageCode: 'spa', countryCode: 'AR', icon: Flags.AR, name: 'Argentina' },
    { languageCode: 'en', countryCode: 'AS', icon: Flags.AU, name: 'Australia' },
    { languageCode: 'deu', countryCode: 'AU', icon: Flags.AT, name: 'Austria' },
    { languageCode: 'rus', countryCode: 'BO', icon: Flags.BY, name: 'Belarus' },
    { languageCode: 'nld', countryCode: 'BE', icon: Flags.BE, name: 'Belgium' },
    { languageCode: 'por', countryCode: 'BR', icon: Flags.BR, name: 'Brazil' },
    { languageCode: 'zho', countryCode: 'CH', icon: Flags.CN, name: 'China' },
    { languageCode: 'spa', countryCode: 'CU', icon: Flags.CU, name: 'Cuba' },
    { languageCode: 'ell', countryCode: 'CY', icon: Flags.CY, name: 'Cyprus' },
    { languageCode: 'ces', countryCode: 'EZ', icon: Flags.CZ, name: 'Czech Republic' },
    { languageCode: 'dan', countryCode: 'DA', icon: Flags.DK, name: 'Denmark' },
    { languageCode: 'en', countryCode: 'DO', icon: Flags.DO, name: 'Dominica' },
    { languageCode: 'ara', countryCode: 'EG', icon: Flags.EG, name: 'Egypt' },
    { languageCode: 'fin', countryCode: 'FI', icon: Flags.FI, name: 'Finland' },
    { languageCode: 'fra', countryCode: 'FR', icon: Flags.FR, name: 'France' },
    { languageCode: 'kat', countryCode: 'GG', icon: Flags.GE, name: 'Georgia' },
    { languageCode: 'deu', countryCode: 'GM', icon: Flags.DE, name: 'Germany' },
    { languageCode: 'ell', countryCode: 'GR', icon: Flags.GR, name: 'Greece' },
    { languageCode: 'hun', countryCode: 'HU', icon: Flags.HU, name: 'Hungary' },
    { languageCode: 'hin', countryCode: 'IN', icon: Flags.IN, name: 'India' },
    { languageCode: 'ita', countryCode: 'IT', icon: Flags.IT, name: 'Italy' },
    { languageCode: 'jpn', countryCode: 'JA', icon: Flags.JP, name: 'Japan' },
    { languageCode: 'lav', countryCode: 'LG', icon: Flags.LV, name: 'Latvia' },
    { languageCode: 'spa', countryCode: 'MX', icon: Flags.MX, name: 'Mexico' },
    { languageCode: 'pol', countryCode: 'PL', icon: Flags.PL, name: 'Poland' },
    { languageCode: 'rus', countryCode: 'RS', icon: Flags.RU, name: 'Russia' },
    { languageCode: 'kor', countryCode: 'KS', icon: Flags.KR, name: 'South Korea' },
    { languageCode: 'spa', countryCode: 'SP', icon: Flags.ES, name: 'Spain' },
    { languageCode: 'swe', countryCode: 'SW', icon: Flags.SE, name: 'Sweden' },
    { languageCode: 'zho', countryCode: 'TW', icon: Flags.TW, name: 'Taiwan' },
    { languageCode: 'tur', countryCode: 'TU', icon: Flags.TR, name: 'Turkey' },
    { languageCode: 'ukr', countryCode: 'UP', icon: Flags.UA, name: 'Ukraine' },
    { languageCode: 'en', countryCode: 'UK', icon: Flags.GB, name: 'United Kingdom' },
    { languageCode: 'en', countryCode: 'US', icon: Flags.US, name: 'United States' },
    { languageCode: 'spa', countryCode: 'VE', icon: Flags.VE, name: 'Venezuela' },
];

export function getLocales(): Locale[] {
    return locales;
}

export function getLocale(countryCode: string, languageCode: string): Locale | null {
    for(let i = 0; i < locales.length; i++) {
        if(locales[i].countryCode === countryCode && locales[i].languageCode === languageCode) return locales[i];
    }
    return null;
}

export function getDefaultLocale(): Locale {
    return locales[0];
}

/**
 * Set default locale to the cookies.
 */
export function setDefaultLocale() {
    let defaultLocale = getDefaultLocale();
    Cookies.set('locale', `${defaultLocale.countryCode};${defaultLocale.languageCode}`);
    locale.value = defaultLocale;
}

/**
 * Set a specific locale to the cookies and locale constant.
 * @param newLocale 
 */
export function setLocale(newLocale: Locale) {
    Cookies.set('locale', `${newLocale.countryCode};${newLocale.languageCode}`);
    locale.value = newLocale;
}

/**
 * Get a locale stored in the cookies.
 * @returns Null if not set.
 */
export function getStoredLocale(): Locale | null {
    let storedLocale = Cookies.get('locale');
    if(!storedLocale) return null;
    storedLocale = storedLocale.split(';');
    if(storedLocale.length !== 2) return null;
    return getLocale(storedLocale[0], storedLocale[1]);
}

export const locale = ref<Locale>(getDefaultLocale());

let storedLocale = getStoredLocale();
if(storedLocale) {
    setLocale(storedLocale);
} else {
    setDefaultLocale();
}