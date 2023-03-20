import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'src/modules/app/app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));

// @ts-ignore (HMR enablement but will complain about root re-create. Fix either remove)
// if (module && module.hot) module.hot.accept();
