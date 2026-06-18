/*
// testing with a testing library -> Jest or Vitest (?)
// https://github.com/Skatteetaten/frontend-components/blob/master/src/components/Accordion/Accordion.spec.js

import { shallow } from 'enzyme';

// shallow() is a Enzyme rendering function
// -> isolate the test to Component's own logic/rendering, without coupling the test to ComponentItem's implementation

function opprettShallow(props1, props2) {
    return shallow(
        <Component {...props1}>
            <ComponentItem {...props2} />
        </Component>
    )
}

function oppsettMount(props1, props2) {
    return mount {
        <Accordion {..props1}>
            <AccordionItem {...props}>
                <p>Her vises innhold</p>
            </AccordionItem>
        </Accordion>
    }
}

// render a full DOM-rendered mount of the component
// converts the wrapper into a plain, serizable JSON-like tree representing the rendered output (tags, props, children text)
describe("component", () => {
    it("comment", () => {
        const wrapper = opprettMount();
        expect(toJson(wrapper)).toMatchSnapshot(); // a Jest matcher -> find out more later
    });
})
*/