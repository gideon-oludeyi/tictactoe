import Paper from '@mui/material/Paper';
import XIcon from '@mui/icons-material/Close';
import OIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function Square({ value, onClick, ...props }) {
    let icon;
    switch (value) {
        case 'X':
            icon = <XIcon fontSize="large" />;
            break;
        case 'O':
            icon = <OIcon fontSize="large" />;
            break;
        default:
            icon = null;
            break;
    }

    return (
        <Paper
            square
            onClick={onClick}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            {icon}
        </Paper>
    );
}
