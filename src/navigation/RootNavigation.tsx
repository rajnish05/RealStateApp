/**
 * @format
 */

import * as React from 'react';
import { CommonActions } from "@react-navigation/native";

export const navigationRef = React.createRef<any>();

export function navigate(name:string, params = {}) {
    console.log("🚀 ~ navigate ~ name:", name)
    navigationRef.current?.navigate(name, params);
}

export function replace(name:string, params = {}) {
    navigationRef.current?.replace(name, params);
}

export function goBack() {
    navigationRef.current?.goBack();
}

export function resetRoute(name:string, params = {}) {
    let action = CommonActions.reset({
        index: 0,
        routes: [{ name: name, params: params, }]
    })

    navigationRef.current?.dispatch(action);
}