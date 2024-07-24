import Container from '@mui/material/Container';
// import BasicLayout from '../Layouts/BasicLayout';
import BasicLayout from '@/Layouts/BasicLayout';
import QuizCard from '@/Components/QuizCard';
import Authenticated from '@/Layouts/AuthenticatedLayout';


export default function Quiz() {
    return (
            <Authenticated>
                <QuizCard></QuizCard>
            </Authenticated>
    );
}
