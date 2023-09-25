/**
 * @typedef {import("@prismicio/client").Content.FooterItemSlice} FooterItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterItemSlice>} FooterItemProps
 * @param {FooterItemProps}
 */
const FooterItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_item (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FooterItem;
