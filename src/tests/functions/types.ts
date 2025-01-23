export interface IRenderingTest<T> {
  testId: string;
  component: React.FC<T>;
  componentProperties: T;
}

export interface IPartialRenderingTest<T> {
  component: React.FC<T>;
  componentProperties: T;
}

export interface ITextContentTest<T> extends IRenderingTest<T> {
  expectedText: string;
}

export interface IAttributesTest<T> extends IRenderingTest<T> {
  expectedAttributes: Record<string, string | number>;
}

export interface IInteractionTest<T> extends IRenderingTest<T> {
  handler: () => void;
}

export interface IStylePropsTest<T> {
  testId: string;
  component: React.FC<T>;
  propertiesToTest: T;
  expectedResultingStyles: { [key: string]: string | number };
}

export interface IVariantTest<T> {
  testId: string;
  component: React.FC<T>;
  variant?: string;
  expectedResultingStyles: { [key: string]: string | number };
}
