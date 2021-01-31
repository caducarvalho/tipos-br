import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '../src/components/Grid';
import Loading from '../src/components/Loading';
import FoundryList from '../src/components/FoundryList';
import useGetter from '../src/requesters/useGetter';
import checkNull from '../src/resources/check-null';

const Foundries = ({ apiKey, sheetId }) => {
  const {
    getData,
    data,
    loading,
    error,
    busy,
  } = useGetter({ apiKey, sheetId });

  useEffect(() => {
    if (data === null && !busy) getData({ sheet: 'Type Foundries BR' });
  }, [data, getData, busy]);

  return (
    <Grid>
      {loading
        ? <Loading />
        : (
          <Grid.Content>
            {error && <p>{error.message}</p>}

            {checkNull(data) && <FoundryList data={data} />}
          </Grid.Content>
        )}
    </Grid>
  );
};

Foundries.propTypes = {
  apiKey: PropTypes.string.isRequired,
  sheetId: PropTypes.string.isRequired,
};

export async function getStaticProps() {
  const vars = process.env;

  return {
    props: {
      apiKey: vars.GOOGLE_SHEETS_API_KEY,
      sheetId: vars.GOOGLE_SHEETS_DOC_ID,
    },
  };
}

export default Foundries;
