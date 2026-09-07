import Plot from 'react-plotly.js';
import type * as Plotly from 'plotly.js';
import type { CSSProperties } from 'react';

// component state = a built-in object used to store data that can change over time
  // State is completely private to the component that defines it. A parent component cannot directly look into or change a child component's state
  // if you want to change the state, you need to use React's setter function
  // changing state variable explicitly forces React to refersh the UI with the new data
  // if you create a new instance of a component, its state is independent of states of the other component instances
// props aka properties = inputs to components (like passing arguments to function)
  // determine shape of the input to component
  // interface: define shape/interface of an object

// define props for Chart component
interface ChartProps {
  data: Plotly.Data[];  // the only required prop
  layout?: Partial<Plotly.Layout>;
  type?: 'bar' | 'pie' | 'scatter' | 'map' | 'scattergeo' | 'choropleth' | 'line' | 'histogram';
  onHover?: (point: Plotly.PlotMouseEvent) => void;
  config?: Plotly.Config;

}

const plotStyle: CSSProperties = {
  position: 'relative',
  display: 'block',
  width: '60rem',
  maxWidth: '100%',
  margin: '0 auto 4rem',
};

const defaultLayout: Partial<Plotly.Layout> = {
  autosize: true,  // make plot automatically resize to width of container so it works on phones/tablets w/o fixed pixel sizes
  margin: { t: 80, r: 20, b: 40, l: 40 },  // padding around plot area so axis labels and titles aren't clipped and modebar is on its own line above the plot title
title: { yref: 'container', y: 0.90 },  // move the title lower within the top margin, below the modebar row
  hoverlabel: { namelength: -1 },  // never truncate trace names in the hover tooltip
 
};

const defaultConfig: Partial<Plotly.Config> = {
  modeBarButtonsToRemove: ['lasso2d', 'select2d'],  // remove box/lasso select from the modebar
};

export default function Chart(props: ChartProps) {
  const { data, layout, type, onHover, config } = props;  // destruct props
  const typedData = data.map((trace) => (type ? { ...trace, type } : trace));  // trace = the data + chart properties for a particular chart

  return (
    <Plot
      data={typedData}
      style={plotStyle}
      layout={{
        ...defaultLayout,
        ...layout,
        title: { ...defaultLayout.title, ...layout?.title },
        hoverlabel: { ...defaultLayout.hoverlabel, ...layout?.hoverlabel },
      }}
      useResizeHandler
      onHover={onHover}
      config={{ ...defaultConfig, ...config }}

    />
  );
}