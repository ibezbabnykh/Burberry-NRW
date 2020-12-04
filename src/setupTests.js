import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.renderer = renderer;
global.configureStore = configureStore;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};