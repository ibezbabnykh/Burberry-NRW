import App from './App';

describe('App component', () => {
  it('should render', () => {
    const component = toJson(shallow(<App />));
    expect(component).toMatchSnapshot();
  });
});