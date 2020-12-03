import ShowDetails from './ShowDetails';

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