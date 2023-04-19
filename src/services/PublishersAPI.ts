export interface Publisher {
    name: string,
    iconUrl: string,
    searchDomain: string,
};

export async function getPublishers(): Promise<Publisher[]> {
    return [
    {
        name: 'BBC News',
        iconUrl: 'public/icons/bbcnews.png',
        searchDomain: 'bbc',
    },
    {
        name: 'BBC Sport',
        iconUrl: 'public/icons/bbcsport.png',
        searchDomain: 'bbc',
    },
    {
        name: 'CNBC',
        iconUrl: 'public/icons/cnbc.png',
        searchDomain: 'cnbc',
    },
    {
        name: 'Newsweek',
        iconUrl: 'public/icons/newsweek.png',
        searchDomain: 'newsweek',
    },
    {
        name: 'NFL News',
        iconUrl: 'public/icons/nfl.png',
        searchDomain: 'nfl',
    },
    {
        name: 'NHL News',
        iconUrl: 'public/icons/nhl.png',
        searchDomain: 'nhl',
    },
    {
        name: 'Reddit',
        iconUrl: 'public/icons/reddit.svg',
        searchDomain: 'reddit',
    },
    {
        name: 'Reuters',
        iconUrl: 'public/icons/reuters.png',
        searchDomain: 'reuters',
    },
    {
        name: 'RussiaToday',
        iconUrl: 'public/icons/rt.jpg',
        searchDomain: 'rt',
    },
    {
        name: 'RTE International',
        iconUrl: 'public/icons/rte.png',
        searchDomain: 'rte-international',
    },
    {
        name: 'TechRadar',
        iconUrl: 'public/icons/techradar.png',
        searchDomain: 'techradar',
    },
    {
        name: 'WashingtonPost',
        iconUrl: 'public/icons/wp.png',
        searchDomain: 'washingtonpost',
    },
    {
        name: 'WallStreetJournal',
        iconUrl: 'public/icons/wsj.jpeg',
        searchDomain: 'wsj',
    },
    {
        name: 'DeutscheWelle',
        iconUrl: 'public/icons/dw.jpeg',
        searchDomain: 'dw',
    },
    {
        name: 'MSN News',
        iconUrl: 'public/icons/msn.jpeg',
        searchDomain: 'msn',
    },
    {
        name: 'CNN Breaking News',
        iconUrl: 'public/icons/cnn.png',
        searchDomain: 'edition.cnn',
    },
    {
        name: 'Fox News',
        iconUrl: 'public/icons/foxnews.png',
        searchDomain: 'foxnews',
    },
    {
        name: 'Yahoo News',
        iconUrl: 'public/icons/yahoo.png',
        searchDomain: 'yahoo.news',
    },
    {
        name: 'RBC',
        iconUrl: 'public/icons/rbc.jpg',
        searchDomain: 'rbc',
    },
    ];
};