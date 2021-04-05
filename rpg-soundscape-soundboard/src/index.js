import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Papa, { parse } from "papaparse";
import lodash from "lodash";

const data = require('./data/data.csv');

Papa.parse(data.default, {
  download: true,
  header: true,
  complete: function(results) {
    const parsedData = lodash.groupBy(results.data, i => i.tab)
    const finalData = lodash.omit(lodash.mapValues(parsedData, i =>  lodash.groupBy(i, j => j.button)),"")
    ReactDOM.render(
      <React.StrictMode>
        <App data={finalData} />
      </React.StrictMode>,
      document.getElementById('root')
    );

  }
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
