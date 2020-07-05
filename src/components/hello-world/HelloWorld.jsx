import React, { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Modal, Tooltip } from 'antd';

/**
 * The only true HelloWorld component
 * @param {string} title The title of HelloWorld
 */
const HelloWorld = ({ title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span>
      <Tooltip title="Tooltip title...">{title}</Tooltip>
      <br />
      <Button onClick={() => setVisible(!visible)}>Click Me</Button>
      <Modal visible={visible} onCancel={() => setVisible(!visible)}>
        Hello World!
      </Modal>
    </span>
  );
};

HelloWorld.propTypes = {
  /**
   * The title of HelloWorld
   */
  title: PropTypes.string.isRequired,
};

export default HelloWorld;
