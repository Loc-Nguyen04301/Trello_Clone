
import { Container } from '@mui/material';
import AppBar from '../../components/AppBar';
import BoardBar from '../Boards/BoardBar';
import BoardContent from '../Boards/BoardContent';

const HomePage = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <AppBar />
            <BoardBar />
            <BoardContent />
        </Container>
    )
}

export default HomePage