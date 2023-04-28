import { ref } from "vue";

export interface Publisher {
    name: string,
    domainPath?: string,
    iconUrl: string,
    searchDomain: string,
};

export const publishers = ref<Publisher[]>([
{
    name: 'BBC News',
    iconUrl: '/icons/bbcnews.png',
    domainPath: 'news',
    searchDomain: 'bbc.com',
},
{
    name: 'BBC Sport',
    iconUrl: '/icons/bbcsport.png',
    domainPath: 'sport',
    searchDomain: 'bbc.com',
},
{
    name: 'CNBC',
    iconUrl: '/icons/cnbc.png',
    searchDomain: 'cnbc.com',
},
{
    name: 'Newsweek',
    iconUrl: '/icons/newsweek.png',
    searchDomain: 'newsweek.com',
},
{
    name: 'NFL News',
    iconUrl: '/icons/nfl.png',
    searchDomain: 'nfl.com',
},
{
    name: 'NHL News',
    iconUrl: '/icons/nhl.png',
    searchDomain: 'nhl.com',
},
{
    name: 'Reddit',
    iconUrl: '/icons/reddit.svg',
    searchDomain: 'reddit.com',
},
{
    name: 'Reuters',
    iconUrl: '/icons/reuters.png',
    searchDomain: 'reuters.com',
},
{
    name: 'RussiaToday',
    iconUrl: '/icons/rt.jpg',
    searchDomain: '!rt.com',
},
{
    name: 'RTE International',
    iconUrl: '/icons/rte.png',
    searchDomain: 'rte-international.com',
},
{
    name: 'TechRadar',
    iconUrl: '/icons/techradar.png',
    searchDomain: 'techradar.com',
},
{
    name: 'WashingtonPost',
    iconUrl: '/icons/wp.png',
    searchDomain: 'washingtonpost.com',
},
{
    name: 'WallStreetJournal',
    iconUrl: '/icons/wsj.jpeg',
    searchDomain: 'wsj.com',
},
{
    name: 'DeutscheWelle',
    iconUrl: '/icons/dw.jpeg',
    searchDomain: 'dw.com',
},
{
    name: 'MSN News',
    iconUrl: '/icons/msn.jpeg',
    searchDomain: 'msn.com',
},
{
    name: 'CNN Breaking News',
    iconUrl: '/icons/cnn.png',
    searchDomain: 'edition.cnn.com',
},
{
    name: 'Fox News',
    iconUrl: '/icons/foxnews.png',
    searchDomain: 'foxnews.com',
},
{
    name: 'Yahoo News',
    iconUrl: '/icons/yahoo.png',
    searchDomain: 'news.yahoo.com',
},
{
    name: 'RBC',
    iconUrl: '/icons/rbc.jpg',
    searchDomain: 'rbc.ru',
},
]);