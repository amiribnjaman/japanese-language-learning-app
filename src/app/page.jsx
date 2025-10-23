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
              class="focus:outline-none flex items-center gap-8 bg-[#d5f80f] hover:bg-[#cbee06] transition duration-400 text-dark focus:ring-3 focus:ring-[#cbee06] font-semibold rounded-full text-[16px] pr-5 pl-8 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-[#d5f80f]"
            >
              <span>Get Started</span>
              {/* ARROW ICON */}
              <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white">
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
            traveling, study or career growth- &apos;we make it fun, simple and
            effictiveDon&apos;
          </p>

          <button className="mt-8 flex gap-3 font-semibold text-gray-800 items-center">
            <span className="px-3 py-3 bg-[#f4f8dd] text-gray-600 rounded-full">
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
      <div className="mt-[152px] w-full bg-gradient-to-bl from-[#f7faed] to-[#f0fce8] px-12 py-12 rounded-lg">
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
            <h2 className="text-[32px] font-semibold">
              Learn your favourite Language
            </h2>
            <h6 className="text-[16px] text-slate-800 w-[80%]">
              Choose your favourite language and learn ith interactive lessions,
              personalized prctice & engaging quizzes
            </h6>

            {/* Card */}
            <div className="mt-8 bg-[#fff] p-6 rounded-lg flex gap-4 items-center">
              <div className="w-[44px] h-[44px] bg-[#f6f1fa] text-[#3c036b] rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M8.5 0h-7A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10h1.252V5.37a2.625 2.625 0 0 1 2.625-2.625H10V1.5A1.5 1.5 0 0 0 8.5 0M10 3.995V4h.014v4.632c0 .76-.616 1.375-1.376 1.375H4.002V5.37c0-.76.616-1.375 1.375-1.375zM11.264 4H12.5A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5v-1.243h4.638a2.625 2.625 0 0 0 2.626-2.625z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[20px]">Perosonalized learning paths</h4>
                <p className="text-sm">
                  Learn the language with your personalized learning path
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="mt-6 bg-[#fff] p-6 rounded-lg flex gap-4 items-center">
              <div className="w-[44px] h-[44px] bg-[#f2fafd] text-[#044d68] rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.621 16.084a8.48 8.48 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9 9 0 0 0 1.587-.3a8.32 8.32 0 0 0 5.787-5.887a8.555 8.555 0 0 0-8.258-10.832a9 9 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542c2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.54 8.54 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a9 9 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766c5.727 1.492 10.87-2.773 10.87-8.229c0-.35-.02-.7-.06-1.04c-.1-.792-1.165-.992-1.547-.29a8.6 8.6 0 0 1-7.574 4.514M5.382 7.916a8.48 8.48 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a10 10 0 0 0-1.598.29A8.34 8.34 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06c.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.54 8.54 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a9 9 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357C12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041c.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z"
                  />
                </svg>
              </div>
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
              <div className="flex justify-between">
                <h4 className="text-[24px]">Master the fundamental</h4>
                <div className="w-[44px] h-[44px] bg-[#ebf7ec] text-[#025c06] rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M155 324c-15.661 15.661-58.379 59.224-95.011 96.65C22.559 376.14 0 318.708 0 256c0-62.644 22.513-120.021 59.873-164.514c30.242 30.708 73.322 74.385 95.832 96.895C192.662 225.338 184.5 294.5 155 324m171-170l93.506-94.979C375.157 22.168 318.17 0 256 0C193.643 0 136.502 22.304 92.096 59.358L180 148c49.545 46.646 108.054 38.476 146 6m125.429-63.34c-30.279 30.747-73.932 75.007-96.645 97.72c-36.958 36.958-28.795 106.12.705 135.62c15.777 15.777 59.01 59.869 95.822 97.479C489.158 376.852 512 319.098 512 256c0-63.032-22.794-120.732-60.571-165.34M420.29 452.317L326 356.54c-37.946-32.476-96.455-40.647-146 6l-88.69 89.436C135.825 489.427 193.272 512 256 512c62.539 0 119.83-22.437 164.29-59.684"
                    />
                  </svg>
                </div>
              </div>
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
            <h2 className="text-[30px] font-semibold mb-4">
              <span className="mr-[8px] relative inline-block">
                Fluentoo
                <div className="w-full h-[14px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-20px] z-[-20]"></div>
              </span>
              makes path easy
            </h2>
            <div className="bg-[#dbbafa]/50 h-[200px] p-6 rounded-lg flex gap-4">
              {/* <div className="w-[40px] h-[40px] bg-[#eee]"></div> */}
              <div>
                <div className="flex justify-between">
                  <h4 className="text-[24px]">Strong on Vocabulary</h4>
                  <div className="w-[44px] h-[44px] bg-[#e6f3e7] text-[#300258] rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61"
                      />
                    </svg>
                  </div>
                </div>
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
              <div className="flex justify-between">
                <h4 className="text-[24px]">Speak with Confidence</h4>
                <div className="w-[44px] h-[44px] bg-[#e7f1f5] text-[#044d68] rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M9 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2m12.154 16.102l-1.665-1.11A8.96 8.96 0 0 0 21 12q-.001-.767-.124-1.5l1.943-.5q.18.975.181 2c0 2.258-.68 4.356-1.846 6.102"
                    />
                  </svg>
                </div>
              </div>
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
                Fluentoo
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
              <div className="w-[400px] h-[300px] bg-[#ddd] rounded-xl relative">
                <img
                  className="w-[400px] h-[300px]  rounded-xl"
                  src="/img/user3.jpg"
                  alt=""
                />
                <button className="mt-8 flex gap-3 font-semibold text-gray-800 items-center absolute top-[30%] left-[40%]">
                  <span className="px-4 py-4 bg-[#f4f8dd] text-gray-600 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================OUR TEAM SECTION================*/}
      <div className="my-[140px] font-semibold">
        <div className="text-center">
          <h2 className="text-[32px] font-semibold mb-[-32px]">
            Lets have a meeting with our
            <span className="mx-[12px] relative inline-block">
              Mentors
              <div className="w-full h-[14px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-20px] z-[-20]"></div>
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
