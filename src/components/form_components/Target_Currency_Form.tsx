import Form from 'react-bootstrap/Form';
import { Image_Store } from '../../assets/Image_Store';

interface formProps {
    //   convert_amount: number;
    //   set_convert_amount: (amount: number) => void;
      target_amount: number;
      set_target_amount: (amount: number) => void;
    //   convert_currency: string;
    //   set_convert_currency: (amount: string) => void;
      target_currency: string;
      set_target_currency: (amount: string) => void;
  }

export const Target_Currency_Form: React.FC<formProps> = (formProps) => {

    const target_amount = formProps.target_amount;
    const target_currency = formProps.target_currency;
    console.log(target_currency)


    return (
        <div>
            <Form.Group controlId='target_currency'>
                <Form.Label>Target currency:</Form.Label>
                <div className='flex'>
                    {/* need to diagnose why image isn't rendering */}
                    <img src={Image_Store[target_currency]}></img>
                    <input type='number' value={target_amount}/>
                    <Form.Select id='target_currency' size="lg">
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