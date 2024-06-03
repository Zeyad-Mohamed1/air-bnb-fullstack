import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <h1 className="text-7xl text-gray-800 font-bold">404</h1>
      <p className="text-gray-500 text-3xl mt-2 mb-5">Page not found</p>
      <Link href="/" className="text-xl underline text-rose-700">
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
