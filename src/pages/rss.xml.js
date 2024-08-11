import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async () => {
    const posts = await getCollection('posts');

    return rss({
        title: 'Pauline Nemchak | Blog',
        description: 'Blog about front-end, DSP and the other stuff.',
        site: 'https://paulinenemchak.dev/',
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            customData: post.data.customData,
            link: `/posts/${post.slug}/`,
        })),
    });
};
