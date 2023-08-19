import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { 
  base_amount_selector, 
  change_base_amount, 
  change_target_amount,
  user_target_amount_boolean_selector,
  change_user_target_amount_boolean,
  change_base_currency, 
  base_currency_selector 
} from '../../redux/currencies_slice';
import { image_assets } from '../../assets/image_assets';

export const Base_Form: React.FC = () => {

    const dispatch = useDispatch();
    const user_target_amount_boolean = useSelector(user_target_amount_boolean_selector);
    const base_amount = useSelector(base_amount_selector);
    let formated_base_amount;
    if(base_amount === 0) {
      formated_base_amount = base_amount.toFixed(0);
    } else if(base_amount > 0 && user_target_amount_boolean === false) {
      formated_base_amount = base_amount.toString();
      if(formated_base_amount[0] === '0') {
        formated_base_amount.replace(formated_base_amount[0], '')
      }
    } else if(user_target_amount_boolean === true) {
      formated_base_amount = base_amount.toFixed(2);
    } else {
      console.log('bug found');
    }
    const base_currency = useSelector(base_currency_selector);

    function change_amount_handler(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      const input = e.target.value;
      if(+input < 0) {
        alert('Please enter a positive number to be converted.')
      } else {
        dispatch(change_base_amount(+input));
        dispatch(change_user_target_amount_boolean(false));
      }
    }

    function change_currency_handler(e: React.ChangeEvent<HTMLSelectElement>) {
      e.preventDefault();
      const input = e.target.value;
      dispatch(change_base_currency(input));
    }

    function focus_handler(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      dispatch(change_base_amount(0));
      dispatch(change_target_amount(0))
    }

    return (
      <div>
        <Form.Group controlId='currency_to_convert'>
            {/* <Form.Label>Currency to convert:</Form.Label> */}
            <div className='form_div form_grid'>
                <h3>Currency to convert:</h3>
                <div className='form_img'>
                  <img src={image_assets[base_currency]}></img>
                </div>
                <input type='number' value={formated_base_amount} onChange={change_amount_handler} onFocus={focus_handler} step='1'/>
                <Form.Select id='currency_to_convert' size="lg" onChange={change_currency_handler}>
                  <option value='USD'>US dollar (USD)</option>
                  <option value='JPY'>Japanese yen (JPY)</option>
                  <option value='GBP'>Pound sterling (GBP)</option>
                  <option value='AUD'>Australian dollar (AUD)</option>
                  <option value='CAD'>Canadian dollar (CAD)</option>
                  <option value='CHF'>Swiss franc (CHF)</option>
                  <option value='CNY'>Chinese Yuan (CNY)</option>
                  <option value='HKD'>Hong Kong dollar (HKD)</option>
                  <option value='NZD'>New Zealand dollar (NZD)</option>
                  <option value='EUR'>Euro (EUR)</option>
                </Form.Select>
            </div>
        </Form.Group>
      </div>
    );
}