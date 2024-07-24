
import Continue from '@/Components/Continue';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import BasicLayout from '@/Layouts/BasicLayout';
import { useEffect } from 'react';


export default function Home(props) {

    return (
            <Authenticated>
                <Continue year={props.year} q_no={props.q_no} c_no={props.c_no} unit={props.unit} last_no={props.last_no} />
            </Authenticated>
    );
}
