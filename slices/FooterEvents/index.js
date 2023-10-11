/**
 * @typedef {import("@prismicio/client").Content.FooterEventsSlice} FooterEventsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterEventsSlice>} FooterEventsProps
 * @param {FooterEventsProps}
 */
const FooterEvents = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_events (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FooterEvents;
