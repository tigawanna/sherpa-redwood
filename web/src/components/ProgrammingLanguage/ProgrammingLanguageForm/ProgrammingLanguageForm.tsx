import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditProgrammingLanguageById,
  UpdateProgrammingLanguageInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormProgrammingLanguage = NonNullable<
  EditProgrammingLanguageById['programmingLanguage']
>

interface ProgrammingLanguageFormProps {
  programmingLanguage?: EditProgrammingLanguageById['programmingLanguage']
  onSave: (
    data: UpdateProgrammingLanguageInput,
    id?: FormProgrammingLanguage['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const ProgrammingLanguageForm = (props: ProgrammingLanguageFormProps) => {
  const onSubmit = (data: FormProgrammingLanguage) => {
    props.onSave(data, props?.programmingLanguage?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProgrammingLanguage> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.programmingLanguage?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.programmingLanguage?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />

        <Label
          name="projectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project id
        </Label>

        <NumberField
          name="projectId"
          defaultValue={props.programmingLanguage?.projectId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="projectId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProgrammingLanguageForm
