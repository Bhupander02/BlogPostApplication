import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const {slug} = useParams()  
    
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            } else {
                navigate('/')
            }
        }) 
    }, []);

    if(posts.length === 0) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <h1 className='text-2xl font-bold'>No posts available</h1>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/3'>
                            {/* using spread here would make sure that we get all the post instead of just one. */}
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>

        </div>
    )
}

export default Home