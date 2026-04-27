import RightSizeBar from "@/components/homepage/RightSizeBar";
import DetailsNews from "@/components/shared/DetailsNews";
import { getNewsDetails } from "@/lib/data";

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    const NewsDetails = await getNewsDetails(id)
    const data = NewsDetails.data
    console.log(data);

    return (
        <div className="grid grid-cols-4 container mx-auto mt-10 gap-10 mb-20">
            <div className="col-span-3 space-y-5">
                <h1 className="text-3xl">Dragon News</h1>
                {
                    data.map(d => <DetailsNews key={d._id} data={d}></DetailsNews>)
                }
            </div>
            <div>
                <RightSizeBar />
            </div>

        </div>
    );
};

export default NewsDetailsPage;