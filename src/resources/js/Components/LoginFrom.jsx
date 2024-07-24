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
import { useState } from "react";
import { useForm } from "@inertiajs/react";

  export default function LoginFrom() {
    // const [name, setName ] = useState('')
    // const [password, setPassword ] = useState('')
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const handleNameChange = (e) => {
        setData('name', e.target.value)
    }

    const handleEmailChange = (e) => {
        setData('email', e.target.value)
    }

    const handlePasswordChange = (e) => {
        setData('password' ,e.target.value)
    }

    const login = (e) => {
        e.preventDefault();

        post(route('login'));
    }

    return (
      <Grid>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            height: "70vh",
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
              ログイン
            </Typography>
          </Grid>
          <TextField
            helperText={errors.email}
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
          <Box mt={3}>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                onClick={login}>
                ログイン
            </Button>
            <Typography variant="caption" display="block">
              アカウント持っていますか？
              <Link href="/register">アカウントを作成</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    );
  };
  