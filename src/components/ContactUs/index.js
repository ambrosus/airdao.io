import styles from './contact-us.module.scss';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import { useState } from 'react';
import Input from '@/components/Input';

export default function ContactUs() {
  const [topic, setTopic] = useState('');

  return (
    <section className={styles.contact_us}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.lead_text}>
        The future is ours to build together. If you have ideas or opportunities
        that <br />
        you’d like to share with us, don’t hesitate to reach out today.
      </p>
      <form onSubmit={() => {}} className={styles.form_container}>
        <Input placeholder={'Name'} />
        <Input placeholder={'Email'} />
        <Select
          placeholder="Select option"
          options={[
            'Tech support',
            'Business development',
            'Marketing and Press',
            'Other',
          ]}
          onChange={setTopic}
          value={topic}
        />
        <Textarea placeholder={'Your text'} />
        <Button type="primary" size="large">
          Confirm
        </Button>
      </form>
    </section>
  );
}
