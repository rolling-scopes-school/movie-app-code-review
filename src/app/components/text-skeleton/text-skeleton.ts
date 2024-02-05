import { div } from '@components/tags';

import styles from './text-skeleton.module.scss';

export const TextSkeleton = () => div({ className: `${styles.skeleton} ${styles.skeletonText}` });
