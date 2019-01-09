import React from 'react';

interface IState {
    readonly error: any,
    readonly errorInfo: any
}

interface IProps {
    readonly children: JSX.Element | JSX.Element[];
}

export default class ErrorBoundary extends React.Component < IProps, IState > {
    readonly state: IState  = { error: undefined, errorInfo: undefined };
  
    componentDidCatch(error: any, errorInfo: any) {
      // You can also log the error to an error reporting service
      this.setState({
        error,
        errorInfo
      })
    }
  
    render() {
        const { error, errorInfo } = this.state;
        if (errorInfo) {
          const errorDetails =(
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
              </details>
            );
          return (
            <div>
              <h2>An unexpected error has occurred.</h2>
              {errorDetails}
            </div>
          );
        }
  
      return this.props.children; 
    }
  }