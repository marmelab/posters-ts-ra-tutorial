import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './App.css';

import Dashboard from './dashboard/Dashboard';
import MyLayout from './MyLayout';

import products from './products';
import reviews from './reviews';
import invoices from './invoices';
import categories from './categories';
import commands from './commands';
import customers from './customers';

const httpClient = (url, options) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Expose-Headers', 'Content-Range');

    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('https://json-server-now.pemoreau.now.sh', httpClient);

const App: React.FC = () => (
    <div className="App">
        <Admin
            title="Posters Galore"
            layout={MyLayout}
            dashboard={Dashboard}
            dataProvider={dataProvider}
        >
            <Resource options={{ label: 'Orders' }} name={'commands'} {...commands} />
            <Resource name={'invoices'} {...invoices} />
            <Resource options={{ label: 'Posters' }} name={'products'} {...products} />
            <Resource name={'categories'} {...categories} />
            <Resource name={'customers'} {...customers} />
            <Resource name={'reviews'} {...reviews} />
        </Admin>
    </div>
);

export default App;
