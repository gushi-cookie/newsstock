import { ref, shallowRef } from "vue"
import type { Publisher } from "./PublishersAPI"
import type { Article } from "@/services/GDELTProjectAPI"
import GDELTProjectAPI from "@/services/GDELTProjectAPI"
import * as LocaleService from "@/services/LocaleService"

export const searchString = ref<string>('Latest news');
export const selectedPublisher = ref<Publisher | null>(null);
export const searchResult = shallowRef<Article[]>([]);

export async function search() {
    let locale = LocaleService.locale.value;
    let languageCode = locale.languageCode === 'any' ? null : locale.languageCode;
    let countryCode = locale.countryCode === 'any' ? null : locale.countryCode;

    try {
        searchResult.value = await GDELTProjectAPI.fetchNews(searchString.value, languageCode, countryCode);
    } catch(error) {
        if(error instanceof GDELTProjectAPI.InsufficientQuerySizeError) {
            alert('Your query is too short or too long!');
        } else if(error instanceof GDELTProjectAPI.InvalidGDELTResponseError) {
            alert('Some error happened with GDELT service.');
        } else {
            alert('An unknown error just happened.');
        }
        console.log(error);
    }
}