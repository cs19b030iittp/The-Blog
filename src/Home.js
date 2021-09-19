import {useState, useEffect} from 'react';

import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'body of blog...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'body of blog...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'body of blog...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect ran');
    }, [/*dependencies*/]);

    return (
        <div className="home">
           <BlogList 
            blogs = {blogs} 
            title = "All blogs"
            handleDelete = {handleDelete} 
            />
        </div>
     );
}
 
export default Home;