import Link from "next/link";

const NotFount = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col text-green-400 space-y-10">
            <h1 className="font-bold text-5xl lg:text-9xl">404 😵</h1>
            <h1 className="font-bold text-2xl lg:text-5xl">This page Not Found</h1>
            <Link href="/"><button className="btn btn-secondary text-black p-6 font-bold">GO HOME</button></Link>
        </div>
    );
};

export default NotFount;