import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'Pauline Nemchak | Blog',
    description: 'Blog about frontend, DSP and the other stuff.',
    site: 'https://paulinenemchak.dev/',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-uk</language>`,
});
