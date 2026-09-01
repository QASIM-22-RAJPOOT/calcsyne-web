import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CalculatorsPage from './pages/CalculatorsPage';
import CalculatorPage from './pages/CalculatorPage';
import StaticPage from './pages/StaticPage';
import NotFoundPage from './pages/NotFoundPage';
import { calculatorMap } from './data/calculators';
import './styles.css';

function resolvePage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return <HomePage/>;
  if (path === '/calculators') return <CalculatorsPage/>;
  const match = path.match(/^\/calculators\/([^/]+)$/);
  if (match && calculatorMap[match[1]]) return <CalculatorPage calculator={calculatorMap[match[1]]}/>;
  if (path === '/about') return <StaticPage type="about"/>;
  if (path === '/contact') return <StaticPage type="contact"/>;
  if (path === '/privacy') return <StaticPage type="privacy"/>;
  if (path === '/terms') return <StaticPage type="terms"/>;
  if (path === '/disclaimer') return <StaticPage type="disclaimer"/>;
  return <NotFoundPage/>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><Layout>{resolvePage()}</Layout></React.StrictMode>);
