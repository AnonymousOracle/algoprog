React = require('react')

import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'

export default FieldGroup = ({ id, label, help, setField, state, validationState, props... }) =>
    onChange = (e) =>
        setField(id, e.target.value)
    value = if "value" of props then props.value else state[id]
    <FormGroup controlId={id} validationState={validationState}>
        <ControlLabel>{label}</ControlLabel>
        {`<FormControl {...props} value={value} onChange={onChange} name={id}/>`}
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
