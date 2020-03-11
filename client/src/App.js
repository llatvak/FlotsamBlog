import React from 'react';
import NavBar from './components/NavBar'
import './App.css';

const categories = [
  { title: 'Category 1', url: '#' },
  { title: 'Category 2', url: '#' },
  { title: 'Category 3', url: '#' },
];

export default function App() {
  return (

    <div>
      <NavBar title="FlotsamBlog" categories={categories}/>
    </div>
  );
}