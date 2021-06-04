// TODO: make our test wait for get request (async code) to finish
// TODO: fake (mock) axios.get to not actually make a real request
import React from 'react';
import { render, act } from '@testing-library/react';
import axios from 'axios';
import Todos from '../components/Todos';

it('Should get TODO items from server and render on screen', async () => {
  const fakeResponse = {
    data: [{}, {}, {}]
  }

  jest
    .spyOn(axios, 'get')
    .mockImplementationOnce(() => Promise.resolve( fakeResponse ) )

  let rendered;

  await act(async () => {
    rendered = render(<Todos />);
  });

  // expect(rendered.queryByTestId('todo-item')).not.toBe(null);
  expect(
    rendered
      .container
      .querySelectorAll('h2')
  ).toHaveLength(3);
});