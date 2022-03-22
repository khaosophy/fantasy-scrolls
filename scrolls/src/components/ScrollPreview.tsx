import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import './scroll-preview.css';

type PreviewProps = {
  message: string,
  background: string,
  font: string,
  fontSize: string,
}

const ScrollPreview = forwardRef((props: PreviewProps, ref: any) => {
  const [initialPos, setInitialPos] = useState(0);
  const [initialSize, setInitialSize] = useState(0);

  const initial = (event: any) => {
    setInitialPos(event.clientX);
    setInitialSize(ref.current.offsetWidth);
  }

  const resize = (event: any) => {
    ref.current.style.width = `${initialSize + (event.clientX - initialPos)}px`;
  }

  return (
    <div className="d-flex mt-4">
      <div
        ref={ref}
        className={classNames(
          props.font,
          'scroll-preview'
        )}
        style={{
          backgroundImage: `url('/backgrounds/${props.background}')`,
          fontSize: `${props.fontSize}px`,
        }}
      >
        {props.message}
      </div>
      <div 
        className="resizer"
        draggable="true"
        onDragStart={initial}
        onDrag={resize}
      />
    </div>
  );
});

export default ScrollPreview;