import React, { Fragment } from 'react';
import ToastContainer, { toast } from '.';
import { render, screen, act } from '@testing-library/react';
import { StyledThemeProvider } from '../../../theme/providers';

describe('UI Component: Toast', () => {
  it('should render toasts added to the toastManager', async () => {
    render(
      <StyledThemeProvider>
        <Fragment>
          <ToastContainer />
        </Fragment>
      </StyledThemeProvider>
    );

    await act(async () => {
      toast.success('Success message');
    });

    const toastElement = screen.getByText('Success message');
    expect(toastElement).toBeInTheDocument();
  });
});
