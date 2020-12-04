import ErrorMessage from './ErrorMessage';

const mockProps = {
  text: 'Some error',
  className: 'warning'
};

describe('ErrorMessage component', () => {
  it('should render', () => {
    const component = toJson(shallow(<ErrorMessage {...mockProps} />));
    expect(component).toMatchSnapshot();
  });
});