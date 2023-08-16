import Form from 'react-bootstrap/Form';

interface formProps {
    convert_amount: number;
    set_convert_amount: (amount: number) => void;
    // target_amount: number;
    // set_target_amount: (amount: number) => void;
    convert_currency: string;
    set_convert_currency: (amount: string) => void;
    // target_currency: string;
    // set_target_currency: (amount: string) => void;
}

export const Currency_To_Convert_Form: React.FC<formProps> = (formProps) => {
    const convert_amount = formProps.convert_amount;
    return (
      <div>
        <Form.Group controlId='currency_to_convert'>
            <Form.Label>Currency to convert:</Form.Label>
            <div className='flex'>
                <input type='number' value={convert_amount}/>
                <Form.Select id='currency_to_convert' size="lg">
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