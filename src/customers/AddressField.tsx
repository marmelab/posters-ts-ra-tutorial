import React from 'react';

interface Address {
    address: string;
    city: string;
    zipcode: string;
}

export const AddressField: React.FC<{ record?: Address }> = ({ record }) =>
    record ? <div>{`${record.address}, ${record.city} ${record.zipcode}`}</div> : null;
