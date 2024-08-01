// TODO DELETE AFTER RELEASE IF NOT USED
// import { motion } from 'framer-motion';
//
// import styles from './steps.module.scss';
//
// const Step = ({ className, label, title, children }) => {
//   return (
//     <div className={`${className}`}>
//       <span className={styles.label}>{label}</span>
//       <div className={styles.content}>
//         <h4>{title}</h4>
//         <p>{children}</p>
//       </div>
//       <div className={styles.overlay} />
//     </div>
//   );
// };
//
// const Steps = () => {
//   const leftStepVariant = {
//     visible: { transform: 'translateX(0)' },
//     hidden: { transform: 'translateX(260px)' },
//   };
//
//   const centerStepVariant = {
//     visible: {
//       boxShadow:
//         '0px 0px 0px 0px rgba(47, 43, 67, 0.10), 0px 0px 0px 0px #C2C5CC',
//     },
//     hidden: {
//       boxShadow:
//         '0px 4px 8px 0px rgba(47, 43, 67, 0.10), 0px 0px 1px 0px #C2C5CC',
//     },
//   };
//
//   const rightStepVariant = {
//     visible: { transform: 'translateX(0)' },
//     hidden: { transform: 'translateX(-260px)' },
//   };
//
//   return (
//     <div className={styles.steps}>
//       <motion.div
//         className={`${styles.step} ${styles.bgSvg} ${styles.bgBook}`}
//         animate={false}
//         variants={leftStepVariant}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ ease: 'easeOut', delay: 0.2, duration: 0.8 }}
//       >
//         <Step
//           className={styles['bg-green']}
//           label="Step 1"
//           title="Create your profile"
//         >
//           Begin your journey by creating a profile that represents your identity
//           within AirDAO.
//         </Step>
//       </motion.div>
//       <motion.div
//         className={`${styles.step} ${styles.bgSvg} ${styles.bgSmile}`}
//         animate={false}
//         variants={centerStepVariant}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ ease: 'easeOut', delay: 0.2, duration: 0.8 }}
//       >
//         <Step
//           className={`${styles['bg-blue']}`}
//           label="Step 2"
//           title="Verify your identity"
//         >
//           Cement your role within our community by verifying your identity
//           securely.
//         </Step>
//       </motion.div>
//       <motion.div
//         className={`${styles.step} ${styles.bgSvg} ${styles.bgStars}`}
//         variants={rightStepVariant}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ ease: 'easeOut', delay: 0.2, duration: 0.8 }}
//       >
//         <Step
//           className={styles['bg-orange']}
//           label="Step 3"
//           title="Mint your governor SBT"
//         >
//           Seize your opportunity to be a driving force by minting your Governor
//           SBT (Soul Bound Token).
//         </Step>
//       </motion.div>
//     </div>
//   );
// };
//
// export default Steps;
