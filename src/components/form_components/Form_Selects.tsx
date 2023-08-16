import Form from 'react-bootstrap/Form';

export function Form_Selects() {
  return (
    <>
      <Form.Group controlId='currency_to_convert'>
        <Form.Label>Currency to convert:</Form.Label>
        <Form.Select id='currency_to_convert' size="lg">
          <option value='USD'>US dollar (USD)</option>
          <option value='EUR'>Euro (EUR)</option>
          <option value='JPY'>Japanese yen (JPY)</option>
          <option value='GBP'>Pound sterling (GBP)</option>
          <option value='AUD'>Australian dollar (AUD)</option>
          <option value='CAD'>Canadian dollar (CAD)</option>
          <option value='CHF'>Swiss franc (CHF)</option>
          <option value='CNH'>Chinese renminbi (CNH)</option>
          <option value='HKD'>Hong Kong dollar (HKD)</option>
          <option value='NZD'>New Zealand dollar (NZD)</option>
        </Form.Select>
      </Form.Group>
        <br />
      <Form.Group controlId='target_currency'>
        <Form.Label>Target currency:</Form.Label>
        <Form.Select id='target_currency' size="lg">
          <option value='USD'>US dollar (USD)</option>
          <option value='EUR'>Euro (EUR)</option>
          <option value='JPY'>Japanese yen (JPY)</option>
          <option value='GBP'>Pound sterling (GBP)</option>
          <option value='AUD'>Australian dollar (AUD)</option>
          <option value='CAD'>Canadian dollar (CAD)</option>
          <option value='CHF'>Swiss franc (CHF)</option>
          <option value='CNH'>Chinese renminbi (CNH)</option>
          <option value='HKD'>Hong Kong dollar (HKD)</option>
          <option value='NZD'>New Zealand dollar (NZD)</option>
        </Form.Select>
      </Form.Group>
    </>
  );
}