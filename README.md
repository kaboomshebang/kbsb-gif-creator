# kbsb-gif-creator

Generate an animated GIF from a set of images. Built with React and Yahoo Gifshot. [Figma design](https://www.figma.com/file/ijucLyYpmmcA8liD3j3iY2/kbsb-project-0003-gif_creator?node-id=0%3A1)

## Build

```bash
# install dependencies
npm install
pnpm install
# run dev server
npm run dev
pnpm run dev

# build
pnpm run build
```

## Todo

- [X] change nav sizes
- [X] Fix mobile bug. Solution: .js lib import failed after deploy
- [X] add components
    - [X] Add pop-up to UploadModal displaying the filenames that are uploaded by the user
    - [X] image sequence
        - [X] add image ordering functionality
        - [X] add the imagename
        - [X] add logic to automatically set the resolution based on the input images
        - [X] add remove image button
    - [X] gif properties
        - [X] create slider component
    - [X] export GIF
    - [X] generate GIF
        - [X] add processing icon
    - [X] create modal component to display output
        - [X] Download button
        - [X] Fix download button on mobile
- [X] add state to components
- [X] setup all logic to generate GIF
- [X] connect components to the GIFshot js lib
- [X] Add favicon and homescreen icon
- [ ] Fix: width ratio calculation when re-ordering or re-moving
- [ ] Improve: GIF export-modal on mobile (image ratio)
- [ ] Improve: Add logic to lock the ratio between width and height. So that setting a custom height automatically sets the correct width. (Refactor the component hierarchy?)

## Retrospective

- [X] Refactored into function components. ~~I would have probably changed the component structure in a way that would make state management easier.~~ 
    - [ ] An "ImageSequence" component (step 2) that contains the child-components, so that for example image-size values are easier to manage. I could still use StepSection, StepHeader, etc, but then the 4 steps would have their own state.
- [X] Refactored into function components. ~~Use `.bind(this)` in the constructor to set the correct execution context for methods~~
- References to passed down state don't re-render. `useState` only triggers a re-render with new values. 
- [X] ~~Splitting `useState` in seperate single variables is easier to setup then combining multiple properties in one object/array. (Or maybe I'm unaware of some kind of trick 🤨)~~
- [X] ~~Perhaps only use function-components instead of class-compoents. (So managing state accross components is easier?)~~
- Using more generic Git branchenames ("add-state-to-components" instead of "add-state-to-export-component") would have worked better when the application is still under construction. Specific feature branches perhaps work better when the application is fully working and new features are smaller.
- [ ] Triggering an unmount CSS transition with a `setTimeout` is ~~probably~~ something that can be improved. (But how?)

## Gifshot

Thanks to the creators and the contributors of the [Yahoo Gifshot](https://github.com/yahoo/gifshot) library.
