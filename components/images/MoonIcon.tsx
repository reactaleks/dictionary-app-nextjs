interface PropTypes {
    darkMode: boolean;
}
export default function MoonIcon({darkMode}:PropTypes) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="w-[19.99px] h-[20px]"
      >
        <path
          fill="none"
          stroke={!darkMode ? '#757575' : '#A445ED'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    )
}