import React from 'react';
import Avatar from '@material-ui/core/Avatar';

type Customer = { first_name: string; last_name: string; avatar: string };

type Props = {
    record?: Customer;
};

export const AvatarField = ({ record }: Props) =>
    record ? (
        <div>
            <Avatar src={record.avatar} />
            {`${record.first_name} ${record.last_name}`}
        </div>
    ) : null;
