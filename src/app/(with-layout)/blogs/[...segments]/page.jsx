"use client"
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({params, searchParams}) => {
    const [year, id] = params.segments || [];
    const params2 = useParams();
    const searchParams2 = useSearchParams();
    console.log(params2.segments, searchParams2.get("title"));
    return (
        <div>
            <h2>This is blog published in {year || new Date().getFullYear()} and the id is {id || ""}</h2>
            <p>{searchParams.title}</p>
        </div>
    );
};

export default SingleBlog;