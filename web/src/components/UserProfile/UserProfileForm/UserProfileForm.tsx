import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUserProfileById, UpdateUserProfileInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormUserProfile = NonNullable<EditUserProfileById['userProfile']>

interface UserProfileFormProps {
  userProfile?: EditUserProfileById['userProfile']
  onSave: (data: UpdateUserProfileInput, id?: FormUserProfile['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserProfileForm = (props: UserProfileFormProps) => {
  const onSubmit = (data: FormUserProfile) => {
    props.onSave(data, props?.userProfile?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUserProfile> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.userProfile?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.userProfile?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="about_me"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          About me
        </Label>

        <TextField
          name="about_me"
          defaultValue={props.userProfile?.about_me}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="about_me" className="rw-field-error" />

        <Label
          name="image_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="image_url"
          defaultValue={props.userProfile?.image_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image_url" className="rw-field-error" />

        <Label
          name="resumeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Resume id
        </Label>

        <NumberField
          name="resumeId"
          defaultValue={props.userProfile?.resumeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="resumeId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserProfileForm
