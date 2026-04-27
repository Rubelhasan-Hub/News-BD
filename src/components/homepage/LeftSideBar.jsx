import Link from "next/link";

const LeftSideBar = async ({ categoryData, activeId }) => {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl">All Categories</h1>

            <ul className="flex flex-col gap-4 text-3xl text-center">
                {categoryData.map((c) => (
                    <li key={c.category_id}>
                        <Link
                            href={`/category/${c.category_id}`}
                            className={`btn w-full ${activeId === c.category_id ? "bg-red-300" : ""}`}>{c.category_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSideBar;