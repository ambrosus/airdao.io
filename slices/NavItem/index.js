/**
 * @typedef {import("@prismicio/client").Content.NavItemSlice} NavItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavItemSlice>} NavItemProps
 * @param {NavItemProps}
 */
const NavItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_item (variation: {slice.variation}) Slices
    </section>
  );
};

export default NavItem;
