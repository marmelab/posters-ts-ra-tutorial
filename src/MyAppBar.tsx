import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

const styles = createStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends WithStyles<typeof styles> {}

const MyAppBar = withStyles(styles)(({ classes, ...props }: Props) => (
    <AppBar {...props}>
        <Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title">
            ~Posters Galore~
        </Typography>
    </AppBar>
));

export default MyAppBar;
