const CopyLinkIcon = ({
  styleClassName,
}: {
  fill?: string;
  styleClassName?: string;
}) => {
  return (
    <svg
      className={styleClassName}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 6 40 28"
    >
      <path
        d="M30.5,18.5v6l10-9.929L30.5,4.5v5c-15.3,0.1-15,15-15,15S20.95,17.01,30.5,18.5z M22.5,5.5h-19c-2.46,0-3,0.7-3,3v24
	c0,2.49,0.6,3,3,3h29c2.41,0,3-0.451,3-3v-8l-5,4.289V30.5h-25v-20h12L22.5,5.5z"
      />
    </svg>
  );
};
export default CopyLinkIcon;
