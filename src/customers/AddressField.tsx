import React from 'react';

type Address = {
    address: string;
    city: string;
    zipcode: string;
};

type Props = {
    record?: Address;
};

export const AddressField = ({ record }: Props) =>
    record ? <div>{`${record.address}, ${record.city} ${record.zipcode}`}</div> : null;
