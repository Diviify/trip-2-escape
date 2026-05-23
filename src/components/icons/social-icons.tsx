import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.5h2.5V5h-3c-2.8 0-4.5 1.7-4.5 4.4V12H7v3.5h2V22h3.5v-6.5H16l.5-3.5h-3V10c0-1 .8-1.5 1.7-1.5z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.3 4H19l-6.1 7 6.5 9H14l-4-5.2-4.6 5.2H3.3l6.6-7.5L3.7 4h5.9l3.7 4.9L16.3 4zm-1.6 14h1.5L8.1 5.9H6.5l8.2 12.1z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.8a2.5 2.5 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.5V8.5l5.5 3.5L10 15.5z" />
    </svg>
  );
}
