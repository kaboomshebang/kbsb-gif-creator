# kbsb-gif-creator

Generate an animated GIF from a set of images. Built with React.

## Todo

- [X] change nav sizes
- [ ] Fix mobile bug. Export does not work. Solution ?> Add an extra test tot verifies all the GIFShotFeatureRequirements
- [ ] add components
    + [ ] Add pop-up to UploadModal displaying the filenames that are uploaded by the user
    - [ ] image sequence
        + [ ] convert image state to object: name, order, size, filetype, etc
            * [ ] add image ordering functionality
            * [ ] add the imagename
        + [ ] add logic to automatically set the resolution based on the input images
        + [ ] add remove image button
    - [X] gif properties
        + [X] create slider component
    - [X] export GIF
    - [X] generate GIF
    - [X] create modal component to display output
        + [X] Download button
- [X] add state to components
- [X] setup all logic to generate GIF
- [X] connect components to the GIFshot js lib

## Retrospective

- Use `.bind(this)` in the constructor to set the correct execution context for methods
- References to passed down state don't re-render. `useState` only triggers a re-render with new values. 
- Splitting `useState` in seperate variables is easier to setup then combining multiple properties in one object/array.
- Perhaps only use function components instead of class-compoents. (So managing state accross components is easier?)
- Using more generic Git branchenames ("add-state-to-components" instead of "add-state-to-export-component") would have worked better when the application is still under construction. Specific feature branches perhaps are better when the application is actually working and new features are smaller.
- Triggering a CSS transition with a `setTimeout` is probably something that can be improved.
