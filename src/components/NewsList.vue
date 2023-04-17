<script lang="ts">
import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import type { Props as NewsItemProps } from './NewsItem.vue'

const requiredResponseFields: string[] = ['title', 'sourcecountry', 'language', 'seendate', 'url', 'domain', 'socialimage'];

/**
 * Return true if some of fields in the obj are undefined, null, or 0 length string.
 * @param obj object to inspect.
 * @param fields fields to be inspected in the object.
 */
function checkEmptyFields(obj: any, fields: string[]): boolean {
    let objectFields = Object.getOwnPropertyNames(obj);

    for(let i = 0; i < fields.length; i++) {
        if(!objectFields.includes(fields[i]) ||
           obj[fields[i]] === null ||
           obj[fields[i]] === undefined ||
           (typeof obj[fields[i]] === 'string' && obj[fields[i]].length === 0) ||
           (obj[fields[i]] instanceof String && obj[fields[i]].length === 0)
        ) return true;
    }
    return false;
}

interface ResponseArticle {
    domain: string,
    language: string,
    seendate: string,
    socialimage: string,
    sourcecountry: string,
    title: string,
    url: string,
    url_mobile: string,
}

/**
 * Check if an object is instance of the ResponseArticle interface.
 * @param obj 
 */
function isResponseArticle(obj: any): boolean {
    return Object.prototype.hasOwnProperty.call(obj, 'domain') &&
    Object.prototype.hasOwnProperty.call(obj, 'language') &&
    Object.prototype.hasOwnProperty.call(obj, 'seendate') &&
    Object.prototype.hasOwnProperty.call(obj, 'socialimage') &&
    Object.prototype.hasOwnProperty.call(obj, 'sourcecountry') &&
    Object.prototype.hasOwnProperty.call(obj, 'title') &&
    Object.prototype.hasOwnProperty.call(obj, 'url_mobile');
}

class InvalidGDELTResponseError extends Error {
    response: AxiosResponse;

    constructor(message: string, response: AxiosResponse) {
        super(message);
        this.response = response;
    };
};

/**
 * Make https request to the GDELT api, with options.
 * @param searchPrase search phrase.
 * @param languageCode ISO-639-2/T code of a language.
 * @param countryCode ISO-3166-1/Alpha-2 code of a country.
 * @throws { AxiosError, InvalidGDELTResponseError }
 */
async function fetchNews(searchPhrase: string, languageCode: string | null, countryCode: string | null): Promise<NewsItemProps[]> {
    let params = new URLSearchParams();
    languageCode = languageCode ? ` sourcelang:${languageCode}` : '';
    countryCode = countryCode ? ` sourcecountry:${countryCode}` : '';
    params.append('query', `${searchPhrase}${languageCode}${countryCode}`);
    params.append('format', 'json');

    let result = await axios.get(`https://api.gdeltproject.org/api/v2/doc/doc`, { params });
    if(!result.data || !result.data.articles) {
        throw new InvalidGDELTResponseError('Couldn\'t find data.articles property in the response object.', result);
    }

    let props: NewsItemProps[] = [];
    let articles: ResponseArticle[] = result.data.articles;
    for(let i = 0; i < articles.length; i++) {
        if(!isResponseArticle(articles[i]) || checkEmptyFields(articles[i], requiredResponseFields))
            continue;

        props.push({
            domain: articles[i].domain,
            imageLink: articles[i].socialimage,
            language: articles[i].language,
            originUrl: articles[i].url,
            sourceCountry: articles[i].sourcecountry,
            title: articles[i].title,
        });
    }
    return props;
}
</script>

<script setup lang="ts">
import NewsItem from './NewsItem.vue'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

const newsProps: Ref<NewsItemProps[]> = ref([]);

onMounted(async () => {
    newsProps.value.push(...await fetchNews('Television', null, null));
});
</script>

<template>
    <div class="news-item-container">
        <NewsItem v-for="prop in newsProps" v-bind="prop" />
    </div>
</template>