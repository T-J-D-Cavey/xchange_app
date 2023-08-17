import Form from 'react-bootstrap/Form';
import { Image_Store } from '../../assets/Image_Store';

interface formProps {
      target_amount: number;
      set_user_input_target_amount: (amount: number) => void;
      target_currency: string;
      set_target_currency: (amount: string) => void;
      calculate_amount: () => void;
  }

export const Target_Currency_Form: React.FC<formProps> = (formProps) => {

    const target_amount = formProps.target_amount;
    const target_currency = formProps.target_currency;

    function changeAmountHandler(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const input = e.target.value;
        if(+input < 0) {
            alert('Please enter a positive number to be converted.');
        } else {
            formProps.set_user_input_target_amount(+input);
            formProps.calculate_amount();
        }
    }

    function changeCurrencyHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        const input = e.target.value;
        formProps.set_target_currency(input);
      }

    return (
        <div>
            <Form.Group controlId='target_currency'>
                <Form.Label>Target currency:</Form.Label>
                <div className='flex'>
                    <img src={Image_Store[target_currency]}></img>
                    <input type='number' value={target_amount} onChange={changeAmountHandler}/>
                    <Form.Select id='target_currency' size="lg" onChange={changeCurrencyHandler}>
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