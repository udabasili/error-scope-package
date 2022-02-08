import React from "react";
import { sendError } from "../api";

interface IProps {

}

interface IState {
    hasError: boolean
}

class ErrorScope extends React.Component<IProps, IState> {
    constructor(props:IProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error:Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: any) {
      // You can also log the error to an error reporting service
      sendError(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorScope