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

  export default function RegisterFrom() {
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
              登録
            </Typography>
          </Grid>
          <TextField label="Username" variant="standard" fullWidth required />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            fullWidth
            required
          />
          <Box mt={3}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
                登録
            </Button>
            <Typography variant="caption" display="block">
              アカウントを持っていますか？
              <Link href="/register">アカウントを作成</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    );
  };
  