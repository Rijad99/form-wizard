import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { FormWizard } from './client/components/main/FormWizard/FormWizard';
import { FirstStepContent } from './client/components/main/Steps/FirstStepContent/FirstStepContent';
import { FourthStepContent } from './client/components/main/Steps/FourthStepContent/FourthStepContent';
import { SecondStepContent } from './client/components/main/Steps/SecondStepContent/SecondStepContent';
import { ThirdStepContent } from './client/components/main/Steps/ThirdStepContent/ThirdStepContent';
import { ConfirmDialog } from './client/components/main/ConfirmDialog/ConfirmDialog';

import "./client/scss/_global.scss";

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <FormWizard />,
	  children: [
		{
			path: "/",
			element: <FirstStepContent />,
		  },
		{
		  path: "info",
		  element: <FirstStepContent />,
		},
		{
			path: "plan",
			element: <SecondStepContent />,
		  },
		  {
			path: "addons",
			element: <ThirdStepContent />,
		  },
		  {
			path: "summary",
			element: <FourthStepContent />,
		  },
		  {
			path: "confirmation",
			element: <ConfirmDialog />,
		  },
	  ],
	},
  ]);

const root = ReactDOM.createRoot(
  document.getElementById('main') as HTMLElement
);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
  	</React.StrictMode>
);
