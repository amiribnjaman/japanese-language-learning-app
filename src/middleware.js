// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const authToken = request.cookies.get("Token")?.value;

//   // const { pathname } = request.nextUrl;

//   // Logedin user not access urls
//   const logedInUserNotAccessUrl = ["/login", "/signup"]
  

//   // Logout user not access url
//   const logoutUserNotAccessUrl = request.nextUrl.pathname === "/learn";

//   // Logic to loged in user
//   if (logedInUserNotAccessUrl) {
//     if (authToken) {
//       return NextResponse.redirect(new URL("/learn", request.url));
//     }
//   }

//   // Logic for logout user
//   if (!authToken && logoutUserNotAccessUrl) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// export const config = {
//   matcher: ["/", "/login", "/signup", "/learn"],
// };



import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("Token")?.value;

  // Logedin user not access urls
  const logedInUserNotAccessUrl =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  // Logout user not access url
  const logoutUserNotAccessUrl = request.nextUrl.pathname.includes("/learn");
  console.log(logoutUserNotAccessUrl);

  // Logic for loged in user
  // if (logedInUserNotAccessUrl) {
  //   if (authToken) {
  //     return NextResponse.redirect(new URL("/learn", request.url));
  //   }
  // }

  // // Logic for logout in user
  // if (logoutUserNotAccessUrl) {
  //   if (!authToken) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  // }
}



export const config = {
  matcher: ["/", "/login", "/signup", "/learn", "/learn/add-lession", "/learn/manage-user", "/learn/tutorial", "/learn/", "/learn/add-vocabulary", "/learn/manage-lession","/learn/manage-vocabulary",],
};