import { Eye, Star } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrow } from "react-icons/bi";

const DetailsNews = ({ data }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image src={data.image_url} width={700} height={500} alt="This is the image of the details News" className="w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{data.title}</h2>
                <p>{data.details}</p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-2"><Star /><Star /><Star /><Star /><Star/><h1 className="font-semibold">{data.rating.number}</h1></div>

                    <div className="flex gap-2 items-center">
                        <Eye />
                        <h1>{data.total_view}</h1>
                    </div>
                </div>

                <Link href={`news/${data._id}`}>
                    <button className="btn btn-secondary">See Details</button>
                </Link>
            </div>
            <Link href={`/category/${data.category_id}`}><button className="btn btn-secondary"><BiLeftArrowAlt />All news in this category</button></Link>
        </div>
    );
};

export default DetailsNews;