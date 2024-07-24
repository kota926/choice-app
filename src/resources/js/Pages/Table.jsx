import BasicLayout from '@/Layouts/BasicLayout';
import TableSubject from '@/Components/TableSubject';
import Authenticated from '@/Layouts/AuthenticatedLayout';


export default function Table() {
    return (
            <Authenticated>
                <TableSubject></TableSubject>
            </Authenticated>
    );
}
