import Spinner from './Spinner';

describe('Spinner component', () => {
  it('should render', () => {
    const component = toJson(shallow(<Spinner />));
    expect(component).toMatchSnapshot();
  });
});