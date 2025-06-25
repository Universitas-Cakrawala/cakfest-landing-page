import { Link } from "react-router";

export const Button_Contact_Us_Detail_Competition = ({ contact_pic }) => {
  return (
    <a
      className="cursor-pointer hover:scale-105 group"
      href={`https://api.whatsapp.com/send?phone=${contact_pic}`}
      target="_blank"
    >
      <svg
        width="294"
        height="61"
        viewBox="0 0 294 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="0.0919189"
          width="282"
          height="60"
          fill="#721783"
          className="group-hover:brightness-90"
        />
        <rect
          x="3"
          y="4.09192"
          width="288"
          height="52"
          fill="#721783"
          className="group-hover:brightness-90"
        />
        <rect
          y="8.09192"
          width="294"
          height="45"
          fill="#721783"
          className="group-hover:brightness-90"
        />
        <rect
          x="6"
          y="56.0919"
          width="282"
          height="4"
          fill="#591266"
          className="group-hover:brightness-90"
        />
        <rect
          x="285"
          y="53.0919"
          width="6"
          height="3"
          fill="#591266"
          className="group-hover:brightness-90"
        />
        <rect
          x="6"
          y="0.0919189"
          width="282"
          height="4"
          fill="#9747A6"
          className="group-hover:brightness-90"
        />
        <rect x="3" y="4.09192" width="6" height="3" fill="#9747A6" />
        <path
          d="M62.9178 40.4329V37.7979H60.1898V22.9799H62.9178V20.3139H72.3418V22.9799H75.1008V29.8309H71.1328V24.5609H64.1268V36.2169H71.1328V30.8849H75.1008V37.7979H72.3418V40.4329H62.9178ZM81.5965 40.4329V37.7979H78.8685V28.2809H81.5965V25.6149H91.0205V28.2809H93.7795V37.7979H91.0205V40.4329H81.5965ZM82.8055 36.2169H89.8115V29.8309H82.8055V36.2169ZM97.5473 40.4329V25.6149H109.699V28.2809H112.458V40.4329H108.49V29.8309H101.484V40.4329H97.5473ZM120.441 40.4329V37.7979H117.713V29.8309H114.985V25.6149H117.713V20.3139H121.65V25.6149H129.896V29.8309H121.65V36.2169H128.687V33.5509H132.655V37.7979H129.896V40.4329H120.441ZM138.238 40.4329V37.7979H135.51V28.2809H138.238V25.6149H147.662V28.2809H150.421V36.2169H153.18V40.4329H149.212V37.7979H147.662V40.4329H138.238ZM139.447 36.2169H146.453V29.8309H139.447V36.2169ZM158.158 40.4329V37.7979H155.43V28.2809H158.158V25.6149H167.582V28.2809H170.341V32.4659H166.373V29.8309H159.367V36.2169H166.373V33.5509H170.341V37.7979H167.582V40.4329H158.158ZM178.021 40.4329V37.7979H175.293V29.8309H172.565V25.6149H175.293V20.3139H179.23V25.6149H187.476V29.8309H179.23V36.2169H186.267V33.5509H190.235V37.7979H187.476V40.4329H178.021ZM202.963 40.4329V37.7979H200.235V20.3139H204.172V36.2169H211.178V20.3139H215.146V37.7979H212.387V40.4329H202.963ZM218.913 40.4329V36.2169H229.856V35.1319H221.641V32.4659H218.913V28.2809H221.641V25.6149H233.824V29.8309H222.85V30.8849H231.065V33.5509H233.824V37.7979H231.065V40.4329H218.913Z"
          fill={"#FFFAEB"}
        />
      </svg>
    </a>
  );
};

