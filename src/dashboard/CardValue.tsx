import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
    },
});

type Props = { title: string; value: string };

const CardValue = ({ title, value }: Props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Typography color="textSecondary">{title}</Typography>
            <Typography variant="h5" component="h2">
                {value}
            </Typography>
        </Card>
    );
};

export default CardValue;
