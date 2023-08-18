import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { get_conversions, base_currency_selector, target_currency_selector, conversion_rate_selector } from './redux/currencies_slice';
import { Form_Container } from "./form_components/Form_Container";
import { API_KEY, API_BASE_URL } from "../assets/Api_Resources";
import { Form_Button } from './form_components/Form_Button';

export const Currency_Conversion_Container = () => {

  const base_currency = useSelector(base_currency_selector);
  const target_currency = useSelector(target_currency_selector);
  const conversion_rate = useSelector(conversion_rate_selector);
    // logic to make a fetch with the API key:

    useEffect(() => {
      get_conversions(`${API_BASE_URL}apikey=${API_KEY}&base_currency=${base_currency}&currencies=${target_currency}`)
    }, [base_currency, target_currency])
    
    // async function fetch_conversion() {
    //     try {
    //       const response = await fetch(`${API_BASE_URL}apikey=${API_KEY}&base_currency=${convert_currency}&currencies=${target_currency}`);
    //       const data = await response.json();
    //       console.log(data);
    //       const rate: number = data.data[target_currency];
    //       console.log(rate)
    //       set_conversion_rate(rate);
    //     } catch (error) {
    //       alert(`Error getting currency conversion data: ${error}`);
    //     }
    // }

    // function calculate_amount() {
    //   console.log('convert_amount =', convert_amount, 'conversion_rate =', conversion_rate)
    //   if(user_input_target_amount) {
    //     set_convert_amount(user_input_target_amount / conversion_rate);
    //     set_target_amount(user_input_target_amount);
    //   } else {
    //     set_target_amount(convert_amount * conversion_rate);
    //   }
    // }    

    return (
        <div>
            <Form_Container />
            {/*  will ditch button if live async functionality works */}
            <Form_Button />
            <p>1 {base_currency} = {1 * conversion_rate} {target_currency}</p>
        </div>
    )
}