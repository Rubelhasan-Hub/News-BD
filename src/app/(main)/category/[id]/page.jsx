import LeftSideBar from '@/components/homepage/LeftSideBar';
import RightSizeBar from '@/components/homepage/RightSizeBar';
import NewsCard from '@/components/shared/NewsCard';
import { categories, getNews } from '@/lib/data';
import React from 'react';



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

            <div className="col-span-2 space-y-5">
                <h1 className="text-3xl">News By Category</h1>
                {
                    news.data.length > 0 ? news.data.map(n => <NewsCard key={n._id} news = {n}></NewsCard>) : <h1 className='font-bold'>No News Found</h1>
                }
            </div>

            <div>
                <RightSizeBar />
            </div>

        </div>
    );
};

export default NewsCategory;