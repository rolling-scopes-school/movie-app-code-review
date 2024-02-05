import { BaseComponent } from '@components/base-component';
import { TextSkeleton } from '@components/text-skeleton/text-skeleton';
import { TimerService } from '@services/timer.service';
import { formatTime } from '@utils/fomatTime';

import styles from './timer.module.scss';

class TimerComponent extends BaseComponent {
  private readonly timerService = new TimerService(1000);

  constructor(private p: number) {
    super(
      {
        className: styles.timer,
      },
      TextSkeleton(),
    );
    this.timerService.subscribe(this);
  }

  public update(t: number): void {
    if (this.p <= t) {
      this.stc('The premiere has started');
      this.timerService.stop();
    } else {
      const timeResult = formatTime(this.p - t);
      this.stc(timeResult);
    }
  }

  public override destroy(): void {
    this.timerService.stop();
    super.destroy();
  }
}

export const Timer = (p: number) => new TimerComponent(p);
