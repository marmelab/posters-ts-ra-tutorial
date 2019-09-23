import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

type Props = { record?: any; source: string };

export const ChipsField = ({ record, source }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {record &&
                record[source].map((item, index) => (
                    <Chip
                        key={`${item}_${index}`}
                        label={item}
                        clickable={false}
                        className={classes.chip}
                    />
                ))}
        </div>
    );
};
