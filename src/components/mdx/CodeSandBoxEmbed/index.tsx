interface CodeSandBoxEmbedProps {
  sandboxEmbedUrl: string;
  height?: number;
}
export default function CodeSandBoxEmbed({
  sandboxEmbedUrl,
  height,
  ...rest
}: CodeSandBoxEmbedProps) {
  return (
    <iframe
      src={sandboxEmbedUrl}
      style={{
        width: '100%',
        height: height ? `${height}px` : '500px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      {...rest}
      title="awesome-pond-x78zml"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
