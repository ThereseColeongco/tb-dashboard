import { Link } from 'react-router-dom';
import Chart from '../components/Chart';
import type * as Plotly from 'plotly.js';

const data: Plotly.Data[] = [
  {
    x: ['Kenya', 'Nigeria', 'India', 'Bangladesh', 'Ethiopia'],
    y: [45, 30, 28, 42, 35],
    type: 'bar',
    name: 'Treatments Started',
  },
  {
    x: ['Kenya', 'Nigeria', 'India', 'Bangladesh', 'Ethiopia'],
    y: [38, 22, 24, 36, 30],
    type: 'bar',
    name: 'Cured / Completed',
  },
];

const layout: Partial<Plotly.Layout> = {
  title: { text: 'TB Treatment Success (dummy data)' },
};

export default function Story() {
  return (
    <div>
      <blockquote>
        “Where are the drugs? The drugs are where the disease is not. And where
        is the disease? The disease is where the drugs are not.”
        <cite> —Dr. Peter Mugyenyi</cite>
      </blockquote>
      <Chart data={data} layout={layout} />
      <div className="about-button-wrapper">
        <Link to="/" className="about-button">
          Back Home
        </Link>
      </div>
    </div>
  );
}