/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRentalCar = /* GraphQL */ `
  query GetRentalCar($id: ID!) {
    getRentalCar(id: $id) {
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
export const listRentalCars = /* GraphQL */ `
  query ListRentalCars(
    $filter: ModelRentalCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRentalCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
