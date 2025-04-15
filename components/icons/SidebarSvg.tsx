const SidebarSvg = ({
  styleClassName,
  stroke = "#000000",
}: {
  styleClassName?: string;
  stroke?: string;
}) => {
  const baseClassName = "w-[36px] h-[36px]";
  return (
    <svg
      width="1em"
      height="1em"
      className={`${baseClassName} ${styleClassName}`}
      viewBox="2 2 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
        strokeWidth="0.048"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20 7L4 7"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M20 12L4 12"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M20 17L4 17"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
};
export default SidebarSvg;
