import React from "react";
import { render,screen, fireEvent } from '@testing-library/react';
import Home from "../components/Home";
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import '@testing-library/jest-dom'

test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
