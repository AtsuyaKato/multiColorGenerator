import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function ParameterSliter(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.onChange(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    props.onChange(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
            <Typography id="input-slider" gutterBottom>
                {props.valueName}
            </Typography>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}