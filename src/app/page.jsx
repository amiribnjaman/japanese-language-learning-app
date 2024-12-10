import Image from "next/image";

export default function Home() {
  return (
    <div className="md:mt-36 text-center flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold">
        Japanese Language Learn Make easy with Jll
      </h1>
      <h5 className="text-[20px]">
       You can learn Japanese leangeage & vocabulary easily with Jll.
      </h5>
      <button
        type="button"
        class="mt-8 focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Explore
      </button>
    </div>
  );
}
