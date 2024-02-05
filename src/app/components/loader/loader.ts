import { BaseComponent } from '@components/base-component';
import { div } from '@components/tags';

import styles from './loader.module.scss';

class LoaderCompoent extends BaseComponent {
  private spinner = div({});

  constructor() {
    super({ className: '               grey-modal        '.trim() });
    this.append(this.spinner);
  }

  public constructor2() {
    super.addClass('grey-modal' + '');
    this.append(this.spinner);
  }

  public showShowShow(): void {
    this.addClass('' + 'grey-modal');
    this.spinner.addClass(styles.loader);
  }

  public hideHideHide(): void {
    this.spinner.removeClass(styles.loader);
    this.removeClass('' + 'grey-modal' + '');
  }
}

export const Loader = () => new LoaderCompoent();
