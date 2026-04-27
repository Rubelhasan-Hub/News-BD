import { Bookmark, Eye, Star } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { BsShare } from "react-icons/bs";

const NewsCard = (news) => {
    const allNews = news.news
    console.log(allNews);


    return (
        <div className="bg-base-100 shadow-sm">
            <div className="flex justify-between items-center bg-gray-200 p-5">
                <div className="flex gap-2 items-center">
                    <div>
                        <Image src={allNews.author.img} width={40} height={50} alt="This is the image related to the news" priority className="rounded-full flex justify-start" />
                    </div>
                    <div>
                        <h2 className="font-semibold">{allNews.author?.name}</h2>
                        <p className="text-xs">{allNews.author?.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Bookmark />
                    <BsShare />
                </div>
            </div>

            <div className="card-body">
                <h2 className="card-title text-3xl">{allNews.title}</h2>
                <div className="space-y-5">
                    <Image src={allNews.image_url} width={700} height={500} alt="This is the image related to the news" priority />
                    <p className="line-clamp-3">{allNews.details}</p>
                    <hr />
                    <div className="flex justify-between">
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-2"><Star /><Star /><Star /><Star /><Star /><h1 className="font-semibold">{allNews.rating.number}</h1></div>

                            <div className="flex gap-2 items-center">
                                <Eye />
                                <h1>{allNews.total_view}</h1>
                            </div>
                        </div>

                        <Link href={`news/${allNews._id}`}>
                            <button className="btn btn-secondary">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;