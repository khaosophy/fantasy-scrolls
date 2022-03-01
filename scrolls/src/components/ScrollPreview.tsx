import { forwardRef } from 'react';
import classNames from 'classnames';

type PreviewProps = {
  message: string,
  background: string,
  font: string,
}

const ScrollPreview = forwardRef((props: PreviewProps, ref: any) => (
  <div
    ref={ref}
    className={classNames(
      props.font,
      'ms-md-5',
      'mt-5',
      'mt-md-0'
    )}
    style={{
      backgroundImage: `url('/backgrounds/${props.background}')`,
      padding: '2rem 1.6rem',
      height: '400px',
      maxWidth: '100%',
      aspectRatio: '1 / 1',
    }}
  >
    {props.message}
  </div>
));

export default ScrollPreview;