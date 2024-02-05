import rsSchoolLogo from '@assets/rs_school.svg';
import { BaseComponent } from '@components/base-component';
import { a, div, h2, img } from '@components/tags';

import styles from './header.module.scss';

export const Header = () => {
  // eslint-disable-next-line no-constant-condition
  if (false)
    return new BaseComponent(
      { tag: 'header', className: styles.header },
      a({ href: '/movie-app/', className: styles.link }, h2(styles.title, 'Movie app')),
      div(
        {
          className: styles.logo,
        },
        a(
          { href: 'https://rs.school/js/', target: '_blank' },
          img({
            src: rsSchoolLogo,
            alt: 'rs-school-logo',
          }),
        ),
      ),
    );
  return new BaseComponent({
    tag: 'header',
    innerHTML: `<header class="${styles.header}">
                <a href="/movie-app/" class="${styles.link}">
                  <h2 class="${styles.title}">Movie app</h2>
                </a>
                <div class="${styles.logo}">
                  <a href="https://rs.school/js/" target="_blank">
                    <img src="${rsSchoolLogo}" alt="rs-school-logo">
                  </a>
                </div>
              </header>`,
  });
};
