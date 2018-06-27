import React from "react";
import moxios from "moxios";
import axios from "axios";
import App from "../components/app";
import Root from "../root";

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
        fetchPokemon: jest.fn(),
        reqres: [{avatar: "xx"},{avatar: "ccc"}]
    };
    const wrapper = mount(
        <Root>
            <App {...mock} />
        </Root>
    );

    const xxx = axios.get("https://jsonplaceholder.typicode.com/comments").then(r => r.data);

    beforeEach(() => {
       moxios.install();
       moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
            status: 200,
            data: [{title: "xx"},{title: "ccc"}]
       })
    });

    afterEach(() => {
        moxios.uninstall;
    });

    it("is <App /> exist!", () => {
        expect(wrapper.length).toEqual(1);
    });

    it("is <App /> exist!", () => {
        expect(wrapper.find(".postsList").length).toEqual(1);
    });

    it("USERS DATA ", (done) => {
        moxios.wait(() => {
            wrapper.update();
            expect(wrapper.find(".postsList li").length).toEqual(3);
            done();
            wrapper.unmount();
        })
    })

})