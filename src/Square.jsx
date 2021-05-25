import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        border: '1px solid black',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
        background: ({ value }) => {
            if (value === 'X') return palette.primary.main;
            if (value === 'O') return palette.secondary.main;
            return palette.common.white;
        },
        // text child version
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

function Square({ children, onClick }) {
    const classes = useStyles({ value: children });

    return (
        <Button onClick={onClick} classes={classes}>
            {children}
        </Button>
    );
}

export default Square;
