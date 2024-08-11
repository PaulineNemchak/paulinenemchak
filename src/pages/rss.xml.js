import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'Pauline Nemchak | Blog',
    description: 'Blog about front-end, DSP and the other stuff.',
    site: 'https://paulinenemchak.dev/',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-uk</language>`,
});
