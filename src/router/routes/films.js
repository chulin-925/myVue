import films from '@/views/films/films';
import comingSoon from '@/views/films/comingSoon';
import nowPlaying from '@/views/films/nowPlaying';

var films_router = {
    path: '/films',
    component: films,
    redirect: 'films/nowplaying',
    children: [{
            path: 'comingsoon',
            component: comingSoon
        },
        {
            path: 'nowplaying',
            component: nowPlaying
        },
    ]
};

export default films_router