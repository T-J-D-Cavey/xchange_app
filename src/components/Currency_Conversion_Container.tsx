import { useState } from "react";
import { Form_Container } from "./form_components/Form_Container";
import { API_KEY, API_BASE_URL } from "../assets/Api_Resources";
import { Form_Button } from './form_components/Form_Button';

export const Currency_Conversion_Container = () => {
    // logic to store the state of both selected currencies and both inputs:
    const [convert_amount, set_convert_amount] = useState<number>(0);
    const [target_amount, set_target_amount] = useState<number>(0);
    const [convert_currency, set_convert_currency] = useState<string>('USD');
    const [target_currency, set_target_currency] = useState<string>('EUR');
    // logic to make a fetch with the API key, state data included:
    async function fetchConversion() {
        try {
          const response = await fetch(`${API_BASE_URL}apikey=${API_KEY}&base_currency=${convert_currency}&currencies=${target_currency}`);
          const data = await response.json();
          console.log(data)
        } catch (error) {
          alert(`Error getting currency conversion data: ${error}`);
        }
      }

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
                fetchConversion={fetchConversion}
            />
            {/*  will ditch button if live async functionality works */}
            <Form_Button />
            <p>{convert_amount === 0 ? 0 : 1} {convert_currency} = {target_amount} {target_currency}</p>
        </div>
    )
}