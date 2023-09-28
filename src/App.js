import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bg1 from "./asset/img/bg-gradient-1.png";
import bg2 from "./asset/img/bg-gradient-2.png";
import bg3 from "./asset/img/bg-gradient-3.png";

import logo from "./asset/img/logo.png";
import intro from "./asset/img/intro.png";
import intro2 from "./asset/img/intro-2.png";
import intro3 from "./asset/img/intro-3.png";
import intro31 from "./asset/img/intro-3-1.png";
import intro32 from "./asset/img/intro-3-2.png";
import intro33 from "./asset/img/intro-3-3.png";
import intro34 from "./asset/img/intro-3-4.png";
import intro35 from "./asset/img/intro-3-5.png";
import introUser from "./asset/img/intro-user.png";
import star1 from "./asset/img/star-1.png";
import star2 from "./asset/img/star-2.png";
import star3 from "./asset/img/star-3.png";
import introBreak from "./asset/img/intro-break.png";

// Avt
import us1 from "./asset/img/us-1.png";
import us2 from "./asset/img/us-2.png";
import us3 from "./asset/img/us-3.png";
import us4 from "./asset/img/us-4.png";
import us5 from "./asset/img/us-5.png";
import us6 from "./asset/img/us-6.png";
import us7 from "./asset/img/us-7.png";
import us8 from "./asset/img/us-8.png";
import us9 from "./asset/img/us-9.png";
import us10 from "./asset/img/us-10.png";
import us11 from "./asset/img/us-11.png";
import us12 from "./asset/img/us-12.png";
import us13 from "./asset/img/us-13.png";

import User from "./components/User";

import "./App.scss";

