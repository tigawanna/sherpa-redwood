import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditExperienceById, UpdateExperienceInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormExperience = NonNullable<EditExperienceById['experience']>

interface ExperienceFormProps {
  experience?: EditExperienceById['experience']
  onSave: (data: UpdateExperienceInput, id?: FormExperience['id']) => void
  error: RWGqlError
  loading: boolean
}

const ExperienceForm = (props: ExperienceFormProps) => {
  const onSubmit = (data: FormExperience) => {
    props.onSave(data, props?.experience?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormExperience> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.experience?.title}
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
          defaultValue={props.experience?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
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
          defaultValue={props.experience?.company}
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
          defaultValue={props.experience?.location}
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
          defaultValue={props.experience?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="years"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Years
        </Label>

        <NumberField
          name="years"
          defaultValue={props.experience?.years}
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
          defaultValue={props.experience?.userProfileId}
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

export default ExperienceForm
