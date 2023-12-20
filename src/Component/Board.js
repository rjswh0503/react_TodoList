//Blog나 Board 에 게시글을 작성할 수 있고 
//작성한게시글이 남아있을 수 있도록 작성

import React, {useEffect, useState} from "react";




function Board(){

    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];


    const [posts, setPosts] = useState(savedPosts);

    const [newPost, setNewPost] = useState('');

    

    useEffect(() =>{
        localStorage.setItem('posts',JSON.stringify(posts));
    }, [posts]);



    const addPost = () => {
        setPosts([...posts, newPost]);
        setNewPost('');

    }

    //게시글 삭제 함수
    const deletePost = (index) => {
        const removePost = [...posts];
        removePost.splice(index, 1);
        setPosts(removePost);
        localStorage.setItem('posts', JSON.stringify(removePost))
    };




    return (
        <div style={{ overflowY: 'scroll', maxHeight: '250px'}}>
            <h1>게시판</h1>
            <div>
            <textarea
                placeholder="게시글을 입력하세요."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            >
                
                </textarea>
                <br/>
                <button onClick={addPost}>게시글 추가</button>
                </div>
                    <div>
                        <h2>게시글 목록</h2>
                        <ul>
                            {posts.map((post,Index) => (
                                <li
                                key={Index}>
                                    {post}
                                <button onClick={() => deletePost(Index)}>삭제하기</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        )

};



export default Board;

