import React from 'react';

interface DeleteIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const DeleteIcon: React.FC<DeleteIconProps> = ({ 
  width = 256, 
  height = 256, 
  className 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      className={className}
    >
      <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
        <path
          d="M 76.777 2.881 H 57.333 V 2.412 C 57.333 1.08 56.253 0 54.921 0 H 35.079 c -1.332 0 -2.412 1.08 -2.412 2.412 v 0.469 H 13.223 c -1.332 0 -2.412 1.08 -2.412 2.412 v 9.526 c 0 1.332 1.08 2.412 2.412 2.412 h 63.554 c 1.332 0 2.412 -1.08 2.412 -2.412 V 5.293 C 79.189 3.961 78.109 2.881 76.777 2.881 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'currentColor',
            fillRule: 'nonzero',
            opacity: 1,
          }}
        />
        <path
          d="M 73.153 22.119 H 16.847 c -1.332 0 -2.412 1.08 -2.412 2.412 v 63.057 c 0 1.332 1.08 2.412 2.412 2.412 h 56.306 c 1.332 0 2.412 -1.08 2.412 -2.412 V 24.531 C 75.565 23.199 74.485 22.119 73.153 22.119 z M 30.121 83.238 c 0 1.332 -1.08 2.412 -2.412 2.412 h -0.604 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 31.056 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 0.604 c 1.332 0 2.412 1.08 2.412 2.412 V 83.238 z M 47.714 83.238 c 0 1.332 -1.08 2.412 -2.412 2.412 h -0.604 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 31.056 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 0.604 c 1.332 0 2.412 1.08 2.412 2.412 V 83.238 z M 65.307 83.238 c 0 1.332 -1.08 2.412 -2.412 2.412 h -0.604 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 31.056 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 0.604 c 1.332 0 2.412 1.08 2.412 2.412 V 83.238 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'currentColor',
            fillRule: 'nonzero',
            opacity: 1,
          }}
        />
      </g>
    </svg>
  );
};
