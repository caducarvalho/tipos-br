import { useState } from 'react';

const useGetter = ({ apiKey, sheetId }) => {
  const [data, handleData] = useState(null);
  const [busy, toggleBusy] = useState(false);
  const [loading, toggleLoading] = useState(true);
  const [error, handleError] = useState();

  const getData = async ({ sheet, callback }) => {
    toggleLoading(true);
    toggleBusy(true);

    await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchGet?ranges=${sheet}&key=${apiKey}`, {
      credentials: 'omit',
      referrer: 'http://localhost:3000/',
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((res) => {
        handleData(res);
        if (callback) callback(res);
      })
      .catch((err) => handleError(err))
      .finally(() => {
        toggleBusy(false);
        toggleLoading(false);
      });
  };

  const clearData = () => handleData(null);

  return {
    getData,
    clearData,
    data,
    loading,
    error,
    busy,
  };
};

export default useGetter;
