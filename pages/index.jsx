import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useGetter from '../src/requesters/useGetter';
import Menu from '../src/components/Menu';
import Grid from '../src/components/Grid';
import Loading from '../src/components/Loading';
import FontList from '../src/components/FontList';
import YearContext from '../src/contexts/YearContext';
import checkNull from '../src/resources/check-null';

const Home = ({ apiKey, sheetId }) => {
  const { year } = useContext(YearContext);
  const {
    getData,
    clearData,
    data,
    loading,
    error,
    busy,
  } = useGetter({ apiKey, sheetId });

  useEffect(() => {
    if (data === null && !busy) getData({ sheet: year });
  }, [data, getData, busy, year]);

  useEffect(clearData, [year]);

  return (
    <Grid>
      <Grid.Menu>
        <Menu />
      </Grid.Menu>

      <Grid.Content>
        {error && <p>{error.message}</p>}

        {loading
          ? <Loading />
          : checkNull(data) && <FontList data={data} />}
      </Grid.Content>
    </Grid>
  );
};

Home.propTypes = {
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

export default Home;