const users = [
  {
    id: 1,
    avt: us1,
    username: "Crypto Bitlord",
    rank: "2",
    watchlists: "2816",
  },
  {
    id: 2,
    avt: us2,
    username: "Algod",
    rank: "1",
    watchlists: "4516",
  },
  {
    id: 3,
    avt: us3,
    username: "Z",
    rank: "3",
    watchlists: "2516",
  },
  {
    id: 4,
    avt: us4,
    username: "Eric Cryptoman",
    rank: "6",
    watchlists: "1916",
  },
  {
    id: 5,
    avt: us5,
    username: "OverDose",
    rank: "4",
    watchlists: "2216",
  },
  {
    id: 6,
    avt: us6,
    username: "THE EYE",
    rank: "5",
    watchlists: "2016",
  },
  {
    id: 7,
    avt: us7,
    username: "saood",
    rank: "7",
    watchlists: "1855",
  },
  {
    id: 8,
    avt: us8,
    username: "Neo",
    rank: "10",
    watchlists: "1753",
  },
  {
    id: 9,
    avt: us9,
    username: "ihzan",
    rank: "9",
    watchlists: "1762",
  },
  {
    id: 10,
    avt: us10,
    username: "OP",
    rank: "11",
    watchlists: "1211",
  },
  {
    id: 11,
    avt: us11,
    username: "Lord Kek",
    rank: "8",
    watchlists: "1822",
  },
  {
    id: 12,
    avt: us12,
    username: "NoMoreLiquidity",
    rank: "13",
    watchlists: "1022",
    tw: "https://twitter.com/NoMoreLiquidity",
  },
  {
    id: 13,
    avt: us13,
    username: "L",
    rank: "12",
    watchlists: "1042",
    tw: "https://twitter.com/0xLawliette",
  },
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: "800",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <header className="relative">
        <div className="absolute max-w-2xl blur-md">
          <img src={bg1} alt="" />
        </div>
        <div className="relative py-3 container px-5 mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-5 lg:flex-row items-center lg:gap-28">
            <div className="max-w-[200px]">
              <img src={logo} alt="logo" />
            </div>
            <ul className="flex gap-8 items-center lg:mt-5">
              <li>
                <a
                  className="text-gray transition-all hover:text-white"
                  href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray transition-all hover:text-white"
                  href="#callers">
                  Top Callers
                </a>
              </li>
              <li>
                <a
                  className="text-gray transition-all hover:text-white"
                  href="#features">
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-gray transition-all hover:text-white"
                  href="https://share-friend.gitbook.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex gap-8 mt-5">
            <li>
              <a
                href="https://twitter.com/ShareFriendETH"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ShareFriendERC"
                target="_blank"
                rel="noopener noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ShareFriendERC"
                target="_blank"
                rel="noopener noreferrer">
                Telegram Bot
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="py-20 lg:py-32 relative" data-aos="fade-up">
          <div className="absolute max-w-xl right-0 bottom-0">
            <img src={bg2} alt="" />
          </div>

          <div className="container px-5 mx-auto flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold">
                <span className="inline-block lg:block">The</span>
                <span className="text-gradient">Share.Friend</span>
              </h1>
              <div className="flex flex-col-reverse lg:flex-row gap-6 mt-8 items-center">
                <a
                  className="py-4 text-black font-medium px-6 rounded-full flex-shrink-0 inline-flex bg-gradient gap-3 items-center justify-center text-center transition-all hover:scale-105 hover:opacity-70"
                  href="https://share-friend.gitbook.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>View more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <g clip-path="url(#clip0_98_21)">
                      <path
                        d="M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_21">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <span>
                  The best chance for you to join Private Room in
                  sharefriend.tech with an affordable rate.
                </span>
              </div>

              <div className="mt-20 flex gap-5 lg:gap-8">
                <div className="w-56">
                  <img src={introUser} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-xl">
                      Only the best for users
                    </h3>
                    <span className="text-gray">
                      Start your experience now!
                    </span>
                  </div>
                  <a
                    className="font-medium"
                    href="https://share-friend.gitbook.io/docs/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="-mt-24 lg:-mt-36 max-w-xl lg:max-w-3xl">
              <img src={intro} alt="" />
            </div>
          </div>
        </section>

        <section id="callers" className="-mt-28 relative" data-aos="fade-up">
          <div className="max-w-xl absolute blur-md -left-36 -bottom-48">
            <img src={bg2} alt="" />
          </div>
          <div className="text-center lg:text-left relative z-10 container mx-auto p-5 lg:p-8 bg-caller rounded-3xl">
            <h2 className="text-4xl lg:text-5xl font-semibold">
              <span className="text-gradient-2">TOP Callers</span>
              <span> - Friend.Tech</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8 lg:mt-12">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-gray">
                  Compile and continuously update the list of Top callers on
                  Friend.Tech
                </span>
                <a
                  className="w-fit mt-8 py-4 text-black font-medium px-6 rounded-full flex-shrink-0 inline-flex bg-gradient gap-3 items-center justify-center text-center transition-all hover:scale-105 hover:opacity-70"
                  href="https://share-friend.gitbook.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <g clip-path="url(#clip0_98_21)">
                      <path
                        d="M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_21">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>

              {users.map((item) => (
                <User
                  avt={item.avt}
                  username={item.username}
                  rank={item.rank}
                  watchlists={item.watchlists}
                  tw={item.tw}
                />
              ))}

              {/* <div className="bg-gradient flex justify-center items-center object-cover rounded-xl min-h-[200px]">
                <div className="bg-[#0B070E] w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-xl p-4">
                  <div className="flex gap-3">
                    <div className="max-w-[100px] rounded-full">
                      <img src={us1} alt="" />
                    </div>
                    <div>
                      <div className="flex gap-2 items-center justify-between">
                        <h3 className="text-gradient-3 text-xl font-medium">
                          Dusk Brother
                        </h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none">
                          <g clip-path="url(#clip0_14_589)">
                            <path
                              d="M7.61664 0.196332C8.08777 0.54968 8.91225 0.54968 9.38338 0.196332C9.85452 -0.157017 10.522 -0.039234 10.836 0.471159C11.1501 0.981551 11.8961 1.29564 12.485 1.1386C13.0739 0.981551 13.6236 1.37416 13.7414 1.96308C13.8199 2.55199 14.4088 3.1409 14.9977 3.21943C15.5866 3.29795 15.9792 3.88686 15.8222 4.47578C15.6651 5.06469 15.9792 5.81065 16.4896 6.12474C17 6.43883 17.1178 7.10626 16.7644 7.57739C16.4111 8.04853 16.4111 8.87301 16.7644 9.34414C17.1178 9.81527 17 10.4827 16.4896 10.7968C15.9792 11.1109 15.6651 11.8568 15.8222 12.4458C15.9792 13.0347 15.5866 13.5843 14.9977 13.7021C14.4088 13.7806 13.8199 14.3695 13.7414 14.9585C13.6628 15.5474 13.0739 15.94 12.485 15.7829C11.8961 15.6259 11.1501 15.94 10.836 16.4504C10.522 16.9608 9.85452 17.0786 9.38338 16.7252C8.91225 16.3719 8.08777 16.3719 7.61664 16.7252C7.14551 17.0786 6.47807 16.9608 6.16398 16.4504C5.8499 15.94 5.10394 15.6259 4.51502 15.7829C3.92611 15.94 3.37646 15.5474 3.25867 14.9585C3.18015 14.3695 2.59124 13.7806 2.00232 13.7021C1.41341 13.6236 1.0208 13.0347 1.17784 12.4458C1.33488 11.8568 1.0208 11.1109 0.510404 10.7968C1.15149e-05 10.4827 -0.117771 9.81527 0.235577 9.34414C0.588926 8.87301 0.588926 8.04853 0.235577 7.57739C-0.117771 7.10626 1.15149e-05 6.43883 0.510404 6.12474C1.0208 5.84991 1.29562 5.10395 1.17784 4.51504C1.0208 3.92612 1.41341 3.37647 2.00232 3.25869C2.59124 3.18017 3.18015 2.59125 3.25867 2.00234C3.37646 1.41342 3.92611 1.02081 4.51502 1.17786C5.10394 1.3349 5.8499 1.02081 6.16398 0.510419C6.47807 -0.0392341 7.10625 -0.157017 7.61664 0.196332Z"
                              fill="#00AC00"
                            />
                            <path
                              d="M7.61664 0.196332C8.08777 0.54968 8.91225 0.54968 9.38338 0.196332C9.85452 -0.157017 10.522 -0.039234 10.836 0.471159C11.1501 0.981551 11.8961 1.29564 12.485 1.1386C13.0739 0.981551 13.6236 1.37416 13.7414 1.96308C13.8199 2.55199 14.4088 3.1409 14.9977 3.21943C15.5866 3.29795 15.9792 3.88686 15.8222 4.47578C15.6651 5.06469 15.9792 5.81065 16.4896 6.12474C17 6.43883 17.1178 7.10626 16.7644 7.57739C16.4111 8.04853 16.4111 8.87301 16.7644 9.34414C17.1178 9.81527 17 10.4827 16.4896 10.7968C15.9792 11.1109 15.6651 11.8568 15.8222 12.4458C15.9792 13.0347 15.5866 13.5843 14.9977 13.7021C14.4088 13.7806 13.8199 14.3695 13.7414 14.9585C13.6628 15.5474 13.0739 15.94 12.485 15.7829C11.8961 15.6259 11.1501 15.94 10.836 16.4504C10.522 16.9608 9.85452 17.0786 9.38338 16.7252C8.91225 16.3719 8.08777 16.3719 7.61664 16.7252C7.14551 17.0786 6.47807 16.9608 6.16398 16.4504C5.8499 15.94 5.10394 15.6259 4.51502 15.7829C3.92611 15.94 3.37646 15.5474 3.25867 14.9585C3.18015 14.3695 2.59124 13.7806 2.00232 13.7021C1.41341 13.6236 1.0208 13.0347 1.17784 12.4458C1.33488 11.8568 1.0208 11.1109 0.510404 10.7968C1.15149e-05 10.4827 -0.117771 9.81527 0.235577 9.34414C0.588926 8.87301 0.588926 8.04853 0.235577 7.57739C-0.117771 7.10626 1.15149e-05 6.43883 0.510404 6.12474C1.0208 5.84991 1.29562 5.10395 1.17784 4.51504C1.0208 3.92612 1.41341 3.37647 2.00232 3.25869C2.59124 3.18017 3.18015 2.59125 3.25867 2.00234C3.37646 1.41342 3.92611 1.02081 4.51502 1.17786C5.10394 1.3349 5.8499 1.02081 6.16398 0.510419C6.47807 -0.0392341 7.10625 -0.157017 7.61664 0.196332Z"
                              fill="url(#paint0_linear_14_589)"
                            />
                            <path
                              d="M7.53813 12.3672C7.34182 12.5635 7.02773 12.5635 6.87069 12.3672L3.25868 8.75523C3.06237 8.55892 3.06237 8.24483 3.25868 8.08779L4.12242 7.22405C4.31872 7.02774 4.63281 7.02774 4.78986 7.22405L6.87069 9.30488C7.06699 9.50118 7.38108 9.50118 7.53813 9.30488L12.2102 4.63282C12.4065 4.43652 12.7206 4.43652 12.8776 4.63282L13.7414 5.49657C13.9377 5.69287 13.9377 6.00696 13.7414 6.164L7.53813 12.3672Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_14_589"
                              x1="-10.3889"
                              y1="-8.81478"
                              x2="23.3619"
                              y2="-5.62022"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#6CA0E3" />
                              <stop offset="0.07485" stop-color="#ACA3DE" />
                              <stop offset="0.144877" stop-color="#B3A9D7" />
                              <stop offset="0.186608" stop-color="#85E4B2" />
                              <stop offset="0.230885" stop-color="#70D6DD" />
                              <stop offset="0.268808" stop-color="#97ACF1" />
                              <stop offset="0.312169" stop-color="#D9B9E1" />
                              <stop offset="0.351922" stop-color="#E7DDD5" />
                              <stop offset="0.420995" stop-color="#E5CBD9" />
                              <stop offset="0.494198" stop-color="#E4B7DF" />
                              <stop offset="0.562038" stop-color="#B8B6E9" />
                              <stop offset="0.646557" stop-color="#8DB6F2" />
                              <stop offset="0.722862" stop-color="#B2A9F0" />
                              <stop offset="0.776042" stop-color="#E3B2E8" />
                              <stop offset="0.833308" stop-color="#E9DDDA" />
                              <stop offset="0.900007" stop-color="#81F5F7" />
                              <stop offset="0.948487" stop-color="#7BA3F4" />
                            </linearGradient>
                            <clipPath id="clip0_14_589">
                              <rect width="17" height="17" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <a className="py-1.5 text-sm font-medium px-4 rounded-full flex-shrink-0 inline-flex bg-gradient gap-3 items-center justify-center text-center transition-all hover:opacity-70">
                          Buy Key
                        </a>
                        <a className="py-1.5 text-sm font-medium px-4 rounded-full flex-shrink-0 inline-flex bg-gradient gap-3 items-center justify-center text-center transition-all hover:opacity-70">
                          View
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="bg-gray-3 text-center px-2 py-1 flex rounded-md">
                          <span>Rank:</span>
                          <span className="block ml-1">#3562</span>
                        </div>
                        <span className="bg-gray-3 text-center px-2 py-1 flex rounded-md">
                          On 2,516 Watchlists
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a className="w-8">
                          <img src={favorite} alt="" />
                        </a>
                        <a className="w-8">
                          <img src={share} alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-between items-center gap-2 mt-5">
                      <a className="flex items-center justify-center gap-1 text-xs bg-gray-333 px-2 py-2 rounded-full">
                        <img className="w-5" src={link} alt="" />
                        <span>Website</span>
                        <img className="w-5" src={arrowTopRight} alt="" />
                      </a>
                      <a className="flex items-center justify-center gap-1 text-xs bg-gray-333 px-2 py-2 rounded-full">
                        <img className="w-5" src={link} alt="" />
                        <span>Explorers</span>
                        <img className="w-5" src={arrowDown} alt="" />
                      </a>
                      <a className="flex items-center justify-center gap-1 text-xs bg-gray-333 px-2 py-2 rounded-full">
                        <img className="w-5" src={userAccount} alt="" />
                        <span>Community</span>
                        <img className="w-5" src={arrowDown} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="flex justify-center mt-8 gap-3">
              <button className="border-gray-333 border-[1px] w-10 h-10 rounded-full inline-flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512">
                  <path
                    d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    fill="#333"
                  />
                </svg>
              </button>
              <button className="border-purple text-purple border-[1px] w-10 h-10 rounded-full inline-flex justify-center items-center">
                1
              </button>
              <button className="border-gray-333 border-[1px] w-10 h-10 rounded-full inline-flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512">
                  <path
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                    fill="#333"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-20 absolute right-80 -bottom-12 z-0">
            <img src={star1} alt="" />
          </div>
        </section>

        <section className="py-20 lg:py-0">
          <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div
                className="max-w-xl text-center lg:text-left"
                data-aos="fade-right">
                <h3 className="text-4xl lg:text-5xl font-semibold">
                  <span className="text-gradient-2">Share.friend</span>
                  <span> offers the best deal for users.</span>
                </h3>
                <p className="text-gray mt-8">
                  If you find the Key price for joining a Private Room on
                  Friend.Tech is getting higher day by day, so we have an
                  excellent solution for you. Just hold a minimum of X% of the
                  total supply, and you'll have the opportunity to receive the
                  Key you desire for the top Caller's Rooms in the Crypto market
                  via our smart Telegram Bot.
                </p>
              </div>
              <div data-aos="fade-left">
                <img src={intro2} alt="" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-28">
                <img src={star2} alt="" />
              </div>
            </div>
            <div className="w-16">
              <img src={star3} alt="" />
            </div>
          </div>
        </section>

        <section id="features" className="pt-10 relative">
          <div className="max-w-xl absolute bottom-0 right-0">
            <img src={bg2} alt="" />
          </div>
          <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 items-center">
              <div
                className="max-w-lg lg:max-w-2xl relative"
                data-aos="fade-right">
                <div className="w-[500px] lg:w-[900px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img src={bg3} alt="" />
                </div>
                <img className="relative" src={intro3} alt="" />
              </div>
              <div className="grid-cols-1 grid gap-5">
                <div
                  className="max-w-2xl"
                  data-aos="fade-left"
                  data-aos-delay="100">
                  <img src={intro31} alt="" />
                </div>
                <div
                  className="max-w-2xl"
                  data-aos="fade-left"
                  data-aos-delay="200">
                  <img src={intro32} alt="" />
                </div>
                <div
                  className="max-w-2xl"
                  data-aos="fade-left"
                  data-aos-delay="300">
                  <img src={intro33} alt="" />
                </div>
                <div
                  className="max-w-2xl"
                  data-aos="fade-left"
                  data-aos-delay="400">
                  <img src={intro34} alt="" />
                </div>
                <div
                  className="max-w-2xl"
                  data-aos="fade-left"
                  data-aos-delay="500">
                  <img src={intro35} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-full">
            <img src={introBreak} alt="" />
          </div>
        </section>
      </main>

      <footer
        className="bg-[url('./asset/img/footer-bg.png')] bg-cover bg-no-repeat pt-32 py-6 min-h-[800px] lg:min-h-[1121px] flex flex-col justify-between relative"
        data-aos="fade-up">
        <div className="container px-5 mx-auto">
          <div className="w-14 ml-16">
            <img src={star3} alt="" />
          </div>
          <div className="flex justify-center">
            <div className="w-20">
              <img src={star3} alt="" />
            </div>
          </div>
          <div className="max-w-2xl flex flex-col items-center text-center lg:text-left lg:items-start">
            <p className="text-3xl lg:text-5xl text-center lg:text-left font-semibold">
              The <span className="text-gradient-2">Telegram Bot</span> is
              optimized with many outstanding features.
            </p>
            <a
              className="w-fit mt-8 py-4 text-black font-medium px-6 rounded-full flex-shrink-0 inline-flex bg-gradient gap-3 items-center justify-center text-center transition-all hover:scale-105 hover:opacity-70"
              href="https://share-friend.gitbook.io/docs/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Explore the Bot</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <g clip-path="url(#clip0_98_21)">
                  <path
                    d="M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_98_21">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="w-14 mt-8 -ml-16">
            <img src={star3} alt="" />
          </div>
          <div className="w-14 absolute bottom-1/4 left-1/3">
            <img src={star3} alt="" />
          </div>
          <div className="w-14 absolute bottom-1/3 right-28">
            <img src={star3} alt="" />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="">
            <div className="mx-auto lg:mx-0 max-w-[200px]">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-5">
              <span className="text-gray">
                Share.friend © 2023, All Rights Reserved
              </span>
              <ul className="flex gap-8 items-center">
                <li>
                  <a
                    className="text-gray transition-all hover:text-white"
                    href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray transition-all hover:text-white"
                    href="#callers">
                    Top Callers
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray transition-all hover:text-white"
                    href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray transition-all hover:text-white"
                    href="https://share-friend.gitbook.io/docs/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
