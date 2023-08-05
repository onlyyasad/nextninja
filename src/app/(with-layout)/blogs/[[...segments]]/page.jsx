import React from 'react';

const SingleBlog = ({params}) => {
    const [year, id] = params.segments || [];
    console.log(params);
    return (
        <div>
            <h2>This is blog published in {year || new Date().getFullYear()} and the id is {id || ""}</h2>
        </div>
    );
};

export default SingleBlog;