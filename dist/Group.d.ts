/// <reference types="react" />
import { OrientationRuleOptions } from '@nodestrap/basic';
import { defaultOrientationRuleOptions, OrientationName, OrientationVariant, ListStyle, ListVariant, ListProps } from '@nodestrap/list';
export { defaultOrientationRuleOptions };
export declare const usesGroupItemLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").StyleCollection;
export declare const usesGroupItemVariants: () => import("@cssfn/cssfn").StyleCollection;
export declare const useGroupItemSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{}>, cssDecls: import("@cssfn/css-config").Decls<{}>, cssVals: import("@cssfn/css-config").Vals<{}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface GroupProps<TElement extends HTMLElement = HTMLElement> extends ListProps<TElement> {
    label?: string;
}
export declare function Group<TElement extends HTMLElement = HTMLElement>(props: GroupProps<TElement>): JSX.Element;
export declare namespace Group {
    var prototype: any;
}
export { Group as default };
export type { OrientationName, OrientationVariant };
export type { ListStyle, ListVariant };
