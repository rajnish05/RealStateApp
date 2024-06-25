/**
 * @format
 */

import * as React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(name:string, params = {}) {
    navigationRef.current?.navigate(name, params);
}

export function replace(name:string, params = {}) {
    navigationRef.current?.replace(name, params);
}

export function goBack() {
    navigationRef.current?.goBack();
}
