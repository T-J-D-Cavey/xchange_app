import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  base_amount_selector,
  change_base_amount,
  target_amount_selector,
  change_target_amount,
  user_target_amount_boolean_selector,
  get_conversions, 
  base_currency_selector, 
  target_currency_selector, 
  conversion_rate_selector 
} from './redux/currencies_slice';
import { Form_Container } from "./form_components/Form_Container";
import { API_KEY, API_BASE_URL } from "../assets/Api_Resources";
import { Form_Button } from './form_components/Form_Button';

// I should rename this Form_Container when that one is deleted:
export const Currency_Conversion_Container = () => {
  const dispatch = useDispatch();
  const base_amount = useSelector(base_amount_selector);
  const target_amount = useSelector(target_amount_selector);
  const user_target_amount_boolean = useSelector(user_target_amount_boolean_selector);
  const base_currency = useSelector(base_currency_selector);
  const target_currency = useSelector(target_currency_selector);
  const conversion_rate = useSelector(conversion_rate_selector);

    // logic to make a fetch with the API key:

    useEffect(() => {// eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(get_conversions(`${API_BASE_URL}apikey=${API_KEY}&base_currency=${base_currency}&currencies=${target_currency}`) as any)
      change_amount();
    }, [base_currency, target_currency, dispatch, change_amount]) 

    function change_amount() {
      if(!user_target_amount_boolean) {
        dispatch(change_base_amount(target_amount / conversion_rate));
      } else {
        dispatch(change_target_amount(base_amount * conversion_rate));
      }
    }

    return (
        <div>
            <Form_Container />
            {/*  will ditch button if live async functionality works */}
            <Form_Button />
            <p>1 {base_currency} = {1 * conversion_rate} {target_currency}</p>
        </div>
    )
}