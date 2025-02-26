import React from "react";

interface AddFolderIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const AddFolderIcon: React.FC<AddFolderIconProps> = ({
  width = 256,
  height = 256,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      className={className}
    >
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 58.58 80.854 H 4.756 C 2.133 80.854 0 78.721 0 76.099 V 30.953 c 0 -0.552 0.448 -1 1 -1 h 88 c 0.553 0 1 0.448 1 1 v 19.324 c 0 0.553 -0.447 1 -1 1 s -1 -0.447 -1 -1 V 31.953 H 2 v 44.146 c 0 1.52 1.236 2.756 2.756 2.756 H 58.58 c 0.553 0 1 0.447 1 1 S 59.133 80.854 58.58 80.854 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
        <path
          d="M 89 31.953 c -0.553 0 -1 -0.448 -1 -1 v -7.839 c 0 -1.52 -1.236 -2.756 -2.756 -2.756 h -38.63 c -3.163 0 -6.196 -0.97 -8.772 -2.806 l -5.573 -3.973 c -2.234 -1.593 -4.866 -2.435 -7.61 -2.435 H 5.541 C 3.588 11.145 2 12.733 2 14.686 v 16.268 c 0 0.552 -0.448 1 -1 1 s -1 -0.448 -1 -1 V 14.686 c 0 -3.055 2.485 -5.541 5.541 -5.541 h 19.118 c 3.163 0 6.196 0.97 8.771 2.806 l 5.573 3.973 c 2.234 1.593 4.866 2.435 7.611 2.435 h 38.63 c 2.622 0 4.756 2.133 4.756 4.756 v 7.839 C 90 31.505 89.553 31.953 89 31.953 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
        <path
          d="M 75.616 80.854 c -7.932 0 -14.384 -6.452 -14.384 -14.384 s 6.452 -14.384 14.384 -14.384 S 90 58.539 90 66.471 S 83.548 80.854 75.616 80.854 z M 75.616 54.087 c -6.828 0 -12.384 5.556 -12.384 12.384 s 5.556 12.384 12.384 12.384 S 88 73.299 88 66.471 S 82.444 54.087 75.616 54.087 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
        <path
          d="M 81.145 67.471 H 70.087 c -0.553 0 -1 -0.447 -1 -1 s 0.447 -1 1 -1 h 11.058 c 0.553 0 1 0.447 1 1 S 81.697 67.471 81.145 67.471 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
        <path
          d="M 75.616 73 c -0.553 0 -1 -0.447 -1 -1 V 60.942 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 V 72 C 76.616 72.553 76.169 73 75.616 73 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
      </g>
    </svg>
  );
};
