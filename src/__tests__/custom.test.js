import React from "react";
import App from "../components/app"
import Root from "../root"


// ------------------------------------------------------
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
// ------------------------------------------------------

describe("<App />", () => {
    const mock = {
        fetchUsers: jest.fn(),
        fetchPosts: jest.fn(),
        fetchComments: jest.fn(),
        fetchPhotos: jest.fn(),
        fetchPersons: jest.fn(),
        fetchReqres: jest.fn(),
        fetchPokemon: jest.fn()
    }
    const wrapper = mount(
        <Root>
            <App {...mock} />
        </Root>
    );

    it("is <App /> exist!", () => {
        expect(wrapper.length).toEqual(1);
    })

})