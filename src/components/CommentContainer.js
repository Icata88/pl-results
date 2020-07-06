import React from 'react';
import { UserOutlined, HeartOutlined } from '@ant-design/icons';

const userIcon = <UserOutlined style={{ fontSize: 20 }} />
const favIcon = <HeartOutlined style={{ fontSize: 20 }} />

export const CommentContainer = (props) => {
    const { comments } = props;
    return (
        <div className='CommentContainer'>
            {comments.length > 0 && <h3>Here's a list of other users and their favourite teams</h3>}
            <div className='CommentContainer-content'>
                {comments.length > 0 && comments.map((comment, i) => (
                    <div key={i} className='CommentContainer-row-wrapper'>
                        <div className='CommentContainer-row' style={{ padding: '10px 0' }}>
                            <span>{userIcon}</span>
                            <span className='CommentContainer-text'>{comment.username}</span>
                        </div>
                        <div className='CommentContainer-row' style={{ padding: '10px 0' }}>
                            <span>{favIcon}</span>
                            <span className='CommentContainer-text'>{comment.favTeam}</span>
                        </div>
                    </div>
                ))}     
            </div>         
        </div>
    );
}