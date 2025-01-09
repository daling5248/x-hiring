import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

export function Spinners(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      className={cn("animate-spin", props.className)}
    >
      <title>Loading</title>
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        fill="currentColor"
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
      />
    </svg>
  );
}

export function SearchLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Search</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 2c0-.41.34-.75.75-.75A9.75 9.75 0 1 1 6.59 2.3a.75.75 0 1 1 .68 1.34A8.25 8.25 0 1 0 11 2.75a.75.75 0 0 1-.75-.75ZM18.61 19.14a2.27 2.27 0 0 1 1.89-.89c.91 0 1.77.32 2.18 1.08.41.77.2 1.66-.32 2.42-.53.8-1.3 1.39-2.2 1.27-.91-.12-1.5-.9-1.8-1.81a2.25 2.25 0 0 1 .25-2.07Zm1.22.88c-.1.13-.17.36-.05.71.23.7.51.8.57.8.07.01.37-.01.77-.62.35-.52.28-.8.24-.87-.04-.08-.23-.29-.86-.29-.38 0-.58.14-.67.27Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DateLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Date</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 2a.75.75 0 0 0-1.5 0v.78a5.35 5.35 0 0 0-3.61 1.58A5.92 5.92 0 0 0 2.25 8.5v4.51a.75.75 0 0 0 1.5 0V9.84h16.5V17c0 1.39-.35 2.42-.99 3.11-.63.68-1.65 1.14-3.26 1.14H8c-1.6 0-2.63-.46-3.26-1.14-.64-.69-.99-1.72-.99-3.11a.75.75 0 0 0-1.5 0c0 1.61.4 3.08 1.39 4.14 1 1.07 2.47 1.61 4.36 1.61h8c1.9 0 3.37-.54 4.36-1.61A5.92 5.92 0 0 0 21.75 17V8.5c0-1.61-.4-3.08-1.39-4.14a5.35 5.35 0 0 0-3.61-1.58V2a.75.75 0 0 0-1.5 0v.75h-6.5V2Zm-1.5 2.29V5a.75.75 0 0 0 1.5 0v-.75h6.5V5a.75.75 0 0 0 1.5 0v-.71a3.8 3.8 0 0 1 2.51 1.1c.62.66.96 1.64.99 2.95H3.75c.03-1.3.37-2.3.99-2.95a3.8 3.8 0 0 1 2.51-1.1Zm7.7 9.41c0-.41.33-.75.74-.75h.01a.75.75 0 1 1 0 1.5.75.75 0 0 1-.76-.75Zm.74 2.25a.75.75 0 1 0 0 1.5h.01a.75.75 0 0 0 0-1.5Zm-4.44-2.25a.75.75 0 1 1 .76.75H12a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.54 13.7c0-.41.34-.75.75-.75h.01a.75.75 0 1 1 0 1.5.75.75 0 0 1-.76-.75Zm.75 2.25a.75.75 0 1 0 0 1.5h.01a.75.75 0 0 0 0-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
