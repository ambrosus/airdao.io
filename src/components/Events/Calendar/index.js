import AddEventScript from './addEventScript';
import styles from './calendar.module.scss';

const Calendar = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarWrapper}>
        <div
          className="ae-emd-cal"
          data-calendar="Cc538234"
          data-calendars="Cc538234"
          data-calendars-selected="Cc538234"
          data-configure="true"
          data-title=""
          data-title-show="true"
          data-today="true"
          data-datenav="true"
          data-date="true"
          data-monthweektoggle="true"
          data-subscribebtn="true"
          data-swimonth="true"
          data-swiweek="true"
          data-swischedule="true"
          data-print="true"
          data-timezone="true"
          data-defaultview="month"
          data-firstday="1"
          data-datetimeformat="1"
        />
        <AddEventScript />
      </div>
    </div>
  );
};

export default Calendar;
