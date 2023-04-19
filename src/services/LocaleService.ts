import * as Flags from 'country-flag-icons/string/1x1'

export interface Locale {
    name: string,
    languageCode: string,
    countryCode: string,
    icon: string,
};

const locales: Locale[] = [
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
};

export function getCurrentLocale(): Locale {
    return { languageCode: 'en', countryCode: 'UK', icon: Flags.GB, name: 'United Kingdom' };
};