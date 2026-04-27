import LeftSideBar from '@/components/homepage/LeftSideBar';
import RightSizeBar from '@/components/homepage/RightSizeBar';
import React from 'react';


const categories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json();
    return data

}

const getNews = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json();
    return data

}



const NewsCategory = async ({ params }) => {
    const { id } = await params


    const category = await categories();
    const categoryData = category.data.news_category

    const news = await getNews(id)
    


    return (
        <div className="grid grid-cols-4 container mx-auto mt-10 gap-10 mb-20">
            <div className="font-bold">
                <LeftSideBar
                    categoryData={categoryData} activeId={id} />
            </div>

            <div className="font-bold col-span-2 space-y-5">
                <h1 className="text-3xl">News By Category</h1>
                {
                   news.data.length > 0 ? news.data.map(n => <div key={n._id} className="p-6 rounded-2xl border">{n.title}</div>) : <h1 className='font-bold'>No News Found</h1>
                }
            </div>

            <div>
                <RightSizeBar />
            </div>

        </div>
    );
};

export default NewsCategory;