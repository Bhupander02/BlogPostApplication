import React,  {useEffect, useState} from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import {useNavigate, useParams } from 'react-router-dom';


function EditPost() {
  const [post, setPost] = React.useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();  
  
  useEffect(() => {
    if(slug){
        appwriteService.getPostBySlug(slug).then((post) => {
            if(post){
            setPost(post);
            } else {
            navigate('/');
            }
        }).catch((error) => {
            console.error("Error fetching post:", error);
            navigate('/404');
        })
    } 
  }, [slug, navigate]); 

    return post ? (
        <div className='py-8'>
            <Container> 
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost