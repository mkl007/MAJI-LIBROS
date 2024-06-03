import React from 'react';

export const Feeds = () => {
    return (
        <div className="container mx-auto border-3 border-red-500 p-4">
            <h1 className="text-xl font-bold mb-4">Feeds</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FeedItem title="Feed 1" content="Contenido del feed 1" />
                <FeedItem title="Feed 2" content="Contenido del feed 2" />
                <FeedItem title="Feed 3" content="Contenido del feed 3" />
                <FeedItem title="Feed 4" content="Contenido del feed 4" />
                <FeedItem title="Feed 5" content="Contenido del feed 5" />
                <FeedItem title="Feed 6" content="Contenido del feed 6" />
            </div>
        </div>
    );
}

const FeedItem = ({ title, content }) => {
    return (
        <div className="flex border-3 border-red-500 h-80 p-4">
            <div className="flex flex-col justify-between">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}
