import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditEducationById, UpdateEducationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormEducation = NonNullable<EditEducationById['education']>

interface EducationFormProps {
  education?: EditEducationById['education']
  onSave: (data: UpdateEducationInput, id?: FormEducation['id']) => void
  error: RWGqlError
  loading: boolean
}

const EducationForm = (props: EducationFormProps) => {
  const onSubmit = (data: FormEducation) => {
    props.onSave(data, props?.education?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEducation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="institute"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Institute
        </Label>

        <TextField
          name="institute"
          defaultValue={props.education?.institute}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="institute" className="rw-field-error" />

        <Label
          name="level"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Level
        </Label>

        <TextField
          name="level"
          defaultValue={props.education?.level}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="level" className="rw-field-error" />

        <Label
          name="years"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Years
        </Label>

        <NumberField
          name="years"
          defaultValue={props.education?.years}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="years" className="rw-field-error" />

        <Label
          name="userProfileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User profile id
        </Label>

        <TextField
          name="userProfileId"
          defaultValue={props.education?.userProfileId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="userProfileId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EducationForm
