/**
 * @typedef {import("@prismicio/client").Content.SubtitleSlice} SubtitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SubtitleSlice>} SubtitleProps
 * @param {SubtitleProps}
 */
const Subtitle = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for subtitle (variation: {slice.variation}) Slices
    </section>
  );
};

export default Subtitle;
