import { css } from "styled-components";

export type FlexDirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type JustifyContentType = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

export type AlignContentType = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'auto'

export function DisplayFlex(flexDirection: FlexDirectionType, justifyContent:  JustifyContentType, alignContent: AlignContentType) {
    return css`
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignContent};
    `;
}