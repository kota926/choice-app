import { Box, Button, Card, Container, Fade, Grid, Grow, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import civilUnit from '@/json/unit/civilUnit'
import { Link } from "@inertiajs/react";

export default function TableSubject() {
    const [showTable, setShowTable] = useState(false)
    const subject = ["憲法", "民法", "刑法"]
    const [selectedSubject , setSelectedSubject] = useState("")

    const closeTable = () => {
        setShowTable(false)
    }

    const selectSubject = (sub) => {
        switch(sub) {
            case "憲法":
                setSelectedSubject("constitution")
            break;
            case "民法":
                setSelectedSubject("civil")
            break;
            case "刑法":
                setSelectedSubject("criminal")
            break;
        }
        setShowTable(true)
    }

    return(
        <div style={{position: "relative"}}>
            <Grow in={!showTable}>
                <Grid
                container
                sx={{
                    display: "flex",
                    justifyContent: 'center'
                }}>
                    <Grid item>
                        <Card sx={{ width: 150, height: 150, marginTop: 5, marginX: 1 }}>
                            <Typography sx={{margin: 4}} variant="h4">憲法</Typography>
                            <Button disabled sx={{marginLeft: 5}}>
                                <div>近日実装</div><ArrowForwardIosIcon></ArrowForwardIosIcon>
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card　sx={{ width: 150, height: 150, marginTop: 5, marginX: 1 }}>
                            <Typography sx={{margin: 4}} variant="h4">民法</Typography>
                            <Button sx={{marginLeft: 8}} onClick={() => selectSubject('民法')}>
                                <div>目次</div><ArrowForwardIosIcon></ArrowForwardIosIcon>
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ width: 150, height: 150, marginTop: 5, marginX: 1 }}>
                            <Typography sx={{margin: 4}} variant="h4">刑法</Typography>
                            <Button disabled sx={{marginLeft: 5}}>
                                <div>近日実装</div><ArrowForwardIosIcon></ArrowForwardIosIcon>
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Grow>
            <div>
                <Grow
                    style={{position: "absolute", top:40, right: 0,left: 0,margin: 'auto'}}
                    in={showTable}
                    {...(showTable ? {} : {timeout: 0})}
                >
                    <Container maxWidth={"lg"}>
                        <Button sx={{marginBottom: 3}} onClick={closeTable} variant="contained">戻る</Button>
                        <Grid container alignItems="center" justify="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Card raised sx={{ display: 'flex', justifyContent: 'space-between' ,width: 320, margin: 2}}>
                                <Box sx={{ display: 'flex'}} >
                                    <Typography sx={{margin: 1}}>私権の主体</Typography>
                                    <Typography sx={{margin: 1}}>(15)</Typography>
                                </Box>
                                <Link href={route("quiz", { subject: "civil", unit: 2, last_no: 0})}>
                                    <Button >START</Button>
                                </Link>
                            </Card>
                            <Card raised sx={{ display: 'flex', justifyContent: 'space-between' ,width: 320, margin: 2}}>
                                <Box sx={{ display: 'flex'}} >
                                    <Typography sx={{margin: 1}}>私権の変動</Typography>
                                    <Typography sx={{margin: 1}}>(10)</Typography>
                                </Box>
                                <Link href={route("quiz", { subject: "civil", unit: 3, last_no: 0})}>
                                    <Button >START</Button>
                                </Link>
                            </Card>
                            <Card raised sx={{ display: 'flex', justifyContent: 'space-between' ,width: 320, margin: 2}}>
                                <Box sx={{ display: 'flex'}} >
                                    <Typography sx={{margin: 1}}>代理</Typography>
                                    <Typography sx={{margin: 1}}>(5)</Typography>
                                </Box>
                                <Link href={route("quiz", { subject: "civil", unit: 5, last_no: 0})}>
                                    <Button >START</Button>
                                </Link>
                            </Card>
                            <Card raised sx={{ display: 'flex', justifyContent: 'space-between' ,width: 320, margin: 2}}>
                                <Box sx={{ display: 'flex'}} >
                                    <Typography sx={{margin: 1}}>契約の効力発生時期</Typography>
                                    <Typography sx={{margin: 1}}>(5)</Typography>
                                </Box>
                                <Link href={route("quiz", { subject: "civil", unit: 6, last_no: 0})}>
                                    <Button >START</Button>
                                </Link>
                            </Card>
                        </Grid>
                    </Container>
                </Grow>
            </div>
        </div>
    )
}