import React from "react";

import share from "../../asset/img/share.png";
import favorite from "../../asset/img/favorite.png";
import link from "../../asset/img/link.svg";
import arrowDown from "../../asset/img/arrow-down.svg";
import arrowTopRight from "../../asset/img/arrow-top-right.svg";
import userAccount from "../../asset/img/user-account.svg";

// Avt

function User({ avt, username, website, rank, watchlists, telegram, tw }) {
  return (
    <div className="bg-gradient flex justify-center items-center object-cover rounded-xl min-h-[200px]">
      <div className="bg-[#0B070E] w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-xl p-4">
        {/* User Header */}
        <div className="flex gap-3">
          <div className="w-[80px] h-[80px] 2xl:w-[100px] 2xl:h-[100px] rounded-full">
            <img src={avt} alt="" />
          </div>
          <div>
            <div className="flex gap-2 items-center justify-between">
              <h3 className="text-gradient-3 text-xl font-medium">
                {username}
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

        {/* User main */}
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs">
              <div className="bg-gray-3 text-center px-2 py-1 flex rounded-md">
                <span>Rank:</span>
                <span className="block ml-1">#{rank}</span>
              </div>
              <span className="bg-gray-3 text-center px-2 py-1 flex rounded-md">
                On {watchlists} Watchlists
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
            <a
              className="flex items-center justify-center gap-1 text-xs bg-gray-333 px-3 py-2 rounded-full"
              target="_blank"
              rel="noopener noreferrer">
              <img className="w-5" src={link} alt="" />
              <span>Telegram</span>
              {/* <img className="w-5" src={arrowTopRight} alt="" /> */}
            </a>
            <a
              href={tw || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-gray-333 px-3 py-2 rounded-full">
              <img className="w-5" src={link} alt="" />
              <span>Twitter</span>
              {/* <img className="w-5" src={arrowDown} alt="" /> */}
            </a>
            <a className="flex items-center justify-center gap-1 text-xs bg-gray-333 px-2 py-2 rounded-full">
              <img className="w-5" src={userAccount} alt="" />
              <span>Community</span>
              <img className="w-5" src={arrowDown} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
