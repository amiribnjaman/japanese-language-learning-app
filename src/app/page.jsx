import Image from "next/image";
import Link from "next/link";
// import User1 from './img/user1.jpg'

export default function Home() {
  return (
    <div className="w-[95%] md:w-[92%] mx-auto mt-[120px]">
      {/*==================BANNER SECTION==================*/}
      <div className=" items-center text-center flex justify-between">
        <div className="w-[65%] mt-32 text-left">
          <h1 className="md:text-[52px] leading-[1.2] font-bold text-left mb-[40px]">
            Learn your favourite language in the Easy way, and open a new world
            of
            <span className="ml-[18px] relative inline-block">
              Opportunities
              <div className="w-full h-[20px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-22px] z-[-20]"></div>
            </span>
          </h1>
          {/* <h5 className="text-[20px] mb-12">
          You can learn Japanese leangeage & vocabulary easily with Jll.
        </h5> */}
          <div className="flex mt-8 gap-2">
            <Link
              href="/learn"
              class="focus:outline-none flex items-center gap-8 bg-[#d5f80f] text-dark focus:ring-4 focus:ring-red-300 font-semibold rounded-full text-[16px] pr-6 pl-10 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <span>Lets Get Started</span>
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 21 21"
                  className="rotate-90"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.5 7.5l-4-4l-4.029 4m4.029-4v13"
                    stroke-width="1"
                  />
                </svg>
              </div>
            </Link>

            {/* <div>
            <button className="px-8 py-4  bg-[#f4f8dd] rounded-full">
              Explore More
            </button>
          </div> */}
          </div>
        </div>

        {/* Banner Right sectioin */}
        <div className="w-[30%] mt-20 text-left">
          <p className="">
            Improve speaking, listing and writing with interactive lessions,
            personalized prctice & quizzes. Whether you are learing for
            traveling, study or career growth- 'we make it fun, simple and
            effictive'
          </p>

          <button className="mt-8 flex gap-3 font-semibold text-gray-800 items-center">
            <span className="px-3 py-3  bg-[#f4f8dd] text-gray-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                  />
                </g>
              </svg>
            </span>
            <span>Watch a Demo Lession</span>
          </button>

          {/* <div>
            <img
              className="w-[320px] h-[140px] mt-2 rounded"
              src="/img/user3.jpg"
              alt=""
            />
          </div> */}
        </div>
      </div>

      {/*==================Learn your faviorite language SECTION================*/}
      <div className="mt-[152px] w-full  bg-gradient-to-bl from-[#f7faed] to-[#f0fce8] px-12 py-12 rounded-lg">
        <div className="w-[90%] mx-auto flex gap-12">
          <div>
            <div className="w-[360px] h-[400px] bg-[#ddd] rounded-lg">
              <img
                className="w-[360px] h-[400px] rounded-lg"
                src="/img/user2.jpg"
                alt="img"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[32px]">Learn your favourite Language</h2>
            <h6 className="text-[16px] text-slate-800 w-[80%]">
              Choose your favourite language and learn ith interactive lessions,
              personalized prctice & engaging quizzes
            </h6>

            {/* Card */}
            <div className="mt-8 bg-[#fff] p-6 rounded-lg flex gap-4 items-center">
              <div className="w-[40px] h-[40px] bg-[#eee]"></div>
              <div>
                <h4 className="text-[20px]">Perosonalized learning paths</h4>
                <p className="text-sm">
                  Learn the language with your personalized learning path
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="mt-6 bg-[#fff] p-6 rounded-lg flex gap-4 items-center">
              <div className="w-[40px] h-[40px] bg-[#eee]"></div>
              <div>
                <h4 className="text-[20px]">
                  Interactive lessions with personalized prctice
                </h4>
                <p className="text-sm">
                  Learn the language with your personalized learning path
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================LEARNING CATEGORIES SECTION================*/}
      <div className="mt-[60px] mb-[80px]">
        <div className="flex gap-6">
          {/* Card */}
          <div className="mt-8 bg-[#a5f5a9]/60 h-[200px] p-6 rounded-lg flex gap-4 w-1/3">
            {/* <div className="w-[40px] h-[40px] bg-[#eee]"></div> */}
            <div>
              <h4 className="text-[24px]">Master the fundamental</h4>
              <p className="text-sm mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                eos culpa minima porro nemo unde natus laborum consequatur sed
                commodi, vero ea veritatis cum officiis velit ut rem, cupiditate
                voluptatem.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="mt-12  w-1/3">
            <h2 className="text-[24px] font-semibold mb-4">
              <span className="mr-[8px] relative inline-block">
                Languaza
                <div className="w-full h-[14px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-16px] z-[-20]"></div>
              </span>
              makes your path easy
            </h2>
            <div className="bg-[#dbbafa]/50 h-[200px] p-6 rounded-lg flex gap-4">
              {/* <div className="w-[40px] h-[40px] bg-[#eee]"></div> */}
              <div>
                <h4 className="text-[24px]">Strong on Vocabulary</h4>
                <p className="text-sm mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, eos culpa minima porro nemo unde natus laborum
                  consequatur sed commodi, vero ea veritatis cum officiis velit
                  ut rem, cupiditate voluptatem.
                </p>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="mt-8 bg-[#83d6f7]/50 h-[200px] p-6 rounded-lg flex gap-4  w-1/3">
            {/* <div className="w-[40px] h-[40px] bg-[#eee]"></div> */}
            <div>
              <h4 className="text-[24px]">Speak with Confidence</h4>
              <p className="text-sm mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                eos culpa minima porro nemo unde natus laborum consequatur sed
                commodi, vero ea veritatis cum officiis velit ut rem, cupiditate
                voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*==================Explore opportunity CATEGORIES SECTION================*/}
      <div className="mt-[180px] mb-[80px] mx-auto">
        <div className="flex gap-12 justify-between">
          <div>
            <h2 className="text-[32px] leading-[1.2] font-semibold">
              Explore more Opportunities across the world by learning one new
              <span className="ml-[12px] relative inline-block">
                Language
                <div className="w-full h-[14px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-16px] z-[-20]"></div>
              </span>
            </h2>
            <h6 className="text-[16px] text-slate-800 w-[80%] mt-10 leading-[1.5]">
              Choose your favourite language and learn ith interactive lessions,
              personalized prctice & engaging quizzes Choose your favourite
              language and learn ith interactive lessions, personalized prctice
              & engaging quizzes Choose your favourite language and learn ith
              interactive lessions, personalized prctice & engaging quizzes
              Choose your favourite language and learn ith interactive lessions,
              personalized prctice & engaging quizzes
            </h6>

            <button className="mt-6 px-8 py-3 flex gap-2 items-center bg-[#f4f8dd] rounded-full font-light">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                className="rotate-90"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.5 7.5l-4-4l-4.029 4m4.029-4v13"
                  stroke-width="1"
                />
              </svg>
            </button>
          </div>

          <div>
            <div>
              <div className="w-[380px] h-[320px] bg-[#ddd] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/*==================OUR TEAM SECTION================*/}
      <div className="my-[140px] font-semibold">
        <div className="text-center">
          <h2 className="text-[32px] mb-[-32px]">
            Lets have a meeting with our
            <span className="mx-[12px] relative inline-block">
              Mentors
              <div className="w-full h-[14px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-22px] z-[-20]"></div>
            </span>
          </h2>

          {/* MENTORS IMAGES SECION */}
          <div className="flex gap-4">
            {/* IMAGE LEFT COL */}
            <div className="flex flex-col gap-4">
              <img
                className="w-[320px] h-[240px] rounded"
                src="/img/user3.jpg"
                alt=""
              />
              <img
                className="w-[320px] h-[240px] rounded"
                src="/img/user1.jpg"
                alt=""
              />
            </div>

            {/* IMAGE MIDDLE COL */}
            <div className="mt-16">
              <img
                className="w-[320px] h-[460px] rounded"
                src="/img/user2.jpg"
                alt=""
              />
            </div>
            <div className="mt-16">
              <img
                className="w-[320px] h-[460px] rounded"
                src="/img/user4.jpg"
                alt=""
              />
            </div>

            {/* IMAGE RIGHT COL */}
            <div className="flex flex-col gap-4">
              <img
                className="w-[320px] h-[240px] rounded"
                src="/img/user3.jpg"
                alt=""
              />
              <img
                className="w-[320px] h-[240px] rounded"
                src="/img/user2.jpg"
                alt=""
              />
            </div>
            {/* <div>
              <img
                className="w-[320px] h-[460px] rounded"
                src="/img/user2.jpg"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
