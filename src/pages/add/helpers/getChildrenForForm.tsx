import React from 'react'
import {
   Control,
   FieldValues,
   FormState,
   UseFormRegister,
} from 'react-hook-form'

export function getChildrenForForm<T extends FieldValues>(
   children: React.ReactElement[] | React.ReactElement,
   register: UseFormRegister<T>,
   formState: FormState<T>,
   control: Control<T>
) {
   return (
      <>
         {React.Children.map(children, (child, i) => (
            <React.Fragment key={i}>
               {child.props.name
                  ? React.createElement(child.type, {
                       ...{
                          ...child.props,
                          register:
                             child.props.loadOptions ||
                             child.props.name === 'avatarUrl' ||
                             child.props.name === 'imageUrl'
                                ? null
                                : register,
                          formState,
                          control:
                             child.props.loadOptions ||
                             child.props.name === 'avatarUrl' ||
                             child.props.name === 'imageUrl'
                                ? control
                                : null,
                       },
                    })
                  : child.props.children
                  ? React.createElement(
                       child.type,
                       {
                          ...{
                             ...child.props,
                          },
                       },
                       getChildrenForForm(
                          child.props.children,
                          register,
                          formState,
                          control
                       )
                    )
                  : child}
            </React.Fragment>
         ))}
      </>
   )
}
