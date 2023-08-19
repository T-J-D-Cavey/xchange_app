import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { 
  base_amount_selector, 
  change_base_amount, 
  change_target_amount,
  change_user_target_amount_boolean,
  change_base_currency, 
  base_currency_selector 
} from '../redux/currencies_slice';
import { image_assets } from '../../assets/image_assets';
import { formProps } from '../../assets/local_types';

export const Base_Form: React.FC<formProps> = (formProps) => {

    const dispatch = useDispatch();
    const base_amount = useSelector(base_amount_selector);
    const base_currency = useSelector(base_currency_selector);

    function change_amount_handler(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      const input = e.target.value;
      if(+input < 0) {
        alert('Please enter a positive number to be converted.')
      } else {
        dispatch(change_base_amount(+input));
        dispatch(change_user_target_amount_boolean(false));
        formProps.change_amount();
      }
    }

    function change_currency_handler(e: React.ChangeEvent<HTMLSelectElement>) {
      e.preventDefault();
      const input = e.target.value;
      dispatch(change_base_currency(input));
    }

    function focus_handler(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      dispatch(change_base_amount(0.00));
      dispatch(change_target_amount(0.00))
    }

    return (
      <div>
        <Form.Group controlId='currency_to_convert'>
            <Form.Label>Currency to convert:</Form.Label>
            <div className='flex'>
                <img src={image_assets[base_currency]}></img>
                <input type='number' value={base_amount} onChange={change_amount_handler} onFocus={focus_handler} step="0.01"/>
                <Form.Select id='currency_to_convert' size="lg" onChange={change_currency_handler}>
                  <option value='USD'>US dollar (USD)</option>
                  <option value='JPY'>Japanese yen (JPY)</option>
                  <option value='GBP'>Pound sterling (GBP)</option>
                  <option value='AUD'>Australian dollar (AUD)</option>
                  <option value='CAD'>Canadian dollar (CAD)</option>
                  <option value='CHF'>Swiss franc (CHF)</option>
                  <option value='CNH'>Chinese renminbi (CNH)</option>
                  <option value='HKD'>Hong Kong dollar (HKD)</option>
                  <option value='NZD'>New Zealand dollar (NZD)</option>
                  <option value='EUR'>Euro (EUR)</option>
                </Form.Select>
            </div>
        </Form.Group>
      </div>
    );
}