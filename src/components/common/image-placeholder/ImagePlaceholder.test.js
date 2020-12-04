import ImagePlaceholder from './ImagePlaceholder';

describe('ImagePlaceholder component', () => {
  it('should render', () => {
    const component = toJson(shallow(<ImagePlaceholder />));
    expect(component).toMatchSnapshot();
  });
});