const ArrowLeftSvgIcon = ({ styleClassName }: { styleClassName: string }) => {
  const baseClassName = "text-[#ffffff] text-[16px] box-border fill-current";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 10.965 18.74"
    >
      <g transform="translate(677.16 1362.74) rotate(180)">
        <path
          className={`${baseClassName} ${styleClassName}`}
          d="M7.681-20.933a1.389,1.389,0,0,0,1.008-.416l7.972-7.785a1.618,1.618,0,0,0,.53-1.164,1.526,1.526,0,0,0-.53-1.164l-7.972-7.8a1.406,1.406,0,0,0-1.008-.416,1.444,1.444,0,0,0-1.455,1.445,1.5,1.5,0,0,0,.457,1.06l7.068,6.87-7.068,6.86a1.5,1.5,0,0,0-.457,1.06A1.444,1.444,0,0,0,7.681-20.933Z"
          transform="translate(659.969 1383.673)"
        />
      </g>
    </svg>
  );
};
export default ArrowLeftSvgIcon;
