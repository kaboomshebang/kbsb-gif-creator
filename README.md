# kbsb-gif-creator

Generate an animated GIF from a set of images. Built with React and Yahoo Gifshot. [Figma design](https://www.figma.com/file/ijucLyYpmmcA8liD3j3iY2/kbsb-project-0003-gif_creator?node-id=0%3A1)

## Todo

- [X] change nav sizes
- [X] Fix mobile bug. Solution: .js lib import failed after deploy
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
        - [ ] add processing icon
    - [X] create modal component to display output
        + [X] Download button
        + [ ] Fix download button on mobile
- [X] add state to components
- [X] setup all logic to generate GIF
- [X] connect components to the GIFshot js lib
- [ ] Add favicon and homescreen icon

## Retrospective

- Use `.bind(this)` in the constructor to set the correct execution context for methods
- References to passed down state don't re-render. `useState` only triggers a re-render with new values. 
- Splitting `useState` in seperate variables is easier to setup then combining multiple properties in one object/array.
- Perhaps only use function components instead of class-compoents. (So managing state accross components is easier?)
- Using more generic Git branchenames ("add-state-to-components" instead of "add-state-to-export-component") would have worked better when the application is still under construction. Specific feature branches perhaps are better when the application is actually working and new features are smaller.
- Triggering a CSS transition with a `setTimeout` is probably something that can be improved.

## Gifshot

Thanks to the creators and the contributors of the [Yahoo Gifshot](https://github.com/yahoo/gifshot) library.
