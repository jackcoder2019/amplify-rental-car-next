/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createRentalCar } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
const client = generateClient();
export default function AddCar(props) {
  const { rentalCar, overrides, ...rest } = props;
  const [
    textFieldThreeEightSixZeroOneFourFourSixValue,
    setTextFieldThreeEightSixZeroOneFourFourSixValue,
  ] = useState("");
  const [
    textFieldThreeEightSixZeroOneFourFourSevenValue,
    setTextFieldThreeEightSixZeroOneFourFourSevenValue,
  ] = useState("");
  const [
    textFieldThreeEightSixZeroOneFourSevenOneValue,
    setTextFieldThreeEightSixZeroOneFourSevenOneValue,
  ] = useState("");
  const [
    textFieldThreeEightSixZeroOneFourFourFiveValue,
    setTextFieldThreeEightSixZeroOneFourFourFiveValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createRentalCar.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeEightSixZeroOneFourFourSixValue,
          price: textFieldThreeEightSixZeroOneFourFourSevenValue,
          description: textFieldThreeEightSixZeroOneFourSevenOneValue,
          imageUrl: textFieldThreeEightSixZeroOneFourFourFiveValue,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="618px"
      height="531px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddCar")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="608px"
        height="488px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile38601438")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Car "
            {...getOverrideProps(overrides, "Edit Profile38601440")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="Toyota Camry"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixZeroOneFourFourSixValue}
            onChange={(event) => {
              setTextFieldThreeEightSixZeroOneFourFourSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38601446")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Price per day"
            placeholder="6000"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixZeroOneFourFourSevenValue}
            onChange={(event) => {
              setTextFieldThreeEightSixZeroOneFourFourSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38601447")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Description"
            placeholder="4 seats"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixZeroOneFourSevenOneValue}
            onChange={(event) => {
              setTextFieldThreeEightSixZeroOneFourSevenOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38601471")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image link"
            placeholder="image url"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixZeroOneFourFourFiveValue}
            onChange={(event) => {
              setTextFieldThreeEightSixZeroOneFourFourFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38601445")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
