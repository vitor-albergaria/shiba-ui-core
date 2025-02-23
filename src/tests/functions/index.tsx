import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { StyledThemeProvider } from '../../theme/providers';
import {
  IAttributesTest,
  IInteractionTest,
  IPartialRenderingTest,
  IRenderingTest,
  IStylePropsTest,
  ITextContentTest,
  IVariantTest,
} from './types';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<StyledThemeProvider>{component}</StyledThemeProvider>);
};

export const testRenderingOfComponent = <T,>({
  testId,
  component: Component,
  componentProperties,
}: IRenderingTest<T>) => {
  it(`should render the component ${testId}`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
};

export const testComponentStyleByProperties = <T,>({
  testId,
  component: Component,
  propertiesToTest,
  expectedResultingStyles,
}: IStylePropsTest<T>) => {
  it(`should render the component ${testId} with correct styles`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...propertiesToTest} />
    );

    const element = getByTestId(testId);

    for (const [cssProperty, expectedCssValue] of Object.entries(
      expectedResultingStyles
    )) {
      expect(element).toHaveStyle(`${cssProperty}: ${expectedCssValue}`);
    }
  });
};

export const testComponentAttributes = <T,>({
  testId,
  component: Component,
  componentProperties,
  expectedAttributes,
}: IAttributesTest<T>) => {
  it(`should render the component ${testId} with correct attributes`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);

    for (const [attr, expectedValue] of Object.entries(expectedAttributes)) {
      expect(element).toHaveAttribute(attr, expectedValue.toString());
    }
  });
};

export const testComponentVariant = <T,>({
  testId,
  component: Component,
  variant,
  expectedResultingStyles,
}: IVariantTest<T>) => {
  it(`should render the component ${testId} with correct ${variant} variant styles`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...({ variant: variant } as T)} />
    );

    const element = getByTestId(testId);

    for (const [cssProperty, expectedCssValue] of Object.entries(
      expectedResultingStyles
    )) {
      expect(element).toHaveStyle(`${cssProperty}: ${expectedCssValue}`);
    }
  });
};

export const testComponentText = <T,>({
  testId,
  component: Component,
  componentProperties,
  expectedText,
}: ITextContentTest<T>) => {
  it(`should render the component ${testId} with text "${expectedText}"`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);
    expect(element).toHaveTextContent(expectedText);
  });
};

export const testComponentVisibility = <T,>({
  testId,
  component: Component,
  componentProperties,
}: IRenderingTest<T>) => {
  it(`should not render the component when isHidden is true`, () => {
    const { queryByTestId } = renderWithTheme(
      <Component {...componentProperties} isHidden={true} />
    );

    const element = queryByTestId(testId);
    expect(element).not.toBeInTheDocument();
  });
};

export const testComponentClick = <T,>({
  testId,
  component: Component,
  componentProperties,
  handler,
}: IInteractionTest<T>) => {
  it(`should call onClick handler when ${testId} is clicked`, () => {
    const mockHandler = jest.fn(handler);

    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} onClick={mockHandler} />
    );

    const element = getByTestId(testId);
    fireEvent.click(element);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
};

export const testComponentLoadingBehavior = <T,>({
  component: Component,
  componentProperties,
}: IPartialRenderingTest<T>) => {
  it('should render Spinner when isLoading is true', () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} isLoading={true} />
    );

    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('should not render Spinner when isLoading is false', () => {
    const { queryByTestId } = renderWithTheme(
      <Component {...componentProperties} isLoading={false} />
    );

    const spinner = queryByTestId('spinner');
    expect(spinner).not.toBeInTheDocument();
  });
};

export const testComponentIconRendering = <T,>({
  component: Component,
  componentProperties,
}: IPartialRenderingTest<T>) => {
  it('should render icon when icon prop is provided', () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const icon = getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('should not render icon when no icon prop is provided', () => {
    const propsWithoutIcon = { ...componentProperties };
    Object.keys(propsWithoutIcon).forEach((key) => {
      if (key.toLowerCase().includes('icon')) {
        delete propsWithoutIcon[key];
      }
    });

    const { queryByTestId } = renderWithTheme(
      <Component {...propsWithoutIcon} />
    );

    const icon = queryByTestId('icon');
    expect(icon).not.toBeInTheDocument();
  });
};

export const testComponentDisabledBehavior = <T,>({
  testId,
  component: Component,
  expectedResultingStyles,
}: IVariantTest<T>) => {
  it(`should render the component ${testId} as disabled`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...({ isDisabled: true } as T)} />
    );

    const element = getByTestId(testId);

    for (const [cssProperty, expectedCssValue] of Object.entries(
      expectedResultingStyles
    )) {
      expect(element).toHaveStyle(`${cssProperty}: ${expectedCssValue}`);
    }
  });
};

export const testComponentAccessibility = <T,>({
  testId,
  component: Component,
  componentProperties,
  expectedAttributes,
}: IAttributesTest<T>) => {
  it(`should render the component ${testId} with correct accessibility attributes`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);

    for (const [attr, expectedValue] of Object.entries(expectedAttributes)) {
      expect(element).toHaveAttribute(attr, expectedValue.toString());
    }
  });
};
