import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import ActionButton from '../components/actionButton';
import Logo from '../Logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(4),
      display: 'grid',
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    logo: {
      width: '50%',
      margin: 'auto',
    },
    title: {
      fontSize: '1.2rem',
      padding: 0,
      paddingTop: theme.spacing(2),
      margin: 0,
      marginBottom: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: 200,
    },
  }),
);

/**
 * Component for login page
 * 
 * @param {() => void} handleLogin callback function to App.tsx
 * 
 * maintains a form with hardcoded authentication:
 *    username: htn-challenge
 *    password: htn2020
 * 
 * uses React hooks to handle all input and clicks
 * 
 * @return {React.FC}
 */

interface Props {
  handleLogin: () => void;
}

interface State {
  username: string;
  password: string;
  helperText: string;
  showPassword: boolean;
  error: boolean;
}

const LoginPage: React.FC<Props> = ({handleLogin}) => {
  const style = useStyles();
  const [values, setValues] = React.useState<State>({
    username: '',
    password: '',
    helperText: '',
    showPassword: false,
    error: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (values.username === 'htn-challenge' && values.password === 'htn2020') {
      setValues({ ...values, error: false });
      handleLogin();
    } else {
      setValues({ ...values, helperText: 'Incorrect entry', error: true });
    }
  };

  return (
    <form>
      <div className={style.root}>
        <img className={style.logo} src={Logo} alt="Hack the North" />
        <h1 className={style.title}>Welcome to Hack the North!</h1>
        <div>
          <FormControl className={clsx(style.margin, style.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              value={values.username}
              error={values.error}
              onChange={handleChange('username')}
              labelWidth={90}
            />
            <FormHelperText>{values.helperText}</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl className={clsx(style.margin, style.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              error={values.error}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={85}
            />
            <FormHelperText>{values.helperText}</FormHelperText>
          </FormControl>
        </div>
      </div>
      <ActionButton variant="contained" color="primary" onClick={()=>handleSubmit()}>Log In</ActionButton>
    </form>
  );
}

export default LoginPage;
