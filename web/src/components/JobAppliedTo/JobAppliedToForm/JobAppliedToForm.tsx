import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditJobAppliedToById,
  UpdateJobAppliedToInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormJobAppliedTo = NonNullable<EditJobAppliedToById['jobAppliedTo']>

interface JobAppliedToFormProps {
  jobAppliedTo?: EditJobAppliedToById['jobAppliedTo']
  onSave: (data: UpdateJobAppliedToInput, id?: FormJobAppliedTo['id']) => void
  error: RWGqlError
  loading: boolean
}

const JobAppliedToForm = (props: JobAppliedToFormProps) => {
  const onSubmit = (data: FormJobAppliedTo) => {
    props.onSave(data, props?.jobAppliedTo?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormJobAppliedTo> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.jobAppliedTo?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.jobAppliedTo?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company
        </Label>

        <TextField
          name="company"
          defaultValue={props.jobAppliedTo?.company}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="company" className="rw-field-error" />

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location
        </Label>

        <TextField
          name="location"
          defaultValue={props.jobAppliedTo?.location}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="location" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.jobAppliedTo?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="userProfileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User profile id
        </Label>

        <TextField
          name="userProfileId"
          defaultValue={props.jobAppliedTo?.userProfileId}
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

export default JobAppliedToForm
