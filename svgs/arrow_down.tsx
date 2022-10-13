import { SVGProps } from "react";

export default function ArrowDown(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.64107 16.4179C6.41918 16.194 6.39901 15.8438 6.58055 15.5969L6.64107 15.5262L12.0322 10.0874L6.64107 4.64862C6.41918 4.42478 6.39901 4.07451 6.58055 3.82768L6.64107 3.75697C6.86295 3.53313 7.21017 3.51278 7.45485 3.69592L7.52495 3.75697L13.3583 9.64159C13.5802 9.86543 13.6003 10.2157 13.4188 10.4625L13.3583 10.5332L7.52495 16.4179C7.28087 16.6641 6.88514 16.6641 6.64107 16.4179Z"
        fill="#fff"
      />
    </svg>
  );
}
