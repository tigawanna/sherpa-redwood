import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditFrameworkById, UpdateFrameworkInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormFramework = NonNullable<EditFrameworkById['framework']>

interface FrameworkFormProps {
  framework?: EditFrameworkById['framework']
  onSave: (data: UpdateFrameworkInput, id?: FormFramework['id']) => void
  error: RWGqlError
  loading: boolean
}

const FrameworkForm = (props: FrameworkFormProps) => {
  const onSubmit = (data: FormFramework) => {
    props.onSave(data, props?.framework?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormFramework> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.framework?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.framework?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="githubUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Github url
        </Label>

        <TextField
          name="githubUrl"
          defaultValue={props.framework?.githubUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="githubUrl" className="rw-field-error" />

        <Label
          name="programmingLanguagesId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Programming languages id
        </Label>

        <NumberField
          name="programmingLanguagesId"
          defaultValue={props.framework?.programmingLanguagesId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="programmingLanguagesId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FrameworkForm
