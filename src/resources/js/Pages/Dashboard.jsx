import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Box, Button, Container, Grid } from "@mui/material";

export default function () {
    return(
        <Authenticated>
            <Grid container justifyContent='center'>
                <Grid>
                    <Link href="home">
                        <Button sx={{margin: 3}} variant="contained">ホームへ</Button>
                    </Link>
                </Grid>
            </Grid>
        </Authenticated>
    )
}