const EditIcon = ({ styleClassName }: { styleClassName?: string }) => {
  const baseClassName = "text-[16px] box-border";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={`${baseClassName} ${styleClassName || ""}`}
      fill="white"
    >
      <path
        d="M10.4,4.391a9.061,9.061,0,0,0,9-9,9.074,9.074,0,0,0-9.009-9,9.065,9.065,0,0,0-8.991,9A9.067,9.067,0,0,0,10.4,4.391Zm0-1.5a7.464,7.464,0,0,1-7.491-7.5,7.462,7.462,0,0,1,7.482-7.5,7.49,7.49,0,0,1,7.509,7.5A7.466,7.466,0,0,1,10.4,2.891Zm3.379-9.9.618-.626a.563.563,0,0,0,.044-.856l-.194-.194a.553.553,0,0,0-.847.044l-.635.618ZM7.645-.9l5.621-5.6L12.251-7.512l-5.6,5.594L6.163-.78a.239.239,0,0,0,.309.318Z"
        transform="translate(-1.398 13.609)"
      />
    </svg>
  );
};
export default EditIcon;
