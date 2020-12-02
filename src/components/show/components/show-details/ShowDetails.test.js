import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ShowDetails from './ShowDetails';

configure({ adapter: new Adapter() });

const mockProps = {
  data: {
    image: {
      medium: 'https://via.placeholder.com/250x140',
      original: 'https://via.placeholder.com/1280x720'
    },
    name: 'show name',
    summary: 'show summary'
  }
};

describe('ShowDetails component', () => {
  it('should render', () => {
    const component = toJson(shallow(<ShowDetails {...mockProps} />));
    expect(component).toMatchSnapshot();
  });
});