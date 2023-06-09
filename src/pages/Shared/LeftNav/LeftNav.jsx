import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch('https://the-news-dragon-server-asif247.vercel.app/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            <div className='p-4 '>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none  text-black'>{category.name}</Link>
                </p>)
            }
           </div>
        </div>
    );
};

export default LeftNav;