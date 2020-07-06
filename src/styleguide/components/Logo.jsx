import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import Styled from '../../../node_modules/react-styleguidist/lib/client/rsg-components/Styled';

import logo from './logo.png';

const styles = ({ fontFamily, color }) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: fontFamily.base,
    fontSize: 18,
    fontWeight: 'normal',
    color: color.baseBackground,
  },
  image: {
    width: '140px',
    marginLeft: '-0.5em',
  },
});

export function LogoRenderer({ classes }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <img className={classes.image} src={logo} alt="React logo" />
    </div>
  );
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  children: PropTypes.node, // eslint-disable-line
};

export default Styled(styles)(LogoRenderer);
