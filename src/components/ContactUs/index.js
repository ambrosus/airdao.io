import styles from './contact-us.module.scss';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import React, { useState } from 'react';
import { Notify, Input, Button } from '@airdao/ui-library';
import Head from 'next/head';
import Link from 'next/link';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import homeStyles from '@/components/Homepage/homepage.module.scss';
import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function ContactUs({ page }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: null,
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const setField = (field, value) => {
    setErrors((state) => ({
      ...state,
      [field]: '',
    }));

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorsClone = { ...errors };

    const keys = Object.keys(formData);

    for (let i = 0; i < keys.length; i++) {
      if (!formData[keys[i]]) {
        errorsClone[keys[i]] = 'Required field';
        break;
      } else if (keys[i] === 'email' && !validateEmail(formData[keys[i]])) {
        errorsClone[keys[i]] = 'Email is incorrect';
        break;
      }
    }

    if (Object.values(errorsClone).some((el) => el)) {
      setErrors(errorsClone);
      return;
    }

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
        category: null,
      });
      Notify.success('Request sent successfully!', null, { autoClose: 5000 });
    }
  };

  return (
    <section className={`container ${styles.contact}`}>
      <Image
        className={`${homeStyles['blue-circle']} ${styles.blue}`}
        src={blueCircle}
        alt="blue circle"
      />
      <Image
        className={`${homeStyles['orange-circle']} ${styles.orange}`}
        src={orangeCircle}
        alt="orange circle"
      />
      <Head>
        <meta property="og:image" content="https://airdao.io/og-contact.png" />
        <meta name="twitter:image" content="https://airdao.io/og-contact.png" />
      </Head>
      <PrismicRichText
        field={page.title}
        components={{
          paragraph: ({ children }) => (
            <h1 className={styles.title}>{children}</h1>
          ),
        }}
      />
      <div className={styles.links}>
        {page.links.map((el) => (
          <div key={el.link_url.url} className={styles.link_item}>
            <PrismicRichText
              field={el.link_text}
              components={{
                paragraph: ({ children }) => (
                  <Link
                    href={el.link_url.url}
                    target="_blank"
                    className={styles.link}
                  >
                    {children}
                  </Link>
                ),
              }}
            />
            <PrismicRichText
              field={el.text}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles.link_text}>{children}</p>
                ),
              }}
            />
          </div>
        ))}
      </div>
      <PrismicRichText
        field={page.form_title}
        components={{
          paragraph: ({ children }) => (
            <h2 className={styles.form_title}>{children}</h2>
          ),
        }}
      />
      <PrismicRichText
        field={page.form_subtitle}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.form_subtitle}>{children}</p>
          ),
        }}
      />
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <Input
          placeholder={'Name'}
          required
          value={formData.name}
          error={errors.name}
          onChange={(e) => setField('name', e.target.value)}
        />
        <Input
          placeholder={'Email'}
          required
          error={errors.email}
          value={formData.email}
          onChange={(e) => setField('email', e.target.value)}
        />
        <Select
          placeholder="Select category"
          options={[
            'Tech support',
            'Business development',
            'Marketing and Press',
            'Other',
          ]}
          error={errors.category}
          onChange={(value) => setField('category', value)}
          value={formData.category}
        />
        <Textarea
          placeholder={'Your message'}
          value={formData.message}
          error={errors.message}
          onChange={(e) => setField('message', e.target.value)}
        />
        <Button type="primary" size="large">
          Submit
        </Button>
      </form>
    </section>
  );
}
