import * as React from "react";

function Times(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.15 17.46c-.2-.2-.2-.51 0-.71l10.6-10.6c.2-.2.51-.2.71 0 .2.2.2.51 0 .71L6.85 17.46c-.19.2-.51.2-.7 0z'
        stroke='#F7F7F7'
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.15 6.15c.2-.2.51-.2.71 0l10.61 10.61c.2.2.2.51 0 .71-.2.2-.51.2-.71 0L6.15 6.85c-.2-.19-.2-.51 0-.7z'
        stroke='#F7F7F7'
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Times;
