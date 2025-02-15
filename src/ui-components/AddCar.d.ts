/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type AddCarOverridesProps = {
    AddCar?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile38601438"?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile38601440"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField38601446?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38601447?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38601471?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38601445?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddCarProps = React.PropsWithChildren<Partial<FlexProps> & {
    rentalCar?: any;
} & {
    overrides?: AddCarOverridesProps | undefined | null;
}>;
export default function AddCar(props: AddCarProps): React.ReactElement;
