import React, {useState} from 'react';
import {Checkout} from "@/app/components/Header/Calendar/Check/checkout";
import {Checkin} from "@/app/components/Header/Calendar/Check/Checkin";

export const Page = () => {
    const [checkinDays, setCheckinDays] = useState<string>();
    const [checkoutDays, setCheckoutDays] = useState<string>();
    return (
        <div>
            <Checkin setCheckinDays={setCheckinDays}/>
            <Checkout setCheckoutDays={setCheckoutDays}/>
        </div>
    );
};
