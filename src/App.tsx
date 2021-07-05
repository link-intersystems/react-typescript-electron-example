import './App.css';
import { BoundedRangeModel, BoundedRangeControl, useBoundedRange } from './BoundedRange'


import { ProgressBar } from './ProgressBar'
import { ProgressCircle } from './ProgressCircle'
import { BackgroundProgress } from './BackgroundProgress'
import { CounterBadge } from './CounterBadge'
import { BoundedRangeForm } from './BoundedRangeForm'
import { Slider } from './Slider'

const App = () => {
  const { model, modelControl }: { model: BoundedRangeModel, modelControl: BoundedRangeControl } = useBoundedRange(20);

  return (
    <>
      <div className="container-fluid p-4">
        <div className="row mt-4 p-2 text-white-50 bg-dark rounded border">
          <div className="col-12">
            <p>
              This example shows how stable abstractions of UI models can help
              to exchange different views and therefore provide fexibility in
              the UI design.
            </p>
            <p>
              All components are based on a <code>BoundedRangeModel</code>:
            </p>
            <pre className="text-white bg-dark">
              <code>
                {`
{
    min:  ${model.min},
    max: ${model.max},
    value: ${model.value}
}`}
              </code>
            </pre>
            <p>
              They can therefore be exchanged by just replacing the tag name.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <b>Read-Only Views</b>
          </div>
        </div>
        <div className="row rounded-top border-top border-left border-right">
          <div className="col-4 p-1" />
          <div className="col-4 p-1" />
          <div className="col-4 p-1" />
        </div>
        <div className="row border-left border-right">
          <div className="col-4 p-1 text-center">ProgressBar</div>
          <div className="col-4 p-1 text-center">ProgressCircle</div>
          <div className="col-4 p-1 text-center">BackgroundProgress</div>
        </div>
        <div className="row border-left border-right">
          <div className="col-4 p-1">
            <ProgressBar model={model} />
          </div>
          <div className="col-4 p-1" >
            <ProgressCircle model={model} />
          </div>
          <div className="col-4 p-1 ">
            <BackgroundProgress model={model}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png" alt='' />
            </BackgroundProgress>
          </div>
        </div>
        <div className="row rounded-bottom border-bottom border-left border-right">
          <div className="col-12 p-1 " />
        </div>

        <div className="row mt-4">
          <div className="col-4">
            <b>Modifiable Views</b>
          </div>
        </div>
        <div className="row rounded-top border-top border-left border-right">
          <div className="col-4 p-1" />
          <div className="col-4 p-1" />
          <div className="col-4 p-1" />
        </div>
        <div className="row border-left border-right">
          <div className="col-4 p-1 text-center">Slider</div>
          <div className="col-4 p-1 text-center">CounterBadge</div>
          <div className="col-4 p-1 text-center">Form</div>
        </div>

        <div className="row p-4 rounded-bottom border-bottom border-left border-right">
          <div className="col-4">
            <Slider model={model} modelControl={modelControl} />
          </div>
          <div className="col-4">
            <CounterBadge model={model} modelControl={modelControl} />
          </div>
          <div className="col-4">
            <BoundedRangeForm model={model} modelControl={modelControl} />
          </div>
        </div>
      </div>
    </>
  );
};




export default App;
