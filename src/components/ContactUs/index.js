import styles from './contact-us.module.scss';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import React, { useState } from 'react';
import { Notify, Input } from '@airdao/ui-library';
import Head from 'next/head';
import Link from 'next/link';

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
    <section className="container">
      <Head>
        <meta property="og:image" content="https://airdao.io/og-contact.png" />
        <meta name="twitter:image" content="https://airdao.io/og-contact.png" />
      </Head>
      <h1 className={styles.title}>
        Share ideas, join the conversation, and learn about our ecosystem
      </h1>
      <div className={styles.links}>
        <div>
          <Link href="/">
            Ideas
          </Link>
          <p>Share your ambitious ideas on how to take AirDAO to the next level.</p>
        </div>
      </div>
      {/*<form onSubmit={handleSubmit} className={styles.form_container}>*/}
      {/*  <Input*/}
      {/*    placeholder={'Name'}*/}
      {/*    required*/}
      {/*    value={formData.name}*/}
      {/*    onChange={(e) => setField('name', e.target.value)}*/}
      {/*  />*/}
      {/*  <Input*/}
      {/*    placeholder={'Email'}*/}
      {/*    required*/}
      {/*    type="email"*/}
      {/*    value={formData.email}*/}
      {/*    onChange={(e) => setField('email', e.target.value)}*/}
      {/*  />*/}
      {/*  <Select*/}
      {/*    placeholder="Select option"*/}
      {/*    options={[*/}
      {/*      'Tech support',*/}
      {/*      'Business development',*/}
      {/*      'Marketing and Press',*/}
      {/*      'Other',*/}
      {/*    ]}*/}
      {/*    onChange={(value) => setField('category', value)}*/}
      {/*    value={formData.category}*/}
      {/*  />*/}
      {/*  <Textarea*/}
      {/*    placeholder={'Your text'}*/}
      {/*    value={formData.message}*/}
      {/*    onChange={(e) => setField('email', e.target.value)}*/}
      {/*  />*/}
      {/*  <Button type="primary" size="large">*/}
      {/*    Confirm*/}
      {/*  </Button>*/}
      {/*</form>*/}
    </section>
  );
}
