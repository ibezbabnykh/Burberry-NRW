import Header from './Header';

describe('Header component', () => {
  it('should render', () => {
    const result = toJson(shallow(<Header />));
    expect(result).toMatchSnapshot();
  });
});