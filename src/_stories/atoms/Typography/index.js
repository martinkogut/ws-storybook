import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';

const component = () => (
  <div className="container">
    <div className="row headings-example">
      <div className="col-lg-offset-3 col-lg-3 col-md-6 mb-sm-50">
        <ul>
          <li><h1>Heading 1</h1></li>
          <li><h2>Heading 2</h2></li>
          <li><h3>Heading 3</h3></li>
          <li><h4>Heading 4</h4></li>
          <li><h5>Heading 5</h5></li>
          <li><h6>Heading 6</h6></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6">
        <ul>
          <li><h1 className="h-alt">Heading 1</h1></li>
          <li><h2 className="h-alt">Heading 2</h2></li>
          <li><h3 className="h-alt">Heading 3</h3></li>
          <li><h4 className="h-alt">Heading 4</h4></li>
          <li><h5 className="h-alt">Heading 5</h5></li>
          <li><h6 className="h-alt">Heading 6</h6></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row section">
      <div className="col-md-4">
        <p className="dropcaps">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      </div>
      <div className="col-md-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      </div>
      <div className="col-md-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      </div>
    </div>
    <hr />
    <div className="row section">
      <div className="col-md-offset-1 col-md-4 mb-sm-50">
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          <footer>
            <cite>by Henry Hill</cite>
          </footer>
        </blockquote>
      </div>
      <div className="col-md-offset-1 col-md-5">
        <blockquote className="alt-blockquote">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          <footer>
            <cite>by Henry Hill</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    <hr/>
    <div className="row section">
      <div className="col-md-offset-3 col-md-6">
        <p>
          <b>Lorem ipsum dolor sit amet</b>, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <i>Ut enim ad minim veniam</i>, quis nostrud exercitation <u>ullamco laboris nisi ut aliquip ex</u> ea commodo consequat. Duis aute irure dolor in reprehenderit in <s>voluptate velit esse cillum dolore</s> eu fugiat nulla pariatur. <mark>Excepteur sint</mark> occaecat cupidatat non proident, <q>sunt in culpa</q> qui officia deserunt mollit anim id est <a href="#">text link</a>.
        </p>
      </div>
    </div>
    <hr />
    <div className="row section">
      <div className="col-md-offset-2 col-md-3 mb-sm-50">
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <ul>
            <li>Nested List Item</li>
            <li>Nested List Item</li>
            <li>Nested List Item</li>
          </ul>
          <li>List Item</li>
          <li>List item</li>
        </ul>
      </div>

      <div className="col-md-3 mb-sm-50">
        <ol>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <ol>
            <li>Nested List Item</li>
            <li>Nested List Item</li>
            <li>Nested List Item</li>
          </ol>
          <li>List Item</li>
          <li>List item</li>
        </ol>
      </div>

      <div className="col-md-3">
        <ul className="flat-list">
          <li><i className="fa fa-check">List Item</i></li>
          <li><i className="fa fa-check">List Item</i></li>
          <li><i className="fa fa-check">List Item</i></li>
          <li><i className="fa fa-check">List Item</i></li>
          <li><i className="fa fa-check">List Item</i></li>
          <li><i className="fa fa-check">List Item</i></li>
        </ul>
      </div>

    </div>
  </div>
);

export default [readme, component];
