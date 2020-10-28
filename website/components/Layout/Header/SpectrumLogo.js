import { HREF_SPECTRUM } from '../../../common/constants';
import React from 'react';

export default () => (
  <span className="SpectrumLogo">
    <a href={HREF_SPECTRUM}>
      <svg viewBox="0 0 20 20">
        <path
          fill="#000"
          fillRule="evenodd"
          d="M0 8.5C0 9.3.7 10 1.5 10H3a7 7 0 017 7v1.5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5V17A17 17 0 003 0H1.5C.7 0 0 .7 0 1.5v7z"
        />
      </svg>
    </a>
  </span>
);
