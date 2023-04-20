export interface Publisher {
    name: string,
    iconUrl: string,
    searchDomain: string,
};

export async function getPublishers(): Promise<Publisher[]> {
    return [
    {
        name: 'BBC News',
        iconUrl: '/icons/bbcnews.png',
        searchDomain: 'bbc',
    },
    {
        name: 'BBC Sport',
        iconUrl: '/icons/bbcsport.png',
        searchDomain: 'bbc',
    },
    {
        name: 'CNBC',
        iconUrl: '/icons/cnbc.png',
        searchDomain: 'cnbc',
    },
    {
        name: 'Newsweek',
        iconUrl: '/icons/newsweek.png',
        searchDomain: 'newsweek',
    },
    {
        name: 'NFL News',
        iconUrl: '/icons/nfl.png',
        searchDomain: 'nfl',
    },
    {
        name: 'NHL News',
        iconUrl: '/icons/nhl.png',
        searchDomain: 'nhl',
    },
    {
        name: 'Reddit',
        iconUrl: '/icons/reddit.svg',
        searchDomain: 'reddit',
    },
    {
        name: 'Reuters',
        iconUrl: '/icons/reuters.png',
        searchDomain: 'reuters',
    },
    {
        name: 'RussiaToday',
        iconUrl: '/icons/rt.jpg',
        searchDomain: 'rt',
    },
    {
        name: 'RTE International',
        iconUrl: '/icons/rte.png',
        searchDomain: 'rte-international',
    },
    {
        name: 'TechRadar',
        iconUrl: '/icons/techradar.png',
        searchDomain: 'techradar',
    },
    {
        name: 'WashingtonPost',
        iconUrl: '/icons/wp.png',
        searchDomain: 'washingtonpost',
    },
    {
        name: 'WallStreetJournal',
        iconUrl: '/icons/wsj.jpeg',
        searchDomain: 'wsj',
    },
    {
        name: 'DeutscheWelle',
        iconUrl: '/icons/dw.jpeg',
        searchDomain: 'dw',
    },
    {
        name: 'MSN News',
        iconUrl: '/icons/msn.jpeg',
        searchDomain: 'msn',
    },
    {
        name: 'CNN Breaking News',
        iconUrl: '/icons/cnn.png',
        searchDomain: 'edition.cnn',
    },
    {
        name: 'Fox News',
        iconUrl: '/icons/foxnews.png',
        searchDomain: 'foxnews',
    },
    {
        name: 'Yahoo News',
        iconUrl: '/icons/yahoo.png',
        searchDomain: 'yahoo.news',
    },
    {
        name: 'RBC',
        iconUrl: '/icons/rbc.jpg',
        searchDomain: 'rbc',
    },
    ];
};