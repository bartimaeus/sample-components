import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import Styled from '../../../node_modules/react-styleguidist/lib/client/rsg-components/Styled';
// eslint-disable-next-line import/no-extraneous-dependencies
import Heading from '../../../node_modules/react-styleguidist/lib/client/rsg-components/Heading';

// Import default implementation from react-styleguidist using the full path
// eslint-disable-next-line import/no-extraneous-dependencies
import DefaultSectionsRenderer from '../../../node_modules/react-styleguidist/lib/client/rsg-components/Sections/SectionsRenderer';

const styles = ({ fontFamily, space }) => ({
  headingSpacer: {
    marginBottom: space[2],
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base,
  },
});

export function SectionsRenderer({ classes, children }) {
  return (
    <div>
      {children.length > 0 && (
        <div className={classes.headingSpacer}>
          <Heading level={1}>Example Components</Heading>
          <p className={classes.descriptionText}>
            These are the greatest components
          </p>
        </div>
      )}
      <DefaultSectionsRenderer>{children}</DefaultSectionsRenderer>
    </div>
  );
}

SectionsRenderer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  children: PropTypes.node, // eslint-disable-line
};

export default Styled(styles)(SectionsRenderer);
