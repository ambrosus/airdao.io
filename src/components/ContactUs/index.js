import styles from './contact-us.module.scss';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import React, { useState } from 'react';
import Input from '@/components/Input';
import { Notify } from '@airdao/ui-library';
import Head from 'next/head';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: null,
    message: '',
  });

  const setField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      'https://hooks.zapier.com/hooks/catch/11186117/bdbj4w9',
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    ).then((res) => res.status);

    if (res < 400) {
      setFormData({
        name: '',
        email: '',
        message: '',
        category: 'null',
      });
      Notify.success('Your message was sent!', null, { autoClose: 5000 });
    }
  };

  return (
    <section className={styles.contact_us}>
      <Head>
        <meta property="og:image" content="https://airdao.io/og-contact.png" />
        <meta name="twitter:image" content="https://airdao.io/og-contact.png" />
      </Head>
      <h1>
        Share ideas, join the conversation, and learn about our ecosystem
      </h1>
      <div>
        <div>Ideas</div>
      </div>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.lead_text}>
        The future is ours to build together. If you have ideas or opportunities
        that <br />
        you’d like to share with us, don’t hesitate to reach out today.
      </p>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <Input
          placeholder={'Name'}
          required
          value={formData.name}
          onChange={(e) => setField('name', e.target.value)}
        />
        <Input
          placeholder={'Email'}
          required
          type="email"
          value={formData.email}
          onChange={(e) => setField('email', e.target.value)}
        />
        <Select
          placeholder="Select option"
          options={[
            'Tech support',
            'Business development',
            'Marketing and Press',
            'Other',
          ]}
          onChange={(value) => setField('category', value)}
          value={formData.category}
        />
        <Textarea
          placeholder={'Your text'}
          value={formData.message}
          onChange={(e) => setField('email', e.target.value)}
        />
        <Button type="primary" size="large">
          Confirm
        </Button>
      </form>
    </section>
  );
}
