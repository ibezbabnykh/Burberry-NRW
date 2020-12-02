import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EpisodeDetails from './EpisodeDetails';

configure({ adapter: new Adapter() });

const mockProps = {
  data: {
    id: 1,
    image: {
      medium: 'https://via.placeholder.com/250x140',
      original: 'https://via.placeholder.com/1280x720'
    },
    name: 'episode name',
    summary: 'episode summary'
  }
};

describe('EpisodeDetails component', () => {
  it('should render', () => {
    const component = toJson(shallow(<EpisodeDetails {...mockProps} />));
    expect(component).toMatchSnapshot();
  });
});