//Blog나 Board 에 게시글을 작성할 수 있고 
//작성한게시글이 남아있을 수 있도록 작성

import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import { Pagination  } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';








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
        <div>
            
            <h1>게시판</h1>
            <div className="board">
            <div>
            <textarea
                placeholder="게시글을 입력하세요."
                
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            >
                
                </textarea>
                <br/>
                <Fab color="primary" aria-label="add" onClick={addPost}>
                <AddIcon />
                </Fab>
                
                
                
                </div>
                </div>
                    <div>
                        <h2>게시글 목록</h2>
                        <ul>
                            {posts.map((post,Index) => (
                                <li
                                key={Index}>
                                    {post}
                                <Button variant="contained" color="success" onClick={() => deletePost(Index)}>삭제하기</Button>
                                </li>
                            ))}
                        </ul>
                        <Pagination count={3} color="primary" />
                        
                    </div>
                </div>
        )

};



export default Board;

