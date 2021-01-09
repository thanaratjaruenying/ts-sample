import React from 'react';

export function ComposeContext({ children, components }: any) {
    return components.reduceRight((prev: any, Component: any) => (<Component>{prev}</Component>), children)
}
