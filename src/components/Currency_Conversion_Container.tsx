import { useState } from "react";
import { Form_Container } from "./form_components/Form_Container";
import { Form_Button } from './form_components/Form_Button';

export function Currency_Conversion_Container() {
    // logic to store the state of both selected currencies and both inputs (4 states)
    const [convert_amount, set_convert_amount] = useState(0);
    const [target_amount, set_target_amount] = useState(0);
    const [convert_currency, set_convert_currency] = useState('USD');
    const [target_currency, set_target_currency] = useState('EUR');
    // logic to make a fetch with the API key, state data included

    // Submit handler logic which triggers fetch when button is clicked

    // Need to pass as props all relevant logic to the componants below:
    return (
        <div>
            <Form_Container 
                convert_amount={convert_amount}
                set_convert_amount={set_convert_amount}
                target_amount={target_amount}
                set_target_amount={set_target_amount}
                convert_currency={convert_currency}
                set_convert_currency={set_convert_currency}
                target_currency={target_currency}
                set_target_currency={set_target_currency}
            />
            {/*  will ditch button if live async functionality works */}
            <Form_Button />
            {/* below will be set up to change dynamically based on the exchange rate figure and currency */}
            <p>1 {convert_currency} = 0.2323 {target_currency}</p>
        </div>
    )
}