import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h1 className="text-red-500">Something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
