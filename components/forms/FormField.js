import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";
import Text from "../Text";
import { numAddCama } from "../../services/numAddCama";

function AppFormField({
  name,
  width,
  priceType = false,
  placeholder,
  ...otherProps
}) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        placeholder={placeholder}
        {...otherProps}
      />
      {priceType === true && (
        <Text>{`${placeholder} ${numAddCama(values[name])} تومان`}</Text>
      )}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
