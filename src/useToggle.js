import { useState } from 'react';

export default (initVal) => {
    const [value, setValue] = useState(initVal)

    const toggleValue = () => {
      setValue(!value);
    }

    return [value, toggleValue];
  }
