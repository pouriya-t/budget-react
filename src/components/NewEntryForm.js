import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            placeholder="New shinny thing"
            label="Description"
          />
          <Form.Input
            width={4}
            label="value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          ></Form.Input>
        </Form.Group>
        <ButtonSaveOrCancel />
      </Form>
    )
}

export default NewEntryForm
