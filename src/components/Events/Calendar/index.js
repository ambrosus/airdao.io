import AddEventScript from './addEventScript';
import styles from './calendar.module.scss';

const Calendar = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarWrapper}>
        <div
          className="ae-emd-cal"
          data-calendar="tG531829"
          data-calendars="tG531829"
          data-calendars-selected="tG531829"
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
