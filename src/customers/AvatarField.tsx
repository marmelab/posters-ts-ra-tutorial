import React from 'react';
import Avatar from '@material-ui/core/Avatar';

type Customer = { first_name: string; last_name: string; avatar: string };
// interface Customer {
//     first_name: string;
//     last_name: string;
//     avatar: string;
// }

export const AvatarField: React.FC<{ record?: Customer }> = ({ record }) =>
    record ? (
        <div>
            <Avatar src={record.avatar} />
            {`${record.first_name} ${record.last_name}`}
        </div>
    ) : null;
