/** @format */

import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Visaration | For easier varification`;
  }, [title]);
};

export default useTitle;
