/**
 * @typedef {import("@prismicio/client").Content.CexCardSlice} CexCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CexCardSlice>} CexCardProps
 * @param {CexCardProps}
 */
const CexCard = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cex_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default CexCard;
