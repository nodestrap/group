// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, 
// rules:
variants, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { 
// utilities:
isTypeOf, } from '@nodestrap/utilities';
import { 
// hooks:
usesSizeVariant, normalizeOrientationRule, } from '@nodestrap/basic';
import { 
// react components:
VisuallyHidden, } from '@nodestrap/visually-hidden';
import { 
// hooks:
defaultOrientationRuleOptions, 
// styles:
usesListItemBaseLayout, 
// react components:
ListItem, List, } from '@nodestrap/list';
import { 
// react components:
Popup, } from '@nodestrap/popup';
import { 
// react components:
Collapse, } from '@nodestrap/collapse';
import { 
// react components:
Dropdown, } from '@nodestrap/dropdown';
// hooks:
// layouts:
export { defaultOrientationRuleOptions };
// styles:
export const usesGroupItemLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    return composition([
        imports([
            usesListItemBaseLayout(options),
        ]),
        layout({
            // no layout modification needed.
            // the layout is belong to the Button/Radio/Check itself.
            // sizes:
            // just a few tweak:
            flex: [[1, 1, 'auto']],
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    ]);
};
export const usesGroupItemVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // layouts:
            sizes(),
        ]),
    ]);
};
export const useGroupItemSheet = createUseSheet(() => [
    mainComposition([
        variants([
            rule('&&', [
                imports([
                    // layouts:
                    usesGroupItemLayout(),
                    // variants:
                    usesGroupItemVariants(),
                ]),
            ]),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
    /* no config props yet */
    };
}, { prefix: 'grp' });
function GroupItem(props) {
    // styles:
    const sheet = useGroupItemSheet();
    // jsx:
    return (<>
            {((child) => {
            // excludes hidden element:
            if (isTypeOf(child, VisuallyHidden))
                return child;
            // overlayed element:
            if (isTypeOf(child, Popup))
                return child;
            if (isTypeOf(child, Collapse))
                return child;
            if (isTypeOf(child, Dropdown))
                return child;
            // React element:
            if (React.isValidElement(child)) {
                return (<child.type 
                // other props:
                {...child.props} 
                // classes:
                classes={[...(child.props.classes ?? []),
                        sheet.main, // inject GroupItem class
                    ]}/>);
            } // if
            // unknown element or text or null:
            return child;
        })(props.children)}
        </>);
}
GroupItem.prototype = ListItem.prototype; // mark as ListItem compatible
export function Group(props) {
    // rest props:
    const { 
    // children:
    children, ...restProps } = props;
    // jsx:
    return (<List 
    // other props:
    {...restProps} 
    // semantics:
    semanticTag={props.semanticTag ?? [null]} semanticRole={props.semanticRole ?? 'group'} 
    // layouts:
    orientation={props.orientation ?? 'inline'} 
    // variants:
    mild={props.mild ?? false}>
            {React.Children.map(children, (child, index) => (<GroupItem 
        // essentials:
        key={index}>
                    {child}
                </GroupItem>))}
        </List>);
}
Group.prototype = List.prototype; // mark as List compatible
export { Group as default };
