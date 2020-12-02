import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EpisodeList from './EpisodeList';

configure({ adapter: new Adapter() });

const mockProps = {
  data: [
    {
      season: '1',
      values: [
        { id: 1, number: 1, season: 1, name: 'episode 1x1', airdate: '2016-04-11' },
        { id: 2, number: 2, season: 1, name: 'episode 1x2', airdate: '2016-04-15' }
      ]
    },
    {
      season: '2',
      values: [
        { id: 3, number: 1, season: 2, name: 'episode 2x1', airdate: '2017-04-11' },
        { id: 4, number: 2, season: 2, name: 'episode 2x2', airdate: '2017-04-15' }
      ]
    }
  ]
};

describe('EpisodeList component', () => {
  it('should render', () => {
    const component = toJson(shallow(<EpisodeList {...mockProps} />));
    expect(component).toMatchSnapshot();
  });
});