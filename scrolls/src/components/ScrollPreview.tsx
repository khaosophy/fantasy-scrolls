type PreviewProps = {
  message: string,
}

const ScrollPreview = (props: PreviewProps) => (
  <div style={{ 
    height: '400px',
    aspectRatio: '1 / 1',
    backgroundColor: 'red',
    marginLeft: '3rem',
  }}>
    {props.message}
  </div>
);

export default ScrollPreview;