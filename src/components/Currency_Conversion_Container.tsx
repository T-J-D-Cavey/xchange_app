
import { Form_Container } from "./form_components/Form_Container";
import { API_KEY, API_BASE_URL } from "../assets/Api_Resources";
import { Form_Button } from './form_components/Form_Button';

export const Currency_Conversion_Container = () => {


    // logic to make a fetch with the API key:

    // useEffect(() => {
    //   calculate_amount();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [convert_amount, target_amount])
    
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
            {/* <p>1 {convert_currency} = {1 * conversion_rate} {target_currency}</p> */}
        </div>
    )
}