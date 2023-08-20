import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import classes from './SearchInput.module.scss';

type propType = {
  value:string;
  placeHolder:string;
  onChnage:any;
}

export default function InputWithIcon(props:propType) {
  
  const { value,placeHolder,onChnage } = props;

  return (
    <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} className={classes['root']}>
      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <input 
        id="input-with-icon-adornment"
        onChange={onChnage}
        placeholder={placeHolder}
        value={value}
        className={classes['search']}
      />
    </Box>
  );
}