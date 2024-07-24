import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box, ButtonGroup, Collapse, Slide } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@inertiajs/react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Unit from "@/json/unit/unit"

export default function QuizCard() {
    const [answered, setAnswered] = useState(false)
    const [questionData, setQuestionData] = useState([])
    const [CurrentQuestion, setCurrentQuestion] = useState({})
    const [ questionNo, setQuestionNo ] = useState(0)
    const [yourAnswer, setYourAnswer] = useState(null) 
    const [ finalQuestion, setFinalQuestion ] = useState(false)
    const [ unit, setUnit ] = useState(2)
    const [ lastNo, setLastNo ] = useState(0)


    useEffect(() => {
        let params = new URLSearchParams(document.location.search);
        setUnit(params.get("unit"))
        console.log(typeof params.get("last_no"))
        setQuestionNo(Number(params.get("last_no")))
        fetch('data/contents/civil/' + params.get("unit") + '.json')
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setQuestionData(data)
                console.log(params.get("last_no"))
                setCurrentQuestion(data[params.get("last_no")])
            })
            .catch(error => {
                console.log(error)
            });
    }, [])

    const falseClicked = () => {
        setYourAnswer(false)
        setAnswered(true)
    }

    const trueClicked = () => {
        setYourAnswer(true)
        setAnswered(true)
    }

    const nextQuestion = () => {
        const nextNumber = questionNo + 1
        setQuestionNo(nextNumber)
        setCurrentQuestion(questionData[nextNumber])
        if( (nextNumber + 1) === questionData.length ) {
            setFinalQuestion(true)
        }
        setAnswered(false)
        axios.post('resume', {
            'year': questionData[nextNumber].year,
            'q_no': questionData[nextNumber].q_no,
            'c_no': questionData[nextNumber].c_no,
            'unit': unit,
            'last_no': nextNumber,
        })
    }

    const finish = () => {
        axios.post('resume', {
            'year': questionData[0].year,
            'q_no': questionData[0].q_no,
            'c_no': questionData[0].c_no,
            'unit': unit,
            'last_no': 0,
        })
    }

    return(
    <>
        <Card sx={{margin: 2}}>
            <CardContent>
                <Typography sx={{ fontSize: 14, margin:1 }} color="text.secondary">
                    民法 { Unit[unit] } 第{ questionNo + 1 }問
                </Typography>
                <Typography sx={{ fontSize: 14, margin:1 }} color="text.secondary">
                    { CurrentQuestion.PM }試験 { CurrentQuestion.year }年 民法 第{ CurrentQuestion.q_no }問 選択肢{ CurrentQuestion.c_no }
                </Typography>
                <Typography sx={{margin: 1}}>
                    { CurrentQuestion.question }
                </Typography>
                <Typography sx={{margin: 1}}>
                    { CurrentQuestion.choice }
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{margin: 1}} variant="outlined" size="large" color='error' onClick={falseClicked} disabled={answered}><CloseIcon /></Button>
                    <Button sx={{margin: 1}} color='primary' onClick={trueClicked} disabled={answered} variant="outlined" size="large"><PanoramaFishEyeIcon /></Button>
                </Box>
            </CardContent>
        </Card>
        <Collapse in={answered}>
            <Card sx={{margin: 2}}>
                <CardContent>
                    <Box sx={{ display: "flex" }}>
                        <Typography>
                                あなたの解答：
                            </Typography>
                            <Typography>
                                { yourAnswer
                                    ? <PanoramaFishEyeIcon color='info' />
                                    : <CloseIcon color='error' />
                                }
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography>
                                正解：
                            </Typography>
                            <Typography>
                                { CurrentQuestion.answer == 1 || CurrentQuestion.answer == "1"
                                    ? <PanoramaFishEyeIcon color='info' />
                                    : <CloseIcon color='error' />
                                }
                        </Typography>
                    </Box>
                    {finalQuestion
                        ? <Box sx={{display: 'flex', justifyContent: 'center' }}>
                            <Link href={route("table")}>
                                <Button onClick={finish} sx={{margin: 1}} variant="outlined" size="large" color='info'>終了</Button>
                            </Link>
                        </Box>
                        : <Box sx={{display: 'flex', justifyContent: 'center' }}>
                            <Button sx={{margin: 1}} variant="outlined" size="large" color='info' onClick={nextQuestion}>次へ</Button>
                        </Box>
                    }
                </CardContent>
            </Card>
        </Collapse>
    </>
    );
}