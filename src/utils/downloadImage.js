import html2canvas from 'html2canvas';

/* todo: the scroll parameter should be an html entity */
export default function downloadImage(scroll) {
  if(!scroll) return;
  html2canvas(scroll)
    .then(canvas => {        
      const link = document.createElement('a');
      link.download = 'scroll.png';
      link.href = canvas.toDataURL();
      link.click();
      link.remove();
    });
}