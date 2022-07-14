import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

const FormInput = props => {
  const { handleChange, label, ...otherProps } = props;
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
