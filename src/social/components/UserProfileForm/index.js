import React, { memo } from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';

import { PrimaryButton } from '~/core/components/Button';

import AvatarUploader from '~/social/components/CommunityForm/AvatarUploader';

// TODO: should not be importing styles from another component.
import {
  AboutTextarea,
  Counter,
  ErrorMessage,
  Field,
  Form,
  FormBlockBody,
  FormBlockContainer,
  FormBlockHeader,
  FormBody,
  Label,
  LabelCounterWrapper,
  TextField,
} from '~/social/components/CommunityForm/styles';

const ButtonContainer = styled.div`
  margin-top: 16px;
`;

const FormBlock = ({ title, children }) => (
  <FormBlockContainer>
    <FormBlockHeader>{title}</FormBlockHeader>
    <FormBlockBody>{children}</FormBlockBody>
  </FormBlockContainer>
);

const UserProfileForm = ({ user, onSubmit, className }) => {
  const { register, handleSubmit, errors, watch, control } = useForm({
    defaultValues: {
      ...user,
      description: user.description ?? '',
      avatarFileId: user.avatarFileId ?? '',
    } || {
      avatarFileId: '',
      displayName: '',
      description: '',
    },
  });

  const description = watch('description');
  const displayName = watch('displayName');

  return (
    <Form className={className} onSubmit={handleSubmit(onSubmit)}>
      <FormBody>
        <FormBlock title="General">
          <Controller
            name="avatarFileId"
            render={props => <AvatarUploader {...props} />}
            control={control}
          />
          <Field error={errors.name}>
            <LabelCounterWrapper>
              <Label htmlFor="displayName" className="required">
                Display name
              </Label>
              <Counter>{displayName.length}/100</Counter>
            </LabelCounterWrapper>
            <TextField
              placeholder="Enter user display name"
              id="displayName"
              name="displayName"
              maxLength={100}
              ref={register({
                required: 'Display name is required',
              })}
            />
            <ErrorMessage errors={errors} name="displayName" />
          </Field>
          <Field error={errors.description}>
            <LabelCounterWrapper>
              <Label htmlFor="description">About</Label>
              <Counter>{description.length}/180</Counter>
            </LabelCounterWrapper>
            <AboutTextarea
              placeholder="Enter something about yourself"
              name="description"
              maxLength={180}
              ref={register()}
            />
            <ErrorMessage errors={errors} name="description" />
          </Field>
          <ButtonContainer>
            <PrimaryButton type="submit">Save</PrimaryButton>
          </ButtonContainer>
        </FormBlock>
      </FormBody>
    </Form>
  );
};

export default memo(UserProfileForm);
