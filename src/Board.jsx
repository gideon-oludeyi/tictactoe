import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Board({ children }) {
    return (
        <Paper>
            <Grid
                container
                columns={3}
                sx={{ bgcolor: '#777', width: '20rem', height: '20rem' }}
            >
                {children.map((child, index) => (
                    <Grid item xs={1} sm={1} key={index}>
                        {child}
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}
