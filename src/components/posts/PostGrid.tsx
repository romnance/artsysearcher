import React from 'react';

import { Post } from '../../common/interfaces/post';
import PostsGridItem from './posts-item/PostItem';

interface PostsGridProps {
    posts: Post[]
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {
    return (
        <div className="posts-grid">
            {posts.map(post => (
                <div key={post.id}>
                    <PostsGridItem post={post} />
                </div>
            ))}
        </div>
    );
}

export default PostsGrid;