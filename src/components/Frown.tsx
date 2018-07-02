import * as React from "react";

const Frown: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M854.8 367.2c-18.7-44.3-45.6-84.1-79.8-118.3-34.2-34.2-74-61-118.3-79.8C611 149.8 562.3 140 512 140c-50.3 0-99 9.8-144.8 29.2-44.3 18.7-84.1 45.6-118.3 79.8-34.2 34.2-61 74-79.8 118.3C149.8 413 140 461.7 140 512s9.8 99 29.2 144.8c18.7 44.3 45.6 84.1 79.8 118.3 34.2 34.2 74 61 118.3 79.8C413 874.2 461.7 884 512 884c50.3 0 99-9.8 144.8-29.2 44.3-18.7 84.1-45.6 118.3-79.8 34.2-34.2 61-74 79.8-118.3C874.2 611 884 562.3 884 512s-9.8-99-29.2-144.8zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360c-4.6 0-8.2-3.8-8-8.4 4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6c.2 4.6-3.4 8.4-8 8.4zm24-224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      fill="none"
    />
    <circle cx={336} cy={421} r={48} />
    <circle cx={688} cy={421} r={48} />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2z" />
    <path d="M512 533c-85.5 0-155.6 67.3-160 151.6-.2 4.6 3.4 8.4 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664c4.6 0 8.2-3.8 8-8.4-4.4-84.3-74.5-151.6-160-151.6z" />
  </svg>
);

Frown.displayName = "Frown";

export default Frown;