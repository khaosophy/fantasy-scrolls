type PreviewProps = {
  message: string,
  background: string,
  font: string,
}

const ScrollPreview = (props: PreviewProps) => (
  <div
  className={props.font}
  style={{
    backgroundImage: `url('/backgrounds/${props.background}')`,
    padding: '2rem 1.6rem',
    height: '400px',
    aspectRatio: '1 / 1',
    marginLeft: '3rem',
  }}>
    {props.message}
  </div>
);

export default ScrollPreview;