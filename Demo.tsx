import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';

export default function BasicTooltip() {
  return (
    <Tooltip title={longText}>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}

const longText = `
Program rules require the program incentive to be reduced by this amount of othe incentives received.
`;
