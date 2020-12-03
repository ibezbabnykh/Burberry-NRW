import EpisodePage from './EpisodePage';

const mockStore = configureStore();

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

describe('EpisodePage component', () => {
  const initialState = {
    episode: {
      data: mockProps,
      error: null,
      loading: false
    }
  };
  const store = mockStore(initialState);
  
  it('should render', () => {
    const wrapper = toJson(shallow(<EpisodePage store={store} />));
    expect(wrapper).toMatchSnapshot();
  });
});