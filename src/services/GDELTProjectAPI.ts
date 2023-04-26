import axios, { type AxiosResponse } from "axios";


const requiredResponseFields: string[] = ['title', 'sourcecountry', 'language', 'seendate', 'url', 'domain', 'socialimage'];


class InvalidGDELTResponseError extends Error {
    response: AxiosResponse;
    constructor(message: string, response: AxiosResponse) {
        super(message);
        this.response = response;
    };
}

class InsufficientQuerySizeError extends Error {
    constructor(message: string) {
        super(message);
    }
}


export interface Article {
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
 * Check if an object is instance of the Article interface.
 * @param obj 
 */
function isArticle(obj: any): boolean {
    return Object.prototype.hasOwnProperty.call(obj, 'domain') &&
    Object.prototype.hasOwnProperty.call(obj, 'language') &&
    Object.prototype.hasOwnProperty.call(obj, 'seendate') &&
    Object.prototype.hasOwnProperty.call(obj, 'socialimage') &&
    Object.prototype.hasOwnProperty.call(obj, 'sourcecountry') &&
    Object.prototype.hasOwnProperty.call(obj, 'title') &&
    Object.prototype.hasOwnProperty.call(obj, 'url_mobile');
}


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


/**
 * Make https request to GDELT api, with options.
 * @param searchPrase search phrase.
 * @param languageCode ISO-639-2/T code of a language.
 * @param countryCode ISO-3166-1/Alpha-2 code of a country.
 * @throws { AxiosError, InvalidGDELTResponseError, InsufficientQuerySizeError }
 */
async function fetchNews(searchPhrase: string, languageCode: string | null, countryCode: string | null): Promise<Article[]> {
    let params = new URLSearchParams();
    languageCode = languageCode ? ` sourcelang:${languageCode}` : '';
    countryCode = countryCode ? ` sourcecountry:${countryCode}` : '';
    params.append('query', `${searchPhrase}${languageCode}${countryCode}`);
    params.append('format', 'json');

    let result = await axios.get(`https://api.gdeltproject.org/api/v2/doc/doc`, { params });
    if(result.data === 'Your query was too short or too long.\n') {
        throw new InsufficientQuerySizeError('Query is too short or too long.');
    } else if(!result.data?.articles) {
        throw new InvalidGDELTResponseError('Couldn\'t find data.articles property in the response object.', result);
    }

    let completeArticles: Article[] = [];
    let articles: Article[] = result.data.articles;
    for(let i = 0; i < articles.length; i++) {
        if(isArticle(articles[i]) && !checkEmptyFields(articles[i], requiredResponseFields)) {
            completeArticles.push(articles[i]);
        }
    }
    return completeArticles;
}


export default {
    isArticle,
    checkEmptyFields,
    fetchNews,
    InvalidGDELTResponseError,
    InsufficientQuerySizeError,
}