import { Provider } from 'react-redux';
import ShowPage from './ShowPage';

const mockStore = configureStore();

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 2 }),
}));

const mockShowDetails = {
    image: {
      medium: 'https://via.placeholder.com/250x140',
      original: 'https://via.placeholder.com/1280x720'
    },
    name: 'show name',
    summary: 'show summary'
};

const mockEpisodeLists = [
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
];

describe('ShowPage component', () => {
  let store;
  let component;

  const initialState = {
    show: {
      details: mockShowDetails,
      episodeList: mockEpisodeLists
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();
 
    component = renderer.create(
      <Provider store={store}>
        <ShowPage />
      </Provider>
    );
  });

  it('should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});