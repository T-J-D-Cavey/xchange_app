import { useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Base_Form } from './form_components/Base_Form';
import { Target_Form } from './form_components/Target_Form';
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
import { API_KEY, API_BASE_URL } from "../assets/api_resources";
import { Form_Button } from './form_components/Form_Button';

export const Form_Container = () => {
  const dispatch = useDispatch();
  const base_amount = useSelector(base_amount_selector);
  const target_amount = useSelector(target_amount_selector);
  const user_target_amount_boolean = useSelector(user_target_amount_boolean_selector);
  const base_currency = useSelector(base_currency_selector);
  const target_currency = useSelector(target_currency_selector);
  const conversion_rate = useSelector(conversion_rate_selector);

  const conversion_call_back = useCallback(() => {// eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(get_conversions(`${API_BASE_URL}apikey=${API_KEY}&base_currency=${base_currency}&currencies=${target_currency}`) as any);
    calculation_call_back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base_currency, target_currency])

  const calculation_call_back = useCallback(() => {
    if(user_target_amount_boolean === false) {
      console.log('base currency for conversion: ', base_amount);
      const converted_number = base_amount * conversion_rate;
      dispatch(change_target_amount(converted_number.toFixed(2)));
    } else {
      console.log('target currency for conversion: ', target_amount);
      const converted_number = target_amount / conversion_rate;
      dispatch(change_base_amount(converted_number.toFixed(2)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_target_amount_boolean, base_amount, target_amount])

  useEffect(() => {
    conversion_call_back()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversion_call_back])

  useEffect(() => { 
    calculation_call_back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculation_call_back])




  function change_amount() {
    // if(user_target_amount_boolean === false) {
    //   dispatch(change_target_amount(base_amount * conversion_rate));
    // } else {
    //   dispatch(change_base_amount(target_amount / conversion_rate));
    // }
    // console.log('base currency for change_amount: ', base_amount);
    // console.log('target currency for change_amount: ', target_amount);

  }

    return (
        <div>
            <Base_Form change_amount={change_amount} />
            <Target_Form change_amount={change_amount} />
            {/*  will ditch button if live async functionality works */}
            <Form_Button />
            <p>1 {base_currency} = {1 * conversion_rate} {target_currency}</p>
        </div>
    )
}