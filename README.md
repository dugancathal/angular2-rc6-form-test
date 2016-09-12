# Angular2 Forms Bug Reproduction

Angular2 RC4 w/ Forms 0.2.0 and 0.3.0 both exhibit bad behavior with forms
when the model switches underneath them and the `formGroup` is re-assigned.
The area that reproduces the behavior is in the interaction between the
`ContainerComponent` and the `ChildComponent`.
