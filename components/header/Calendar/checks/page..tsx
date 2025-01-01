import React, {useState} from 'react';
import {Checkout} from "@/app/components/header/calendar/checks/checkOut/CheckOut";
import {Checkin} from "@/app/components/header/calendar/checks/checkIn/CheckIn";

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
