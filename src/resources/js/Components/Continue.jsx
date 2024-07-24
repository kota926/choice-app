import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Link } from "@inertiajs/react";
import Unit from "@/json/unit/unit"


export default function Continue(props) {
    const [data,  setData] = useState({year: 2021})

    useEffect(()=>{
        setData({
            year: 2024,
            q_no: 2,
            c_no: 3
        })
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    
    const contitue = () => {
        
    }
    return(
        <Grid justifyContent='center' container>
            <Grid item sx={{margin: 1}}>
                <Link href={route("quiz", { subject: "civil", unit: props.unit, last_no: props.last_no})}>
                    <Button variant="outlined" sx={{height: 100}} onClick={contitue}>
                        <Typography sx={{margin: 1}}>続きから</Typography>
                        <div>
                        <Typography sx={{margin: 1}}>民法 {Unit[props.unit]} 第{props.last_no + 1 }問</Typography>
                        <Typography sx={{margin: 1}}>民法 予備試験 {props.year} 年 第{props.q_no}問 選択肢{props.c_no}</Typography>
                        </div>
                    </Button>
                </Link>
            </Grid>
            <Grid item sx={{margin: 1}}>
                <Button href='table' variant="contained" sx={{height: 100}}>
                    <Typography sx={{margin: 1}}>演習</Typography>
                </Button>
            </Grid>
        </Grid>
    );
}