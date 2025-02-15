/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRentalCar = /* GraphQL */ `
  mutation CreateRentalCar(
    $input: CreateRentalCarInput!
    $condition: ModelRentalCarConditionInput
  ) {
    createRentalCar(input: $input, condition: $condition) {
      id
      name
      price
      description
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRentalCar = /* GraphQL */ `
  mutation UpdateRentalCar(
    $input: UpdateRentalCarInput!
    $condition: ModelRentalCarConditionInput
  ) {
    updateRentalCar(input: $input, condition: $condition) {
      id
      name
      price
      description
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRentalCar = /* GraphQL */ `
  mutation DeleteRentalCar(
    $input: DeleteRentalCarInput!
    $condition: ModelRentalCarConditionInput
  ) {
    deleteRentalCar(input: $input, condition: $condition) {
      id
      name
      price
      description
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
