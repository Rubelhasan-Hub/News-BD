import { tr } from "date-fns/locale";
import Marquee from "react-fast-marquee";

const news = [
    {
        id:"1",
        title:"Breaking News: consectetur adipisicing elit."
    },
    {
        id:"2",
        title:"Breaking News: praesentium sunt."
    },
    {
        id:"3",
        title:"Breaking News: veniam  aliquam."
    },
    
]

const BreakingNews = () => {
    return (
        <div className="rounded-md flex justify-center items-center gap-5 bg-gray-200 p-3 container mx-auto">
            <button className="btn btn-secondary text-black">Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n => <span key={n.id}>{n.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;