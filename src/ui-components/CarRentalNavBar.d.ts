/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarRentalNavBarOverridesProps = {
    CarRentalNavBar?: PrimitiveOverrideProps<FlexProps>;
    image38601372?: PrimitiveOverrideProps<ImageProps>;
    "Car Rental"?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    image3860799?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CarRentalNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CarRentalNavBarOverridesProps | undefined | null;
}>;
export default function CarRentalNavBar(props: CarRentalNavBarProps): React.ReactElement;
