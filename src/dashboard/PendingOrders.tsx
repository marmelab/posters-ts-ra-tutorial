import React from 'react';
import { ReferenceField } from 'react-admin';
import { format, parseISO } from 'date-fns';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const AvatarField: React.FC<{ record?: { avatar: string } }> = ({ record }) =>
    record ? <Avatar src={record.avatar} /> : null;

const FullName: React.FC<{ record?: { first_name: string; last_name: string } }> = ({ record }) =>
    record ? <span>{`${record.first_name} ${record.last_name}`}</span> : null;

const ReferencedCustomer: React.FC<{ record: any }> = ({ record, children }) => (
    <ReferenceField record={record} basePath="/commands" source="customer_id" reference="customers">
        {children}
    </ReferenceField>
);

type Order = { id: string; date: string; basket: any[]; total: number };

const PendingOrders: React.FC<{ orders: Order[] }> = ({ orders }) => {
    return (
        <Card>
            <CardHeader title="Pending Orders" />
            <List dense={true}>
                {orders.map(record => {
                    const { id, date, basket, total } = record;
                    return (
                        <ListItem key={id}>
                            <ListItemAvatar>
                                <ReferencedCustomer record={record}>
                                    <AvatarField />
                                </ReferencedCustomer>
                            </ListItemAvatar>
                            <ListItemText
                                primary={format(parseISO(date), 'dd/MM/yyyy, HH:mm:ss')}
                                secondary={
                                    <span>
                                        <ReferencedCustomer record={record}>
                                            <FullName />
                                        </ReferencedCustomer>
                                        , {basket.length} items
                                    </span>
                                }
                            />
                            <ListItemSecondaryAction>
                                <span
                                    style={{
                                        marginRight: '1em',
                                    }}
                                >
                                    ${total}
                                </span>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Card>
    );
};

export default PendingOrders;
