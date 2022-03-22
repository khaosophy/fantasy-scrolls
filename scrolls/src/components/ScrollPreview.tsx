import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import './scroll-preview.css';

type PreviewProps = {
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
    <div className="d-flex mt-4 mb-3">
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        className={classNames(
          props.font,
          'scroll-preview'
        )}
        style={{
          backgroundImage: `url('/backgrounds/${props.background}')`,
          fontSize: `${props.fontSize}px`,
        }}
      >
        Write your message here...
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