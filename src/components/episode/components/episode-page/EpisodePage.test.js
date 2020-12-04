import { Provider } from 'react-redux';
import EpisodePage from './EpisodePage';

const mockStore = configureStore();

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 2 }),
}));

const mockEpisode = {
    id: 1,
    image: {
      medium: 'https://via.placeholder.com/250x140',
      original: 'https://via.placeholder.com/1280x720'
    },
    name: 'episode name',
    summary: 'episode summary'
};

describe('EpisodePage component', () => {
  let store;
  let component;

  const initialState = {
    episode: {
      data: mockEpisode,
      error: null,
      loading: false
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();
 
    component = renderer.create(
      <Provider store={store}>
        <EpisodePage />
      </Provider>
    );
  });

  it('should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});