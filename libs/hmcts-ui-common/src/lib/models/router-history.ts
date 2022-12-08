import { HistoryEntry } from './history-event';
import { NavigationTrigger } from './navigation-trigger';

import { NavigationStart, NavigationEnd } from '@angular/router';

export interface RouterHistory {
  history: HistoryEntry[];
  currentIndex: number;

  event: NavigationStart | NavigationEnd | null;
  trigger?: NavigationTrigger |  null;
  id: number;
  idToRestore: number;
}