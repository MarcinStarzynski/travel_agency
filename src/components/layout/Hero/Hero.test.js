import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='dowolna wartość tekstowa' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });

  it('should render correct title and imageconst', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'ladny_obrazek.png';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage}/>);

    const renderedTitle = component.find('.title').text();
    const renderedImage = component.find('.image').prop('src');

    expect(renderedTitle).toEqual(expectedTitle);
    expect(renderedImage).toEqual(expectedImage);
  });

  it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='Obrazek.png' variant={mockVariants} />);

    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });

  it('should render HappyHourAd', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

    expect(component.find('HappyHourAd').length).toEqual(1);
  });
});
