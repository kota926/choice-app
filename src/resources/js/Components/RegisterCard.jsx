import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    Paper,
    Stack,
    TextField,
    Typography
  } from "@mui/material";

  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import { teal } from "@mui/material/colors";
import { useForm } from "@inertiajs/react";

  export default function RegisterCard() {
    const { data, setData, post, processing, errors, reset } = useForm({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });

    const handleNameChange = (e) => {
        setData('name', e.target.value)
    }

    const handleEmailChange = (e) => {
      setData('email' ,e.target.value)
  }

    const handlePasswordChange = (e) => {
        setData('password' ,e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
      setData('password_confirmation' ,e.target.value)
  }

    const submit = (e) => {
      e.preventDefault();
      console.log('a')
      post(route('register'));
    };

    return (
      <Grid>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "280px",
            m: "20px auto"
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: teal[400] }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant={"h5"} sx={{ m: "30px" }}>
              登録
            </Typography>
          </Grid>
          <TextField
            helperText={errors.name}
            label="ユーザーネーム"
            variant="standard"
            fullWidth required
            onChange={handleNameChange}
          />
          <TextField
            helperText={errors.email}
            type="email"
            label="メールアドレス"
            variant="standard"
            fullWidth
            required
            onChange={handleEmailChange}
          />
          <TextField
            helperText={errors.password}
            type="password"
            label="パスワード"
            variant="standard"
            fullWidth
            required
            onChange={handlePasswordChange}
          />
          <TextField
            type="password"
            label="確認用パスワード"
            variant="standard"
            fullWidth
            required
            onChange={handlePasswordConfirmationChange}
          />
          <Box mt={3}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={submit}
            >
                登録
            </Button>
            <Typography variant="caption" display="block">
               アカウントを既にもっている方
              <Link href="/register">ログインへ</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    );
  };
  