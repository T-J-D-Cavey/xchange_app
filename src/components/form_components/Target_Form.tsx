import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { 
    target_amount_selector, 
    change_target_amount, 
    change_base_amount,
    user_target_amount_boolean_selector,
    change_user_target_amount_boolean,
    change_target_currency, 
    target_currency_selector, 
} from '../redux/currencies_slice';
import { image_assets } from '../../assets/image_assets';
import { formProps } from '../../assets/local_types';

export const Target_Form: React.FC<formProps> = (formProps) => {

    const dispatch = useDispatch();
    const user_target_amount_boolean = useSelector(user_target_amount_boolean_selector);
    const target_amount = useSelector(target_amount_selector);
    let formated_target_amount;
    if(target_amount === 0) {
        formated_target_amount = target_amount.toFixed(0);
    } else if (target_amount > 0 && user_target_amount_boolean === true){ 
        // add logic to remove the leading 0;
        formated_target_amount = target_amount.toString();
        if(formated_target_amount[0] === '0') {
            formated_target_amount.replace(formated_target_amount[0], '')
          }
    } else if (user_target_amount_boolean === false) {
        formated_target_amount = target_amount.toFixed(2);
      }
    const target_currency = useSelector(target_currency_selector); 
    
    function change_amount_handler(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const input = e.target.value;
        if(+input < 0) {
            alert('Please enter a positive number to be converted.');
        } else {
            dispatch(change_target_amount(+input));
            dispatch(change_user_target_amount_boolean(true));
            formProps.change_amount();
        }
    }

    function change_currency_handler(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        const input = e.target.value;
        dispatch(change_target_currency(input));
      }

    function focus_handler(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      dispatch(change_base_amount(0));
      dispatch(change_target_amount(0))
    }

    return (
        <div>
            <Form.Group controlId='target_currency'>
                <Form.Label>Target currency:</Form.Label>
                <div className='flex'>
                    <img src={image_assets[target_currency]}></img>
                    <input type='number' value={formated_target_amount} onChange={change_amount_handler} onFocus={focus_handler} step='1'/>
                    <Form.Select id='target_currency' size="lg" onChange={change_currency_handler}>
                      <option value='EUR'>Euro (EUR)</option>
                      <option value='JPY'>Japanese yen (JPY)</option>
                      <option value='GBP'>Pound sterling (GBP)</option>
                      <option value='AUD'>Australian dollar (AUD)</option>
                      <option value='CAD'>Canadian dollar (CAD)</option>
                      <option value='CHF'>Swiss franc (CHF)</option>
                      <option value='CNH'>Chinese renminbi (CNH)</option>
                      <option value='HKD'>Hong Kong dollar (HKD)</option>
                      <option value='NZD'>New Zealand dollar (NZD)</option>
                      <option value='USD'>US dollar (USD)</option>
                    </Form.Select>
                </div>
            </Form.Group>
        </div>
    )
}