export const ButtonBooklet = () => {
  return (
    <a
      className="cursor-pointer hover:scale-105 group relative inline-block"
      aria-label="Booklet"
      href="https://bit.ly/bookletcakfest25"
      target="_blank"
    >
      <svg
        width="294"
        height="61"
        viewBox="0 0 294 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="0.0919189"
          width="282"
          height="60"
          className="fill-[#E6B62E] group-hover:brightness-90"
        />
        <rect
          x="3"
          y="4.09192"
          width="288"
          height="52"
          className="fill-[#E6B62E] group-hover:brightness-90"
        />
        <rect
          y="8.09192"
          width="294"
          height="45"
          className="fill-[#E6B62E] group-hover:brightness-90"
        />
        <rect x="6" y="56.0919" width="282" height="4" fill="#B48E24" />
        <rect x="285" y="53.0919" width="6" height="3" fill="#B48E24" />
        <rect x="6" y="0.0919189" width="282" height="4" fill="#FDD35C" />
        <rect x="3" y="4.09192" width="6" height="3" fill="#FDD35C" />
      </svg>

      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-[#FFFAEB] font-extrabold text-[32px] tracking-widest"
      >
        Booklet
      </span>
    </a>
  );
};

export const Button_About_Competition = () => {
  return (
    <Link
      to="/about"
      className="cursor-pointer hover:scale-105 group"
      aria-label="About Us"
    >
      <svg
        width="294"
        height="61"
        viewBox="0 0 294 61"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="0.958008"
          width="282"
          height="60"
          className="fill-[#721783] group-hover:brightness-90"
        />
        <rect
          x="3"
          y="4.95801"
          width="288"
          height="52"
          className="fill-[#721783] group-hover:brightness-90"
        />
        <rect
          y="8.95801"
          width="294"
          height="45"
          className="fill-[#721783] group-hover:brightness-90"
        />
        <rect x="6" y="56.958" width="282" height="4" fill="#591266" />
        <rect x="285" y="53.958" width="6" height="3" fill="#591266" />
        <rect
          x="6"
          y="0.958008"
          width="282"
          height="4"
          className="fill-[#9747A6] group-hover:brightness-90"
        />
        <rect
          x="3"
          y="4.95801"
          width="6"
          height="3"
          className="fill-[#9747A6] group-hover:brightness-90"
        />
        <path
          d="M79.9432 41.299V26.481H82.6712V23.846H85.3992V21.18H89.3672V23.846H92.0952V26.481H94.8542V41.299H90.8862V35.998H83.8802V41.299H79.9432ZM83.8802 31.751H90.8862V28.062H88.1582V25.427H86.6082V28.062H83.8802V31.751ZM101.35 41.299V38.664H98.622V21.18H102.559V26.481H110.774V29.147H113.533V38.664H110.774V41.299H101.35ZM102.559 37.083H109.565V30.697H102.559V37.083ZM119.423 41.299V38.664H116.695V29.147H119.423V26.481H128.847V29.147H131.606V38.664H128.847V41.299H119.423ZM120.632 37.083H127.638V30.697H120.632V37.083ZM138.102 41.299V38.664H135.374V26.481H139.311V37.083H146.317V26.481H150.285V38.664H147.526V41.299H138.102ZM158.267 41.299V38.664H155.539V30.697H152.811V26.481H155.539V21.18H159.476V26.481H167.722V30.697H159.476V37.083H166.513V34.417H170.481V38.664H167.722V41.299H158.267ZM183.209 41.299V38.664H180.481V21.18H184.418V37.083H191.424V21.18H195.392V38.664H192.633V41.299H183.209ZM199.16 41.299V37.083H210.103V35.998H201.888V33.332H199.16V29.147H201.888V26.481H214.071V30.697H203.097V31.751H211.312V34.417H214.071V38.664H211.312V41.299H199.16Z"
          className="fill-[#FFFAEB]"
        />
      </svg>
    </Link>
  );
};

export const Button_Contact_Us_Competition = () => {
  return (
    <a
      aria-label="Contact Us"
      className="cursor-pointer hover:scale-105 group"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=6289526956197"
    >
      <svg
        width="294"
        height="61"
        viewBox="0 0 294 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="0.958008"
          width="282"
          height="60"
          className="fill-[#E6B62E] group-hover:brightness-90"
        />
        <rect
          x="3"
          y="4.95801"
          width="288"
          height="52"
          className="fill-[#E6B62E] group-hover:brightness-90"
        />
        <rect
          y="8.95801"
          width="294"
          height="45"
          className="fill-[#E6B62E] group-hover:brightness-90"
        />
        <rect
          x="6"
          y="56.958"
          width="282"
          height="4"
          className="fill-[#B48E24]"
        />
        <rect
          x="285"
          y="53.958"
          width="6"
          height="3"
          className="fill-[#B48E24]"
        />
        <rect
          x="6"
          y="0.958008"
          width="282"
          height="4"
          className="fill-[#FDD35C]"
        />
        <rect
          x="3"
          y="4.95801"
          width="6"
          height="3"
          className="fill-[#FDD35C]"
        />
        <path
          d="M62.9178 41.299V38.664H60.1898V23.846H62.9178V21.18H72.3418V23.846H75.1008V30.697H71.1328V25.427H64.1268V37.083H71.1328V31.751H75.1008V38.664H72.3418V41.299H62.9178ZM81.5965 41.299V38.664H78.8685V29.147H81.5965V26.481H91.0205V29.147H93.7795V38.664H91.0205V41.299H81.5965ZM82.8055 37.083H89.8115V30.697H82.8055V37.083ZM97.5473 41.299V26.481H109.699V29.147H112.458V41.299H108.49V30.697H101.484V41.299H97.5473ZM120.441 41.299V38.664H117.713V30.697H114.985V26.481H117.713V21.18H121.65V26.481H129.896V30.697H121.65V37.083H128.687V34.417H132.655V38.664H129.896V41.299H120.441ZM138.238 41.299V38.664H135.51V29.147H138.238V26.481H147.662V29.147H150.421V37.083H153.18V41.299H149.212V38.664H147.662V41.299H138.238ZM139.447 37.083H146.453V30.697H139.447V37.083ZM158.158 41.299V38.664H155.43V29.147H158.158V26.481H167.582V29.147H170.341V33.332H166.373V30.697H159.367V37.083H166.373V34.417H170.341V38.664H167.582V41.299H158.158ZM178.021 41.299V38.664H175.293V30.697H172.565V26.481H175.293V21.18H179.23V26.481H187.476V30.697H179.23V37.083H186.267V34.417H190.235V38.664H187.476V41.299H178.021ZM202.963 41.299V38.664H200.235V21.18H204.172V37.083H211.178V21.18H215.146V38.664H212.387V41.299H202.963ZM218.913 41.299V37.083H229.856V35.998H221.641V33.332H218.913V29.147H221.641V26.481H233.824V30.697H222.85V31.751H231.065V34.417H233.824V38.664H231.065V41.299H218.913Z"
          fill="#FFFAEB"
        />
      </svg>
    </a>
  );
};

export const Button_List_Competition = ({ pathName }) => {
  return (
    <Link
      className="cursor-pointer hover:scale-105 group"
      to="/details-competitions"
      state={{ path: pathName }}
      aria-label="Detail Competition"
    >
      <svg
        width="125"
        height="43"
        viewBox="0 0 125 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_95_2"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="125"
          height="43"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0H117V4H121V8H125V35H121V39H117V43H8V39H4V35H0V8H4V4H8V0Z"
            fill="#FDC833"
          />
        </mask>
        <g mask="url(#mask0_95_2)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0H117V4H121V8H125V35H121V39H117V43H8V39H4V35H0V8H4V4H8V0Z"
            className="fill-[#7D1990] group-hover:brightness-90"
          />
          <rect x="8" y="39" width="109" height="4" fill="#591266" />
          <rect x="117" y="35" width="4" height="4" fill="#591266" />
          <rect x="121" y="31" width="4" height="4" fill="#591266" />
          <rect
            x="117"
            y="4"
            width="109"
            height="4"
            transform="rotate(180 117 4)"
            fill="#A865B5"
          />
          <rect
            x="8"
            y="8"
            width="4"
            height="4"
            transform="rotate(180 8 8)"
            fill="#A865B5"
          />
          <rect
            x="4"
            y="12"
            width="4"
            height="4"
            transform="rotate(180 4 12)"
            fill="#A865B5"
          />
          <path
            d="M19.6113 24.192V22.752H18.1553V13.904H19.7713V22.592H23.9633V21.136H25.5953V22.752H24.1233V24.192H19.6113ZM27.5303 24.192V16.8H29.1463V24.192H27.5303ZM27.5303 15.52V13.904H29.1463V15.52H27.5303ZM31.0772 24.192V13.904H32.6932V18.256H33.9732V16.8H37.0452V18.256H38.5172V24.192H36.8852V18.4H34.1332V19.84H32.6932V24.192H31.0772ZM41.5957 24.192V22.752H40.1397V18.256H41.5957V16.8H46.1077V18.256H47.5797V22.592H49.0357V24.192H47.4197V22.752H46.1077V24.192H41.5957ZM41.7557 22.592H45.9477V18.4H41.7557V22.592ZM52.0982 24.192V22.752H50.6582V18.4H49.2022V16.8H50.6582V13.904H52.2582V16.8H56.6422V18.4H52.2582V22.592H56.4822V21.136H58.0982V22.752H56.6422V24.192H52.0982ZM63.2334 24.192V13.904H67.7614V15.36H69.2014V16.8H70.6734V21.296H69.2014V22.752H67.7614V24.192H63.2334ZM64.8494 22.592H67.6014V21.136H69.0414V16.96H67.6014V15.52H64.8494V22.592ZM74.0644 24.192V22.752H72.6084V18.256H74.0644V16.8H78.5764V18.256H80.0484V19.84H78.4164V18.4H74.2244V19.68H77.1364V21.296H74.2244V22.592H78.4164V21.12H80.0484V22.736H78.5764V24.192H74.0644ZM84.8794 24.192V22.752H83.4394V18.4H81.9834V16.8H83.4394V13.904H85.0394V16.8H89.4234V18.4H85.0394V22.592H89.2634V21.136H90.8794V22.752H89.4234V24.192H84.8794ZM93.7832 24.192V22.752H92.3272V18.256H93.7832V16.8H98.2952V18.256H99.7672V22.592H101.223V24.192H99.6072V22.752H98.2952V24.192H93.7832ZM93.9432 22.592H98.1352V18.4H93.9432V22.592ZM102.671 24.192V16.8H104.287V24.192H102.671ZM102.671 15.52V13.904H104.287V15.52H102.671ZM106.218 24.192V13.904H107.834V24.192H106.218Z"
            fill="#F2E8F4"
          />
        </g>
      </svg>
    </Link>
  );
};
